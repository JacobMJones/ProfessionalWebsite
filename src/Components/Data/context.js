import React from "react";

const DataContext = React.createContext(null);

export const withData = Component => props => (
  <DataContext.Consumer>
    {data => <Component {...props} data={data} />}
  </DataContext.Consumer>
);

export default DataContext;
