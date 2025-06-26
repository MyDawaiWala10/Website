import { getAllProducts } from "@/actions/get-all-products";
import { useQuery } from "@tanstack/react-query";

export function useGetAllProducts () {
    return useQuery({
        queryKey: ["gatAllProducts"],
        queryFn: async () => await getAllProducts(),
        staleTime: 2 * 60 * 1000,
    })
}