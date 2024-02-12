import React from "react";
import CartItemContainer from "../components/CartItemContainer";
import EmptyCart from "../components/EmptyCart";

const page = () => {
  return (
    <>
      <div className="container-fluid top-50">
        <div className="row">
          <div className="col-md-8 d-flex flex-column">
            <CartItemContainer />
          </div>
          <div className="col-md-4">
            <h2 className="heading-6">Total</h2>

            <div className="d-flex justify-content-between mt-2">
              <h2 className="body-1">
                Subtotal
                <span style={{ color: "#7C7C7C" }} className="caption">
                  {" "}
                  (inclusive of all taxes)
                </span>
              </h2>
              <h2 className="body-1">{`₹0`}</h2>
            </div>

            <div className="d-flex justify-content-between mt-2">
              <h2 className="body-1">Shipping</h2>
              <h2 className="overline text-uppercase text-right">
                You are eligible for free shipping
              </h2>
            </div>

            <button className="primary-button mt-4 cart-Button-Checkout">
              CHECKOUT
            </button>

            <button className="primary-button mt-3 cart-Button-Shopping">
              CONTINUE SHOPPING
            </button>

            <div className="d-flex align-items-center mt-4">
              <img src="/images/cartPage/payment/lock.png" alt="" />
              <h2 className="overline text-black text-uppercase pt-2">
                100% secure payments
              </h2>
            </div>

            <div className="d-inline-flex justify-content-beween mt-3 flex-wrap">
              <div>
                <img src="/images/cartPage/payment/img1.png" alt="" />
              </div>
              <div>
                <img src="/images/cartPage/payment/img2.png" alt="" />
              </div>
              <div>
                <img src="/images/cartPage/payment/img3.png" alt="" />
              </div>
              <div>
                <img src="/images/cartPage/payment/img4.png" alt="" />
              </div>
              <div>
                <img src="/images/cartPage/payment/img5.png" alt="" />
              </div>
              <div>
                <img src="/images/cartPage/payment/img6.png" alt="" />
              </div>
              <div>
                <img src="/images/cartPage/payment/img7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-body-separator"></div>
    </>
  );
};

export default page;
