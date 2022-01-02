import '../styles/globals.css'
import React from "react";

function MyApp({ Component, pageProps }: { Component: React.FC, pageProps: any }) {
  return <div className="my-4 w-full md:w-2/3 mx-auto px-4">
    <Component {...pageProps} />
  </div>
}

export default MyApp
