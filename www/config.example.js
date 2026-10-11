// Copy this file to config.js and fill in your own key for local testing.
// config.js is gitignored — never commit real credentials.
// In the GitHub Actions build, this file is generated automatically from
// the YOUTUBE_API_KEY repository secret (see .github/workflows/build-apk.yml).
// Spotify credentials are NOT needed here — the app reads a token refreshed
// server-side by .github/workflows/refresh-spotify-token.yml.
window.APP_CONFIG = {
  YOUTUBE_API_KEY: 'tu_api_key_de_youtube'
};
