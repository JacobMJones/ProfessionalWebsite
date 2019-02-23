import DataContext, { withData } from "./context";

class Data {
  constructor() {
    this.landingButtonData = [
     
      // { title: "Skills", path: "/what-ive-built" },
      { title: "Projects", path: "/projects" },
      { title: "Work History", path: "/work-history" },
      { title: "Studies", path: "/studies" },
      // { title: "Toys", path: "/toys" }
    ];
    this.studiesButtonData = [
     
     
      { title: "Notes", path: "/notes" },
      { title: "Speed Read", path: "/speed-read" },
      { title: "Tutorials", path: "/tutorials" },
      
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
