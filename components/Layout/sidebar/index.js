import React from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  HiSquares2X2,
  HiOutlineClipboardDocumentList,
  HiMiniIdentification,
  HiDocumentText,
  HiMiniBanknotes,
  HiMiniWallet,
  HiOutlineBookOpen,
  HiUser,
  HiMiniUserGroup,
  HiPresentationChartLine,
  HiEnvelope,
  HiMiniCubeTransparent,
} from "react-icons/hi2";
import { icons } from "react-icons";

const Sidebar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  //dashboard item
  const Baritem = [
    {
      name: "dashboard",
      icons: <HiSquares2X2 className="h-5   w-5" />,
      url: "/",
    },

    {
      name: "Project M",
      icons: <HiOutlineClipboardDocumentList className="h-5   w-5" />,
      url: "/Project-M",
    },
    {
      name: "HRM",
      icons: <HiMiniIdentification className="h-5   w-5" />,
      url: "/HRM",
    },
    {
      name: "Projects",
      icons: <HiDocumentText className="h-5   w-5" />,
      url: "/Projects",
    },
    {
      name: "Finance",
      icons: <HiMiniBanknotes className="h-5   w-5" />,
      url: "/Finance",
    },
    {
      name: "Accounts",
      icons: <HiMiniWallet className="h-5   w-5" />,
      url: "/Accounts",
    },
    {
      name: "Complaints",
      icons: <HiOutlineBookOpen className="h-5   w-5" />,
      url: "/Complaints",
    },
    {
      name: "Team",
      icons: <HiMiniUserGroup className="h-5   w-5" />,
      url: "/Team",
    },
    {
      name: "Clients",
      icons: <HiUser className="h-5   w-5" />,
      url: "/Clients",
    },

    {
      name: "New Leads",
      icons: <HiPresentationChartLine className="h-5   w-5" />,
      url: "/NewLeads",
    },
    {
      name: "Messages",
      icons: <HiEnvelope className="h-5   w-5" />,
      url: "/Messages",
    },
    {
      name: "Hierachy",
      icons: <HiMiniCubeTransparent className="h-5   w-5" />,
      url: "/Hierachy",
    },
  ];
  return (
    <div ref={ref} className=" z-10 fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <img className="w-32 h-auto" src="/images/logo.png" alt="logo image" />
      </div>

      <div className="flex flex-col">
        {Baritem.map((item, index) => {
          return (
            <Link key={index} href={item.url}>
              <div
                className={`pl-6 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-color ${
                  router.pathname == item.url
                    ? "bg-green-100 text-black-400"
                    : "text-gray-700 hover:bg-green-100 hover:text-black-100"
                }  `}
              >
                <div className="mr-2">{item.icons}</div>
                <div>
                  <p className=" uppercase">{item.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
        <div className=""></div>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
