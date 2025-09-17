export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "review-service" });
  });

  // Review-specific endpoints
  app.post("/review/add", (req, res) => {
    const { productId, userId, rating, comment } = req.body;
    res.json({ message: `Review added for product ${productId} by user ${userId}`, rating, comment });
  });

  app.get("/review/:productId", (req, res) => {
    const { productId } = req.params;
    res.json({
      productId,
      reviews: [
        { userId: 1, rating: 5, comment: "Excellent product!" },
        { userId: 2, rating: 4, comment: "Very good, minor issues." }
      ]
    });
  });
}
