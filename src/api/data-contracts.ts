/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Feedback
 * DTO to represent a feedback.
 *
 * :param feedback_message: Feedback message.
 * :param url_path: Path to the page on which the feedback was submitted.
 */
export interface Feedback {
  /** Feedback Message */
  feedback_message: string;
  /** Url Path */
  url_path: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/**
 * Product
 * DTO to represent a product.
 *
 * :param product_id: Product ID.
 * :param product_name: Name of the product.
 * :param color: Product color.
 * :param price: Product price.
 */
export interface Product {
  /** Product Id */
  product_id?: number | null;
  /** Product Name */
  product_name: string;
  /** Color */
  color: string;
  /**
   * Price
   * @min 0
   */
  price: number;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}
