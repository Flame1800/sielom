const {makeAutoObservable} = require("mobx");


class NavigationStore {
    activeDropLink = null

    constructor() {
        makeAutoObservable(this)
    }

    setDropLink = (dropLink) => {
        this.activeDropLink = dropLink
    }

    getDropLink = () => this.activeDropLink
}

export default new NavigationStore()