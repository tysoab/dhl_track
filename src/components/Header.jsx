import { useContext, useEffect, useState } from "react";
import Button from "../ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import Modal from "../ui/Modal";
import classes from "./Header.module.css";
import MobileHeader from "./MobileHeader";
import { Link, useNavigate } from "react-router-dom";
import dhlContent from "../util/dhlContext";

export default function Header() {
  const [trackDropdown, setTrackDropdown] = useState(false);
  const [topHeight, setTopHeight] = useState(0);
  const { scrollY } = useScroll();
  const opacityHeader = useTransform(scrollY, [0, 50, 70], [0, 0.7, 1]);
  const dhlCtx = useContext(dhlContent);
  const navigate = useNavigate();

  useEffect(() => {
    setTopHeight(document.querySelector(".header").scrollHeight);
  }, [topHeight]);

  function handlerTrackingNumber(event) {
    event.preventDefault();
    if (!dhlCtx.trackNumber) return;

    if (dhlCtx.dropdown) dhlCtx.toggleDropdown();
    setTrackDropdown(false);
    navigate(`track/${dhlCtx.trackNumber}`);
  }

  return (
    <>
      <MobileHeader />
      <div className="position-relative header">
        <motion.header
          style={{
            opacity: opacityHeader,
            scale: opacityHeader,
          }}
          className={`${classes["header-onscroll"]}`}
        >
          <div className="container">
            <div className="d-flex align-items-center justify-content-between py-3">
              <div className="logo d-flex align-items-center  gap-5">
                <Link to="/" className="">
                  <img
                    src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg"
                    alt=""
                  />
                </Link>
                <ul className="nav">
                  <li
                    className={`nav-item ${
                      trackDropdown ? classes.active : null
                    }`}
                    onClick={() => setTrackDropdown((drop) => !drop)}
                  >
                    <a>Track </a>
                    <i className="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="nav-item">
                    <a>Ship </a>
                    <i className="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link text-dark">
                      Customer service{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right">
                <div className="d-flex gap-3">
                  <ul className="nav">
                    <li className="nav-item d-flex">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </li>

                    <li className="nav-item d-flex gap-2">
                      <i className="fa-solid fa-user-tie"></i>
                      <i className="fa-solid fa-chevron-down"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
        <header className={classes.header}>
          <div className="container d-flex justify-content-between py-3">
            <Link to="/" className="logo">
              <img
                src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg"
                alt=""
              />
            </Link>

            <ul className="nav">
              <li>
                <a>Find a Location</a>
                <span>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <a>Search</a>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-globe"></i>
                </span>
                <a>Nigeria</a>
              </li>
            </ul>
          </div>
        </header>
        <div
          className={`${classes.header2} header2 container py-3 position-relative`}
        >
          <ul className="nav">
            <li
              className={`nav-item ${trackDropdown ? classes.active : null}`}
              onClick={() => setTrackDropdown((drop) => !drop)}
            >
              <a>Track </a>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li className="nav-item">
              <a>Ship </a>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link text-dark">
                Customer service{" "}
              </a>
            </li>
          </ul>

          <div className="nav">
            <li className="nav-item">
              <a>Customer Portal Logins</a>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
          </div>
        </div>
      </div>
      <Modal className={trackDropdown ? classes.drop : `top: ${topHeight}px`}>
        <div className="container-fluid bg-white w-100 text-danger border px-5 py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="fw-bolder fs-5  text-danger mt-5">
                  Track Your Shipment
                </h1>
                <p className="text-black fs-6">
                  Find the status of your in transit shipment
                </p>
                <form onSubmit={handlerTrackingNumber}>
                  <div
                    className={` mx-auto text-dark border mt-4 py-0 px-0 rounded  border-2 bg-white d-flex justify-content-center`}
                  >
                    <div className="w-100 h-100">
                      <input
                        className="w-100 h-100 py-3 px-3 border-0"
                        type="text"
                        value={dhlCtx.trackNumber ?? ""}
                        onChange={(event) =>
                          dhlCtx.handleUserInput(event.target.value)
                        }
                        placeholder="Enter your tracking number(s)"
                      />
                    </div>
                    <Button
                      label="Track"
                      className="rounded-end border-2 h-100 w-100"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="">
                  <img
                    className="w-100"
                    src="https://www.dhl.com/content/experience-fragments/dhl/en/core/primary_navigation/flyouts/standard_track_desktop/master/_jcr_content/root/container/container_copy/image.coreimg.80.1197.jpeg/1651242672247/deliverer-opening-vehicle-0001.jpeg"
                    alt="dhl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
