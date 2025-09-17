# review-service
# review-service  The **review-service** manages product reviews.  ## Endpoints - `GET /health` — service status - `POST /review/add` — add a product review (sample) - `GET /review/:productId` — get all reviews for a product (sample)  ## Tracing This service reports telemetry to the tracing-service using the URL in the `endpoints` file.
