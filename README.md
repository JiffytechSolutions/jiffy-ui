# 🚀 Jiffy UI Demo

> A modern, minimal, and accessible React UI library built with TailwindCSS

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JiffytechSolutions/JiffyDemo/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/jiffy-ui.svg)](https://www.npmjs.com/package/jiffy-ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

**Jiffy UI Demo** showcases a comprehensive React component library with 35+ production-ready components. Built with modern web standards, TypeScript support, and accessibility in mind.

## ✨ Features

- 🎯 **35+ Production Ready Components** - Comprehensive component library
- 📝 **TypeScript Native** - Fully typed API with excellent DX
- ♿ **Accessibility First** - WAI-ARIA compliant with keyboard support
- 🚀 **React Server Components** - Compatible with Next.js 13+ and RSC
- ⚡ **Zero Runtime Styles** - Built on TailwindCSS for optimal performance
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- 🎨 **Modern Design System** - Consistent and beautiful components

## 🚀 Quick Start

### Installation

```bash
npm install jiffy-ui jiffy-icons
```

### Basic Usage

```jsx
import React from 'react';
import { Button, Card, TextStyle } from 'jiffy-ui';
import { ArrowRight } from 'jiffy-icons';

function App() {
  return (
    <Card type="Shadow">
      <TextStyle as="h2" type="LgHeading">
        Welcome to Jiffy UI
      </TextStyle>
      <Button 
        color="Primary" 
        icon={<ArrowRight size={16} />}
        alignIcon="Right"
      >
        Get Started
      </Button>
    </Card>
  );
}
```

## 🎮 Demo & Documentation

🔗 **[Live Demo](https://jiffytechsolutions.github.io/JiffyDemo/)**

Explore our interactive component playground to see all components in action with live code examples.

## 📦 Available Components

### Layout Components
- **Card** - Flexible containers for content
- **Grid** - Responsive grid system
- **HorizontalFlex / VerticalFlex** - Flexbox layout utilities

### Input Components  
- **TextField** - Text input with validation
- **TextArea** - Multi-line text input
- **Checkbox** - Boolean input control
- **CheckboxGroup** - Multiple selection groups
- **FileUpload** - File upload component
- **AutoComplete** - Smart input with suggestions

### Action Components
- **Button** - Primary action component
- **ButtonGroup** - Grouped button actions
- **TextLink** - Styled text links

### Display Components
- **TextStyle** - Typography component
- **Accordion** - Collapsible content panels
- **Alert** - Contextual feedback messages
- **Sidebar** - Navigation sidebar

### Icons
- **35+ Icons** - Comprehensive icon set

## 🛠️ Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/JiffytechSolutions/JiffyDemo.git

# Navigate to project directory
cd JiffyDemo

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run test suite
- `npm eject` - Eject from Create React App

## 🏗️ Project Structure

```
JiffyDemo/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── Components/
│   │   ├── Banner/           # Hero section
│   │   ├── ComponentList/    # Component showcase  
│   │   ├── CallToAction/     # CTA section
│   │   ├── Header/           # Navigation
│   │   ├── Home/             # Main page
│   │   ├── Pannel/           # Component docs
│   │   └── component/        # Demo components
│   ├── assets/               # Images and static files
│   ├── context/              # React context
│   └── index.tsx
├── package.json
└── README.md
```

## 🎯 Key Features Showcase

### TypeScript Support
```tsx
interface ButtonProps {
  variant?: 'Primary' | 'Secondary' | 'Tertiary';
  size?: 'Small' | 'Medium' | 'Large';
  icon?: React.ReactNode;
  alignIcon?: 'Left' | 'Right';
}
```

### Responsive Design
```jsx
<Grid columns={{ lg: 4, md: 3, sm: 2 }} gap={{ lg: "16px" }}>
  {components.map(component => (
    <Card key={component.id}>{component.content}</Card>
  ))}
</Grid>
```

### Accessibility
All components include:
- Keyboard navigation support
- Screen reader compatibility  
- ARIA labels and roles
- Focus management
- High contrast support

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons by [Jiffy Icons](https://www.npmjs.com/package/jiffy-icons)
- Components by [Jiffy UI](https://www.npmjs.com/package/jiffy-ui)

## 📞 Support

- 📧 Email: support@jiffytech.com
- 🐛 Issues: [GitHub Issues](https://github.com/JiffytechSolutions/JiffyDemo/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/JiffytechSolutions/JiffyDemo/discussions)

---

<div align="center">

**[🚀 Get Started](https://jiffytechsolutions.github.io/JiffyDemo/)** • **[📚 Documentation](https://jiffytechsolutions.github.io/JiffyDemo/pannel)** • **[🎮 Live Demo](https://jiffytechsolutions.github.io/JiffyDemo/)**

Made with ❤️ by the Jiffy Tech Solutions team

</div>
