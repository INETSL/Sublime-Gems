import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

/**images */
import Australia from "../../../assets/flags/Australia.png";
import Afghanistan from "../../../assets/flags/Afghanistan.png";
import Africa from "../../../assets/flags/Africa.png";
import Burma from "../../../assets/flags/Burma.png";
import Brazil from "../../../assets/flags/Brazil.png";
import Vietnam from "../../../assets/flags/Vietnam.png";
import Zambia from "../../../assets/flags/Zambia.png";
import Zimbabwe from "../../../assets/flags/Zimbabwe.png";
import India from "../../../assets/flags/India.png";
import Cambodia from "../../../assets/flags/Cambodia.png";
import Kenya from "../../../assets/flags/Kenya.png";
import Colombia from "../../../assets/flags/Colombia.png";
import Congo from "../../../assets/flags/Congo.png";
import Madagascar from "../../../assets/flags/Madagascar.png";
import Malawi from "../../../assets/flags/Malawi.png";
import Mozambique from "../../../assets/flags/Mozambique.png";
import Nigeria from "../../../assets/flags/Nigeria.png";
import Pakistan from "../../../assets/flags/Pakistan.png";
import Russia from "../../../assets/flags/Russia.png";
import Tajikistan from "../../../assets/flags/Tajikistan.png";
import Tanzania from "../../../assets/flags/Tanzania.png";
import Thailand from "../../../assets/flags/Thailand.png";
import SriLanka from "../../../assets/flags/Sri Lanka.png";
import Ethiopia from "../../../assets/flags/Ethiopia.png";

const gems = [
  { id: 1, name: "Afghanistan", src: Afghanistan },
  { id: 2, name: "Africa", src: Africa },
  { id: 3, name: "Australia", src: Australia },
  // { id: 3, name: "Australia (Lightning Ridge)", src: Australia },
  { id: 4, name: "Brazil", src: Brazil },
  { id: 5, name: "Myanmar (Burma)", src: Burma },
  { id: 6, name: "Cambodia", src: Cambodia },
  { id: 7, name: "Colombia", src: Colombia },
  { id: 8, name: "Congo", src: Congo },
  { id: 9, name: "Ethiopia", src: Ethiopia },
  { id: 10, name: `India (Kashmir)`, src: India },
  { id: 11, name: "Kenya", src: Kenya },
  { id: 12, name: "Madagascar", src: Madagascar },
  { id: 13, name: "Malawi", src: Malawi },
  { id: 14, name: "Mozambique", src: Mozambique },
  { id: 15, name: "Nigeria", src: Nigeria },
  { id: 16, name: "Pakistan", src: Pakistan },
  { id: 17, name: "Russia", src: Russia },
  { id: 18, name: "Sri Lanka (Ceylon)", src: SriLanka },
  { id: 19, name: "Tajikistan", src: Tajikistan },
  { id: 20, name: "Tanzania", src: Tanzania },
  { id: 21, name: "Thailand", src: Thailand },
  { id: 22, name: "Vietnam", src: Vietnam },
  { id: 23, name: "Zambia", src: Zambia },
  { id: 24, name: "Zimbabwe", src: Zimbabwe },
];
export default function AdminOriginsList() {
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
          <h1 className="text-2xl font-bold">Gemstone Origins</h1>
          <h1 className="text-2xl font-semibold">Items {gems.length}</h1>
        </div>
        <div>
          <Link to="/admin?tab=addOrigins">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Origin{" "}
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
              <Link to={`/admin?tab=editOrigins&id=${gem.id}`}>
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
