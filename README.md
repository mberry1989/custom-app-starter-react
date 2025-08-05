# Kontent.ai Custom App Starter (React)

[![Contributors](https://img.shields.io/github/contributors/kontent-ai/custom-app-starter-react.svg)](https://github.com/kontent-ai/custom-app-starter-react/graphs/contributors)
[![MIT License](https://img.shields.io/github/license/kontent-ai/custom-app-starter-react.svg)](https://github.com/kontent-ai/custom-app-starter-react/blob/main/LICENSE.md)
[![Discord](https://img.shields.io/discord/821885171984891914?color=%237289DA&label=Kontent.ai%20Discord&logo=discord)](https://discord.gg/SKCxwPtevJ)

A React starter template for building [Kontent.ai Custom Apps](https://kontent.ai/learn/docs/developing-apps/custom-apps). Get your custom app up and running in minutes.

## 🚀 Quick Start

### 1. Setup the Project

```bash
# Use this template or clone
git clone https://github.com/mberry1989/custom-app-starter-react.git
cd custom-app-starter-react

# Install dependencies
npm install

# Start development
npm run dev
```

> **Note:** Kontent.ai requires HTTPS for custom apps. See the [Local Development](#-local-development) section for HTTPS setup options.

### 2. Configure in Kontent.ai

1. Go to **Environment settings** → **Custom apps** in your Kontent.ai project
2. Create a new custom app
3. Set the **App URL** to your development server (must be HTTPS)
4. Add optional **JSON configuration** if needed
5. Save and add the app to your navigation

### 3. Start Building

Edit `src/IntegrationApp.tsx` to build your custom app. The starter provides:

- ✅ **Complete SDK integration** - Ready to use Kontent.ai data
- ✅ **TypeScript support** - Fully typed for great DX  
- ✅ **Error handling** - Helpful messages when not in iframe
- ✅ **Kontent.ai styling** - Matches the CMS interface
- ✅ **Development setup** - HTTPS and hot reload ready

## 🎣 Available Hooks

Access Kontent.ai data with these React hooks:

```typescript
import { useConfig, useEnvironmentId, useUserInfo, useUserRoles } from './hooks';

function MyComponent() {
  const config = useConfig();           // Your app configuration
  const environmentId = useEnvironmentId(); // Current environment ID
  const userInfo = useUserInfo();       // Current user details
  const userRoles = useUserRoles();     // User permissions
  
  return <div>Environment: {environmentId}</div>;
}
```

## ⚙️ Configuration

Pass configuration to your app via JSON in the Kontent.ai interface:

```json
{
  "apiUrl": "https://api.example.com",
  "theme": "light",
  "maxItems": 100
}
```

Access it in your components:

```typescript
function MyComponent() {
  const config = useConfig();
  const apiUrl = config?.apiUrl as string;
  
  return <div>API: {apiUrl}</div>;
}
```

## 🔧 Local Development

Kontent.ai requires HTTPS for custom apps. Here are your options:

### Option 1: mkcert (Recommended)

```bash
# Install mkcert (one-time setup)
# Windows: choco install mkcert
# macOS: brew install mkcert  
# Linux: see https://github.com/FiloSottile/mkcert#installation

# Generate local certificates
mkcert -install
npm run certs

# Start with HTTPS
npm run dev
```

Your app will be available at `https://localhost:3000`

### Option 2: Other HTTPS Solutions

- **Cloudflare Tunnel**: `cloudflared tunnel --url http://localhost:3000`
- **ngrok**: `ngrok http 3000` (use the HTTPS URL)
- **Reverse proxy**: nginx, Caddy, or similar with SSL termination
- **IDE extensions**: Some editors provide HTTPS dev servers

Choose the approach that works best for your development workflow.

## ✨ Code Quality

This project uses the official [Kontent.ai Biome configuration](https://github.com/kontent-ai/biome-config) for consistent formatting and linting:

```bash
# Check code quality
npm run lint

# Auto-fix issues  
npm run lint:fix

# Format code
npm run format
```

## 📁 Project Structure

```
src/
├── components/          # React components
├── hooks/              # Kontent.ai data hooks  
├── types.ts            # TypeScript definitions
├── App.tsx             # Root component with error handling
├── IntegrationApp.tsx  # 👈 Build your app here
└── main.tsx            # Application entry point
```

## 🚀 Deploy Your App

1. **Build the app:**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting platform** (Vercel, Netlify, etc.)

3. **Update the App URL** in Kontent.ai to your deployed URL

4. **Test the integration** - Your app should load within Kontent.ai

## 🔗 Learn More

- [Custom Apps Documentation](https://kontent.ai/learn/docs/custom-apps)
- [Custom App SDK](https://github.com/kontent-ai/custom-app-sdk-js)
- [Kontent.ai Develop Section](https://kontent.ai/learn/develop/overview)

---

**Ready to build?** Start editing `src/IntegrationApp.tsx` and create something amazing! 🎉