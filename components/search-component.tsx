import React, { useState, useEffect, useRef } from "react";
import { Search, X, Package } from "lucide-react";
import { useGetAllProducts } from "@/data/get-all-product";
import { ProductDataType } from "@/schema";
import { useRouter } from "next/navigation";

interface SearchComponentProps {
  placeholder?: string;
  className?: string;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder = "Search products...",
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductDataType[]>(
    [],
  );
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { data: products = [], isLoading, error } = useGetAllProducts();

  // Filter products based on search query
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProducts([]);
      setIsOpen(false);
      return;
    }

    const filtered = products.filter((product) => {
      const searchTerm = query.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.saltName.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.dosageType.toLowerCase().includes(searchTerm) ||
        product.batchNumber.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredProducts(filtered.slice(0, 8)); // Limit to 8 suggestions
    setIsOpen(filtered.length > 0);
  }, [query, products]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProductSelect = (product: ProductDataType) => {
    setQuery(product.name);
    setIsOpen(false);
    router.push(`/product/${product.productId}`);
  };

  const clearSearch = () => {
    setQuery("");
    setFilteredProducts([]);
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      handleProductSelect(filteredProducts[0]);
    }
  };

  return (
    <div ref={searchRef} className={`relative w-full max-w-3xl ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="w-full">
          <div className={`w-full mx-auto lg:w-full border-2  rounded-full`}>
            <div className={` relative flex h-10 lg:w-full items-center overflow-hidden rounded-full bg-white focus-within:shadow-lg`}>
              <div className={` grid h-full w-8 ml-2 place-items-center text-gray-300`}>
                <Search />
              </div>

              <input
                className={`w-full peer h-full lg:w-full lg:block pr-2 text-sm text-gray-700 outline-none px-8`}
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query && setIsOpen(true)}
              />
              {query && (
                <button
                  type="button"
                  // variant="ghost"
                  // size="sm"
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 p-0 hover:bg-transparent"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </form>

      {/* Search Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute top-full z-50 mt-1 w-full border shadow-lg">
          <div className="p-0">
            {isLoading ? (
              <div className="text-muted-foreground p-4 text-center text-sm">
                Searching...
              </div>
            ) : error ? (
              <div className="text-destructive p-4 text-center text-sm">
                Error loading products
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-muted-foreground p-4 text-center text-sm">
                No products found
              </div>
            ) : (
              <div className="max-h-80 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <div
                    key={product.productId}
                    onClick={() => handleProductSelect(product)}
                    className="border-border hover:bg-muted/50 cursor-pointer border-b p-3 transition-colors last:border-b-0 bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-md">
                        {product.productImage ? (
                          <img
                            src={product.productImage}
                            alt={product.name}
                            className="h-8 w-8 rounded object-cover"
                          />
                        ) : (
                          <Package className="text-black h-5 w-5" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="truncate text text-black font-medium">
                            {product.name}
                          </h4>
                          <span
                            // variant={product.status === 'Available' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {product.status}
                          </span>
                        </div>
                        <p className="text-slate-500 truncate text-xs">
                          {product.description}
                        </p>
                        <div className="text-slate-500 mt-1 flex items-center gap-2 text-xs">
                          <span>{product.category}</span>
                          <span>•</span>
                          <span>{product.dosageType}</span>
                          <span>•</span>
                          <span>₹{product.amount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
