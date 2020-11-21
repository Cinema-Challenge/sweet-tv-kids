import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import KidsApp from './pages/kids-app/KidsApp';
import Footer from './components/footer/Footer';
import ParentCabinet from "./components/parent/parent-cabinet.component";
import ChildDetails from "./components/child-details/child-details";

const routes = [
  {
    path: "/kids",
    component: () => <KidsApp />,
  },
  {
    path: "/profile",
    component: ParentCabinet,
  },
  {
    path: "/child-detaitls",
    component: ChildDetails,
  },
  {
    path: "*",
    component: ChildDetails,
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
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App;
