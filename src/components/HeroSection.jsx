import { useContext } from "react";
import Button from "../ui/Button";
import classes from "./Hero.module.css";
import dhlContent from "../util/dhlContext";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const dhlCtx = useContext(dhlContent);

  const navigate = useNavigate();

  function handlerTrackingNumber(event) {
    event.preventDefault();
    if (!dhlCtx.trackNumber) return;

    if (dhlCtx.dropdown) dhlCtx.toggleDropdown();
    navigate(`track/${dhlCtx.trackNumber}`);
  }

  return (
    <section className={classes["hero-section"]}>
      <h1 className="fw-bolder fs-3  text-white mt-5">Track Your Shipment</h1>
      <form onSubmit={handlerTrackingNumber}>
        <div
          className={`${classes["hero-fieldset"]} mx-auto text-dark border mt-4 py-0 px-0 rounded  border-2 bg-white d-flex justify-content-center`}
        >
          <div className="w-100 px-3">
            <span className="tracking-text">Enter your tracking number(s)</span>
            <div>
              <input
                type="text"
                value={dhlCtx.trackNumber ?? ""}
                onChange={(event) => dhlCtx.handleUserInput(event.target.value)}
                placeholder="Enter your tracking number(s)"
              />
            </div>
          </div>
          <Button
            label={"Track"}
            className="rounded-end border-2 h-100 w-100"
          />
        </div>
      </form>

      <div className={classes["hero-footer"]}>
        <div className="card1 rounded-start-2">
          <img
            src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/general-icons/glo-core-online.svg"
            alt=""
          />
          <h2>Shop now</h2>
          <p>Find the right service</p>
        </div>
        <div className="card2 rounded-0">
          <img
            src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/general-icons/glo-core-getaquote.svg"
            alt=""
          />
          <h2>Get a quote</h2>
          <p>Estimate cost to share and compare</p>
        </div>
        <div className="card3 rounded me-4">
          <div className={classes["top-corner-card"]}></div>
          <img
            src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/gogreen-icons/glo-core-gogreen-warehousing.svg"
            alt=""
          />
          <h2>DHL for Business</h2>
          <p>
            Shipping regularly? Request a business account and profit from
            exclusive benefits
          </p>
        </div>
      </div>
    </section>
  );
}
