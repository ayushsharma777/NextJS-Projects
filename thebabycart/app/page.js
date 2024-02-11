import React from "react";
import FeaturedCollection from "./components/FeaturedCollection";
import Subscription from "./components/Subscription";
import Brands from "./components/Brands";
import Gallery from "./components/Gallery";
import FeaturedProducts from "./components/FeaturedProducts";

function Home() {
  // Array of Featured Products
  const featuredProducts = [
    {
      itemId: 13,
      itemImage: "/images/FeaturedProductsImages/PamperSoft.png",
      itemCategory: "baby apparels",
      itemName: "Pamper Soft Bamboo Swaddle",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 14,
      itemImage: "/images/FeaturedProductsImages/ZigzagBodySuit.png",
      itemCategory: "baby apparels",
      itemName: "Zigzag Bodysuit",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 15,
      itemImage: "/images/FeaturedProductsImages/Diaper.png",
      itemCategory: "baby apparels",
      itemName: "Diaper Changing Mats",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 16,
      itemImage: "/images/FeaturedProductsImages/Romper.png",
      itemCategory: "baby apparels",
      itemName: "Jabla Style Infant Romper ",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 17,
      itemImage: "/images/FeaturedProductsImages/SimpleRing.png",
      itemCategory: "baby toys",
      itemName: "Wood & Silicone Simple Ring",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 18,
      itemImage: "/images/FeaturedProductsImages/BurpCloth.png",
      itemCategory: "baby essentials",
      itemName: "Burp Cloth - Blue Giraffe",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 19,
      itemImage: "/images/FeaturedProductsImages/BambooSwaddle.png",
      itemCategory: "baby essentials",
      itemName: "Pamper Soft Bamboo Swaddle",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
    {
      itemId: 20,
      itemImage: "/images/FeaturedProductsImages/BabyShampoo.png",
      itemCategory: "baby apparels",
      itemName: "Himalaya Gentle Baby Shampoo",
      itemActualPrice: "₹1,500",
      itemCurrentPrice: "1000",
      itemRating: "20",
    },
  ];

  //Array of Featured Collection

  const itemData = [
    {
      imgsrc: "/images/babyApparels.png",
      text: "Baby apparels",
    },
    {
      imgsrc: "/images/babyToys.png",
      text: "Baby Toys",
    },
    {
      imgsrc: "/images/babyEssentials.png",
      text: "Baby Essentials",
    },
    {
      imgsrc: "/images/summerCollection.png",
      text: "Summer Collection",
    },
    {
      imgsrc: "/images/holi.png",
      text: "Let's Play Holi",
    },
    {
      imgsrc: "/images/newBorn.png",
      text: "New Born",
    },
  ];

  // Categories

  const categories = [
    {
      imgsrc: "/images/clothes.png",
      text: "Clothes",
    },
    {
      imgsrc: "/images/toys.png",
      text: "Toys",
    },
    {
      imgsrc: "/images/books.png",
      text: "Books",
    },
    {
      imgsrc: "/images/babyCare.png",
      text: "Baby Care",
    },
    {
      imgsrc: "/images/diapering.png",
      text: "Diapering",
    },
    {
      imgsrc: "/images/forParents.png",
      text: "For Parents",
    },
    {
      imgsrc: "/images/babyShower.png",
      text: "Baby Shower",
    },
    {
      imgsrc: "/images/newBorn2.png",
      text: "New Born",
    },
    {
      imgsrc: "/images/sippers.png",
      text: "Sippers & Spoons",
    },
    {
      imgsrc: "/images/towels.png",
      text: "Towels & Wraps",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="nav-body-separator"></div>

        <FeaturedCollection
          title={"Explore our curated selection"}
          tag={"we've done our best to curate this collection"}
          items={itemData}
        ></FeaturedCollection>
        <div className="nav-body-separator"></div>
        <FeaturedCollection
          title={"Explore our diverse range of categories"}
          tag={
            "to facilitate your search for products, we have meticulously curated our selection"
          }
          items={categories}
        ></FeaturedCollection>
        <div className="nav-body-separator"></div>
        <Subscription></Subscription>
        <div className="nav-body-separator"></div>
        <FeaturedProducts
          title={"Top picks"}
          tag={"some of our bestseller"}
          items={featuredProducts}
        ></FeaturedProducts>
        <div className="nav-body-separator"></div>
        <Brands></Brands>
        <div className="nav-body-separator"></div>
        <Gallery></Gallery>
        <div className="nav-body-separator"></div>
      </div>
    </>
  );
}

export default Home;
