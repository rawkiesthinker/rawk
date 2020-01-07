import React from "react";
import Head from "../components/head";
import Footer from "../components/footer";

const INDEX = () => {
  return (
    <div>
      <Head title="Rawk"></Head>
      <div className="w-full h-12 text-lg flex items-center p-2">
        <div className="w-auto flex font-default-book uppercase">Rawk</div>
        <div className="w-full flex justify-end items-end text-sm md:text-md lg:text-lg">
          developing freedom one app at a time
        </div>
      </div>

      <div className="h-screen flex  w-full items-center justify-center text-center">
        <div className="flex-wrap">
        <div className="text-3xl md:text-3xl lg:text-5xl font-default-black uppercase">
          When your ready <br />
          let me know{" "}
        </div>
        <div className="w-full p-2">
          <a
            href="https://wa.me/27815206804?text=I%20am%20ready"
            className="p-2 border-2 border font-default-light"
          >
            I am ready{" "}
          </a>
        </div>
        </div>
    
      </div>
      <Footer></Footer>
    </div>
  );
};

export default INDEX;

/* 1911 */
