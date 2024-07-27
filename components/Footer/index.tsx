"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-green-50 dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="pt-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-15 md:flex-row lg:gap-40">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <div className="mb-9 flex items-center justify-start gap-8">
                    <h4 className=" text-itemtitle2 font-medium text-black">
                      Categories
                    </h4>
                  </div>

                  <div className="flex flex-col items-start justify-between text-sm md:flex-row md:gap-25">
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Personal Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Elder Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Ayurvedic Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Women Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Diabetic Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Mother Care
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Baby Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Home Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Skin Care
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Health and Devices
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Sexual Wellness
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Multivitamins
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Accessories & Wearables
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Glucometers and Test strips
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Health food & Drinks
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Nutritional Drinks for kids
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Pain relief
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Useful Links
                  </h4>

                  <div className="flex flex-col items-start justify-start text-sm md:flex-row md:gap-20">
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Career
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Press
                        </a>
                      </li>
                      <li>
                        <a
                          href="/grievancepolicy"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Lead
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Value
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="/privacypolicy"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="/termsandconditions"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Terms
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Mobile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Partner
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Express
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Seller
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Warehouse
                        </a>
                      </li>
                      <li>
                        <a
                          href="/refundpolicy"
                          className="mb-3 inline-block hover:text-primary"
                        >
                          Deliver
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div>
            <div className="flex items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex lg:justify-center lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_to w-full"
              >
                <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-0">
                  <p>
                    &copy; {new Date().getFullYear()} My Dawai Wala. Unit of
                    SwiftMeds Pharma. All rights reserved
                  </p>
                  <div className="animate_top mb-3 mt-3">
                    <ul className="flex items-center gap-5">
                      <li>
                        <a
                          href="https://www.facebook.com/mydawaiwala/"
                          aria-label="social icon"
                        >
                          <svg
                            width="35px"
                            height="35px"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <circle
                                cx="16"
                                cy="16"
                                r="14"
                                fill="url(#paint0_linear_87_7208)"
                              ></circle>{" "}
                              <path
                                d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                                fill="white"
                              ></path>{" "}
                              <defs>
                                {" "}
                                <linearGradient
                                  id="paint0_linear_87_7208"
                                  x1="16"
                                  y1="2"
                                  x2="16"
                                  y2="29.917"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  {" "}
                                  <stop stop-color="#18ACFE"></stop>{" "}
                                  <stop offset="1" stop-color="#0163E0"></stop>{" "}
                                </linearGradient>{" "}
                              </defs>{" "}
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/MyDawaiwala"
                          aria-label="social icon"
                        >
                          <svg
                            width="35px"
                            height="35px"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7224 8.65878 27.7095 8.62731 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z"
                                fill="#47ACDF"
                              ></path>{" "}
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/mydawaiwala/"
                          aria-label="social icon"
                        >
                          <svg
                            width="35px"
                            height="35px"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                fill="#C13584"
                              ></circle>{" "}
                              <path
                                d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                                fill="white"
                              ></path>{" "}
                              <path
                                d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                                fill="white"
                              ></path>{" "}
                              <path
                                d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                                fill="white"
                              ></path>{" "}
                            </g>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center gap-5 pb-7 dark:border-strokedark lg:flex lg:justify-center lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <p>Built & Managed by SIDA Technologies</p>
              </motion.div>
            </div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
