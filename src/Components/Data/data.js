import DataContext, { withData } from "./context";

class Data {
  constructor() {
    this.landingButtonData = [
     
      { title: "Skills", path: "/what-ive-built" },
      { title: "Projects", path: "/projects" },
      { title: "Resume", path: "/work-history" },
      { title: "Notes", path: "/notes" },
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
