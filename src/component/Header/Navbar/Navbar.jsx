import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <nav className=" mx-auto block w-full max-w-screen-xl rounded-xl py-2 lg:py-8 px-4 text-white backdrop-blur-2xl backdrop-saturate-200 lg:px-8 md:py-4">
      <div>
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
          >
            <span>Material Tailwind</span>
          </a>
          <ul className="hidden items-center gap-6 lg:flex">
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Pages
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Account
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Blocks
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Docs
              </a>
            </li>
          </ul>

          <button
            onClick={() => setOpenNav(!openNav)}
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="navbar"
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {openNav && (
          <div className="relative" data-collapse="navbar">
            <div className="absolute py-1 md:py-4 w-24 right-0 z-50 bg-slate-200 container mx-auto pb-2">
              <ul className="mt-2 mb-4 text-red-700 flex flex-col gap-2">
                <li className=" p-1 font-sans text-sm font-normal leading-normal text-red-700 antialiased">
                  <a className="flex items-center" href="#">
                    Pages
                  </a>
                </li>
                <li className=" p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                    Account
                  </a>
                </li>
                <li className=" p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                    Blocks
                  </a>
                </li>
                <li className=" p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
/*
<nav className="mx-auto block w-full max-w-screen-xl py-2 px-4 text-white backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div>
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
          >
            <img className="md:w-32 lg:w-44" src="/Resources/Logo.png"></img>
          </a>
          <ul className="hidden items-center gap-6 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-400"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-400"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-400"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
          <button
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="navbar"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div
          className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
          data-collapse="navbar"
        >
          <div className="container mx-auto pb-2">
            <ul className="mt-2 mb-4 flex flex-col gap-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-red-400"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-red-400"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-red-400"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <nav className="flex justify-between py-4 px-28">
      <img className="md:w-32 lg:w-44" src="/Resources/Logo.png"></img>
      <button
        className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
        data-collapse-target="sticky-navar"
      >
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </span>
      </button>
      <ul className="hidden md:flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-400" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-400" : ""
            }
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-400" : ""
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </nav>
    */
