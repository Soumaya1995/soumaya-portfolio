# Deployment Guide for soumaya.ben-hassen.com

This guide covers deploying your portfolio to your own server at `https://soumaya.ben-hassen.com`.

## Prerequisites

- Access to your server (SSH)
- Node.js 18+ installed on your server
- A web server (Nginx, Apache, or similar)
- Domain DNS configured to point to your server

## Deployment Options

### Option 1: Static File Hosting (Recommended)

This is the simplest approach - build the app locally and upload the static files.

#### Step 1: Build the Application

On your local machine:

```bash
npm install
npm run build
```

This creates a `dist/` folder with all static files.

#### Step 2: Upload to Server

Upload the contents of the `dist/` folder to your server's web directory:

```bash
# Using SCP (replace with your server details)
scp -r dist/* user@your-server.com:/var/www/soumaya.ben-hassen.com/

# Or using SFTP, FTP, or your hosting provider's file manager
```

#### Step 3: Configure Web Server

**Nginx Configuration:**

Create or update `/etc/nginx/sites-available/soumaya.ben-hassen.com`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name soumaya.ben-hassen.com;

    root /var/www/soumaya.ben-hassen.com;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Enable the site and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/soumaya.ben-hassen.com /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl restart nginx
```

**Apache Configuration:**

Create or update `/etc/apache2/sites-available/soumaya.ben-hassen.com.conf`:

```apache
<VirtualHost *:80>
    ServerName soumaya.ben-hassen.com
    DocumentRoot /var/www/soumaya.ben-hassen.com

    <Directory /var/www/soumaya.ben-hassen.com>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Handle client-side routing
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</VirtualHost>
```

Enable the site:

```bash
sudo a2ensite soumaya.ben-hassen.com
sudo systemctl reload apache2
```

#### Step 4: SSL Certificate (HTTPS)

Install Certbot for Let's Encrypt SSL:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx  # For Nginx
# OR
sudo apt install certbot python3-certbot-apache  # For Apache

# Get SSL certificate
sudo certbot --nginx -d soumaya.ben-hassen.com  # For Nginx
# OR
sudo certbot --apache -d soumaya.ben-hassen.com  # For Apache
```

Certbot will automatically configure HTTPS and set up auto-renewal.

---

### Option 2: CI/CD with GitHub Actions

Automate deployment with GitHub Actions.

#### Step 1: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to server
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          ARGS: "-rlgoDzvc -i --delete"
          SOURCE: "dist/"
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          REMOTE_PORT: ${{ secrets.REMOTE_PORT }}
          TARGET: ${{ secrets.REMOTE_TARGET }}
```

#### Step 2: Add GitHub Secrets

In your GitHub repository, go to Settings → Secrets and add:
- `SSH_PRIVATE_KEY`: Your SSH private key
- `REMOTE_HOST`: Your server IP or domain
- `REMOTE_USER`: SSH username
- `REMOTE_PORT`: SSH port (usually 22)
- `REMOTE_TARGET`: Deployment path (e.g., `/var/www/soumaya.ben-hassen.com`)

---

### Option 3: Docker Deployment

#### Step 1: Create Dockerfile

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Step 2: Build and Run

```bash
docker build -t soumaya-portfolio .
docker run -d -p 80:80 --name portfolio soumaya-portfolio
```

---

## Environment Variables

If you're using EmailJS or other services, make sure to set environment variables:

1. Create a `.env` file in the project root (for local development)
2. For production builds, set variables before building:

```bash
export VITE_EMAILJS_SERVICE_ID=your_service_id
export VITE_EMAILJS_TEMPLATE_ID=your_template_id
export VITE_EMAILJS_PUBLIC_KEY=your_public_key
npm run build
```

Or use a `.env.production` file (Vite will automatically use it in production builds).

---

## Post-Deployment Checklist

- [ ] Verify the site loads at `https://soumaya.ben-hassen.com`
- [ ] Test all navigation links
- [ ] Verify contact form works (if using EmailJS)
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate is active
- [ ] Test page refresh on all routes (SPA routing)
- [ ] Check browser console for errors
- [ ] Verify all assets load correctly

---

## Troubleshooting

### 404 Errors on Refresh

Make sure your web server is configured to serve `index.html` for all routes (see Nginx/Apache configs above).

### Assets Not Loading

- Check that the `base` path in `vite.config.ts` is set to `/`
- Verify file permissions on the server
- Check browser console for 404 errors

### SSL Certificate Issues

- Ensure DNS is properly configured
- Verify port 80 and 443 are open
- Check Certbot logs: `sudo certbot certificates`

---

## Maintenance

### Updating the Site

1. Make changes locally
2. Build: `npm run build`
3. Upload new `dist/` contents to server
4. Clear browser cache if needed

### Monitoring

Consider setting up:
- Server monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)

---

## Need Help?

If you encounter issues:
1. Check server logs: `sudo tail -f /var/log/nginx/error.log` (Nginx)
2. Check browser console for client-side errors
3. Verify all file paths and permissions

