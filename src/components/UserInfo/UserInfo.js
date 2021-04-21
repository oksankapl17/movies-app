import React from "react";
import user from "../../assets/user.png";
import classes from "./UserInfo.module.scss";

export const UserInfo = ({ userName = "Elsa" }) => {
  return (<div class="d-flex flex-row align-items-center"><img  className={classes.userPicture} src={user} alt="girl" /><span>Welcome {userName}</span></div>);
};
