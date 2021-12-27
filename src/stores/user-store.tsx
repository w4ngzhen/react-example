import _ from 'lodash';
import {action, computed, makeObservable, observable} from "mobx";
import User from "../types/User";
import React from "react";

// React集成mobx：1. 定义Store
class UserStore {

    @observable
    id: string = ''

    @observable
    name: string = ''

    constructor() {
        // React集成mobx：2. 使用makeObservable或是makeAutoObservable来增强当前store
        // 解决数据更新，视图不更新的问题
        makeObservable(this);
    }

    @computed
    get hasUserInfo() {
        console.log('hasUserInfo')
        return !_.isEmpty(this.id) && !_.isEmpty(this.name);
    }

    @computed
    get userDisplayName() {
        console.log('userDisplayName')
        if (!this.hasUserInfo) {
            return 'Unknown User';
        }
        return `${this.name} / ${this.id}`;
    }

    @action
    setUserInfo({id, name}: User) {
        this.id = id;
        this.name = name
    }

    @action
    clearUserInfo() {
        this.id = this.name = '';
    }
}

export default UserStore;

// export const UserStoreContext = React.createContext(new UserStore());
