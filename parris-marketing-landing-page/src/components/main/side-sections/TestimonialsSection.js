import React from "react";
import "../sections/Sections.css";
import fiveStarReview from "../../../assets/5-star-review-for-personal-injury-attorney-law-firm.webp";
import lisaH from "../../../assets/lisa-parris-law-firm-client-testimonial.webp";
import armandoA from "../../../assets/armando-parris-law-firm-client-testimonial.webp";
import aspenB from "../../../assets/aspen-parris-law-firm-client-testimonial.webp";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section bg-dark bg-gradient">
      <div className="container d-flex justify-content-center flex-column">
        <div className="testimonial-section-info text-center">
          <strong>Testimonials</strong>
          <h4 id="testiominials">What Clients Say About Us</h4>
        </div>
        <div className="testimonial-section-cards d-flex justify-content-center flex-mobile">
          <div
            className="card text-dark bg-white mb-3 shadow-sm"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-center">
              <img
                src={lisaH}
                className="round mx-auto d-block"
                alt="..."
                loading="lazy"
              />
              <h5 className="card-title">Lisa. H</h5>
              <h6>Car Accident Client</h6>
              <p className="card-text">
                PARRIS is the BEST law firm out there. They treated me like
                family and were always so supportive. They always made me feel
                comfortable and took the stress out of the entire situation.
              </p>
              <img
                src={fiveStarReview}
                className="rounded mx-auto d-block"
                alt="..."
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="card text-dark bg-white mb-3 shadow-sm"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-center">
              <img
                src={aspenB}
                className="round mx-auto d-block"
                alt="..."
                loading="lazy"
              />
              <h5 className="card-title">Aspen B.</h5>
              <h6>Car Accident Client</h6>
              <p className="card-text">
                What I loved most about my team was their compassion and
                patience with me. When you choose PARRIS to represent you,
                expect to be a part of the family.
              </p>
              <img
                src={fiveStarReview}
                className="rounded mx-auto d-block"
                alt="..."
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="card text-dark bg-white mb-3 shadow-sm"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-center">
              <img
                src={armandoA}
                className="round mx-auto d-block"
                alt="..."
                loading="lazy"
              />
              <h5 className="card-title">Armando A.</h5>
              <h6>Car Accident Client</h6>
              <p className="card-text">
                They became my second family after my car accident. I can't
                thank them enough for changing mine and my family's lives for
                the better.
              </p>
              <img
                src={fiveStarReview}
                className="rounded mx-auto d-block"
                alt="..."
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
