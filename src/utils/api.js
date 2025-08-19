function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        title: "Some news article",
        url: "https://example.com/article1",
        imageUrl: "https://via.placeholder.com/400x272",
        description: "A fake news article for testing.",
        source: "Fake Source",
        publishedAt: "2025-08-16T12:00:00Z",
      },
      {
        _id: "65f7371e7bce9e7d331b11a0",
        title: "Another news article",
        url: "https://example.com/article2",
        imageUrl: "https://via.placeholder.com/400x272",
        description: "Another fake news article.",
        source: "Another Source",
        publishedAt: "2025-08-15T10:00:00Z",
      },
    ])
  );
}

export function saveArticle(article) {
  // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      url: article.url,
      title: article.title,
      imageUrl: article.imageUrl,
      description: article.description,
      source: article.source,
      publishedAt: article.publishedAt,
    });
  });
}

export function deleteArticle(articleId) {
  return new Promise((resolve) => {
    resolve({ message: "Article deleted", _id: articleId });
  });
}

export { checkResponse };
