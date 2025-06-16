"use client";
import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import categoriesData from "./categoriesData";

import "@fontsource-variable/bricolage-grotesque";
import FlipCard from "./flip-card";

const Feature = () => {
  const leftCategories = categoriesData.slice(0, 8);
  const rightCategories = categoriesData.slice(8, 16);

  return (
    <>
      <section id="features" className="py-10 lg:py-25 xl:py-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "ORDER NOW",
              subtitle: "Home essentials",
              description: `Stock up on essential home medicines from My Dawai Wala to ensure your family's health and well-being. From fever reducers to cough suppressants, we've got you covered for every common ailment, right at your fingertips.`,
            }}
          />
          <p className="mb-5 mt-12.5 text-center text-base font-bold tracking-widest text-gray-700 lg:mt-15 xl:mt-20">
            {/* Select by category */}
          </p>

          <div className="flex flex-col justify-center gap-6 md:flex-row">
            {/* Left Card */}
            <div className="group h-[300px] [perspective:1000px] md:w-[40%] ">
              <FlipCard />
            </div>

            {/* Right Card */}
            {/* <div className="md:w-[40%] group h-[300px] [perspective:1000px] ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-white p-8 [backface-visibility:hidden]">
                  <div className="flex flex-col h-full w-full items-start justify-start">
                      <h2 className="text-3xl font-bold mb-4 font-bricolage tracking-tight">MDW Wellness</h2>
                      <p className="text-base mb-4 font-semibold">Therapy</p>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">Vitamins, supplements & personal care</li>
                        <li>Preventive healthcare essentials</li>
                      </ul>
                  </div>
                </div>
                
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-white p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] relative">
                  <div className="flex flex-col h-full w-full items-center justify-center">
                    <div className="w-64 h-64">
                      <img src="/images/icon/wellness.svg" alt="MDW Wellness" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <a href="https://wa.link/oprl2e">
              <button className="inline-flex items-center justify-center gap-5 rounded-full bg-zumthor px-20 py-4 dark:border dark:border-strokedark dark:bg-blacksection">
                <span className="text-xl font-medium text-black dark:text-white">
                  ORDER NOW
                </span>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>Whatsapp-color</title>
                    <desc>Created with Sketch.</desc> <defs></defs>
                    <g
                      id="Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-700.000000, -360.000000)"
                        fill="#67C15E"
                      >
                        <path
                          d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                          id="Whatsapp"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
