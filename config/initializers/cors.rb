# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:3000", "68.97.193.164", "gambit-backend.rimondevs.com", "gambit-chess.vercel.app", "gambit-rimoomey.vercel.app", "gambit.rimondevs.com"

    resource "*",
      headers: :any,
      credentials: true,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

# Rails.application.config.hosts << "gambit.rimondevs.com"
# Rails.application.config.hosts << "gambit-backend-rimondevs.com"
