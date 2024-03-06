import { useContext } from "react";
import Button from "./Button";
import classes from "./TrackField.module.css";
import dhlContent from "../util/dhlContext";
import { useNavigate } from "react-router-dom";
export default function TrackField() {
  const dhlCtx = useContext(dhlContent);
  const navigate = useNavigate();
  return (
    <div
      className={`${classes["hero-fieldset"]} mx-auto text-dark border mt-4 py-0 px-0 rounded  border-2 bg-white d-flex justify-content-center`}
    >
      <div className="w-100 px-3">
        <span className="tracking-text">Enter your tracking number(s)</span>
        <div>
          <input type="text" placeholder="Enter your tracking number(s)" />
        </div>
      </div>
      <Button
        button={{
          onClick: () => {
            if (dhlCtx.dropdown) dhlCtx.toggleDropdown();
            navigate("track/111");
          },
        }}
        label={"Track"}
        className="rounded-end border-2 h-100 w-100"
      />
    </div>
  );
}
