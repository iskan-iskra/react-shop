import { TiProduct } from "@types";
import HttpClient from "./core";

const ENDPOINT = "products/";

const getProductsList = (): Promise<TiProduct[]> =>
  HttpClient.get(`${ENDPOINT}`).then((res) => res.data);

const getProductsCategoryList = (): Promise<TiProduct["category"][]> =>
  HttpClient.get(`${ENDPOINT}categories/`).then((res) => res.data);

const getProductsByCategory = (
  categoryName: TiProduct["category"]
): Promise<TiProduct[]> =>
  HttpClient.get(`${ENDPOINT}category/${categoryName}`).then((res) => res.data);

export default {
  getProductsList,
  getProductsCategoryList,
  getProductsByCategory,
};
