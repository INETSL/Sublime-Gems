import { useEffect, useState } from "react";
import Sidebar from "../../components/Admin/Sidebar";
import HeaderAdmin from "../../components/Admin/HeaderAdmin";
import { useLocation } from "react-router-dom";

import AdminProdustList from "../../components/Admin/Products/AdminProdustList";
import AdminAddProducts from "../../components/Admin/Products/AdminAddProducts";
import AddBanner from "../../components/Admin/Banners/AddBanner";
import AdminGemstonesList from "../../components/Admin/Gemstones/AdminGemstonesList";
import AdminAddGemstones from "../../components/Admin/Gemstones/AdminAddGemstones";
import AdminEditGemstones from "../../components/Admin/Gemstones/AdminEditGemstones";
import AdminShapesList from "../../components/Admin/Shapes/AdminShapesList";
import AdminAddShapes from "../../components/Admin/Shapes/AdminAddShapes";
import AdminEditShapes from "../../components/Admin/Shapes/AdminEditShapes";
import AdminColoursList from "../../components/Admin/Colours/AdminColoursList";
import AdminAddColours from "../../components/Admin/Colours/AdminAddColours";
import AdminEditColours from "../../components/Admin/Colours/AdminEditColours";
import AdminOriginsList from "../../components/Admin/Origins/AdminOriginsList";
import AdminAddOrigins from "../../components/Admin/Origins/AdminAddOrigins";
import AdminEditOrigins from "../../components/Admin/Origins/AdminEditOrigins";
import AdminSelectionsList from "../../components/Admin/Selections/AdminSelectionsList";
import AdminAddSelections from "../../components/Admin/Selections/AdminAddSelections";
import AdminEditSelections from "../../components/Admin/Selections/AdminEditSelections";
import AdminEditeProducts from "../../components/Admin/Products/AdminEditeProducts";
import BannerOneCp from "../../components/Admin/Banners/BannerOneCp";
import BannerTwoCp from "../../components/Admin/Banners/BannerTwoCp";
import SlideOne from "../../components/Admin/Banners/SlideOne";
import SlideTwo from "../../components/Admin/Banners/slideTwo";
import SlideThree from "../../components/Admin/Banners/slideThree";

export default function HomeAdmin() {
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 bg-white overflow-auto">
        <HeaderAdmin />

        {/* Content Area */}
        <main className="p-6">
          {tab === "dashboard" && (
            <div>
              <h1 className="text-2xl font-bold">Welcome to the Admin Panel</h1>
              <p className="text-gray-600 mt-2">
                Select a menu from the sidebar.
              </p>
            </div>
          )}

          {/* Table and other content */}
          {tab === "productList" && <AdminProdustList />}
          {tab === "addProduct" && <AdminAddProducts />}
          {tab === "editProduct" && <AdminEditeProducts />}
          {tab === "banner" && <AddBanner />}

          {/**Gemstone */}
          {tab === "gemstones" && <AdminGemstonesList />}
          {tab === "addGemstones" && <AdminAddGemstones />}
          {tab === "editGemstones" && <AdminEditGemstones />}

          {/**Shapes */}
          {tab === "shapes" && <AdminShapesList />}
          {tab === "addShapes" && <AdminAddShapes />}
          {tab === "editShapes" && <AdminEditShapes />}

          {/**Colours */}
          {tab === "colours" && <AdminColoursList />}
          {tab === "addColours" && <AdminAddColours />}
          {tab === "editColours" && <AdminEditColours />}

          {/**origins */}
          {tab === "origins" && <AdminOriginsList />}
          {tab === "addOrigins" && <AdminAddOrigins />}
          {tab === "editOrigins" && <AdminEditOrigins />}

          {/**Selection */}
          {tab === "selections" && <AdminSelectionsList />}
          {tab === "addSelections" && <AdminAddSelections />}
          {tab === "editSelections" && <AdminEditSelections />}

          {/**Banners */}
          {tab === "bannerOne" && <BannerOneCp />}
          {tab === "bannerTwo" && <BannerTwoCp />}
          {tab === "slideOne" && <SlideOne />}
          {tab === "slideTwo" && <SlideTwo />}
          {tab === "slideThree" && <SlideThree />}
        </main>
      </div>
    </div>
  );
}
