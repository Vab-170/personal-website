# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS, showcasing my projects, skills, and experience as a Software Engineer.

## 🚀 Live Demo

[View Live Website](https://vabgupta.pages.dev)

## 📋 Features

- **Modern React Application** - Built with React 19 and modern hooks
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Smooth Animations** - Interactive animations using Framer Motion
- **Type Animation Effects** - Dynamic typing animations for engaging UX
- **3D Card Components** - Eye-catching 3D hover effects
- **Projects Showcase** - Dedicated section for project portfolio
- **Contact Integration** - Direct links to social media and email
- **Resume/CV Download** - Easy access to downloadable resume
- **Security Hardened** - Comprehensive security headers (CSP, HSTS, etc.)

## 🔒 Security Features

- **Content Security Policy (CSP)** - Prevents XSS and data injection attacks
- **X-Content-Type-Options** - Prevents MIME type sniffing
- **X-Frame-Options** - Protects against clickjacking
- **Referrer-Policy** - Controls referrer information
- **Permissions-Policy** - Restricts browser features
- **Subresource Integrity (SRI)** - Verifies external resource integrity

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: TailwindCSS 4.x
- **Animations**: Framer Motion, React Type Animation
- **Icons**: React Icons, Lucide React
- **Build Tool**: Vite 6.x
- **Code Quality**: ESLint
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vab-170/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run lint:fix` - Automatically fix ESLint issues


## 🚀 Deployment

### GitHub Pages (Automated)

The project uses **GitHub Pages** for automatic deployment. Every push to the `main` branch automatically triggers a build and deployment using GitHub Actions.

**How it works:**
- ✅ **Push to main branch** → Automatic deployment to GitHub Pages
- ✅ **No manual commands** needed
- ✅ **Build errors** are caught automatically
- ✅ **Always up-to-date** with your latest code
- ✅ **Global CDN** with edge caching

**Build Settings:**
- **Framework**: Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`

**GitHub Actions Workflow:**
1. A workflow file (e.g., `.github/workflows/deploy.yml`) is used to build and deploy the site to the `gh-pages` branch.
2. GitHub Pages is configured to serve from the `/gh-pages` branch (or `/docs` folder if preferred).

**To set up:**
1. Fork or clone this repository.
2. Ensure your repository's Settings > Pages is set to deploy from the `gh-pages` branch.
3. The workflow will handle deployment automatically on push to `main`.

### Development Workflow

1. **Make changes locally**
   ```bash
   npm run dev          # Test changes
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main  # Triggers automatic deployment
   ```

3. **Live in ~2-3 minutes** 🎉

## 📁 Project Structure

```
personal-website/
├── public/
│   ├── Vab_s_CV.pdf
│   ├── 404.html
│   └── _headers          # (Optional, not used for GitHub Pages)
├── src/
│   ├── assets/
│   │   └── profile.jpeg
│   ├── Components/
│   │   ├── BackgroundEffects.jsx
│   │   └── UIComponents.jsx
│   ├── data/
│   │   └── portfolioData.js  # Centralized portfolio data
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── ProjectPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Customization

### Update Personal Information

All portfolio data is centralized in `src/data/portfolioData.js`:

1. **Personal Info**: Name, location, roles, about text
2. **Social Links**: GitHub, LinkedIn, Email
3. **Stats**: Projects count, technologies, experience
4. **Tech Stack**: Skills organized by category (Languages, Frontend, Backend, DevOps, Workflow)
5. **Projects**: Portfolio projects with descriptions and links

### Update Assets

1. **Profile Image**: Replace `src/assets/profile.jpeg`
2. **Resume/CV**: Update `public/Vab_s_CV.pdf`
3. **Favicon**: Replace `public/favicon.ico`

### Configuration Files

- **Vite Config**: `vite.config.js` - Build and dev server settings
- **ESLint**: `eslint.config.js` - Code quality rules
- **Package.json**: Dependencies and scripts

## 🎨 Styling & Theming

The website uses a custom gradient theme with:
- **Primary Colors**: Blue variations (#1e3a8a, #1e40af)
- **Accent Colors**: Yellow (#fbbf24), Orange (#fb923c), Green (#4ade80)
- **Gradients**: Custom CSS gradients defined in `App.css`

## 📈 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Asset Optimization**: Images and icons optimized
- **Lazy Loading**: Components loaded as needed
- **Minimal Bundle**: Tree shaking enabled

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Deployment Issues**
   - Check GitHub Actions workflow logs for build errors
   - Ensure all assets are in the `public` directory
   - Verify `vite.config.js` has the correct `base` for GitHub Pages (e.g., `/your-repo-name/`)

3. **Development Server Issues**
   ```bash
   # Check if port 5173 is available
   npm run dev -- --port 3000
   ```

4. **Security Headers Not Working**
   - GitHub Pages does not support custom HTTP headers like Cloudflare Pages
   - Security headers must be set at the CDN or reverse proxy level if needed
   - Analytics and privacy remain supported via Cloudflare Web Analytics (see index.html)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Vaibhav Gupta**
- Email: vab.gupta@mail.utoronto.ca
- LinkedIn: [vab-gupta17](https://www.linkedin.com/in/vab-gupta17/)
- GitHub: [Vab-170](https://github.com/Vab-170)

---

⭐ **If you found this project helpful, please give it a star!**