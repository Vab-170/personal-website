# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS, showcasing my projects, skills, and experience as a Software Engineer.

## 🚀 Live Demo

[View Live Website](https://vab-170.github.io/personal-website/)

## 📋 Features

- **Modern React Application** - Built with React 19 and modern hooks
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Smooth Animations** - Interactive animations using Framer Motion
- **Type Animation Effects** - Dynamic typing animations for engaging UX
- **3D Card Components** - Eye-catching 3D hover effects
- **Projects Showcase** - Dedicated section for project portfolio
- **Contact Integration** - Direct links to social media and email
- **Resume/CV Download** - Easy access to downloadable resume

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: TailwindCSS 4.x
- **Animations**: Framer Motion, React Type Animation
- **Icons**: React Icons, FontAwesome
- **Build Tool**: Vite 6.x
- **Code Quality**: ESLint
- **Deployment**: GitHub Pages (automated)

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
- `npm run deploy` - Manual deploy to GitHub Pages (backup method)

## 🚀 Deployment

### Automated GitHub Pages Deployment

The project uses **GitHub Actions** for automatic deployment to GitHub Pages. Every push to the `main` branch automatically triggers a build and deployment.

**How it works:**
- ✅ **Push to main branch** → Automatic deployment
- ✅ **No manual commands** needed
- ✅ **Build errors** are caught automatically
- ✅ **Always up-to-date** with your latest code

**Deployment status:**
Check the "Actions" tab in your GitHub repository to see deployment status and logs.

### Manual Deployment (Backup)

If needed, you can still deploy manually:

```bash
npm run deploy
```

**First-time setup (already configured):**
1. GitHub Pages is enabled in repository settings
2. GitHub Actions workflow is configured
3. Automatic deployment on every push to main

**Note:** If you fork this repository, you'll need to:
1. Go to your repository **Settings** → **Pages**
2. Set **Source** to "Deploy from a branch"
3. Select **Branch**: `gh-pages` and **Folder**: `/ (root)`
4. GitHub Actions will handle the rest automatically

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
│   ├── Resume.pdf
│   ├── Vab_s_CV.pdf
│   └── Vab_s_Resume.pdf
├── src/
│   ├── assets/
│   │   └── profile.jpeg
│   ├── Components/
│   │   ├── Animation.jsx
│   │   └── AnimationConstants.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProjectPage.jsx
│   │   └── holder.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── config.js
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

1. **Profile Image**: Replace `src/assets/profile.jpeg`
2. **Resume/CV**: Update files in `public/` directory
3. **Contact Links**: Modify `socialLinks` array in `HomePage.jsx`
4. **Tech Stack**: Update `techStack` array in `HomePage.jsx`

### Modify Content

- **About Section**: Edit the description in `HomePage.jsx`
- **Projects**: Add your projects in `ProjectPage.jsx`
- **Styling**: Customize colors and animations in component files

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
   - Ensure `base: '/personal-website/'` in `vite.config.js` for GitHub Pages
   - Check that all assets are in the `public` directory
   - Check GitHub Actions logs if automated deployment fails

3. **Development Server Issues**
   ```bash
   # Check if port 5173 is available
   npm run dev -- --port 3000
   ```

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