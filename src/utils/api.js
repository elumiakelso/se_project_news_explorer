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
        imageUrl: "https://placehold.co/400x272",
        description: "A fake news article for testing.",
        source: "Fake Source",
        publishedAt: "2025-08-16T12:00:00Z",
        keyword: "test",
      },
      {
        _id: "65f7371e7bce9e7d331b11a0",
        title: "Another news article",
        url: "https://example.com/article2",
        imageUrl: "https://placehold.co/400x272",
        description: "Another fake news article.",
        source: "Another Source",
        publishedAt: "2025-08-15T10:00:00Z",
        keyword: "test 2",
      },
    ])
  );
}

export function saveArticle(article) {
  // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      _id: article._id,
      url: article.url,
      title: article.title,
      imageUrl: article.imageUrl || article.urlToImage || article.image,
      description: article.description,
      source: article.source,
      publishedAt: article.publishedAt,
      keyword: article.keyword,
    });
  });
}

export function deleteArticle(articleId) {
  return new Promise((resolve) => {
    resolve({ message: "Article deleted", _id: articleId });
  });
}

export { checkResponse };
