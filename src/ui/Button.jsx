import { useNavigate } from "react-router-dom";
import classes from "./Button.module.css";
import { useContext } from "react";
import dhlContent from "../util/dhlContext";

export default function Button({ label, button, className }) {
  return (
    <div className={`${classes["control-action"]}`}>
      <button
        className={className}
        {...button}
        // onClick={() => {
        //   if (dhlCtx.dropdown) dhlCtx.toggleDropdown();
        //   navigate("track/111");
        // }}
      >
        {label}
      </button>
    </div>
  );
}
