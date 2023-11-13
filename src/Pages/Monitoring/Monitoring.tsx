import * as React from "react";
import { DialogBox } from "./MonitoringTable/DialogBox/DialogBox";
import { MonitoringTable } from "./MonitoringTable/MonitoringTable";
import classes from "./Monitoring.module.css";
import { ReactComponent as WrongElement } from "./x-circle.svg";

export const Monitoring = () => {
  const [dialog, setDialog] = React.useState(false);
  const [tabs, setTabs] = React.useState("pending");
  const [search, setSearch] = React.useState("");
  const openDialog = () => {
    setDialog(true);
  };
  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <span>Monitoring</span>
      </div>
      <div className={classes.tabsContainer}>
        <div className={classes.tabs}>
          <div
            className={tabs === "pending" ? classes.activeTab : classes.tab}
            onClick={() => setTabs("pending")}
          >
            <span>Pending</span>
          </div>
          <div
            className={tabs === "completed" ? classes.activeTab : classes.tab}
            onClick={() => setTabs("completed")}
          >
            <span>Completed</span>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button onClick={openDialog} className={classes.button}>
            <WrongElement />
            Close account
          </button>
        </div>
      </div>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Seach..."
          className={classes.search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <select className={classes.filterButton}>
          <option>Trigger reason</option>
          <option>Hard flag</option>
          <option>Temp flag</option>
          <option>Restricted unflag</option>
          <option>Un flag</option>
          <option>Reviewed</option>
        </select>
        <select className={classes.filterButton}>
          <option>Risk Level </option>
        </select>
      </div>
      <MonitoringTable tabs={tabs} search={search} />
      {dialog && <DialogBox onClose={closeDialog} />}
    </div>
  );
};
