import React from "react";
import { Main } from ".";
import { Navbar } from "../components";
import { SideNav } from "../components";

export const MainPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <SideNav></SideNav>
      <Main></Main>
    </>
  );
};
