import UserStore from './UserStore';

// React集成mobx：3. 统一一个RootStore，并用Context封装
export class RootStore {
    userStore: UserStore

    constructor() {
        this.userStore = new UserStore();
    }
}

let rootStore = new RootStore();
export default rootStore;
