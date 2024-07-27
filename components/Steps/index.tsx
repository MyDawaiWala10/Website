import React from "react";

const index = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
            How It Works
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Order medicines in 3 easy steps
          </h2>
        </div>
        <ul className="mx-auto mt-12 grid w-fit grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-3">
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:left-auto lg:right-0 lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            ></span>
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-white"
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
                    d="M20 7L4 7"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M15 12L4 12"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M9 17H4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="before:font-mono text-xl font-bold text-gray-900 before:mb-2 before:block before:text-sm before:text-gray-500">
                Select category
              </h3>
              <h4 className="mt-2 text-base text-gray-700">
                Scan the QR code/use our WhatsApp number/visit our website.
              </h4>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:left-auto lg:right-0 lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            ></span>
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-white"
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
                    d="M2.59996 6C2.92854 5.27154 3.3921 4.58912 3.99066 3.99057C6.64475 1.33648 10.9479 1.33648 13.602 3.99057L20.0095 10.3981C21.0291 11.4177 21.657 12.6807 21.8932 14M2.10693 10C2.34316 11.3193 2.97106 12.5823 3.99066 13.6019L10.3982 20.0094C13.0523 22.6635 17.3554 22.6635 20.0095 20.0094C20.6081 19.4109 21.0716 18.7285 21.4002 18"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M16.8057 7.19434C16.8057 7.19434 16.2649 9.99999 13.1322 13.1327C9.99952 16.2653 7.19434 16.8057 7.19434 16.8057"
                    stroke-width="1.5"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="before:font-mono text-xl font-bold text-gray-900 before:mb-2 before:block before:text-sm before:text-gray-500">
              Choose how you want to order
              </h3>
              <h4 className="mt-2 text-base text-gray-700">
              Upload your prescription/send the medicine name/talk to our pharmacist 
              </h4>
            </div>
          </li>
          {/* <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:left-auto lg:right-0 lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            ></span>
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-white"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="before:font-mono text-xl font-bold text-gray-900 before:mb-2 before:block before:text-sm before:text-gray-500">
                Redirect to WhatsApp
              </h3>
              <h4 className="mt-2 text-base text-gray-700">
                Click on order now and and redirect to WhatsApp Bot
              </h4>
            </div>
          </li> */}
          <li className="flex-start group relative flex lg:flex-col">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-white"
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
                    d="M21.9844 10C21.9473 8.68893 21.8226 7.85305 21.4026 7.13974C20.8052 6.12523 19.7294 5.56066 17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L6.42229 4.43152C4.27063 5.56066 3.19479 6.12523 2.5974 7.13974C2 8.15425 2 9.41667 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27063 18.4393 6.42229 19.5685L8.42229 20.618C10.1779 21.5393 11.0557 22 12 22C12.9443 22 13.8221 21.5393 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C21.8226 16.1469 21.9473 15.3111 21.9844 14"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M21 7.5L17 9.5M12 12L3 7.5M12 12V21.5M12 12C12 12 14.7426 10.6287 16.5 9.75C16.6953 9.65237 17 9.5 17 9.5M17 9.5V13M17 9.5L7.5 4.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="before:font-mono text-xl font-bold text-gray-900 before:mb-2 before:block before:text-sm before:text-gray-500">
                Place your order
              </h3>
              <h4 className="mt-2 text-base text-gray-700">
                That's it. It's this easy to order medicines from MyDawaiWala.
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default index;
