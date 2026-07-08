# The Birdsong Method

Marketing site + AI vocal analyzer for **The Birdsong Method**, vocal training by SWRV Birdsong.

## Pages

- `index.html` — landing page: about, curriculum, programs/pricing, testimonials.
- `vocal-analyzer.html` — 60-second in-browser vocal analysis. Uses the Web Audio API
  (microphone → AnalyserNode) to score pitch stability, breath support, vocal range,
  resonance, and dynamics, then recommends a program tier. All analysis runs client-side;
  no audio ever leaves the browser. The latest result is kept in `localStorage` so
  returning visitors can challenge their score.

## Current status

- **Payments:** the analyzer's $1 paywall is in **test mode** — the "Try It Free · Test Mode"
  button bypasses payment. Replace it with a Stripe (or similar) payment link that redirects
  back to `vocal-analyzer.html?paid=true`.
- **Accounts:** there is no signup/login. Enrollment is via `mailto:` links to
  swrvbirdsong@gmail.com.

## Development

Plain static HTML — no build step, no dependencies. Preview locally:

```sh
python3 -m http.server 8080
```

Note: the analyzer needs a secure context (`localhost` or HTTPS) for microphone access.

## Deploy

Static deploy (Cloudflare Pages style). `_headers` sets security headers and caching.
No build command required.
