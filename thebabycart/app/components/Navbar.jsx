"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ItemsStore } from "../store/Items-store";

const Navbar = () => {
  const labels = [
    "CLOTHES",
    "TOYS",
    "BOOKS",
    "ACCESSORIES",
    "SKIN CARE",
    "BLOGS",
  ];

  const [hamburgerVisible, setHamburgerVisible] = useState(false);
  const { cartItems } = useContext(ItemsStore);
  let cartLen;
  cartLen = cartItems.length; // not fixed yet

  useEffect(() => {
    if (hamburgerVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [hamburgerVisible]);

  return (
    <nav className="container-fluid nav-container">
      <div className="nav-bar ">
        <Link href={"/"} className="mobile-order-2 col-md-2">
          <div className="nav-logo  hide-in-mobile hide-in-tab"></div>
        </Link>
        <div className="mobile-nav hide-in-desktop-only">
          <a
            href="#"
            onClick={() => setHamburgerVisible((prevValue) => !prevValue)}
          >
            <button
              id="hamburger-button"
              className={`hamburger ${hamburgerVisible ? "is-active" : ""}`}
            >
              <div className="bar"></div>
            </button>
          </a>
        </div>
        <Link href={"/"} className="hide-in-desktop">
          <Image
            src="/images/MobileNavbar/logo.png"
            className=" nav-mobile-logo"
            alt="logo"
            height={40}
            width={40}
          />
        </Link>
        <div className="desktop-nav-items col-md-8">
          {labels.map((label, index) => {
            return (
              <Link
                href={`/${label
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace("'", "")}`}
                className="nav-item subtitle-1"
                key={index}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div>
          <div
            className={`mobile-nav-link-container ${
              hamburgerVisible ? "is-active" : ""
            }`}
          >
            {labels.map((label, index) => {
              return (
                <React.Fragment key={index}>
                  <Link
                    href={`/${label
                      .toLowerCase()
                      .replace(" ", "-")
                      .replace("'", "")}`}
                    className="nav-item subtitle-1"
                    onClick={() => setHamburgerVisible(false)}
                    key={index}
                  >
                    {label}
                  </Link>

                  <hr className="mobile-nav-seperator" />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="nav-buttons mobile-order-3 col-md-2">
          <Link href={"/cart"}>
            <div className="nav-buttons-cart">
              <img src="/images/cart.png" alt="" />
              <span className="hide-in-mobile">{`${cartLen} items`}</span>
            </div>
          </Link>
        </div>
      </div>
      {hamburgerVisible && (
        <div
          className="backdrop"
          onClick={() => setHamburgerVisible(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
