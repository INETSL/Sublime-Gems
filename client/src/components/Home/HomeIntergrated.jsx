import React, { useEffect, useState } from "react";
import CatGemstones from "./CatGemstones";
import ShapeGemstones from "./ShapeGemstones";
import ColorGemstons from "./ColorGemstons";
import ClarityGemstones from "./ClarityGemstones";
import OriginGemstones from "./OriginGemstones";
import PriceGemstones from "./PriceGemstones";
import WeightGemstones from "./WeightGemstones";
import BannerThree from "../NavBar/BannerThree";
import SelectionGemstones from "./SelectionGemstones";
import Review from "./Review";

import axios from "axios";

export default function HomeIntergrated() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/auth"); // Adjust endpoint if needed
  //       setData(response.data); // Set the actual data, not the promise
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(data);

  return (
    <div>
      <BannerThree />
      <CatGemstones />
      <ShapeGemstones />
      <WeightGemstones />
      <ColorGemstons />
      <ClarityGemstones />
      <OriginGemstones />
      <SelectionGemstones />
      <PriceGemstones />
      {/* <Review /> */}
    </div>
  );
}
