import React from "react";
import AppBar from "./AppAppBar";
import Head from "next/head";
import ShopCart from "../components/ShopCart";

export default function Layout(props) {
  const { isBack } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="title" content="Peaky Blinder's e-commerce" />
        <meta
          name="description"
          content="Find the best Peaky Blinders products online."
        />
      </Head>
      <AppBar isBack={isBack} />
      <main>{props.children}</main>
      <ShopCart />
    </React.Fragment>
  );
}
