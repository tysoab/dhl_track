import Button from "../ui/Button";
import classes from "./TrackError.module.css";

export default function TrackError({ trackId }) {
  return (
    <div style={{ margin: "60px 0" }}>
      <h2 className="fs-1 fw-normal text-center">TRACK: EXPRESS</h2>

      <div className="py-2" style={{ backgroundColor: "#e6e3e3" }}>
        <div
          className={`${classes["hero-fieldset"]} mx-auto text-dark border mt-4 py-0 px-0 rounded  border-2 bg-white d-flex justify-content-center`}
        >
          <div className="w-100 px-3">
            <span className="tracking-text">Enter your tracking number(s)</span>
            <div>
              <input
                type="text"
                defaultValue={trackId}
                placeholder="Enter your tracking number(s)"
              />
            </div>
          </div>
          <Button
            label={"Track"}
            className="rounded-end border-2 h-100 w-100"
          />
        </div>
        <div
          className={`${classes["error-container"]} py-3 px-5 my-3 mx-auto rounded`}
          style={{
            border: "2px solid #ccc",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="row">
            <div className="col-md-2 mb-3">
              <i className="fa-solid fa-exclamation fa-rotate-180 fs-6 border border-2 py-2 px-3 rounded-circle"></i>
            </div>
            <div className="col-md-10 d-flex align-items-normal flex-column">
              <h2 className="fs-6 fw-bolder">{trackId}</h2>
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "8px",
                }}
              >
                Sorry, Your tracking attempt was not successful. Please check
                your tracking number.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2
        className="border-bottom border-2 pb-4"
        style={{
          textAlign: "center",
          fontSize: "15px",
          padding: "0 20px",
          margin: "30px 0",
        }}
      >
        <span>Did you want to track a DHL Express Reference? </span>
        <a
          href=""
          style={{
            color: "red",
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          You can do so on MyDHL+ {"  "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </h2>
      <h2
        className="pb-4"
        style={{
          textAlign: "center",
          fontSize: "15px",
          padding: "0 20px",
          margin: "30px 0",
        }}
      >
        <span>
          If you would prefer to speak to someone personally about the location
          of your shipment , please
        </span>{" "}
        <a
          href=""
          style={{
            color: "red",
            fontSize: "13px",
            // textDecoration: "none",
          }}
        >
          contact DHL Express Customer Service
        </a>
      </h2>

      <h2 className="text-center fs-3 fw-bold">
        Quick Answers to Common Tracking Questions
      </h2>
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
              If i do not have my tracking number, is it still possible to track
              my express shipment
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
              When i try to track my DHL shipment, i recieved an invalid waybill
              error message. why?
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
  );
}
