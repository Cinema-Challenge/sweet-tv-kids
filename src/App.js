import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import ParentsApp from './pages/parents-app/ParentsApp';
import KidsApp from './pages/kids-app/KidsApp';
import Footer from './components/footer/Footer';


const routes = [
  {
    path: "/kids",
    component: () => <KidsApp />,
  },
  {
    path: "/parents",
    component: () => <ParentsApp />,
  },
  {
    path: "*",
    component: () => <h1>Parent</h1>,
  }
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        {/* <KidsApp /> */}
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
  );
}

export default App;
