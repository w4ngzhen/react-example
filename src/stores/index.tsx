import UserStore from './user-store';
import React from "react";

export class RootStore {
    userStore: UserStore

    constructor() {
        this.userStore = new UserStore();
    }
}

export const RootStoreContext = React.createContext<RootStore>(new RootStore());
