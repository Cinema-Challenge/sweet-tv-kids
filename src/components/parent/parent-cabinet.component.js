import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { tabListData } from "./tab-list.data";

import "./style.scss";

const ParentCabinet = () => {
  return (
    <main className="parent__container">
      <h1 className="title">Управління особистими даними</h1>
      <Tabs>
        <TabList className="tab-list">
          {tabListData.map(({ title, subtitle, icon }) => (
            <Tab className="tab-list__item" key={title}>
              {icon}
              <p className="tab-list__title">{title}</p>
              <p className="tab-list__subtitle">{subtitle}</p>
            </Tab>
          ))}
        </TabList>
        {tabListData.map(({ pane }) => (
          <div className="tab-list__panel-container">
            <TabPanel className="tab-list__panel-item" key={pane}>
              {pane}
            </TabPanel>
          </div>
        ))}
      </Tabs>
    </main>
  );
};

export default ParentCabinet;
