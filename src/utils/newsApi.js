import { APIkey, newsApiBaseUrl } from "./constants";

export async function fetchNewsArticles(query) {
  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(query)}&apiKey=${APIkey}&pageSize=100&language=en`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}