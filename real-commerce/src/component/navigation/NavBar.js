import React from "react";
import Link from "next/link";
import style from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <div className={style.nav}>
      <Link href="/">Home</Link>
      <Link href="/favorites">favorites</Link>
    </div>
  );
}
