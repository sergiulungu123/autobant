import "bootstrap/dist/css/bootstrap.min.css";

import * as React from "react";

import { collection, getDocs } from "firebase/firestore";

import bcrypt from "bcryptjs";
import cls from "../style.module.css";
import { db } from "./config";
import { useEffect, useState } from "react";

function Main() {
  return (
    <div className={cls.app}>
      <p className={cls.loading}>progress</p>
    </div>
  );
}
export default Main;
