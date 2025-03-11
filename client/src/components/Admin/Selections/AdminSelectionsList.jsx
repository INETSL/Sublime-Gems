import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

import loose from "../../../assets/slection/loose.png";
import matching from "../../../assets/slection/matching.png";
import sets from "../../../assets/slection/sets.png";
import layout from "../../../assets/slection/layout.png";

const gems = [
  { id: 1, src: loose, name: "Loose Gemstones" },
  { id: 2, src: matching, name: "Matching Gemstone Pairs" },
  { id: 3, src: sets, name: "Gemstone Sets" },
  { id: 4, src: layout, name: "Gemstone Layouts" },
];

export default function AdminSelectionsList() {
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
          <h1 className="text-2xl font-bold">Gemstone Selections</h1>
          <h1 className="text-2xl font-semibold">Items {gems.length}</h1>
        </div>
        <div>
          <Link to="/admin?tab=addSelections">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Selection{" "}
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
              <div className="min-h-16">
                <img src={gem.src} alt="" className="w-20" />
              </div>
            </div>
            <div className="min-h-12">
              <p className="text-center">{gem.name}</p>
            </div>
            <div className="flex gap-5 mt-4 max-h-10">
              <Link to={`/admin?tab=editSelections&id=${gem.id}`}>
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
