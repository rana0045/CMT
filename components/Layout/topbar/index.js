import { Fragment, useState } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  CheckIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition, Popover, Switch } from "@headlessui/react";
import Link from "next/link";

import WatchTime from "@/components/Layout/Watch/WatchTime ";
export default function TopBar({ showNav, setShowNav }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      className={`  z-10  fixed mt-[20px] w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${showNav ? "pl-56" : ""
        }`}
    >
      {/* ---------SIDEBAR TOGGLE BUTTON------------- */}

      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>

      {/* ---------INPUT FILED WITH ICON------------- */}
      <div className="relative flex items-center ">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md py-2 px-4 pl-20 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="21" y1="21" x2="15.8" y2="15.8" />
        </svg>
      </div>

      <div className="flex items-center pr-4 md:pr-16">
        {/* ---------DARK MODE SWITCH------------- */}

        <div className="mr-5 md:mr-8 cursor-pointer">
          <Switch
            checked={enabled}
            className={`${enabled ? "bg-blue-600" : "bg-black"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        {/* ---------ANNNOUCEMENT ICON------------- */}

        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700 bg-card-color w-10 h-10 flex justify-center items-center rounded-lg shadow-lg">
            <SpeakerWaveIcon className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            {/* ---------INNER CONETENT OF THE DROPDWON------------- */}
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-2">
                <Popover.Button>ANNOUCEMENT</Popover.Button>
              </div>
              <div className="relative p-2">
                <Popover.Button>APPRICIATION</Popover.Button>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* ---------NOTIFICATION ICON------------- */}
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700 bg-card-color w-10 h-10 flex justify-center items-center rounded-lg shadow-lg">
            <BellIcon className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            {/* ---------INNER CONTENT------------- */}
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications</p>
                  <a className="text-sm text-orange-500" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* ---------USER PROFILE DETAILS------------- */}
        <Menu
          as="div"
          className="relative inline-block text-left bg-card-color w-[150px] h-[45px]   rounded-lg shadow-lg "
        >
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="/images/user.png"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"

                />
              </picture>
              <span className="hidden md:block font-medium   text-gray-700">
                TONEY
                <WatchTime />
              </span>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            {/* ---------USER DROP DOWN ITEMS------------- */}
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Edit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <CreditCardIcon className="h-4 w-4 mr-2" />
                    Billing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
