import DataContext, { withData } from "./context";

class Data {
  constructor() {
    this.landingButtonData = [
      { title: "What I know", path: "/what-i-know" },
      { title: "What I've built", path: "/what-ive-built" },
      { title: "Projects", path: "/projects" },
      { title: "Work history", path: "/work-history" },
      { title: "Toys", path: "/toys" }
    ];
  }

  getWindowWidth = () => {
      return window.innerWidth;
  }
  getWindowHeight = () => {
    return window.innerHeight;
}
}
export default Data;
export { DataContext, withData };
