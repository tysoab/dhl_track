import classes from "./MobileHeader.module.css";
import Button from "../ui/Button";
import { useContext } from "react";
import dhlContent from "../util/dhlContext";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  const dhlCtx = useContext(dhlContent);

  return (
    <div className={classes["mobile-header"]}>
      <div className="container d-flex justify-content-between py-3">
        <Link
          to="/"
          onClick={() => {
            if (dhlCtx.dropdown) dhlCtx.toggleDropdown();
          }}
          className="logo"
        >
          <img
            src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg"
            alt=""
          />
        </Link>
        {/* <input type="checkbox" id={classes.toggle} /> */}
        <div
          className={classes["toggle-menu"]}
          onClick={() => dhlCtx.toggleDropdown(!dhlCtx.dropdown)}
        >
          <div></div>
        </div>
      </div>
      <div
        className={classes.dropdown}
        style={{ left: dhlCtx.dropdown ? "0" : "-100%" }}
      >
        <ul className="list-group list-group-flush mb-5">
          <li className="list-group-item">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item active">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed text-danger fw-bolder fs-6"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Track
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <h1 className="fs-6 fw-bolder text-danger mt-4">
                      TRACK YOUR SHIPMENT
                    </h1>

                    <div className="border border-2 rounded">
                      <input
                        type="text"
                        className="w-100 fs-6 fw-small px-2 py-3 border border-0 outline-0"
                        style={{ outline: "none" }}
                        placeholder="Enter your tracking number(s)"
                      />
                      <Button label="Track" className="w-100 rounded-bottom" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed text-danger fw-bolder fs-6"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Ship
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <a href="" className="nav-link">
                          Get a Quote{" "}
                          <i className="fa-solid fa-chevron-right text-danger fs-6"></i>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="" className="nav-link">
                          Get a Quote{" "}
                          <i className="fa-solid fa-chevron-right text-danger fs-6"></i>
                        </a>
                        <div className="mt-5">
                          <h1 className="fs-5 fw-bold mb-3">
                            Document and Package
                          </h1>
                          <p>Personal and Business</p>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <a href="" className="nav-link">
                          Express document and package shipping{" "}
                          <i className="fa-solid fa-chevron-right text-danger fs-6"></i>
                        </a>
                        <div className="mt-5">
                          <h1 className="fs-6 fw-bold mb-3">
                            Pallets, Containers and Cargo (Business Only)
                          </h1>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <a href="" className="nav-link">
                          Explore Freight Services{" "}
                          <i className="fa-solid fa-chevron-right text-danger fs-6"></i>
                        </a>
                        <div className="mt-5">
                          <h1 className="fs-5 fw-bold mb-3">
                            DHL for Business
                          </h1>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <a href="" className="nav-link">
                          Explore Freight Services{" "}
                          <i className="fa-solid fa-chevron-right text-danger fs-6"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <a href="" className="nav-link">
              Customer Service{" "}
              <i className="fa-solid fa-chevron-right text-danger fs-6"></i>
            </a>
          </li>
          <li className="list-group-item">
            <a href="" className="nav-link">
              <i className="fa-solid fa-user-tie me-2"></i> Customer Portal
              Logins{" "}
              <i className="fa-solid fa-chevron-right text-danger fs-6"></i>
            </a>
          </li>
          <li className="list-group-item">
            <a href="" className="nav-link">
              Find a Location{" "}
              <i className="fa-solid fa-arrow-up-right-from-square text-danger"></i>
            </a>
          </li>
          <li className="list-group-item">
            <a href="" className="nav-link">
              <i className="fa-solid fa-magnifying-glass me-2"></i>
              Search
            </a>
          </li>
          <li className="list-group-item">
            <a href="" className="nav-link">
              <img
                style={{ width: "20px", marginRight: "10px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png"
                alt=""
              />
              {"  "}
              Change Location (NG)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
