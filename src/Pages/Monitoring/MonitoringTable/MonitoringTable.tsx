import classes from "./MonitoringTable.module.css";
import { ReactComponent as ExternalLink } from "./externalLink.svg";
import { pending } from "./Data/pendingDetails";
import { completed } from "./Data/completedDetails";
import UpArrow from "./up.svg";
import * as React from "react";

interface Props {
  tabs: string;
  search: string;
}

export const MonitoringTable = ({ tabs, search }: Props) => {
  const [risk, setRisk] = React.useState<boolean | null>(null);
  const [queue, setQueue] = React.useState<boolean | null>(null);
  const [date, setDate] = React.useState<boolean | null>(null);

  const [riskCompleted, setRiskCompleted] = React.useState<boolean | null>(
    null
  );
  const [timeToClose, setTimeToClose] = React.useState<boolean | null>(null);
  const [dateCompleted, setDateCompleted] = React.useState<boolean | null>(
    null
  );
  const sortArray = (property: string) => {
    pending.sort((a: any, b: any) => {
      if (risk || queue || date) {
        return a[property].localeCompare(b[property]);
      } else {
        return b[property].localeCompare(a[property]);
      }
    });
  };

  const sortArrayCompleted = (property: string) => {
    completed.sort((a: any, b: any) => {
      if (riskCompleted || timeToClose || dateCompleted) {
        return a[property].localeCompare(b[property]);
      } else {
        return b[property].localeCompare(a[property]);
      }
    });
  };

  const filteredAndSearchedData = pending.filter((detail) =>
    detail.username.toLowerCase().includes(search.toLowerCase())
  );

  const filteredAndSearchedDataCompleted = completed.filter((detail) =>
    detail.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <table className={classes.tableStyle}>
        <thead>
          {tabs === "pending" ? (
            <tr>
              <th>User</th>
              <th>
                <div
                  className={classes.arrowAlignMent}
                  onClick={() => {
                    risk === null ? setRisk(true) : setRisk(!risk);
                    sortArray("riskLevel");
                  }}
                >
                  Risk Level
                  <img src={UpArrow} alt="^" />
                </div>
              </th>
              <th>Trigger reason</th>
              <th>
                <div
                  className={classes.arrowAlignMent}
                  onClick={() => {
                    queue === null ? setQueue(true) : setQueue(!queue);
                    sortArray("queue");
                  }}
                >
                  In queue for
                  <img src={UpArrow} alt="^" />
                </div>
              </th>
              <th>
                <div
                  className={classes.arrowAlignMent}
                  onClick={() => {
                    date === null ? setDate(true) : setDate(!date);
                    sortArray("date");
                  }}
                >
                  Date added on
                  <img src={UpArrow} alt="^" />
                </div>
              </th>
              <th>Previously reviewed</th>
            </tr>
          ) : (
            <tr>
              <th>User</th>
              <th>
                <div
                  className={classes.arrowAlignMent}
                  onClick={() => {
                    riskCompleted === null
                      ? setRiskCompleted(true)
                      : setRiskCompleted(!riskCompleted);
                    sortArrayCompleted("riskLevel");
                  }}
                >
                  Risk Level
                  <img src={UpArrow} alt="^" />
                </div>
              </th>
              <th>Action Reason</th>
              <th>
                <div
                  className={classes.arrowAlignMent}
                  onClick={() => {
                    timeToClose === null
                      ? setTimeToClose(true)
                      : setTimeToClose(!timeToClose);
                    sortArrayCompleted("timeToClose");
                  }}
                >
                  Time to Close
                  <img src={UpArrow} alt="^" />
                </div>
              </th>
              <th>
                <div
                  className={classes.arrowAlignMent}
                  onClick={() => {
                    dateCompleted === null
                      ? setDateCompleted(true)
                      : setDateCompleted(!dateCompleted);
                    sortArrayCompleted("date");
                  }}
                >
                  Date added on
                  <img src={UpArrow} alt="^" />
                </div>
              </th>
              <th>Action taken by</th>
            </tr>
          )}
        </thead>
        <tbody>
          {tabs === "pending"
            ? filteredAndSearchedData.map((detail) => {
                return (
                  <tr>
                    <td className={classes.userColumn}>
                      <div>
                        {detail.username}
                        <br />
                        {detail.gmail}
                      </div>
                      <ExternalLink />
                    </td>
                    <td>{detail.riskLevel}</td>
                    <td>{detail.triggerReason}</td>
                    <td>{detail.queue}</td>
                    <td>{detail.date}</td>
                    <td>
                      {detail.reviewed}
                      <br />
                      {detail.reviewedDate}
                    </td>
                  </tr>
                );
              })
            : filteredAndSearchedDataCompleted.map((detail: any) => {
                return (
                  <tr>
                    <td className={classes.userColumn}>
                      <div>
                        {detail.username}
                        <br />
                        {detail.gmail}
                      </div>
                      <ExternalLink />
                    </td>
                    <td>{detail.riskLevel}</td>
                    <td>{detail.actionReason}</td>
                    <td>{detail.timeToClose}</td>
                    <td>{detail.date}</td>
                    <td>
                      {detail.actionTakenBy}
                      <br />
                      {detail.user}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};
