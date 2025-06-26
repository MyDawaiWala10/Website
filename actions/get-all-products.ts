// "use server"

import { ProductDataType } from "@/schema";
import { RequestInit } from "next/dist/server/web/spec-extension/request";

const base_url = process.env.BACKEND_BASE_URL

// https://backend-2ske.onrender.com


export const getAllProducts = async (): Promise<ProductDataType[]> => {
  // 'use server'
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
        cache: "no-store",
    };

    try {
        const response = await fetch(`https://backend-2ske.onrender.com/product/getallproducts`, options);
        // const response = await fetch(`${base_url}/product/getallproducts`, options);
        const data = response.json()
        // console.log("fetchinggg", data, response.status)
        return data;
    } catch (err) {
        console.error(err);
        return [] as ProductDataType[]; // Need fixing here maybe, idk, error returning or something maybe
}
};