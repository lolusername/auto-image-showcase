# High-Resolution Image Portfolio Website

A simple, elegant way to showcase your high-resolution images without relying on social media algorithms. Whether you're a photographer, digital artist, or just want to display your work beautifully, just drop your images in a folder, and this tool will create a responsive portfolio website that works on all devices.

## Why This Project?

- **Your Work, Your Control**: No algorithms, no ads, no distractions
- **Fast & Simple**: Just put your images in a folder and run a few commands
- **Beautiful Design**: Clean, minimalist layout that puts focus on your work
- **Works Everywhere**: Looks great on phones, tablets, and computers
- **Free & Open Source**: No hidden costs or proprietary software
- **Perfect for High-Res**: Optimized for displaying high-resolution images beautifully

## Quick Start Guide

### For Creators (Non-Technical)

1. **Install Required Software**
   - Download and install [Node.js](https://nodejs.org/) (the LTS version)
   - This is the only software you need to install

2. **Get Your Images Ready**
   - Create a folder called `src/photos` in the project
   - Copy your high-resolution images into this folder
   - Supported formats: JPG, JPEG, PNG, TIFF
   - Works great with any high-resolution images, from photos to digital art

3. **Run the Magic Commands**
   Open your terminal/command prompt and run these commands:
   ```bash
   # Install the tools
   npm install

   # Create different sizes of your images
   npm run optimize-images

   # Create the image gallery
   npm run gen-photo-data

   # Start the website locally
   npm run dev
   ```

4. **View Your Portfolio**
   - Open your web browser
   - Go to `http://localhost:3000`
   - You'll see your images displayed in a beautiful gallery!

### For Developers

If you're familiar with web development, you can also:
- Customize the layout and design
- Add new features
- Deploy to your own hosting
- Modify the image optimization settings

## Features

- **Smart Layout**: Automatically adjusts to show your images in the best way possible
- **Fast Loading**: Your high-res images are optimized for quick loading on any device
- **Beautiful Transitions**: Smooth animations when viewing images
- **Easy to Update**: Just add new images to the folder and run the commands again
- **Mobile Friendly**: Works perfectly on phones and tablets
- **No Database Needed**: Everything is simple files and folders
- **High-Resolution Ready**: Perfect for displaying detailed work

## How It Works

1. **Image Organization**
   - Put your high-resolution images in the `src/photos` folder
   - The tool will automatically create different sizes for different devices

2. **Image Processing**
   - Creates three sizes of each image (800px, 1800px, 2400px)
   - Makes both WebP (modern) and JPEG (compatible) versions
   - Optimizes everything for fast loading while maintaining quality
   - Preserves image details and quality across all devices

3. **Website Generation**
   - Creates a responsive gallery that works on all devices
   - Handles both portrait and landscape images beautifully
   - Includes smooth transitions and loading effects
   - Optimized for high-resolution displays

## Customization Options

### Basic Customization
- Change colors: Edit `tailwind.config.js`
- Modify layout: Edit `src/App.svelte`
- Add new pages: Create files in `src/routes`

### Advanced Customization
- Add new features using Svelte components
- Modify the image optimization settings
- Add custom animations and transitions
- Adjust image quality and compression settings

## Deployment Options

### Simple Deployment (Recommended)
1. Create a free account on [Firebase](https://firebase.google.com)
2. Run `npm run deploy`
3. Your portfolio is live!

### Other Options
- Deploy to Netlify, Vercel, or any static hosting
- Host on your own server
- Use GitHub Pages

## Technical Details (For Developers)

Built with:
- Svelte (Frontend Framework)
- Vite (Build Tool)
- TailwindCSS (Styling)
- Sharp (Image Processing)
- Firebase (Optional Hosting)

## Contributing

We welcome contributions! Whether you're:
- A creator who wants to improve the tool
- A developer who can add new features
- Someone who can improve the documentation
- Anyone who can help make it more user-friendly

## Support

If you run into any issues:
1. Check the [Issues](https://github.com/yourusername/photography-portfolio/issues) page
2. Create a new issue if needed
3. Join our community discussions

## License

This project is open source and free to use under the MIT License. You can:
- Use it for personal or commercial projects
- Modify it however you want
- Share it with others
- Use it to create your own portfolio

## Author

Created by Atilio Barreda II

---

Made with ❤️ for creators who want to showcase their high-resolution work on their own terms.

