import React from "react";
import { Link, useLocation } from "react-router-dom";

const BasicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don’t show on home
  if (location.pathname === "/") return null;

  return (
    <div
      className="relative w-full h-70 bg-cover bg-center flex items-center justify-center "
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-[url('/assets/images/herobanner.jpg')] min-h-[200px]">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 uppercase">
          {pathnames[pathnames.length - 1] || "Home"}
        </h1>
        <nav className="text-sm">
          <ol className="flex gap-2 list-none">
            <li>
              <Link to="/" className="hover:text-[#159EEC]">
                Home
              </Link>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;
              return (
                <li key={index} className="flex gap-2 items-center">
                  <span>{" /"}</span>
                  {isLast ? (
                    <span className="capitalize">{name}</span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="hover:text-[#159EEC] capitalize"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BasicBreadcrumbs;
