/**
 * Capture all query keys.
 */
export const QueryKey = {
  products: ["products"] as const,
  product: (productId: number): [string, number] => ["product", productId],
};
