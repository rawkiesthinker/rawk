import React from "react";
import Head from "../../components/head";
import Footer from "../../components/footer";
import invoice from './mbulelo.json';

const EARTHY = () => {
  return (
    <div>
      <Head title="Rawk"></Head>
      <div className="w-full h-12 text-lg flex items-center p-2">
        <div className="w-auto flex font-default-book uppercase">Pay</div>
        <div className="w-full flex justify-end items-end text-sm md:text-md lg:text-lg">
          let us fund your freedom
        </div>
      </div>

      <div className="flex justify-center">
          <div className="flex-wrap max-w-screen-sm mx-auto">
              <div className="w-full text-left">
                  <p className="w-full flex text-left border-b-2">
                  <span className="font-bold">Invoice Undefined</span>
                  </p>
                 <p className="w-full border-b-2 ">
                     Delivery Type <span className="font-bold">{invoice.type}</span>
                 </p>
                 <p className="w-64 border-b-2">
                     Deisgn from template including hosting and security
                     <span className="font-bold"> {invoice.Invoice.Item_1}</span>
                 </p>

                 <p className="w-64 border-b-2">
                     .com Domain Registration
                     <span className="font-bold"> {invoice.Invoice.Item_2}</span>
                 </p>

                 <p className="w-64 border-b-2">
                     Total
                     <span className="font-bold"> {invoice.Total}</span>
                 </p>
              </div>

              <div className="w-full text-left my-4">
                  <p className="w-full flex text-left border-b-2">
                  <span className="font-bold">Banking Details</span>
                  </p>
                 <p className="w-full border-b-2 ">
                     Bank<span className="font-bold"> FNB</span>
                 </p>
                 <p className="w-64 border-b-2">
                     Account Type
                     <span className="font-bold">Cheque Account</span>
                 </p>

                 <p className="w-64 border-b-2">
                   Account Number
                     <span className="font-bold"> 62839970458</span>
                 </p>

                 <p className="w-64 border-b-2">
                     Branch Code
                     <span className="font-bold"> 250655</span>
                 </p>
              </div>


              <div className="w-full text-left my-4">
                  <p className="w-full flex text-left border-b-2">
                  <span className="font-bold">Might also be interested in</span>
                  </p>
                 <p className="w-full border-b-2 ">
                     Maintenance<span className="font-bold"> R100 p/m</span>
                 </p>
          
              </div>

              <div className="w-full text-left my-4">
                  <p className="w-full flex text-left border-b-2">
                  <span className="font-bold text-xl">Total Due</span>
                  </p>
                 <p className="w-full border-b-2 ">
                    R1790
                 </p>
          
                 <p className="w-full border-b-2 ">
                    Site will be uploaded on proof of payment
                 </p>
              </div>
          </div>

          
      </div>
      {/* <div className="relative h-screen flex w-full">
        <div className="flex-wrap w-full max-w-screen-sm ">

        <div className="flex text-xl md:text-xl lg:text-2xl font-default-black uppercase">
         hello
      
        </div>
         <div className="w-full p-2">
          <a
            href="https://wa.me/27815206804?text=I%20am%20care"
            className="p-2 border-2 border font-default-light"
          >
            I want care for my hair{" "}
          </a>
        </div> 
        
        
        </div>
  
       
      </div> */}
      {/* <div className="bottom-0 absolute w-full justify-center flex cursor-pointer p-2">Find out what more I can do for you</div>
      

<div className="h-auto w-full justify-right flex flex-wrap items-end p-2">
  <div> <span className="font-default-book cursor-pointer">Earthy</span> Natural Hair Care(Coming Soon)</div>
</div> */}

      <Footer>
      
      </Footer>
    </div>
  );
};

export default EARTHY;

/* 1911 */
