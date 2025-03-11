import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

/**Gemstones images */
import stone1 from "../../../assets/shapes/asscher.svg";
import stone2 from "../../../assets/shapes/cushion.svg";
import stone3 from "../../../assets/shapes/emerald.svg";
import stone4 from "../../../assets/shapes/heart.svg";
import stone5 from "../../../assets/shapes/marquise.svg";
import stone6 from "../../../assets/shapes/oval.svg";
import stone7 from "../../../assets/shapes/pear.svg";
import stone8 from "../../../assets/shapes/princess.svg";
import stone9 from "../../../assets/shapes/radiant.svg";
import stone10 from "../../../assets/shapes/round.svg";
import stone11 from "../../../assets/shapes/cabochon.svg";
import stone12 from "../../../assets/shapes/triangular.svg";
import stone13 from "../../../assets/shapes/fancy.svg";
import { Link, useLocation } from "react-router-dom";

const gems = [
  { id: 1, name: "Asscher", src: stone1 },
  { id: 2, name: "Cushion", src: stone2 },
  { id: 3, name: "Emerald", src: stone3 },
  { id: 4, name: "Heart", src: stone4 },
  { id: 5, name: "Marquise", src: stone5 },
  { id: 6, name: "Oval", src: stone6 },
  { id: 7, name: "Pear", src: stone7 },
  { id: 8, name: "Princess", src: stone8 },
  { id: 9, name: "Radiant", src: stone9 },
  { id: 10, name: "Round", src: stone10 },
  { id: 11, name: "cabochon", src: stone11 },
  { id: 12, name: "triangular", src: stone12 },
  { id: 13, name: "fancy", src: stone13 },
];

export default function AdminShapesList() {
  const [tab, setTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Gemstone Shapes</h1>
          <h1 className="text-2xl font-semibold">Items {gems.length}</h1>
        </div>
        <div>
          <Link to="/admin?tab=addShapes">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Shape{" "}
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-8">
        {gems.map((gem) => (
          <div
            key={gem.id}
            className="flex flex-col items-center bg-slate-50 py-5 w-40 rounded-lg shadow-md "
          >
            <div>
              <img src={gem.src} alt="" className="w-20" />
            </div>
            <div>
              <p>{gem.name}</p>
            </div>
            <div className="flex gap-5 mt-4">
              <Link to={`/admin?tab=editShapes&id=${gem.id}`}>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-2 rounded">
                  <FaRegEdit />
                </button>
              </Link>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-2 rounded">
                <IoTrashBinSharp />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
