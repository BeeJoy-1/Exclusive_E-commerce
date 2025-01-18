import React from "react";
import { useLocation, Link } from "react-router-dom";
const BreadCrumbs = () => {
  const { pathname } = useLocation();
  let pathnameArr = pathname.split("/").filter((path) => path);
  let BreadCrumbPath = "";

  return (
    <div className="py-20">
      <div className="container">
        <span className="inline-block bg-blue-400 px-2 py-1 rounded-sm font-poppins">
          <Link to={"/"}>Home</Link>
        </span>
        {pathnameArr?.map((name, index) => {
          BreadCrumbPath += `/${name}`;
          const isLast = index === pathnameArr?.length - 1;
          return isLast ? (
            <>
              <span>/ </span>
              <span
                className="inline-block bg-teal-300 text-white_FFFFFF font-poppins px-2 py-1 rounded-sm"
                key={index}
              >
                {" "}
                {name}
              </span>
            </>
          ) : (
            <>
              <span> /</span>
              <span key={index}>
                <Link
                  className="bg-red-500 inline-block text-white_FFFFFF font-poppins px-2 py-1 rounded-sm mx-2"
                  to={BreadCrumbPath}
                >
                  {name}
                </Link>{" "}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
