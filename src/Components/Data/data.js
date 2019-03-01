import DataContext, { withData } from "./context";

class Data {
  constructor() {
    this.landingButtonData = [
     
      // { title: "Skills", path: "/what-ive-built" },
      { title: "Work History", path: "/work-history" },
      { title: "Projects", path: "/projects" },
      { title: "Studies", path: "/studies" },
      // { title: "Toys", path: "/toys" }
    ];
    this.studiesButtonData = [
      { title: "Formal", path: "/formal-education" },
      { title: "Tutorials", path: "/tutorials" },
      { title: "Notes", path: "/notes" },
     
    
      
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
