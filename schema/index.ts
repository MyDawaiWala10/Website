import * as z from 'zod'

export const ProductSchema = z.object({
  productId: z.string().min(1),
  productImage: z.string(),
  description: z.string().min(1),
  quantity: z.coerce
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Quantity should be at least 1" }),
  name: z.string().min(1, { message: "Name is required" }),
  category: z.enum(["Ayurvedic", "Charges", "Cosmetic", "Drug", "Generic", "Nutraceuticals", "OTC", "None"]),
  dosageType: z.enum(["Tablet", "Capsule", "Cream", "Syrup", "Drop", "Injection", "Powder", "Oint", "INH", "Soap", "Gel", "Rota Caps", "None"]),
  status: z.enum(["Available", "Not Available"]),
  expireAt: z.string({ required_error: "A date of expiry is required.", }),
  location: z.string({ required_error: "Location is required.", }),
  batchNumber: z.string({ required_error: "Batch Number is required.", }),
  createdAt: z.optional(z.string()),
  amount: z.coerce
    .number({
      required_error: "MRP is required",
      invalid_type_error: "MRP must be a number",
    })
    .positive()
    .min(1, { message: "MRP should be at least 1" }),
  ptr: z.coerce
    .number({
      required_error: "PTR is required",
      invalid_type_error: "PTR must be a number",
    })
    .positive()
    .min(1, { message: "PTR should be at least 1" }),
  marginPercent: z.coerce
    .number({
      required_error: "Margin Percent is required",
      invalid_type_error: "Margin Percent must be a number",
    })
    .min(1, { message: "Margin Percent should be at least 1" }),
  taxRate: z.string({required_error: 'Tax Rate is required'}),
  hsnCode: z.string().min(1, { message: "HSN Code is required" }),
  saltName: z.string().min(1, { message: "Salt Name is required" }),
  distributorName: z.string().optional(),
  distributorDiscount: z.string().optional(),
  freeProduct: z.string().optional(),
  dueDate: z.string().optional(),
});

export type ProductDataType = z.infer<typeof ProductSchema>