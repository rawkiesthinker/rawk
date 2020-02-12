import React from "react";
import Head from "../components/head";
import Footer from "../components/footer";
import Nav from "../components/nav";

const INDEX = () => {
  return (
    <div>
      <Head title="Rawk"></Head>
      <Nav title="Rawk"></Nav>

      <div className="relative h-screen flex  w-full items-center justify-center text-center">
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
      <div className="bottom-0 absolute w-full justify-center flex cursor-pointer p-2">Find out what more I can do for you</div>
      

<div className="h-auto w-full justify-right flex flex-wrap items-end p-2">
  <div className="w-full"> <span className="font-default-book cursor-pointer">Earthy</span> Natural Hair Care(Coming Soon)</div>
  <div className="w-full"> <span className="font-default-book cursor-pointer">Sabali</span> StreetWear (Coming Soon)</div>
  <div className="w-full"> <span className="font-default-book cursor-pointer">Use Cases</span> Future World Cases (Coming Soon)</div>
</div>

      <Footer>
      
      </Footer>
    </div>
  );
};

export default INDEX;

// 1911 