"use client";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../../../public/forget_account.json";

export default function Animation() {
  return (
    <div className="hidden lg:block">
      <Lottie
        options={{ loop: true, autoplay: true, animationData }}
        height={400}
        width={400}
      />
    </div>
  );
}
