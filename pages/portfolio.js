import React from "react";
import Head from "../components/tagHead";
import Footer from "../components/footer";

const Portfolio = () => {
  return (
    <div>
      <Head title="Rawk"></Head>
      <div className="w-full h-12 text-lg flex items-center p-2">
        <div className="w-auto flex font-default-book uppercase">Portfolio</div>
        <div className="w-full flex justify-end items-end text-sm md:text-md lg:text-lg">
          Seeking Freedom one app at a time
        </div>
      </div>

      <div className="relative h-screen flex w-full  items-center justify-center text-center">
        <div className="flex-wrap lg:flex p-4">

            <a className="m-2" href="http://www.oakwoodacademy.co.za/" target="_blank">
            <p className="text-4xl font-default-bold uppercase opacity-50 hover:opacity-100 hover:underline">Oakwood Academy</p>
            </a>

            <a className="m-2" href="http://www.gmabata.co.za/" target="_blank">
            <p className="text-4xl font-default-bold uppercase opacity-50 hover:opacity-100 hover:underline">Gmabata</p>
            </a>
        
            <a className="m-2" href="https://www.gibs.co.za/" target="_blank">
            <p className="text-4xl font-default-bold uppercase opacity-50 hover:opacity-100 hover:underline">GIBS Business School </p>
            </a>
        
        </div>
  
       
      </div>
      {/* <div className="bottom-0 absolute w-full justify-center flex cursor-pointer p-2">Find out what more I can do for you</div>
      

<div className="h-auto w-full justify-right flex flex-wrap items-end p-2">
  <div> <span className="font-default-book cursor-pointer">Earthy</span> Natural Hair Care(Coming Soon)</div>
</div> */}

      <Footer>
      
      </Footer>
    </div>
  );
};

export default Portfolio;

/* 2004 */
