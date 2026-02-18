# 🚀 Deployment Guide for GitHub Pages

## Quick Start

1. **Create GitHub Repository**
   - Repository name MUST be: `cosmobishal.github.io`
   - Make it public

2. **Upload Files**
   ```bash
   # Navigate to your portfolio-website folder
   cd portfolio-website
   
   # Initialize git
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit: Astronomical portfolio website"
   
   # Add remote
   git remote add origin https://github.com/cosmobishal/cosmobishal.github.io.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" (top right)
   - Click "Pages" (left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 2-5 minutes for deployment

4. **Access Your Website**
   - Your site will be live at: `https://cosmobishal.github.io`

## Advanced Configuration

### Custom Domain (Optional)

1. **Purchase a domain** from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Configure DNS**:
   Add these DNS records in your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. **Add CNAME file**:
   - Rename `CNAME.example` to `CNAME`
   - Edit it to contain only your domain: `yourdomain.com`
   - Commit and push

4. **Enable HTTPS** in GitHub Pages settings (automatic after 24-48 hours)

### SEO Optimization

1. **Add meta tags** to `index.html`:
   ```html
   <meta name="description" content="Bishal Neupane - Astrophysicist and Space Science Researcher specializing in exoplanet habitability">
   <meta name="keywords" content="astronomy, astrophysics, exoplanets, space science, research">
   <meta name="author" content="Bishal Neupane">
   
   <!-- Open Graph -->
   <meta property="og:title" content="Bishal Neupane - Astrophysicist">
   <meta property="og:description" content="Exploring the cosmos through research and education">
   <meta property="og:image" content="https://yourusername.github.io/images/og-image.jpg">
   <meta property="og:url" content="https://yourusername.github.io">
   
   <!-- Twitter Card -->
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="Bishal Neupane - Astrophysicist">
   <meta name="twitter:description" content="Exploring the cosmos through research and education">
   <meta name="twitter:image" content="https://yourusername.github.io/images/twitter-card.jpg">
   ```

2. **Create sitemap.xml**:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourusername.github.io/</loc>
       <lastmod>2026-02-13</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

3. **Submit to search engines**:
   - Google Search Console
   - Bing Webmaster Tools

### Performance Optimization

1. **Minify CSS and JavaScript** (use tools like):
   - https://cssminifier.com/
   - https://javascript-minifier.com/

2. **Optimize images**:
   - Use WebP format
   - Compress with TinyPNG
   - Maximum width: 1920px

3. **Enable caching** (add to repository root):
   Create `.htaccess` if using Apache:
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

## Updating Your Website

```bash
# Make your changes
# Then:
git add .
git commit -m "Update: description of changes"
git push
```

Changes will be live in 1-2 minutes!

## Troubleshooting

### Site not loading
- Wait 5 minutes after first deployment
- Check GitHub Pages settings
- Ensure repository is public
- Clear browser cache

### CSS/JS not working
- Check file paths are correct
- Ensure files are in correct folders
- Check browser console for errors

### Custom domain not working
- Verify DNS settings (use DNS checker tools)
- Wait 24-48 hours for DNS propagation
- Ensure CNAME file is correct

## Maintenance

### Regular Updates
- Update certifications in `js/certifications.js`
- Add new publications in `index.html`
- Update experience timeline
- Keep dependencies updated

### Backups
- GitHub automatically backs up your code
- Download local copies periodically
- Consider using GitHub releases for versions

## Support

For issues:
1. Check GitHub Pages documentation
2. Search GitHub community forums
3. Check browser console for errors
4. Review this deployment guide

---

**Need help?** Open an issue on GitHub or contact via email.

🌌 **Happy coding and may your stars align!** ✨
