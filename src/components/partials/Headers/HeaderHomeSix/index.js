import React, { useEffect } from "react";
import StickyMenu from "../../../../lib/StickyMenu";
import Navbar from "../../../helpers/Navbar";

export default function HeaderHomeSix() {
  useEffect(() => {
    StickyMenu(".main-header");
  });
  return (
    <>
      <Navbar />
    </>
  );
}
