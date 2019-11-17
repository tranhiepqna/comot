import React from "react";
import AppBar from "./AppAppBar";
import Head from "next/head";
import ShopCart from "../components/ShopCart";

export default function Layout(props) {
  const { isBack } = props;
  return (
    <React.Fragment>
      <AppBar isBack={isBack} />
      <main>{props.children}</main>
    </React.Fragment>
  );
}
