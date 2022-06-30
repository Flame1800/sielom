const { makeAutoObservable } = require("mobx");

class NavigationStore {
  activeDropLink = null;
  visuallyImpairedVersion = false;

  constructor() {
    makeAutoObservable(this);
  }

  setDropLink = (dropLink) => {
    this.activeDropLink = dropLink;
  };

  getDropLink = () => this.activeDropLink;

  toggleVisuallyImpairedVersion = () => {
    this.visuallyImpairedVersion = !this.visuallyImpairedVersion;
  };
}

export default new NavigationStore();
