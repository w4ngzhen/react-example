import _ from 'lodash';
import {action, computed, observable} from "mobx";
import User from "../types/User";

class UserStore {

    @observable
    id: string = ''

    @observable
    name: string = ''

    @computed
    get hasUserInfo() {
        console.log('hasUserInfo');
        return !_.isEmpty(this.id) && !_.isEmpty(this.name);
    }

    @computed
    get userDisplayName() {
        if (!this.hasUserInfo) {
            return 'Unknown User';
        }
        return `${this.name}/${this.id}`;
    }

    @action.bound
    setUserInfo({id, name}: User) {
        this.id = id;
        this.name = name
    }

    @action.bound
    clearUserInfo() {
        console.log('clear');
        this.id = this.name = '';
    }
}

export default UserStore;
