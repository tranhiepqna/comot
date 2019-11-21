import React from "react";
import AppBar from "./AppAppBar";
import Head from "next/head";
import ShopCart from "../components/ShopCart";

export default function Layout(props) {
  const { isBack } = props;
  return (
    <React.Fragment>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.description}></meta>
      </Head>
      <AppBar isBack={isBack} />
      <main>{props.children}</main>
    </React.Fragment>
  );
}
