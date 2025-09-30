// src/mocks/handlers.js
import { HttpResponse, http } from "msw";

const API_URL = import.meta.env.VITE_API_URL as string;

export const handlers = [
  http.get(`${API_URL}/api/auth`, () => {
    return HttpResponse.json(
      {
        user_id: 0,
        username: "user",
        email: "",
      },
      { status: 200 },
    );
  }),
  http.get(`${API_URL}/api/sample/products`, () => {
    return HttpResponse.json(
      [
        {
          product_id: 0,
          product_name: "Product 1",
          color: "blue",
          price: 100,
        },
        {
          product_id: 2,
          product_name: "Product 2",
          color: "green",
          price: 200,
        },
        {
          product_id: 3,
          product_name: "Product 3",
          color: "red",
          price: 150,
        },
        {
          product_id: 4,
          product_name: "Product 4",
          color: "yellow",
          price: 175,
        },
        {
          product_id: 5,
          product_name: "Product 5",
          color: "purple",
          price: 225,
        },
        {
          product_id: 6,
          product_name: "Product 6",
          color: "orange",
          price: 130,
        },
        {
          product_id: 7,
          product_name: "Product 7",
          color: "pink",
          price: 190,
        },
        {
          product_id: 8,
          product_name: "Product 8",
          color: "brown",
          price: 160,
        },
        {
          product_id: 9,
          product_name: "Product 9",
          color: "gray",
          price: 140,
        },
        {
          product_id: 10,
          product_name: "Product 10",
          color: "black",
          price: 210,
        },
      ],
      { status: 200 },
    );
  }),
];
