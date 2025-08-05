# Getting Started with Your Custom App

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up HTTPS certificates (one-time):**
   ```bash
   # Install mkcert if not already installed
   # Windows: choco install mkcert
   # macOS: brew install mkcert
   
   mkcert -install
   npm run certs
   ```
   This creates `localhost.pem` and `localhost-key.pem` files in your project root.

3. **Start development:**
   ```bash
   npm run dev
   ```
   > Runs at `https://localhost:3000` with trusted certificates

4. **Replace the template:**
   - Edit `src/IntegrationApp.tsx` 
   - Replace the example content with your app logic

5. **Build for production:**
   ```bash
   npm run build
   ```

## Example Configuration

Configure your custom app in Kontent.ai with JSON like this:

```json
{
  "title": "My Custom App",
  "description": "What my app does",
  "settings": {
    "apiKey": "your-api-key",
    "theme": "light"
  }
}
```

## What's Included

- ✅ Custom App SDK integration
- ✅ React hooks for accessing Kontent.ai data
- ✅ TypeScript support
- ✅ Kontent.ai compatible styling
- ✅ Development server with hot reload
- ✅ Production build configuration

## Next Steps

1. **Customize** `src/IntegrationApp.tsx` with your app
2. **Update** configuration types if needed
3. **Deploy** the built app to your hosting platform
4. **Configure** the app URL in Kontent.ai