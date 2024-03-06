import { motion } from "framer-motion";
import Button from "../ui/Button";
import classes from "./Main.module.css";

export default function Main() {
  return (
    <main>
      <motion.section
        className={classes.section2}
        initial={{ opacity: 0, scale: 0, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        // viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="fs-5 text-dark fw-bolder mb-4">
            Important Service Updates
          </h2>
          <div className="row px-3">
            <div className={`${classes["section2-card"]} col-md-4 me-4 my-2`}>
              <div>
                <img
                  src="https://www.dhl.com/content/experience-fragments/dhl/en/core/service_updates/service_update_teaser1row/ng_dhl_home_important_service_updates/_jcr_content/root/container/container/teaser_copy_96980216.coreimg.svg/1688132800239/globe-rgb-red.svg"
                  alt=""
                />
              </div>

              <div>
                <h2>Ukraine Situation Update</h2>
                <small>Read more</small>
              </div>
              <div>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
            <div className={`${classes["section2-card"]} col-md-4 my-2`}>
              <div>
                <img
                  src="https://www.dhl.com/content/experience-fragments/dhl/en/core/service_updates/service_update_teaser1row/ng_dhl_home_important_service_updates/_jcr_content/root/container/container/teaser_copy.coreimg.svg/1688132800318/mobile-phone-rgb-red.svg"
                  alt=""
                />
              </div>

              <div>
                <h2>SMS Scam Alert</h2>
                <small>
                  Look out for malware titled Download our Application to Track
                  Your Parcel
                </small>
              </div>

              <div>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={classes.section3}
        initial={{ opacity: 0, scale: 0, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 positive-relative">
              <div className={classes["section3-ads"]}>
                <h2 className="fw-bolder fs-2 mb-4">
                  Document and Parcel Shipping
                </h2>
                <p className={classes.pLine}>For All Shippers</p>
                <p>
                  Learn about DHL Express – the undisputed global leader in
                  international express shipping
                </p>

                <div className={classes["section3-service"]}>
                  <h2>Services Available</h2>
                  <div className="row mb-4">
                    <div className="col-md-6 nav-item d-flex gap-2 align-item-center mb-2">
                      <span className="badge bg-warning p-2">
                        <i className="fa-solid fa-plane-arrival text-dark"></i>
                      </span>

                      <span>Next Possible Business Day</span>
                    </div>
                    <div className="col-md-6 nav-item d-flex gap-2 align-item-center mb-2">
                      <span className="badge bg-warning p-2">
                        <i className="fa-solid fa-boxes-packing text-dark"></i>
                      </span>

                      <span>Tailored Business Solutions</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 nav-item d-flex gap-2 align-item-center mb-2">
                      <span className="badge bg-warning p-2">
                        <i className="fa-solid fa-house-fire text-dark"></i>
                      </span>

                      <span>Flexible Import/Export Options</span>
                    </div>
                    <div className="col-md-6 nav-item d-flex gap-2 align-item-center mb-2">
                      <span className="badge bg-warning p-2">
                        <i className="fa-solid fa-hand-holding-heart text-dark"></i>
                      </span>

                      <span>Wide Variety of Optional Services</span>
                    </div>
                  </div>
                </div>

                <Button className="w-100 rounded fs-6 py-3 bordeer-2">
                  Explore DHL Express
                </Button>
              </div>
            </div>
            <div className="col-md-7">
              <img
                src="https://www.dhl.com/content/experience-fragments/dhl/en/core/sub_page_teaser/image_right_2_greycolumns/xbu_master_spt_dhl_home_document_and_package_shipping/_jcr_content/root/container_copy_copy/container_copy/image.coreimg.80.1197.jpeg/1655483113358/woman-signs-for-package-0002.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className={classes.section4}
        initial={{ opacity: 0, scale: 0, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img
                src="https://www.dhl.com/content/experience-fragments/dhl/en/core/sub_page_teaser/image_left_2_greycolumns/xbu_standard_spt_dhl_home_pallets_containers_and_cargo/_jcr_content/root/container_copy_copy_/container_copy/image.coreimg.80.1197.jpeg/1683030270879/workers-at-the-container-port-0001.jpeg"
                alt="dhl"
              />
            </div>
            <div className="col-md-5 positive-relative">
              <div className={classes["section4-ads"]}>
                <h2 className="fw-bolder fs-2 mb-4">Cargo Shipping</h2>
                <p className={classes.pLine}>Business Only</p>
                <p>
                  Discover shipping and logistics service options from DHL
                  Global Forwarding.
                </p>

                <div className={classes["section4-service"]}>
                  <h2>Services Available</h2>
                  <div className="row mb-4">
                    <div className="col-md-6 nav-item d-flex gap-2 align-item-center mb-2">
                      <span className="badge bg-warning p-2">
                        <i className="fa-solid fa-plane-arrival text-dark"></i>
                      </span>

                      <span>Air Freight</span>
                    </div>
                    <div className="col-md-6 nav-item d-flex gap-2 align-item-center mb-2">
                      <span className="badge bg-warning p-2">
                        <i className="fa-solid fa-ship text-dark"></i>
                      </span>
                      <span>Ocean Freight</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 nav-item d-flex gap-2 align-item-center mb-2">
                      <span className="badge bg-warning p-2">
                        <i className="fa-solid fa-van-shuttle text-dark"></i>
                      </span>

                      <span>Road Freight</span>
                    </div>
                    <div className="col-md-6 nav-item d-flex gap-2 align-item-center mb-2">
                      <span className="badge bg-warning p-2">
                        <i className="fa-solid fa-train-subway text-dark"></i>
                      </span>

                      <span>Rail Freight</span>
                    </div>
                  </div>
                </div>

                <Button className="w-100 rounded fs-6 py-3 bordeer-2">
                  Explore DHL Global Forwarding
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className={classes.section5}
        initial={{ opacity: 0, scale: 0, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 border mr-2 rounded p-0 m-0 border-bottom-2 shadow-sm mb-2"
              style={{ marginRight: "5px" }}
            >
              <img
                className="w-100"
                src="https://www.dhl.com/content/experience-fragments/dhl/en/core/help_and_related_tea/2columns_1row/xbu_master_hrt_dhl_home_products_and_value_added_services_no_csi/_jcr_content/root/container_copy/teaser.coreimg.80.588.jpeg/1667838187353/truck-drives-through-forest-0001.jpeg"
                alt="dhl"
              />
              <div className="px-3">
                <h1 className="fs-6 py-4 fw-bold d-flex align-items-center gap-3">
                  <span>Green Logistics</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </h1>
                <p style={{ fontSize: "13px" }}>
                  Sustainable business begins with sustainable supply chains. As
                  the pioneer of green logistics, we have an unmatched portfolio
                  of green logistics solutions. Find out what we have to offer,
                  why we’re committed to sustainability, and how our industry is
                  helping deliver an even better world.
                </p>
              </div>
            </div>
            <div className="col-md-6 border rounded p-0 m-0 border-bottom-2 shadow-sm mb-2">
              <img
                className="w-100"
                src="https://www.dhl.com/content/experience-fragments/dhl/en/core/help_and_related_tea/2columns_1row/xbu_master_hrt_dhl_home_products_and_value_added_services_no_csi/_jcr_content/root/container_copy/teaser_copy.coreimg.80.588.jpeg/1687768808976/dl-about-us-gci-2022.jpeg"
                alt="dhl"
              />
              <div className="px-3">
                <h1 className="fs-6 py-4 fw-bold d-flex align-items-center gap-3">
                  <span>DHL Global Connectedness Index</span>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </h1>
                <p style={{ fontSize: "13px" }}>
                  The DHL Global Connectedness Index 2022 Update takes a
                  comprehensive, data-driven look at the events of 2022. Find
                  out how the world’s trading system recovered from the initial
                  pandemic shock, what longstanding vulnerabilities have been
                  exposed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
