import React from "react";

const Footer = () => {
  const socialLinks = [
    "/images/Footer/facebook-square.png",
    "/images/Footer/linkedin.png",
    "/images/Footer/instagram.png",
    "/images/Footer/twitter-square.png",
  ];
  return (
    <section className="section-Footer">
      <div className="footer-Social-Links col-md-3 p-1 col-6 md-order-3">
        <img
          src="/images/logo.png"
          alt="thebabycart"
          // className={styles.FooterLogo}
        />
        <div className="d-flex justify-content-between">
          <div className="heading-6 m-heading-6">Social Links</div>
          <div className="d-flex align-items-center">
            {socialLinks.map((links, index) => {
              return (
                <img
                  // className={styles.socialImageLink}
                  key={index}
                  src={links}
                  alt="socialMediaImage"
                ></img>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-around rounded-sm download-links">
          <img
            src="/images/Footer/googlePlayImage.png"
            alt="Google Play Image"
            className="rounded-sm"
          />
          <img
            src="/images/Footer/appleImage.png"
            alt="Apple Store Image"
            className="rounded-sm"
          />
        </div>
      </div>

      <div className="footer-Nav-Links  d-flex justify-content-between col-md-5 col-6 p-1 md-order-2">
        <div className="d-flex flex-column m-1">
          <div className="heading-6 m-heading-6">Company</div>
          <div className="body-2">
            <ul>
              <li className="m-body-2">Who We Are</li>
              <li className="m-body-2">Mission</li>
              <li className="m-body-2">Vision</li>
              <li className="m-body-2">Blog</li>
              <li className="m-body-2">Report Fraud</li>
              <li className="m-body-2">Contact</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column m-1">
          <div className="heading-6  m-heading-6">Customer</div>
          <div className="body-2">
            <ul>
              <li className="m-body-2">Privacy Policy</li>
              <li className="m-body-2">Terms</li>
              <li className="m-body-2">FAQs</li>
              <li className="m-body-2">Security</li>
              <li className="m-body-2">Mobile</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column m-1">
          <div className="heading-6 m-heading-6">Seller</div>
          <div className="body-2">
            <ul>
              <li className="m-body-2">Become a Partner</li>
              <li className="m-body-2">Why Join?</li>
              <li className="m-body-2">How it Works</li>
              <li className="m-body-2">Seller&apos;s FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-Subscribe  d-flex flex-column col-md-4 col-6 p-1 md-order-1">
        <div className="heading-6 mb-4 ">Subscribe</div>
        <div className="body-2 mb-2">
          Enter your email below to be the first to know about new collections
          and product launches.
        </div>
        <div className="footer-Subscribe-Inputs d-flex flex-wrap">
          <input
            type="email"
            placeholder="Enter your email here"
            className="mt-2"
          />
          <button type="button" className="mt-2">
            SUBSCRIBBE
          </button>
        </div>
      </div>
      <div className="caption mt-5 md-order-4">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2024-2025 © Thebabycart. All
        rights reserved.
      </div>
    </section>
  );
};

export default Footer;
