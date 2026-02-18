# Portfolio Website Deployment Guide

Complete step-by-step instructions to deploy your portfolio website to GitHub Pages.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [GitHub Repository Setup](#github-repository-setup)
3. [Uploading Files](#uploading-files)
4. [Enabling GitHub Pages](#enabling-github-pages)
5. [Verifying Deployment](#verifying-deployment)
6. [Custom Domain Setup (Optional)](#custom-domain-setup-optional)
7. [Updating Your Site](#updating-your-site)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, make sure you have:

- ✅ A GitHub account (create one at https://github.com/join)
- ✅ The portfolio zip file extracted on your computer
- ✅ Basic familiarity with GitHub (we'll walk you through it)

---

## GitHub Repository Setup

### Step 1: Create a New Repository

1. Go to https://github.com and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**

### Step 2: Configure Repository Settings

**IMPORTANT:** The repository name must be exactly: **`cosmobishal.github.io`**

Fill in the form:
- **Repository name:** `cosmobishal.github.io`
- **Description:** (optional) "Personal portfolio website - Astronomy Researcher"
- **Public:** Select this option (required for free GitHub Pages)
- **Add a README file:** Leave this UNCHECKED (we have our own)
- **Add .gitignore:** Leave this as "None" (we have our own)
- **Choose a license:** Leave as "None"

Click **"Create repository"**

---

## Uploading Files

You have two options: Web Interface (easier) or Git Command Line (advanced).

### Option A: Web Interface (Recommended for Beginners)

1. After creating the repository, you'll see a quick setup page
2. Click on **"uploading an existing file"** link
3. Drag and drop ALL files from the extracted folder:
   - `index.html`
   - `README.md`
   - `robots.txt`
   - `.gitignore`
4. Scroll down and click **"Commit changes"**

**Note:** Make sure you upload the actual files, not the folder containing them.

### Option B: Git Command Line (For Advanced Users)

If you have Git installed:

```bash
# Navigate to the extracted folder
cd portfolio-bishal-neupane

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add remote repository
git remote add origin https://github.com/cosmobishal/cosmobishal.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Enabling GitHub Pages

### Step 1: Access Repository Settings

1. Go to your repository: https://github.com/cosmobishal/cosmobishal.github.io
2. Click on **"Settings"** (gear icon in the top menu)

### Step 2: Navigate to Pages Settings

1. Scroll down the left sidebar
2. Click on **"Pages"** (under "Code and automation" section)

### Step 3: Configure Source

In the "Build and deployment" section:

1. **Source:** Select **"Deploy from a branch"**
2. **Branch:** Select **"main"**
3. **Folder:** Select **"/ (root)"**
4. Click **"Save"**

### Step 4: Wait for Deployment

- GitHub will start building your site
- A message will appear: "Your site is ready to be published at..."
- Wait 2-5 minutes for the initial deployment
- Refresh the page to see the green success message

---

## Verifying Deployment

### Check Your Live Site

1. Open your browser
2. Visit: **https://cosmobishal.github.io**
3. Your portfolio should be live!

### What to Check:

- ✅ Page loads correctly
- ✅ Navigation menu works
- ✅ Starfield animation is visible
- ✅ All sections are accessible
- ✅ Links work (ORCID, LinkedIn, GitHub)
- ✅ Certifications filter buttons work
- ✅ Mobile responsive (test on phone)

---

## Custom Domain Setup (Optional)

If you want to use your own domain (e.g., `bishalneupane.com`):

### Step 1: Purchase a Domain

Buy a domain from:
- Namecheap (https://www.namecheap.com)
- Google Domains (https://domains.google)
- GoDaddy (https://www.godaddy.com)
- Any other domain registrar

### Step 2: Create CNAME File

1. In your repository, create a new file named `CNAME` (no extension)
2. Add a single line with your domain:
   ```
   bishalneupane.com
   ```
3. Commit the file

### Step 3: Configure DNS Settings

At your domain registrar, add these DNS records:

**For Apex Domain (example.com):**

Add four A records pointing to:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For WWW Subdomain (www.example.com):**

Add a CNAME record:
```
Type: CNAME
Host: www
Value: cosmobishal.github.io
```

### Step 4: Configure GitHub Pages

1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Click "Save"
4. Wait 24-48 hours for DNS propagation
5. Check "Enforce HTTPS" once the domain is verified

---

## Updating Your Site

### Method 1: GitHub Web Interface

1. Go to your repository
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the pencil icon (Edit this file)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Your site will update automatically in 1-2 minutes

### Method 2: Upload New Files

1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop updated files
4. Click "Commit changes"

### Method 3: Git Command Line

```bash
# Make changes to your files locally
# Then commit and push

git add .
git commit -m "Update: Description of changes"
git push
```

---

## Troubleshooting

### Site Not Loading After Deployment

**Problem:** Getting 404 error  
**Solutions:**
- Wait 5-10 minutes (deployment takes time)
- Check repository name is exactly `cosmobishal.github.io`
- Verify `index.html` is in the root directory, not in a subfolder
- Check GitHub Pages is enabled in Settings → Pages

### Files Not Uploading

**Problem:** Can't upload files to GitHub  
**Solutions:**
- Make sure you're uploading individual files, not folders
- Check file names don't have special characters
- Verify you have write access to the repository
- Try using a different browser

### Changes Not Showing

**Problem:** Updated files but site looks the same  
**Solutions:**
- Wait 2-5 minutes for GitHub to rebuild
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Try viewing in incognito/private browsing mode
- Check if you committed and pushed changes

### Starfield Not Animating

**Problem:** Stars not twinkling  
**Solutions:**
- Check browser console for errors (F12)
- Ensure JavaScript is enabled in browser
- Try a different browser (Chrome, Firefox, Safari)
- Verify `index.html` wasn't corrupted during upload

### Mobile Menu Not Working

**Problem:** Menu button doesn't open on mobile  
**Solutions:**
- Clear browser cache
- Check on different mobile browsers
- Verify JavaScript is working (check console)

### Custom Domain Not Working

**Problem:** Domain shows error or doesn't load  
**Solutions:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct at registrar
- Check CNAME file is in repository root
- Ensure "Enforce HTTPS" is enabled only after domain is verified

---

## Performance Optimization

### After Deployment:

1. **Test Speed**
   - Visit https://pagespeed.web.dev
   - Enter your URL
   - Check performance score

2. **Test Mobile**
   - Use Google's Mobile-Friendly Test
   - Visit https://search.google.com/test/mobile-friendly

3. **Check Links**
   - Test all external links (ORCID, LinkedIn, GitHub)
   - Verify email link opens mail client
   - Check navigation between sections

---

## SEO Configuration

### Submit to Search Engines

After your site is live:

1. **Google Search Console**
   - Visit https://search.google.com/search-console
   - Add your property: `https://cosmobishal.github.io`
   - Verify ownership
   - Submit sitemap (if you create one)

2. **Bing Webmaster Tools**
   - Visit https://www.bing.com/webmasters
   - Add your site
   - Verify ownership

---

## Maintenance Schedule

### Weekly:
- Check that site is loading correctly
- Verify all links still work

### Monthly:
- Update certifications if you earn new ones
- Add new publications if published
- Update experience section if changed roles
- Review and update content

### Yearly:
- Review entire site for outdated information
- Consider design refresh if needed
- Update contact information if changed

---

## Security Best Practices

1. **Never commit:**
   - API keys
   - Passwords
   - Private keys
   - Personal sensitive information

2. **Keep updated:**
   - Review your published content regularly
   - Check for any accidentally published sensitive data
   - Monitor repository access

3. **Backup:**
   - Keep local copies of all files
   - Consider saving versions before major updates

---

## Getting Help

### GitHub Resources:
- GitHub Pages Documentation: https://docs.github.com/pages
- GitHub Community Forum: https://github.community

### Common Issues:
- Search GitHub Issues: https://github.com/search
- Stack Overflow: https://stackoverflow.com/questions/tagged/github-pages

### Contact:
For issues specific to this portfolio template, contact:
- Email: cosmobishal@gmail.com

---

## Deployment Checklist

Before going live, verify:

- ✅ Repository name is `cosmobishal.github.io`
- ✅ All 4 files uploaded (index.html, README.md, robots.txt, .gitignore)
- ✅ GitHub Pages enabled in Settings
- ✅ Site loads at https://cosmobishal.github.io
- ✅ Personal information is accurate
- ✅ All links work correctly
- ✅ Mobile responsive checked
- ✅ No JavaScript errors in console
- ✅ Tested in multiple browsers

---

## Post-Deployment Tasks

### Promote Your Portfolio:

1. **Add to LinkedIn**
   - Update your LinkedIn profile
   - Add website URL to contact info
   - Share a post about your new portfolio

2. **Add to Email Signature**
   ```
   Bishal Neupane
   Astronomy Researcher
   https://cosmobishal.github.io
   ```

3. **Add to ORCID**
   - Log in to your ORCID profile
   - Add website URL to your profile

4. **Share on Social Media**
   - Twitter/X
   - Facebook
   - Research networks (ResearchGate, Academia.edu)

---

## Success!

Your portfolio is now live and accessible to the world! 🎉

**Your Site:** https://cosmobishal.github.io

Remember to keep your content updated and share your portfolio with colleagues, potential collaborators, and employers.

---

**Last Updated:** February 13, 2026  
**For:** Bishal Neupane (cosmobishal@gmail.com)  
**Version:** 1.0
