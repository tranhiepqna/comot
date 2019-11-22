import React from "react";
import AppBar from "./AppAppBar";
import Head from "next/head";

export default function Layout(props) {
  const { isBack } = props;
  return (
    <React.Fragment>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="vi" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.description}></meta>
        <link rel="canonical" href="https://comot.vn/" />
      </Head>
      <AppBar isBack={isBack} />
      <main>{props.children}</main>
    </React.Fragment>
  );
}
