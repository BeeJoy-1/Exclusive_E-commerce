import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { LuShoppingBag, LuUser } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { IoMdStarOutline } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 2,
      item: "About",
    },
    {
      id: 3,
      item: "ProductDetail",
    },
    {
      id: 4,
      item: "Contact",
    },
    {
      id: 5,
      item: "SignUp",
    },
  ];

  const [account, setAccount] = useState(false);
  const userAccountRef = useRef(null);
  // const userInfoRef = useRef(null);

  // const handleAccount = () => {
  //   setAccount(!account);
  // };

  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (userAccountRef.current.contains(event.target)) {
        setAccount(!account);
        // } else if (userInfoRef.current.contains(event.target)) {
        //   setAccount(true);
      } else {
        setAccount(false);
      }
    });
  }, [account]);

  return (
    <div className="pt-10 pb-4 border-b-[1.5px]  border-opacity-5 border-b-text_gray7D8184">
      <div className=" container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-Inter font-bold text-text_black000000 cursor-pointer hover:text-black_738">
              Exclusive
            </h1>
          </div>
          <div>
            <ul className="flex items-center gap-x-[48px]">
              {navItem?.map((nav) => (
                <li key={nav.id} className="menuUnderLine">
                  <NavLink
                    to={`${nav.item}`}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? " text-black text-[16px] font-normal font-poppins"
                        : isActive
                        ? " text-red-500 text-[16px] font-normal font-poppins"
                        : "text-black text-[16px] font-normal font-poppins"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className=" basis-1/3 relative flex items-center justify-between">
            <div>
              <input
                type="text"
                className="py-2 px-3 pr-[42px] bg-white_F5F5F5 rounded w-[280px]"
                placeholder="What are you looking for?"
              />
              <span className=" absolute top-1/2 -translate-y-1/2 text-xl right-[48%] cursor-pointer">
                <FcSearch />
              </span>
            </div>
            <div className="flex items-center gap-x-[20px]">
              <span className="text-black_738 text-2xl cursor-pointer">
                <FaRegHeart />
              </span>
              <span className="text-black_738 text-2xl amount cursor-pointer">
                <BsCart />
              </span>
              <span
                className="text-text_whiteFAFAFA text-xl rounded-full bg-text_reddb4444 p-2 cursor-pointer relative"
                // onClick={handleAccount}
                ref={userAccountRef}
              >
                <FaUser />
              </span>
              {account && (
                <div
                  className="absolute right-[0%] top-[140%] bg-[rgba(0,0,0,0.25)]  flex flex-col gap-y-5 py-7 rounded w-[65%] z-30 backdrop-blur-2xl"
                  // ref={userInfoRef}
                >
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 group hover:py-3 transition-all pl-5 cursor-pointer">
                    <span className="text-text_whiteFAFAFA text-2xl group-hover:text-text_black000000">
                      <LuUser />
                    </span>
                    <h3 className="text-text_whiteFAFAFA text-xl font-normal font-poppins group-hover:text-text_black000000">
                      Manage My Account
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all group pl-5 cursor-pointer">
                    <span className="text-text_whiteFAFAFA text-2xl group-hover:text-text_black000000">
                      <LuShoppingBag />
                    </span>
                    <h3 className="text-text_whiteFAFAFA text-xl font-normal font-poppins group-hover:text-text_black000000">
                      My Order
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all group pl-5 cursor-pointer">
                    <span className="text-text_whiteFAFAFA text-2xl group-hover:text-text_black000000">
                      <ImCancelCircle />
                    </span>
                    <h3 className="text-text_whiteFAFAFA text-xl font-normal font-poppins group-hover:text-text_black000000">
                      My Cancellations
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all group pl-5 cursor-pointer">
                    <span className="text-text_whiteFAFAFA text-2xl group-hover:text-text_black000000">
                      <IoMdStarOutline />
                    </span>
                    <h3 className="text-text_whiteFAFAFA text-xl font-normal font-poppins group-hover:text-text_black000000">
                      My Reviews
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all group pl-5 cursor-pointer">
                    <span className="text-text_whiteFAFAFA text-2xl group-hover:text-text_black000000">
                      <RiLogoutCircleLine />
                    </span>
                    <h3 className="text-text_whiteFAFAFA text-xl font-normal font-poppins group-hover:text-text_black000000">
                      Logout
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
