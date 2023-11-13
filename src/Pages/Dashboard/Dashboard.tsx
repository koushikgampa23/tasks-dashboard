import Logo from "./logo.svg";
import UserLogo from "./user.svg";
import classes from "./Dashboard.module.css";

export const Dashboard = () => {
  const options = [
    "Overview",
    "Onboarding",
    "Monitoring",
    "Flagging",
    "Source of Income",
    "UAR",
  ];
  const content = options.map((option) => {
    return (
      <span
        className={option === "Monitoring" ? classes.active : classes.option}
      >
        {option}
      </span>
    );
  });
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <img src={Logo} alt="logo" />
        <div className={classes.optionContainer}>{content}</div>
      </div>
      <div className={classes.iconContainer}>
        <img src={UserLogo} alt="userlogo" />
        <div>
          <span className={classes.userName}>Elon Mask</span>
          <br />
          <span className={classes.email}>elon@twitter.com</span>
        </div>
      </div>
    </div>
  );
};
