# دينار الجمعة | Dinar Al-Jumaa

<div align="center">
  <img src="public/logo.png" alt="دينار الجمعة" width="200"/>
  
  **للخير نهتدي | Guided by Charity**
  
  A Bahraini charity organization website supporting donations and community assistance
  
  [![Production Ready](https://img.shields.io/badge/Production-Ready-green)](https://shields.io/)
  [![Arabic/English](https://img.shields.io/badge/Languages-AR%2FEN-blue)](https://shields.io/)
  [![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
</div>

## 🌟 About | عن المشروع

**دينار الجمعة** is a Bahraini charitable initiative that aims to provide aid and support to those in need within the Kingdom of Bahrain with warmth and transparency. Our platform facilitates:

- 💰 **Donations** - Multiple payment methods including BenefitPay and bank transfers
- 🤝 **Help Requests** - Digital forms for those seeking assistance  
- 📊 **Impact Tracking** - Transparent reporting of charitable activities
- 🌐 **Bilingual Support** - Full Arabic and English interface
- 📱 **Mobile Optimized** - Responsive design for all devices

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **React Router 6** - SPA routing with browser history
- **TailwindCSS 3** - Custom charity theme with Arabic fonts
- **Radix UI** - Accessible component primitives
- **Lucide React** - Modern icon library
- **Framer Motion** - Smooth animations

### Backend
- **Express.js** - Node.js web server
- **Vite Dev Server** - Hot module replacement in development
- **Serverless Functions** - Netlify Functions support

### Build & Development
- **Vite** - Fast build tool and dev server
- **Vitest** - Unit testing framework
- **ESLint + Prettier** - Code formatting and linting
- **PostCSS** - CSS processing with autoprefixer

### Deployment
- **Netlify** - Static site hosting with CDN
- **Git Integration** - Continuous deployment from repository

## ✨ Features

### 🎯 Core Functionality
- [x] **Multi-language Support** (Arabic RTL + English LTR)
- [x] **Donation System** with multiple payment options
- [x] **Help Request Forms** with PDF download
- [x] **Contact Forms** and social media integration
- [x] **Responsive Design** for mobile and desktop
- [x] **SEO Optimized** with proper meta tags
- [x] **Accessible UI** following WCAG guidelines

### 💳 Payment Methods
- [x] **Bank Transfer** - IBAN: `BH26ALSA00780214150001`
- [x] **BenefitPay** - QR code and app integration
- [x] **One-click IBAN copying** for easy transfers

### 📄 Content Management
- [x] **Static Content** - Managed through React components
- [x] **Translation System** - JSON-based i18n
- [x] **Local Assets** - All images and PDFs self-hosted
- [x] **PDF Documents** - License and help forms

## 🏗️ Project Structure

```
├── client/                    # React frontend application
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Radix UI components
│   │   ├── Layout.tsx       # Main layout with header/footer
│   │   └── LanguageSwitcher.tsx
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useTranslation.ts
│   │   └── use-toast.ts
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Homepage
│   │   ├── About.tsx        # About us page
│   │   ├── Donate.tsx       # Donation page
│   │   ├── Help.tsx         # Help request page
│   │   ├── Impact.tsx       # Impact/achievements page
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── translations/        # Language files
│   │   └── index.ts
│   ├── App.tsx             # Main app component with routing
│   └── global.css          # TailwindCSS styles + theme
├── server/                  # Express backend
│   ├── routes/             # API route handlers
│   └── index.ts            # Server configuration
├── shared/                  # Shared TypeScript types
│   └── api.ts              # API interfaces
├── public/                  # Static assets
│   ├── logo.png            # Main charity logo
│   ├── benefitpay-logo.png # Payment provider logo
│   ├── qr-code.png         # BenefitPay QR code
│   ├── license.pdf         # Legal license document
│   └── help.pdf            # Help request form
├── netlify/                # Netlify configuration
│   ├── functions/          # Serverless functions
│   └── netlify.toml       # Deploy configuration
└── dist/                   # Production build output
    ├── spa/               # Client build
    └── server/            # Server build
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** 18+ and npm
- **Git** for version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd dinar-aljumaa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm test` | Run unit tests |
| `npm run typecheck` | Validate TypeScript |

## 🎨 Customization

### Theme Colors
The charity theme is defined in `tailwind.config.ts` and `client/global.css`:

```css
--charity-brown: HSL brown shades for primary elements
--charity-cream: Warm cream tones for backgrounds  
--charity-sage: Subtle green accents
--charity-warm: Clean whites and off-whites
```

### Adding New Languages
1. Add translations to `client/translations/index.ts`
2. Update language options in `LanguageContext.tsx`
3. Add new font imports in `global.css` if needed

### Payment Methods
To add new payment options:
1. Add assets to `public/` folder
2. Update `Donate.tsx` component
3. Test payment flow thoroughly

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. **Connect Netlify MCP** in Builder.io
2. **Push to Git** repository 
3. **Auto-deploy** via Netlify integration

### Option 2: Manual Deployment
1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy `dist/spa/` folder** to any static host

### Environment Variables
Set these in your deployment platform:
- `NODE_ENV=production`
- Any API keys or secrets needed

## 📊 SEO & Analytics

### Current SEO Setup
- [x] **Meta titles and descriptions** in Arabic and English
- [x] **Open Graph tags** for social media sharing
- [x] **Twitter Card support**
- [x] **Structured data** for charity organization
- [x] **robots.txt** allowing all crawlers
- [x] **Sitemap** automatically generated

### Performance
- ⚡ **Bundle size**: ~627KB (with code splitting recommended)
- 🚀 **Load time**: <2s on fast connections
- 📱 **Mobile optimized** with responsive images
- 🔄 **Cache headers** configured via Netlify

## 🤝 Contributing

### Development Workflow
1. **Create feature branch** from main
2. **Make changes** using Builder.io or local environment
3. **Test thoroughly** including mobile and RTL layout
4. **Commit with descriptive messages**
5. **Push and create pull request**

### Code Standards
- **TypeScript** - All new code must be type-safe
- **Arabic Support** - Test RTL layout for UI changes
- **Accessibility** - Follow WCAG 2.1 guidelines
- **Performance** - Optimize images and bundle size

### Translation Guidelines
- **Consistent terminology** across Arabic/English
- **Cultural sensitivity** for charity-related content
- **Professional tone** appropriate for donors and recipients

## 📝 License & Legal

### Licensing
This charity website operates under proper licensing from Bahraini authorities. All legal documents are available:
- **Official License**: [View License PDF](public/license.pdf)
- **Help Forms**: [Download PDF](public/help.pdf)

### Third-party Assets
- **Icons**: Lucide React (MIT License)
- **UI Components**: Radix UI (MIT License)  
- **Fonts**: Google Fonts (Open Font License)

## 📞 Contact & Support

### Development Team
- **Repository**: Builder.io Projects
- **Issues**: Create issues in project tracker
- **Documentation**: This README + inline code comments

### Charity Contact
- **Email**: admin@dinaraljumaa.com
- **Instagram**: [@dinar.aljumaa](https://www.instagram.com/dinar.aljumaa/)
- **Link Center**: [heylink.me/Dinar.Aljumaa](https://heylink.me/Dinar.Aljumaa/)

### Technical Support
For deployment or technical issues:
1. **Check logs** in deployment platform
2. **Review this documentation**
3. **Contact Builder.io support** if needed

---

<div align="center">
  <strong>Built with ❤️ for the Bahraini community</strong>
  
  **مبني بالحب ❤️ للمجتمع البحريني**
</div>
