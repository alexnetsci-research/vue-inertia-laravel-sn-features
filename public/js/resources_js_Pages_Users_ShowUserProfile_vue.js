"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_ShowUserProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    profile: Object
  },
  data: function data() {
    return {
      dialog: {
        state: false,
        post: Object
      },
      posts: [{
        title: "Post One",
        text: "This is the post one",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/1200px-Logo_TVE-1.svg.png"
      }, {
        title: "Post Two",
        text: "This is the post two",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_TVE-2.svg"
      }, {
        title: "Post Three",
        text: "This is the post three",
        img: "https://www.kidibot.ca/wp-content/uploads/2018/01/number.jpg"
      }],
      loading: false,
      selection: 1 // breadcrumbs: [
      //   {
      //     text: "Flux",
      //     disabled: false,
      //     href: route("flux"),
      //   },
      //   {
      //     text: "My Profile",
      //     disabled: true,
      //     href: route("profiles.user", this.$page.props.auth.user.id),
      //   },
      // ],

    };
  },
  methods: {
    openDialog: function openDialog(post) {
      this.dialog.state = true;
      this.dialog.post = post;
    },
    reserve: function reserve() {
      var _this = this;

      this.loading = true;
      setTimeout(function () {
        return _this.loading = false;
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowUserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=template&id=06b34f21&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=template&id=06b34f21& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUserProfile_vue_vue_type_template_id_06b34f21___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUserProfile_vue_vue_type_template_id_06b34f21___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUserProfile_vue_vue_type_template_id_06b34f21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowUserProfile.vue?vue&type=template&id=06b34f21& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=template&id=06b34f21&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=template&id=06b34f21&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=template&id=06b34f21& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "layout-user-profile",
    { attrs: { profile: _vm.profile } },
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _vm.$page.props.auth.user.id != _vm.profile.user.id
            ? _c(
                "v-row",
                {
                  staticClass: "mx-auto flex-md-row flex-column justify-center",
                },
                [
                  _c("v-col", { staticClass: "col-md-6 text-center" }, [
                    _c("h2", [
                      _vm._v(
                        _vm._s(_vm.profile.user.name) +
                          " is not your friend yet!"
                      ),
                    ]),
                  ]),
                ],
                1
              )
            : _c(
                "v-row",
                {
                  staticClass: "mx-auto flex-md-row flex-column justify-center",
                },
                [
                  _c(
                    "v-col",
                    { staticClass: "col-md-6" },
                    [
                      _vm._l(_vm.posts, function (post, i) {
                        return _c(
                          "v-card",
                          {
                            key: i,
                            staticClass: "mx-auto mb-5",
                            on: {
                              click: function ($event) {
                                return _vm.openDialog(post)
                              },
                            },
                          },
                          [_c("v-card-title", [_vm._v(_vm._s(post.title))])],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: {
                            transition: "dialog-top-transition",
                            "max-width": "600",
                          },
                          model: {
                            value: _vm.dialog.state,
                            callback: function ($$v) {
                              _vm.$set(_vm.dialog, "state", $$v)
                            },
                            expression: "dialog.state",
                          },
                        },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto",
                              attrs: {
                                loading: _vm.loading,
                                "max-width": "374",
                              },
                            },
                            [
                              _c(
                                "template",
                                { slot: "progress" },
                                [
                                  _c("v-progress-linear", {
                                    attrs: {
                                      color: "deep-purple",
                                      height: "10",
                                      indeterminate: "",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-img", {
                                attrs: {
                                  height: "250",
                                  src: _vm.dialog.post.img,
                                },
                              }),
                              _vm._v(" "),
                              _c("v-card-title", [
                                _vm._v(_vm._s(_vm.dialog.post.title)),
                              ]),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _vm._v(_vm._s(_vm.dialog.post.text)),
                              ]),
                            ],
                            2
                          ),
                        ],
                        1
                      ),
                    ],
                    2
                  ),
                ],
                1
              ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Users/ShowUserProfile.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Users/ShowUserProfile.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowUserProfile_vue_vue_type_template_id_06b34f21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowUserProfile.vue?vue&type=template&id=06b34f21& */ "./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=template&id=06b34f21&");
/* harmony import */ var _ShowUserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowUserProfile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/ShowUserProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowUserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowUserProfile_vue_vue_type_template_id_06b34f21___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowUserProfile_vue_vue_type_template_id_06b34f21___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardText,VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardTitle,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["default"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__["default"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/ShowUserProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VGrid/VRow.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VGrid/VRow.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VGrid/VGrid.sass */ "./node_modules/vuetify/src/components/VGrid/VGrid.sass");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + (0,_util_helpers__WEBPACK_IMPORTED_MODULE_1__.upperFirst)(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_3__["default"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));
//# sourceMappingURL=VRow.js.map

/***/ })

}]);