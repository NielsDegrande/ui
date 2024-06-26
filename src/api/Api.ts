/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Feedback, HTTPValidationError, Product } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get the root of the API.
   *
   * @tags common
   * @name ApiRootApiGet
   * @summary Api Root
   * @request GET:/api
   * @secure
   */
  apiRootApiGet = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get the root of the API.
   *
   * @tags common
   * @name ApiRootApiGet2
   * @summary Api Root
   * @request GET:/api/
   * @originalName apiRootApiGet
   * @duplicate
   * @secure
   */
  apiRootApiGet2 = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Authenticate.
   *
   * @tags common
   * @name AuthenticateApiAuthGet
   * @summary Authenticate
   * @request GET:/api/auth
   * @secure
   */
  authenticateApiAuthGet = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/auth`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Check if the database is responding.
   *
   * @tags common
   * @name CheckDbApiDbGet
   * @summary Check Db
   * @request GET:/api/db
   * @secure
   */
  checkDbApiDbGet = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/db`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Generate temporary download links to files on a set bucket. :param file_path: Path to file to download. :return: File content.
   *
   * @tags common
   * @name DownloadFileApiFileGet
   * @summary Download File
   * @request GET:/api/file
   * @secure
   */
  downloadFileApiFileGet = (
    query: {
      /** File Path */
      file_path: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<string, HTTPValidationError>({
      path: `/api/file`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Send feedback. :param user: user. :param feedback: Feedback to send.
   *
   * @tags common
   * @name CreateFeedbackApiFeedbackPost
   * @summary Create Feedback
   * @request POST:/api/feedback
   * @secure
   */
  createFeedbackApiFeedbackPost = (
    data: Feedback,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/api/feedback`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get all products. :return: All products.
   *
   * @tags sample
   * @name GetProductsApiSampleProductGet
   * @summary Get Products
   * @request GET:/api/sample/product
   * @secure
   */
  getProductsApiSampleProductGet = (params: RequestParams = {}) =>
    this.request<Product[], any>({
      path: `/api/sample/product`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create a product. :param product: Product to create. :return: Newly created product.
   *
   * @tags sample
   * @name CreateProductApiSampleProductPost
   * @summary Create Product
   * @request POST:/api/sample/product
   * @secure
   */
  createProductApiSampleProductPost = (
    data: Product,
    params: RequestParams = {},
  ) =>
    this.request<Product, HTTPValidationError>({
      path: `/api/sample/product`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get a single product. :param product_id: ID of the product to retrieve. :return: Product matching the provided ID.
   *
   * @tags sample
   * @name GetProductApiSampleProductProductIdGet
   * @summary Get Product
   * @request GET:/api/sample/product/{product_id}
   * @secure
   */
  getProductApiSampleProductProductIdGet = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<Product, HTTPValidationError>({
      path: `/api/sample/product/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update a product. :param product: Product to update. :return: Updated product.
   *
   * @tags sample
   * @name UpdateProductApiSampleProductProductIdPut
   * @summary Update Product
   * @request PUT:/api/sample/product/{product_id}
   * @secure
   */
  updateProductApiSampleProductProductIdPut = (
    productId: string,
    data: Product,
    params: RequestParams = {},
  ) =>
    this.request<Product, HTTPValidationError>({
      path: `/api/sample/product/${productId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a product. :param product_id: ID of the product to delete.
   *
   * @tags sample
   * @name DeleteProductApiSampleProductProductIdDelete
   * @summary Delete Product
   * @request DELETE:/api/sample/product/{product_id}
   * @secure
   */
  deleteProductApiSampleProductProductIdDelete = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/api/sample/product/${productId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
