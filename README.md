# Lilla Björn

This is a simple website for the **Lilla Björn** project. It is built with [Next.js](https://nextjs.org) so that new pages can easily be added.

## Development

1. Install Node.js (v20 or later).
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## Production

Build the optimized production version and start it:

```bash
npm run build
npm start
```

## Testing
Run the Jest test suite:
```bash
npm test
```

## Docker

A `Dockerfile` is provided to run the site in a container. Build and run:

```bash
docker build -t lillabjorn .
 docker run -p 3000:3000 lillabjorn
```

The site will be available at `http://localhost:3000`.

## Adding Pages

Create files inside the `pages/` directory. Each file becomes a route. For example, `pages/about.js` is available at `/about`.
An `/impressum` page is also included with legal details.

