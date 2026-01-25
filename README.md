# 🎨 Modern Portfolio Website - React + TypeScript

> Minimalist, modern, dan fully interactive portfolio website dengan CRUD features dan smooth animations.

![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![React](https://img.shields.io/badge/react-18.3-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.9-blue)
![Tailwind](https://img.shields.io/badge/tailwind-4.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Features

✨ **Modern Design**
- Minimalist UI dengan banyak whitespace
- Dark mode 
- Responsive design (mobile, tablet, desktop)
- Smooth animations dan transitions

🛠️ **CRUD Management**
- Add, Edit, Delete experiences
- Add, Edit, Delete projects
- Data persists di browser (localStorage)
- Form validation

🎬 **Interactive Animations**
- Fade, slide, scale animations
- Hover effects
- Staggered animations
- Scroll-triggered animations

📱 **Responsive**
- Mobile-first approach
- Tablet optimized
- Desktop optimized
- Touch-friendly

⚡ **Performance**
- Optimized build size (~300KB gzip)
- Fast loading times
- GPU-accelerated animations
- Code splitting ready

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio/portfolio-ts

# Install dependencies
npm install

# Start development server
npm run dev
```

Buka http://localhost:5174 di browser

### Build untuk Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── app/              # Main App component
├── sections/         # Page sections (Hero, About, Skills, etc)
├── components/       # Reusable components (Navbar, Cards, etc)
├── context/          # Global state (Portfolio Context)
├── hooks/            # Custom React hooks
├── utils/            # Utility functions & helpers
├── constants/        # Constants (skills data, etc)
├── data/             # Initial data (experiences, projects)
├── types/            # TypeScript interfaces
├── animations/       # Framer Motion variants
└── styles/           # Global styles
```

---

## 💡 How to Use

### Update Personal Information

1. **Hero Section** - Edit `src/sections/Hero.tsx`
2. **About Section** - Edit `src/sections/About.tsx`
3. **Skills** - Edit `src/constants/skillsData.ts`
4. **Experience** - Edit `src/data/experienceData.ts` or use CRUD UI
5. **Projects** - Edit `src/data/projectData.ts` or use CRUD UI
6. **Contact Info** - Edit `src/sections/Contact.tsx`

### Add New Experience

1. Go to Experience section
2. Click "+ Tambah Pengalaman"
3. Fill the form
4. Click "Simpan Pengalaman"
5. Data automatically saved to localStorage

### Add New Project

1. Go to Projects section
2. Click "+ Tambah Project"
3. Fill the form
4. Click "Simpan Project"
5. Check "Jadikan Featured?" untuk featured projects
6. Data automatically saved

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change this color
    600: '#0284c7',
    700: '#0369a1',
  }
}
```

---

## 🎨 Customization Guide

Lengkap customization guide ada di: [`CUSTOMIZATION_DEPLOYMENT.md`](CUSTOMIZATION_DEPLOYMENT.md)

Topics covered:
- Update personal info
- Customize colors & theme
- Update skills data
- Customize animations
- Add custom fonts
- Add Google Analytics
- Add favicon
- Update meta tags

---

## 📚 CRUD Documentation

Lengkap CRUD guide ada di: [`CRUD_GUIDE.md`](CRUD_GUIDE.md)

Topics covered:
- Data structure
- Context API usage
- Component implementation
- Complete CRUD examples
- Data persistence
- Form handling
- Validation examples
- Debugging tips

---

## 📖 Full Documentation

Lengkap documentation ada di: [`DOCUMENTATION.md`](DOCUMENTATION.md)

Topics covered:
- Project overview
- Folder structure
- Component documentation
- Animation variants
- Best practices
- Future enhancements
- Technology stack

---

## 🚀 Deployment

### Quick Deploy to Netlify

```bash
# 1. Push ke GitHub
git push origin main

# 2. Connect di Netlify
# - Build command: npm run build
# - Publish directory: dist
```

### Other Options

- **Vercel**: `vercel` (install CLI terlebih dahulu)
- **GitHub Pages**: `npm run deploy`
- **Traditional Hosting**: Upload `dist/` folder via FTP

[Lengkap deployment guide →](CUSTOMIZATION_DEPLOYMENT.md#-deployment-guide)

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 18.3.1 |
| Language | TypeScript | 5.9 |
| Styling | Tailwind CSS | 4.1 |
| Animations | Framer Motion | 12.27 |
| Build Tool | Vite | 7.3 |
| State | Context API | (built-in) |

---

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## 🎬 Sections Included

- **Hero**: Landing section dengan animations
- **About**: Personal bio dengan styling
- **Skills**: Tech stack showcase dengan categories
- **Experience**: Work experience dengan CRUD
- **Projects**: Project portfolio dengan featured badge
- **Contact**: Contact form dengan validation
- **Navbar**: Sticky navigation dengan active highlighting
- **Footer**: Footer dengan links

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # (Optional) Run linter
```

---

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

---

## ⚡ Performance Metrics

- Lighthouse Score: >90
- Build Size: ~300KB (gzip)
- First Contentful Paint: <1s
- Cumulative Layout Shift: <0.1

---

## 🐛 Known Issues

- Framer Motion client-side directives (tidak mempengaruhi functionality)
- localStorage limited to ~5-10MB (cukup untuk portfolio data)

---

## 🤝 Contributing

Feel free untuk:
- Fork repository
- Create feature branches
- Submit pull requests
- Report issues

---

## 📄 License

MIT License - Feel free to use untuk personal projects

---

## 🙋 FAQ

### Q: Bagaimana cara backup data?
A: Data otomatis disimpan di localStorage browser. Untuk backup:
```javascript
// Download data
const data = localStorage.getItem('portfolio_experiences')
console.log(data)  // Copy dan save ke file
```

### Q: Bisakah menambah section baru?
A: Ya, buat file di `src/sections/` dan import di `App.tsx`

### Q: Bagaimana cara integrate backend API?
A: Buat service layer di `src/services/` dan replace Context API calls

### Q: Apakah support PWA?
A: Belum, tapi bisa ditambahkan dengan service workers

### Q: Bagaimana dark mode?
A: Sudah built-in, Tailwind CSS mendeteksi preferensi system

---

## 📞 Support

- 📖 [Full Documentation](DOCUMENTATION.md)
- 🔧 [CRUD Guide](CRUD_GUIDE.md)
- 🚀 [Deployment Guide](CUSTOMIZATION_DEPLOYMENT.md)

---

## 🎉 Getting Started Checklist

- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Update personal information
- [ ] Customize colors & styles
- [ ] Add experiences & projects
- [ ] Test CRUD features
- [ ] Build for production
- [ ] Deploy to hosting

---

## 🌟 Show Your Support

Jika project ini membantu, please ⭐ repository dan share dengan teman!

---

**Happy coding! 🚀**

Made with ❤️ using React + TypeScript

---

**Last Updated**: January 2026
**Version**: 1.0.0
