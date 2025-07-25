"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useGetAllProducts } from "@/data/get-all-product";
import React from "react";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("id");

const { data, isLoading, error } = useGetAllProducts();
const product = data?.data?.find((p) => p.productId === params.id);

  // console.log(product, products, productId);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  // check if medic is expired
  if(product?.nearestExpiry){
    const expireDate = new Date(product?.nearestExpiry);
    if(expireDate < new Date()){
      product.status = "Not Available"
    }
  }

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  if (error || !product) {
    return (
      <div className="p-8">
        <button
          onClick={() => router.back()}
          className="mb-4 text-blue-600 hover:underline"
        >
          &larr; Back
        </button>
        <div className="mt-8 text-center">
          <div className="text-4xl">📦</div>
          <h2 className="text-xl font-semibold">Product Not Found</h2>
          <p className="text-gray-500">
            The product you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:underline"
      >
        &larr; Back
      </button>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Product Image */}
        <div className="rounded border p-4">
          <div className="flex aspect-square items-center justify-center rounded bg-gray-100">
            {product.productImage ? (
              <img
                src={product.productImage}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <div className="text-5xl">📦</div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div className="rounded border p-4">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            {/* <p className="text-gray-500">{product.saltName}</p> */}
            {/* <p className="my-1 font-medium" >1 Stripe of 20 Tablet</p> */}
            {/* <span
              className={`mt-2 inline-block rounded px-2 py-1 text-sm ${
                product.status === "Available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.status}
            </span> */}
            <h1 className="text-4xl my-5" >₹{product?.batches[0]?.ptr ?? 0}</h1>
            {/* whatsapp buttonn */}
             <div className="flex w-full justify-start my-5">
            <a href="https://wa.link/oprl2e">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#12a701] px-5 py-2 dark:border">
                <span className="text-sm font-medium text-white dark:text-white">
                  Order now on Whatsapp
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
                    {" "}
                    <title>Whatsapp-color</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-700.000000, -360.000000)"
                        fill="#ffffff"
                      >
                        {" "}
                        <path
                          d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                          id="Whatsapp"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </button>
            </a>
          </div>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <div className="mt-4 space-x-2 flex items-center justify-between">
              <div className="flex items-center" >
                <span className="inline-block rounded border px-2 py-1 text-sm mr-3">
                  {product.category}
                </span>
                <span className="inline-block rounded border px-2 py-1 text-sm">
                  {product.dosageType}
                </span>
              </div>
              <span
                className={`mt-2 inline-block rounded px-2 py-1 text-sm ${product.status === "Available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                  }`}
              >
                {product.status}
              </span>
            </div>
          </div>

          {/* <div className="rounded border p-4">
            <h3 className="mb-2 text-lg font-semibold">Pricing Details</h3>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">MRP:</span>
                <span className="font-medium">₹{product.amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">PTR:</span>
                <span className="font-medium">₹{product.ptr}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Margin:</span>
                <span className="font-medium">{product.marginPercent}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tax Rate:</span>
                <span className="font-medium">{product.taxRate}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Available Quantity:</span>
                <span className="font-medium">{product.quantity} units</span>
              </div>
            </div>
          </div> */}

          {/* <div className="border rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
            <div className="space-y-1 text-sm">
              <div>Batch Number: <span className="font-medium">{product.batchNumber}</span></div>
              <div>HSN Code: <span className="font-medium">{product.hsnCode}</span></div>
              <div>Location: <span className="font-medium">{product.location}</span></div>
              <div>Expiry Date: <span className="font-medium">{formatDate(product.expireAt)}</span></div>
              {product.distributorName && <div>Distributor: <span className="font-medium">{product.distributorName}</span></div>}
              {product.distributorDiscount && <div>Distributor Discount: <span className="font-medium">{product.distributorDiscount}</span></div>}
              {product.freeProduct && <div>Free Product: <span className="font-medium">{product.freeProduct}</span></div>}
              {product.dueDate && <div>Due Date: <span className="font-medium">{formatDate(product.dueDate)}</span></div>}
              {product.createdAt && <div>Created: <span className="font-medium">{formatDate(product.createdAt)}</span></div>}
            </div>
          </div> */}

         
        </div>
      </div>
    </div >
  );
}
