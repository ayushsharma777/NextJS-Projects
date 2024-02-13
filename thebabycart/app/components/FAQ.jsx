import React from "react";

const FAQ = () => {
  return (
    <div>
      <div>
        <h2 className="heading-6 mb-5 m-text-center">
          Frequently asked questions
        </h2>
      </div>
      <div className="accordion accordion-flush" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button subtitle-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. Is it possible for me to gift this anonymously?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body caption m-caption">
              Yes, absolutely! When making a purchase on our website, you can
              choose to gift items anonymously. Simply select the option for
              anonymous gifting during the checkout process, and we&apos;ll
              ensure that your recipient receives their gift without any
              indication of who it&apos;s from. Your privacy and discretion are
              important to us, so we&apos;ve made it easy to give anonymously
              and still spread joy and happiness to your loved ones or
              recipients.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed subtitle-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Does the wrapping cost come included in the total price?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body caption m-caption">
              Yes, the cost of wrapping is not included in the total price of
              your purchase. We offer wrapping services as an optional add-on to
              enhance your gift-giving experience. When you select the wrapping
              option during checkout, a small additional fee will be applied to
              cover the cost of the wrapping materials and labor. This ensures
              that your gift is beautifully presented and ready to delight your
              recipient upon arrival.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed subtitle-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. How can I confirm that my order has been successfully placed?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body caption m-caption">
              You will receive a confirmation email shortly after placing your
              order. This email serves as confirmation that your order has been
              successfully placed. It will contain details such as your order
              number, items purchased, total cost, and shipping information.
              Additionally, you can log in to your account on our website and
              check your order history to confirm that your order has been
              processed.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed subtitle-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. Are there any additional fees or taxes applied after order
              confirmation?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body caption m-caption">
              The total cost displayed during the checkout process includes all
              applicable fees and taxes, unless otherwise stated. However,
              depending on the shipping destination or the specific items in
              your order, there may be additional fees or taxes applied after
              order confirmation. These additional charges could include customs
              duties, import taxes, or shipping fees for certain regions. We
              strive to provide transparent pricing upfront, but it&apos;s
              essential to be aware that some charges may be beyond our control
              and could vary depending on your location and the regulations
              governing imports in your country. We recommend reviewing our
              terms and conditions or contacting our customer service team for
              more information regarding potential additional fees or taxes that
              may apply to your order.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
