# React-143CArd

A multi-stage interactive web experience built with React, featuring bold Neo-Brutalism design and smooth animations. Users progress through four unique stages to reach the final reveal.

![Neo-Brutalism Design](https://img.shields.io/badge/Style-Neo--Brutalism-FFE951?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge)

## 🎮 Site Images

<img width="441" height="409" alt="Image" src="https://github.com/user-attachments/assets/b0ae684e-aad0-436d-94ee-6212ec957910" />

<img width="367" height="395" alt="Image" src="https://github.com/user-attachments/assets/3ae78dc8-d690-4359-b0f4-722517ee219f" />

<img width="338" height="347" alt="Image" src="https://github.com/user-attachments/assets/022f472a-e741-44e5-8473-8093a7c8e828" />

<img width="367" height="383" alt="Image" src="https://github.com/user-attachments/assets/907ccd1e-aa0a-4397-9ec0-44125a614ac6" />

## ✨ Features

### 🎯 Four Interactive Stages

1. **Access Code Screen** - Enter the secret code to begin
2. **Lock Screen** - Solve the date puzzle to unlock
3. **Chest Screen** - Click and hold to open the treasure chest
4. **Spot the Difference** - Final reveal with image comparison

### 🎨 Neo-Brutalism Design

- Bold, thick borders (4px black)
- Offset drop shadows
- Vibrant color palette (yellow, pink, purple, blue)
- Geometric shapes and flat design
- Space Mono monospace font

### 🌊 Smooth Animations

- Framer Motion transitions between stages
- Shake animations on errors
- Rotation and unlock effects
- Progress bar with glow effects
- Staggered reveals

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GitHub Pages** - Hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JVelezFD/React-143CArd.git
   cd React-143CArd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_ACCESS_CODE=SECRET2025
   VITE_UNLOCK_DATE=11/12/2002
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎮 How to Play

1. **Stage 1:** Enter the access code (default: `SECRET2025`)
2. **Stage 2:** Enter the unlock date in format `MM/DD/YYYY`
3. **Stage 3:** Click and hold the chest for 1.5 seconds
4. **Stage 4:** View the final "Spot the Difference" reveal

## ⚙️ Configuration

### Change Access Code

Edit `.env.local`:
```env
VITE_ACCESS_CODE=YourNewCode
```

### Change Unlock Date

Edit `.env.local`:
```env
VITE_UNLOCK_DATE=01/01/2025
```

### Replace Images

Replace the placeholder images in the Spot the Difference component:

1. Add your images to `src/assets/`
2. Update the image paths in `src/App.jsx`:
   ```javascript
   <img src="https://yourimage.com/image1.png" alt="Image 1" />
   <img src="https://yourimage.com/image2.png" alt="Image 2" />
   ```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

The site will be available at: `https://yourusername.github.io/your-repo-name/`

## 🎨 Customization

### Colors

The Neo-Brutalism color palette is defined in Tailwind classes throughout the components:

- Yellow: `#FFE951`
- Pink: `#FF006E`
- Purple: `#8338EC`
- Blue: `#3A86FF`

### Animations

Animation timing and effects can be adjusted in the Framer Motion configuration within each component:

```javascript
<motion.div
  animate={{ rotate: [0, -20, 20, 0] }}
  transition={{ duration: 1.5 }}
>
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**JVelezFD**

- GitHub: [@JVelezFD](https://github.com/JVelezFD)
- Repository: [React-143CArd](https://github.com/JVelezFD/React-143CArd)

## 🙏 Acknowledgments

- Design inspired by Neo-Brutalism web design trends
- Built with React, Vite, and Framer Motion
- Styled with Tailwind CSS
- Hosted on GitHub Pages

## 📸 Screenshots

### Access Code Screen
Bold yellow background with centered input form and shake animation on error.

### Lock Screen  
Purple background with animated SVG lock that rotates when unlocked.

### Chest Screen
Pink background with interactive chest that opens with click-and-hold mechanic.

### Spot the Difference
Blue background with side-by-side image comparison.

---

⭐ **Star this repository if you found it helpful!**

💡 **Have a suggestion?** [Start a discussion](https://github.com/JVelezFD/React-143CArd/discussions)
