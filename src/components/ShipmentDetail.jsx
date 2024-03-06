import Button from "../ui/Button";
import classes from "./shipmentDetail.module.css";

export default function ShipmentDetail({ data }) {
  return (
    <div className="my-5">
      <div className="py-2" style={{ backgroundColor: "#e6e3e3" }}>
        <div
          className={`${classes["hero-fieldset"]} mx-auto text-dark border mt-4 py-0 px-0 rounded  border-2 bg-white d-flex justify-content-center`}
        >
          <div className="w-100 px-3">
            <span className="tracking-text">Enter your tracking number(s)</span>
            <div>
              <input
                type="text"
                defaultValue={data["track_number"]}
                placeholder="Enter your tracking number(s)"
              />
            </div>
          </div>
          <Button
            label={"Track"}
            className="rounded-end border-2 h-100 w-100"
          />
        </div>

        <div className={classes["shipment-details"]}>
          <div className={classes["overview"]}>
            <div>
              <p>Tracking Code: {data["track_number"]}</p>
              <p>
                This shipment is handled by:{" "}
                <span className="fw-bolder fs-6">DHL Express</span>
              </p>

              <button>
                Print <i className="fa-solid fa-print"></i>
              </button>
            </div>

            <div>
              <h6
                style={{
                  color: "green",
                  fontWeight: "600",
                }}
              >
                Delivered
              </h6>
              <p>
                January, 02,22,2024 15:17 Local time, Service Area: LAGOS -
                NIGERIA
              </p>

              <p className="fw-bolder">
                Origin Service Area: HOUSTON - Texas - USA
              </p>
              <p
                className="fw-bolder"
                style={{
                  textAlign: "right",
                  borderTop: "4px dashed green",
                  padding: "10px",
                }}
              >
                Destination Service Area: LAGOS - NIGERIA
              </p>
            </div>

            <div>
              <p className="fw-normal fs-6">
                To protect your privacy, more delivery details are available
                after validation
              </p>
              <button>
                Proof of Delivery <i className="fa-solid fa-book"></i>
              </button>
            </div>
          </div>

          <div
            className={`accordion accordion-flush ${classes["accordion-flush-container"]}`}
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="true"
                  aria-controls="flush-collapseOne"
                >
                  More Shipment Details
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        To protect your privacy, more delivery details are
                        available after validation
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p style={{ color: "red" }}>
                        Electronic Proof of Delivery
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>1 PIECE ID</p>
                    </div>
                    <div className="col-md-6">
                      <p style={{ color: "red" }}>JB00811122309383</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="true"
                  aria-controls="flush-collapseTwo"
                >
                  All Shipment Updates
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div>
                    <ul>
                      <li>
                        <p>Tuesday</p>
                        <div className="row">
                          <div className="col-md-3">
                            <h6 style={{ fontWeight: "600" }}>
                              January, 02, 2024
                            </h6>
                            <small>15:17 Local time</small>
                          </div>
                          <div
                            className="col-md-9"
                            style={{
                              borderLeft: "2px solid #ccc",
                              paddingLeft: "20px",
                            }}
                          >
                            <h6
                              style={{
                                color: "green",
                                fontWeight: "600",
                              }}
                            >
                              Delivered
                            </h6>
                            <p>Service Area: LAGOS - NIGERIA</p>
                            <small>
                              1 PIECE ID:{" "}
                              <span style={{ color: "red", fontWeight: "600" }}>
                                JB008022123222
                              </span>
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <p>Tuesday</p>
                        <div className="row">
                          <div className="col-md-3">
                            <h6 style={{ fontWeight: "600" }}>
                              January, 02, 2024
                            </h6>
                            <small>9:30 Local time</small>
                          </div>
                          <div
                            className="col-md-9"
                            style={{
                              borderLeft: "2px solid #ccc",
                              paddingLeft: "20px",
                            }}
                          >
                            <h6
                              style={{
                                fontWeight: "600",
                              }}
                            >
                              Shipmet is out with courier for delivery
                            </h6>
                            <p>LAGOS - NIGERIA</p>
                            <small>
                              1 PIECE ID:{" "}
                              <span style={{ color: "red", fontWeight: "600" }}>
                                JB008022123222
                              </span>
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-md-3">
                            <small>9:08 Local time</small>
                          </div>
                          <div
                            className="col-md-9"
                            style={{
                              borderLeft: "2px solid #ccc",
                              paddingLeft: "20px",
                            }}
                          >
                            <h6
                              style={{
                                fontWeight: "600",
                              }}
                            >
                              Forwarded to a third party agent
                            </h6>
                            <p>LAGOS - NIGERIA</p>
                            <small>
                              1 PIECE ID:{" "}
                              <span style={{ color: "red", fontWeight: "600" }}>
                                JB008022123222
                              </span>
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center fs-3 fw-bold">
          Quick Answers to Common Tracking Questions
        </h2>
        <div
          className={`accordion accordion-flush mb-5 ${classes["accordion-flush-container"]}`}
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="true"
                aria-controls="flush-collapseOne"
              >
                If i do not have my tracking number, is it still possible to
                track my express shipment
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                This is the first item accordion body 1.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="true"
                aria-controls="flush-collapseTwo"
              >
                When i try to track my DHL shipment, i recieved an invalid
                waybill error message. why?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                This is the first item accordion body 2.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="true"
                aria-controls="flush-collapseThree"
              >
                As an Account customer with DHL, is there a tracking solution i
                can use to recieve an overview of all shipments on my Account?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                This is the first item accordion body 3.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
