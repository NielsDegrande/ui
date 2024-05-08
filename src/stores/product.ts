import { create } from "zustand";

import { Product } from "src/api/data-contracts";

export interface ProductState {
  product: Product | null;
  setProduct: (product: Product) => void;
  removeProduct: () => void;
}

/**
 * Represents the product state.
 */
export const useProductStore = create<ProductState>((set) => ({
  /**
   * The current product.
   */
  product: null,

  /**
   * Sets the current product.
   * @param product - The product to set.
   */
  setProduct: (product: Product) => {
    set({ product: product });
  },

  /**
   * Removes the current product.
   */
  removeProduct: () => {
    set({ product: null });
  },
}));
