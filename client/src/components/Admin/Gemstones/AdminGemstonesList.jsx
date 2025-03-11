import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

/**Gemstones images */
import alexandrite from "../../../assets/gemstones/alexandrite.png";
import amethyst from "../../../assets/gemstones/amethyst.png";
import apatite from "../../../assets/gemstones/apatite.png";
import aquamarine from "../../../assets/gemstones/aquamarine.png";
import beryl from "../../../assets/gemstones/beryl.png";
import chrysoberyl from "../../../assets/gemstones/chrysoberyl.png";
import citrine from "../../../assets/gemstones/citrine.png";
import clinohumite from "../../../assets/gemstones/clinohumite.png";
import diamond from "../../../assets/gemstones/diamond.png";
import emerald from "../../../assets/gemstones/emerald.png";
import garnet from "../../../assets/gemstones/garnet.png";
import heliodor from "../../../assets/gemstones/heliodor.png";
import kunzite from "../../../assets/gemstones/kunzite.png";
import moonstone from "../../../assets/gemstones/moonstone.png";
import morganite from "../../../assets/gemstones/morganite.png";
import opal from "../../../assets/gemstones/opal.png";
import pearl from "../../../assets/gemstones/pearl.png";
import peridot from "../../../assets/gemstones/peridot.png";
import prasiolite from "../../../assets/gemstones/prasiolite.png";
import ruby from "../../../assets/gemstones/ruby.png";
import sapphire from "../../../assets/gemstones/sapphire.png";
import spinel from "../../../assets/gemstones/spinel.png";
import sphene from "../../../assets/gemstones/sphene.png";
import tanzanite from "../../../assets/gemstones/tanzanite.png";
import topaz from "../../../assets/gemstones/topaz.png";
import tourmaline from "../../../assets/gemstones/tourmaline.png";
import zircon from "../../../assets/gemstones/zircon.png";
import { Link, useLocation } from "react-router-dom";

const gems = [
  { id: 1, src: alexandrite, name: "alexandrite" },
  { id: 2, src: amethyst, name: "amethyst" },
  { id: 3, src: apatite, name: "apatite" },
  { id: 4, src: aquamarine, name: "aquamarine" },
  { id: 5, src: beryl, name: "beryl" },
  { id: 6, src: chrysoberyl, name: "chrysoberyl" },
  { id: 7, src: citrine, name: "citrine" },
  { id: 8, src: clinohumite, name: "clinohumite" },
  { id: 9, src: diamond, name: "diamond" },
  { id: 10, src: emerald, name: "emerald" },
  { id: 11, src: garnet, name: "garnet" },
  { id: 12, src: heliodor, name: "heliodor" },
  { id: 13, src: kunzite, name: "kunzite" },
  { id: 14, src: moonstone, name: "moonstone" },
  { id: 15, src: morganite, name: "morganite" },
  { id: 16, src: opal, name: "opal" },
  { id: 17, src: pearl, name: "pearl" },
  { id: 18, src: peridot, name: "peridot" },
  { id: 19, src: prasiolite, name: "prasiolite" },
  { id: 20, src: ruby, name: "ruby" },
  { id: 21, src: sapphire, name: "sapphire" },
  { id: 22, src: spinel, name: "spinel" },
  { id: 23, src: sphene, name: "sphene" },
  { id: 25, src: tanzanite, name: "tanzanite" },
  { id: 26, src: topaz, name: "topaz" },
  { id: 27, src: tourmaline, name: "tourmaline" },
  { id: 28, src: zircon, name: "zircon" },
];

export default function AdminGemstonesList() {
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
          <h1 className="text-2xl font-bold">Gemstone Collection</h1>
          <h1 className="text-2xl font-semibold">Items {gems.length}</h1>
        </div>
        <div>
          <Link to="/admin?tab=addGemstones">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Gemstone{" "}
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
              <Link to={`/admin?tab=editGemstones&id=${gem.id}`}>
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
