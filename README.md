
## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:lowkey-dev21/tekcify-test.git
   cd teckify
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## �� Customization

### Theme Configuration
The app uses a comprehensive theme system with dark/light mode support:

```typescript
// src/hooks/useThemeColors.ts
interface ThemeColors {
  background: string;
  text: string;
  border: string;
  // ... more color definitions
}
```

### Adding New Components
1. Create your component in `src/components/`
2. Add proper TypeScript interfaces
3. Import and use in your pages

### Modifying Content
Update the data files in `src/constants/`:
- `faqs.ts` - FAQ questions and answers
- `products.ts` - Product information
- `testimonials.ts` - User testimonials
- `stories.ts` - Success stories

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### 3D & Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by pages
- **Lazy Loading**: Components and images loaded on demand
- **Bundle Analysis**: Optimized bundle sizes
- **SEO Optimized**: Meta tags and structured data

## 🔧 TypeScript Implementation

The project features comprehensive TypeScript implementation:

```typescript
// Example of typed component
interface Product {
  name: string;
  desc: string;
  image: string;
  href: string;
  chevronBg: string;
}

const Explore: React.FC = () => {
  const { colors } = useThemeColors();
  
  return (
    <div>
      {products.map((product: Product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};
```

## 🌟 Key Features

### Theme System
- **System Preference Detection**: Automatically detects user's system theme
- **Manual Override**: Users can manually switch between light/dark/system
- **Smooth Transitions**: All theme changes are animated
- **Persistent Storage**: Theme preference is saved in localStorage

### Interactive Elements
- **Animated Counters**: Numbers animate up with CountUp component
- **Hover Effects**: Rich hover states on all interactive elements
- **Loading States**: Proper loading indicators
- **Form Validation**: Client-side form validation

### Accessibility
- **ARIA Labels**: Proper accessibility labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Semantic HTML structure
- **Color Contrast**: WCAG compliant color ratios

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@tekcify.com or join our [WhatsApp Community](https://chat.whatsapp.com/L7GjPQlTNt72nlNHFQfU5x).

## �� Links

- **Website**: [https://tekcify.com](https://tekcify.com)
- **Products**: 
  - [Binx AI](https://wa.me/message/KFPN4EP6KHL3E1) - WhatsApp AI Assistant
  - [PDFX](https://pdfx.chat) - AI Document Management
  - [Campux](https://tekcify.com/products) - Student Social Platform
- **Social Media**: [Twitter](https://x.com/tekcify) | [LinkedIn](https://linkedin.com/company/tekcify)

---

**Built with ❤️ by the Tekcify Team**
