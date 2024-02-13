import React from "react";
import Link from "next/link";

const Subscription = () => {
  return (
    <section className="section-Subscription section-tb-padding">
      <div className="section-Subscription-Text col-md-6 col-12 mb-5 ">
        <div className="heading-4 m-heading-5 m-text-center m-mb-20">
          Voila! We&apos;re here to nurture your child&apos;s growth.
        </div>
        <div className="body-1 mt-3 m-body-2 m-text-justify">
          Thoughfully curated box, helps your child meet key milestones for
          their age. These boxes are being created keeping in mind the
          requirement of your child at different ages.
        </div>
        <div className="caption mt-3 m-caption m-text-justify m-mb-20">
          Choose from top brands for baby care, essentials, rompers, suits,
          combors and many more with “Great Offers & Great discounts”. No need
          to wory about anything, just add to cart and share the address, rest
          we will take care of
        </div>
        <Link href={"/giftcollection"}>
          <button className="primary-button">SHOP FROM COLLECTION</button>
        </Link>
      </div>

      <div className="gift-Box-Container col-md-6 m-mt-20">
        <div className="row">
          <div className="col-6">
            <div className="heading-4 gift-Box-1 text-center m-heading-5">
              Select your <br />
              child age
            </div>
          </div>
          <div className="col-6">
            <div className="heading-4 gift-Box-2 text-center m-heading-5">
              Subscribe to <br />
              the box
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {" "}
            <div className="heading-4 gift-Box-3 text-center m-heading-5">
              Recieve a box As per subscription
            </div>
          </div>
          <div className="col-6">
            <img src="/images/babyDiv.png" alt="Baby Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
