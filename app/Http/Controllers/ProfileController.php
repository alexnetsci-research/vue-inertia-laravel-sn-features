<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Profile;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function uploadProfilePicture()
    {
        $validated = request()->validate([
            'picture' => 'nullable|image|mimes:jpeg,jpg,png,gif,svg|max:2048',
        ]);

        $profile_picture = request()->profile_picture;
        $extention = $profile_picture->getClientOriginalExtension();
        $fileNameToStore = time().'_'.Str::random(6).'.'.$extention;
        $path = Storage::putFileAs('public/images', $profile_picture, $fileNameToStore);
        $url = Storage::url($path);

        Profile::with('user')->where('user_id', auth()->user()->id)->update([
            'picture' => $url,
        ]);

        return redirect()->route('profiles.me', [auth()->user()->id]);
    }

    public function uploadProfileCover()
    {
        $validated = request()->validate([
            'cover' => 'nullable|image|mimes:jpeg,jpg,png,gif,svg|max:2048',
        ]);

        $profile_cover = request()->profile_cover;
        $extention = $profile_cover->getClientOriginalExtension();
        $fileNameToStore = time().'_'.Str::random(6).'.'.$extention;
        $path = Storage::putFileAs('public/images', $profile_cover, $fileNameToStore);
        $url = Storage::url($path);

        Profile::with('user')->where('user_id', auth()->user()->id)->update([
            'cover' => $url,
        ]);

        return redirect()->route('profiles.me', [auth()->user()->id]);
    }

    public function showMyProfile($id)
    {
        $profile = Profile::getMyProfile();
        return Inertia::render('Users/ShowMyProfile', compact('profile'));
    }

    public function showUserProfile($id)
    {
        $profile = Profile::getUserProfile($id);
        return Inertia::render('Users/ShowUserProfile', compact('profile'));
    }
}
