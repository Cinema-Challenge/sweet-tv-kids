import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import ParentCabinet from "./components/parent/parent-cabinet.component";

const routes = [
  {
    path: "children-page",
    component: () => <h1>Children</h1>,
  },
  {
    path: "parent-page",
    component: ParentCabinet,
  },
  {
    path: "*",
    component: ParentCabinet,
  }
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
