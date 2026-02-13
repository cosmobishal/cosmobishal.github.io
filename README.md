# Bishal Neupane - Personal Portfolio Website

A clean, professional portfolio website for astronomy researcher Bishal Neupane, inspired by NASA's design aesthetic.

## Quick Start

1. **Upload to GitHub**
   - Create a new repository named `cosmobishal.github.io`
   - Upload `index.html`, `README.md`, `robots.txt`, and `.gitignore` to the repository
   - Your site will be live at https://cosmobishal.github.io

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "main" branch as source
   - Save and wait a few minutes

That's it! Your site is ready.

## Features

- **NASA-Inspired Design**: Clean, professional dark theme with mission-focused layout
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **All-in-One File**: Everything (HTML, CSS, JavaScript) in a single file for easy deployment
- **No Dependencies**: No external JavaScript files needed
- **Animated Starfield**: Beautiful background with twinkling stars
- **45+ Certifications**: Filterable by category (Astronomy, ML, Space Science, Physics)
- **Professional Timeline**: Clean experience section
- **Publications Showcase**: Research highlights

## Customization

### Update Your Information

All content is in `index.html`. Search and replace to update:

- **Name**: Currently "Bishal Neupane"
- **Email**: Currently "cosmobishal@gmail.com"
- **Social Links**: ORCID, LinkedIn, GitHub URLs
- **Experience**: Timeline section
- **Publications**: Publications section

### Change Colors

Find the `:root` section in the CSS (inside `<style>` tag):

```css
:root {
    --nasa-blue: #0B3D91;
    --nasa-red: #FC3D21;
    --accent-blue: #4A90E2;
}
```

### Add More Certifications

Find the `certifications` array in the JavaScript section and add:

```javascript
{
    title: "Your Certification Name",
    institution: "Institution",
    date: "Month Year",
    category: "astronomy" // or "ml", "space", "physics"
}
```

## Technical Details

- **HTML5** with semantic markup
- **CSS3** with modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** (ES6+)
- **No external dependencies** or frameworks
- **Total size**: ~40KB (single HTML file)
- **Performance**: Fast loading, optimized for all devices

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Personal portfolio website. Feel free to use as inspiration, but please don't copy directly.

## Contact

**Bishal Neupane**  
Email: cosmobishal@gmail.com  
Website: https://cosmobishal.github.io

---

*Last updated: February 13, 2026*
