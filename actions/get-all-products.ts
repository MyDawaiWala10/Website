import { ProductDataType } from "@/schema";
import { RequestInit } from "next/dist/server/web/spec-extension/request";
type Batch = {
    batchNumber: string;
    quantity: number;
    ptr: number;
    expireAt: string; // ISO date string (e.g. "2027-03-01")
    formattedExpireAt: string;
    amount:number
    mrp?:number
}
export type ProductType = {
  _id: string;
  productId: string;
  name: string;
  description: string;
  productImage: string;
  status: "Available" | "Not Available";
  category:
  | "Ayurvedic"
  | "Charges"
  | "Cosmetic"
  | "Drug"
  | "Generic"
  | "Nutraceuticals"
  | "OTC"
  | "None";
  dosageType: "Tablet" | "Capsule" | "Cream" | "Syrup" | "Drop" | "Injection" | "Powder" | "Oint" | "INH" | "Soap" | "None" | "Gel" | "Rota Caps";
  marginPercent: number;
  hsnCode: string;
  taxRate: string;
  saltName: string;
  location: string;
  batches:Batch[] ,
  totalQuantity: number;
  createdAt: string; 
  updatedAt: string; 
  nearestExpiry: string;
};

type productType = {
    status: boolean;
    count: number;
    data: ProductType[];
};

export const getAllProducts = async (): Promise<productType> => {
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
        cache: "no-store",
    };

    try {
        const response = await fetch(`https://backend-2ske.onrender.com/product/getallproducts`, options);
        const data: productType = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return { status: false, count: 0, data: [] as ProductType[] }; 
    }
};
