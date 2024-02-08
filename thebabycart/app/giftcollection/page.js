import React from "react";
import Panel from "../components/Panel";
import FeaturedProducts from "../components/FeaturedProducts";
import FAQ from "../components/FAQ";

const page = () => {
  //Array of Product Showcase
  const productShowcase = [
    {
      itemId: 13,
      itemImage: "/images/BrandPage/Showcase/img1.png",
      itemCategory: "baby clothing",
      itemName: "Pamper Soft Bamboo Swaddle",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 14,
      itemImage: "/images/BrandPage/Showcase/img2.png",
      itemCategory: "baby care",
      itemName: "Agent Apple Body Lotion",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 15,
      itemImage: "/images/BrandPage/Showcase/img3.png",
      itemCategory: "baby clothing",
      itemName: "Diaper Changing Mats",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 16,
      itemImage: "/images/BrandPage/Showcase/img4.png",
      itemCategory: "baby clothing",
      itemName: "Jabla Style Infant Romper ",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },

    {
      itemId: 17,
      itemImage: "/images/BrandPage/Showcase/img5.png",
      itemCategory: "baby toys",
      itemName: "Wood & Silicone Simple Ring",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 18,
      itemImage: "/images/BrandPage/Showcase/img6.png",
      itemCategory: "baby care",
      itemName: "Burp Cloth - Blue Giraffe",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 19,
      itemImage: "/images/BrandPage/Showcase/img7.png",
      itemCategory: "baby care",
      itemName: "Pamper Soft Bamboo Swaddle",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 20,
      itemImage: "/images/BrandPage/Showcase/img8.png",
      itemCategory: "baby care",
      itemName: "Himalaya Gentle Baby Shampoo",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <Panel
          textHead={"Delight your loved ones with"}
          textTag={`
                 chosen products, curated specifically for gifting to your loved ones`}
          bgImage={"/images/giftcollectionpage/panelImage.png"}
          bgColor={"#FFFFFF"}
          hideButton={true}
        ></Panel>

        <div className="nav-body-separator"></div>

        <FeaturedProducts
          title={"Our Products"}
          tag={"We’ve picked few pieces we’re pretty sure you’ll love "}
          items={productShowcase}
        ></FeaturedProducts>

        <div className="nav-body-separator"></div>

        <div className="row">
          <div className="col-5">
            <img
              src="/images/giftcollectionpage/giftImage.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-12 col-md-7   gift-Collection-Text">
            <h2 className="heading-6">
              “We've selected a few pieces we're confident you'll adore from our
              list of handpicked products, specially curated for gifting to your
              loved ones.”
            </h2>
            <h2 className="caption text-center mt-4">
              Explore top brands for baby care, essentials, rompers, suits,
              combos, and much more with "Great Offers & Great Discounts." No
              need to worry about a thing, simply add to cart and share the
              address – we'll take care of the rest.
            </h2>
          </div>
        </div>

        <div className="nav-body-separator"></div>

        <FAQ></FAQ>

        <div className="nav-body-separator"></div>
      </div>
    </>
  );
};

export default page;
