import * as actions from './actions';
import * as mutations from './mutations';

const storeData = {
    actions,
    mutations,
    state: {
        drawer: null,
    }
};

export default storeData;