import React, { FC } from "react";

import styles from "./Logo.module.scss";
import Image from "next/image";

import logo from "/public/favicon.png";

const Logo: FC = () => {
  return (
    <div><Image src={logo} alt="" /></div>
  );
};

export default Logo;
