import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as routes from "../../Constants/routes";
import ProjectsPage from "../../Pages/Projects";
import ToysPage from "../../Pages/Toys";
import WhatIKnowPage from "../../Pages/WhatIKnow";
import WhatIveBuiltPage from "../../Pages/WhatIveBuilt";
import WorkHistoryPage from "../../Pages/WorkHistory";
import LandingPage from "../../Pages/Landing";
import "../../index.css";
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
          <Route exact path={routes.WHATIKNOW} component={WhatIKnowPage} />
          <Route
            exact
            path={routes.WHATIVEBUILT}
            component={WhatIveBuiltPage}
          />
          <Route exact path={routes.WORKHISTORY} component={WorkHistoryPage} />
        </div>
      </Router>
    );
  }
}

export default App;
