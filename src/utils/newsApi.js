import { checkResponse } from "../utils/api.js";

import { APIkey, newsApiBaseUrl } from "./constants";

const getDateRange = () => {
  const today = new Date();
  const sevenDaysAgo = new Date();

  // Set the date to seven days ago
  sevenDaysAgo.setDate(today.getDate() - 7);

  // Format the dates to YYYY-MM-DD for the API
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  return {
    from: formatDate(sevenDaysAgo),
    to: formatDate(today)
  };
};

export const fetchNewsArticles = (query) => {
  const { from, to } = getDateRange();

  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(
    query
  )}&apiKey=${APIkey}&pageSize=100&language=en&from=${from}&to=${to}`;
  return fetch(url).then((res) => checkResponse(res));
};
