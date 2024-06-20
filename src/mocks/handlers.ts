// src/mocks/handlers.js
import { HttpResponse, http } from "msw";

const API_URL = import.meta.env.VITE_API_URL as string;

export const handlers = [
  http.get(`${API_URL}/api/sample/product`, () => {
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
      ],
      { status: 200 }
    );
  }),
  http.get(`${API_URL}/api/auth`, () => {
    return HttpResponse.json(
      {
        user_id: 0,
        username: "user",
        email: "",
      },
      { status: 200 }
    );
  }),
];
