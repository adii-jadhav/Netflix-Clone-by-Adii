import React, { useEffect, useState } from "react";
import logo from "../logo-n.png";
import avatarImg from "../Netflix-avatar.png";

export default function Navbar() {
  const [showbg, setshowbg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setshowbg(true);
      } else {
        setshowbg(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <>
      <div
        className=" justify-content-between nav p-2 "
        style={{ backgroundColor: showbg ? "black" : "transparent" }}
      >
        <div className="logo col-7">
          <img src={logo} alt="" />
        </div>
        <div className="avatar  ">
          <img src={avatarImg} alt="" />
        </div>
      </div>
    </>
  );
}
