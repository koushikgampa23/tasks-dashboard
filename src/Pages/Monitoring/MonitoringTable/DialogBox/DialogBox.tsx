import classes from "./DialogBox.module.css";
import { ReactComponent as Xicon } from "./x.svg";
import * as React from "react";

interface Props {
  onClose: () => void;
}

export const DialogBox = ({ onClose }: Props) => {
  const [email, setEmail] = React.useState("");
  const [wantToUAR, setWantToUAR] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [note, setNote] = React.useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleWantToUARChange = (value: any) => {
    setWantToUAR(value);
  };

  const handleReasonChange = (e: any) => {
    setReason(e.target.value);
  };

  const handleNoteChange = (e: any) => {
    setNote(e.target.value);
  };

  const activeButton = email && wantToUAR && note;

  return (
    <div className={classes.dialogContainer}>
      <div className={classes.dialog}>
        <div className={classes.dialogContent}>
          <div className={classes.header}>
            <span className={classes.heading}>Close account</span>
            <Xicon onClick={onClose} />
          </div>
          <div className={classes.subContainer}>
            <span className={classes.subHeading}>Email</span>
            <input
              type="text"
              className={classes.inputStyle}
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={classes.subContainer2}>
            <span className={classes.subHeading}>Want to file UAR</span>
            <input
              type="radio"
              name="wantToUAR"
              value="Yes"
              checked={wantToUAR === "Yes"}
              onChange={() => handleWantToUARChange("Yes")}
            />
            Yes
            <input
              type="radio"
              name="wantToUAR"
              value="No"
              checked={wantToUAR === "No"}
              onChange={() => handleWantToUARChange("No")}
            />
            No
          </div>
          <div className={classes.subContainer}>
            <span className={classes.subHeading}>Reason</span>
            <select
              className={classes.inputStyle}
              value={reason}
              onChange={handleReasonChange}
            >
              <option>Flaggin logic triggered</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className={classes.subContainer}>
            <span className={classes.subHeading}>Note</span>
            <textarea rows={6} value={note} onChange={handleNoteChange} />
          </div>
          <div className={classes.footer}>
            Charge closure fee
            <button
              className={
                activeButton ? classes.footerActiveButton : classes.footerButton
              }
            >
              Close Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
