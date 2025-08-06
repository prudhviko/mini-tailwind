# MiniTailwind

MiniTailwind is a lightweight utility-first CSS framework inspired by Tailwind CSS. It allows developers to rapidly build modern, responsive UIs using predefined utility classes for spacing, colors, and screen breakpoints.

## ✨ Features

- 🎨 Custom color utilities (e.g., `.bg-blue`, `.text-red`)
- 📐 Spacing utilities (e.g., `.p-4`, `.m-2`, `.px-6`)
- 📱 Responsive breakpoints (e.g., `.sm:bg-red`, `.md:p-4`)
- ⚙️ PostCSS-powered processing
- 🧪 Fully extendable and customizable

## 🚀 How It Works

MiniTailwind uses a PostCSS plugin to scan your HTML files and generate a CSS file with only the utility classes you use. It mimics Tailwind's behavior but is minimal by design, making it perfect for learning or for building your own design system.

### Under the Hood:

1. **Custom PostCSS Plugin**:
   - Parses your HTML files.
   - Extracts class names like `bg-blue`, `p-4`, `sm:m-2`.
   - Generates corresponding CSS rules dynamically.

2. **Responsive Variants**:
   - Uses media queries to handle breakpoints like `sm`, `md`, etc.
   - For example: `.sm:bg-red` becomes:
     ```css
     @media (min-width: 640px) {
       .sm\:bg-red { background-color: red; }
     }
     ```

## 🛠️ Getting Started

1. Clone this repo:
   git clone https://github.com/your-username/mini-tailwind.git
   cd minitailwind

2. Install dependencies:
   npm install

3. Run the build process:
   npm run build

4. Link dist/output.css in your HTML and start using utility classes.

🧑‍💻 Author
Built with ❤️ by Prudhvi K
