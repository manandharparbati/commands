import React from "react";
import icon from "../../images/arrow.svg";
import rec from "../../images/Rectangle .svg";
import { commands } from "../Data/data";
const Body = () => {
  return (
    <>
      <div className="container">
        <div className="body-container">
          <h1>Synical’s Default Prefix</h1>
          <h2>“ ? ”</h2>
          <p>
            Note: To change your prefix, use !setprefix “your prefix”. Eg:
            !setprefix ?
          </p>
        </div>
      </div>

      <div className="vl">
        <h1>Commands</h1>
        {/* <div className="vl-1"></div> */}
      </div>

      <div className="container1">
        <ul>
          <li>
            <b>Moderation</b>
          </li>
          <li>Economy</li>
          <li>Modmail</li>
        </ul>
      </div>
      <div className="box-container">
        {commands.map((command, idx) => (
          <div className="box" key={idx}>
            <div className="arrow">
              <div className="flex">
                <img src={icon} className="down-arrow" alt="arrow" />
                <p>{command.cmdName}</p>
              </div>
              <img src={rec} alt="minimize" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Body;
