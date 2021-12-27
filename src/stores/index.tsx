import UserStore from './user-store';
import React from "react";

// React集成mobx：3. 统一一个RootStore，并用Context封装
export class RootStore {
    userStore: UserStore

    constructor() {
        this.userStore = new UserStore();
    }
}

export const RootStoreContext = React.createContext<RootStore>(new RootStore());
