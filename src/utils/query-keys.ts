/**
 * Capture all query keys.
 */
export const QueryKey = {
  products: ["products"],
  product: (productId: number) => ["product", productId],
};
