import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

// Importing the images
import c1 from "../../../assets/colors/black.png";
import c2 from "../../../assets/colors/blue.png";
import c3 from "../../../assets/colors/lightBlue.png";
import c4 from "../../../assets/colors/brown.png";
import c5 from "../../../assets/colors/gray.png";
import c6 from "../../../assets/colors/green.png";
import c7 from "../../../assets/colors/orange.png";
import c8 from "../../../assets/colors/pink.png";
import c9 from "../../../assets/colors/purple.png";
import c10 from "../../../assets/colors/violet.png";
import c11 from "../../../assets/colors/white.png";
import c12 from "../../../assets/colors/yellow.png";
import c13 from "../../../assets/colors/red.png";

const gems = [
  { id: 1, name: "Black", src: c1 },
  { id: 2, name: "Blue", src: c2 },
  { id: 3, name: "Light Blue", src: c3 },
  { id: 4, name: "Brown", src: c4 },
  { id: 5, name: "Gray", src: c5 },
  { id: 6, name: "Green", src: c6 },
  { id: 7, name: "Orange", src: c7 },
  { id: 8, name: "Red", src: c13 },
  { id: 9, name: "Pink", src: c8 },
  { id: 10, name: "Purple", src: c9 },
  { id: 11, name: "Violet", src: c10 },
  { id: 12, name: "White", src: c11 },
  { id: 13, name: "Yellow", src: c12 },
];

export default function AdminColoursList() {
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
          <h1 className="text-2xl font-bold">Gemstone Colours</h1>
          <h1 className="text-2xl font-semibold">Items {gems.length}</h1>
        </div>
        <div>
          <Link to="/admin?tab=addColours">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Colour{" "}
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
              <Link to={`/admin?tab=editColours&id=${gem.id}`}>
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
