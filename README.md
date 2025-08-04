# Price List App

A React + TypeScript + Vite application with automated deployment via GitHub Actions.

## Features

- React 19 with TypeScript
- Vite for fast development and building
- Automatic deployment to Vercel via GitHub Actions
- Responsive design with modern CSS

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project automatically deploys to GitHub Pages when code is pushed to the main branch using GitHub Actions.

### Setup GitHub Pages Deployment

1. **Enable GitHub Pages:**
   - Go to your repository → Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Deployment Workflow:**
   - Automatically deploys when pushing to `main` branch
   - Can also be triggered manually from the Actions tab

The workflow will:
- ✅ Install dependencies
- ✅ Build the project
- ✅ Deploy to GitHub Pages
- 🔄 Site will be available at: `https://yourusername.github.io/price-list/`

### Local Development vs Production

- **Local**: Runs on `http://localhost:8888`
- **Production**: Deployed to `https://yourusername.github.io/price-list/`

The base path is automatically configured for GitHub Pages deployment.

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── data/          # Static data
│   ├── styles/        # CSS files
│   └── main.tsx       # App entry point
├── public/            # Static assets
├── .github/workflows/ # GitHub Actions
└── vite.config.ts    # Vite configuration
```
