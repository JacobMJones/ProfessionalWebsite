import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as routes from "../../Constants/routes";
import ProjectsPage from "../../Pages/Projects";
import ToysPage from "../../Pages/Toys";
import Recent from "../../Pages/Recent";
import WorkHistoryPage from "../../Pages/WorkHistory";
import LandingPage from "../../Pages/Landing";
import SpeedReadPage from '../../Pages/SpeedRead'
import StudiesPage from "../../Pages/Studies"
import FormalEducation from "../../Pages/FormalEducation"
import TutorialsPage from "../../Pages/Tutorials"
import Tutorials from "../../Pages/Tutorials";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateDimensions = () => {
    this.forceUpdate();
  };
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route exact path={routes.PROJECTS} component={ProjectsPage} />
          <Route exact path={routes.TOYS} component={ToysPage} />
          <Route exact path={routes.STUDIES} component={StudiesPage} />
          <Route exact path={routes.TUTORIALS} component={TutorialsPage} />
          <Route exact path={routes.FORMALEDUCATION} component={FormalEducation} />
          <Route exact path={routes.RECENT} component={Recent} />
          <Route exact path={routes.SPEEDREAD} component={SpeedReadPage} />
          <Route exact path={routes.WORKHISTORY} component={WorkHistoryPage} />
        </div>
      </Router>
    );
  }
}

export default App;
