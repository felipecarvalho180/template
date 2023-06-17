"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut();
  };

  return <button onClick={handleLogout}>Logout</button>;
}
