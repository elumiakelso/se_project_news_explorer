export const newsApiBaseUrl = process.env.NODE_ENV === "production"
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

export const APIkey = "5e533df9e59b4614834ca806a3d1b895";