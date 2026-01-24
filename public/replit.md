Skip to content


lilac-minds
Files
Commands
Packager files
Config files
/

npm run dev
6m
 • 
7 minutes ago
import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionTemplate 
} from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Sparkles, 
  MapPin, 
  Instagram, 
  Mail, 
  ArrowRight, 
  BookOpen, 
  Menu,
  X,
  Star,
  Video,
  Sun,
  Quote,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Zap,
  Layout,
  Compass,
  FileText,
  Award,
  Coffee,
  Moon
} from 'lucide-react';
import { 
  Tilt3D, 
  ParallaxBackground, 
  MindfulnessIllustration, 
  GrowthPlantIllustration, 
  BrainWellnessIllustration, 
  HeartMindIllustration 
} from './components/shared';
import { validateForm, checkRateLimit, sanitizeInput } from './utils/security';

const ResourcesView = lazy(() => import('./views/ResourcesView'));
const PrivacyPolicy = lazy(() => import('./views/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./views/TermsOfUse'));

// --- IMAGE OPTIMIZATION ---
const optimize = (url, width) => 
  `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;

// Clinic Images
const CLINIC_IMAGES = [
  "https://i.ibb.co/XkYptFZF/Whats-App-Image-2026-01-13-at-16-03-31-1.jpg",
  "https://i.ibb.co/KjwdjyN2/Whats-App-Image-2026-01-13-at-16-03-32.jpg",
  "https://i.ibb.co/WvWwT1jN/Whats-App-Image-2026-01-13-at-16-03-33-1.jpg",
  "https://i.ibb.co/JFqf1Ts1/Whats-App-Image-2026-01-13-at-16-03-33.jpg"
].map(url => optimize(url, 1200));

const IMAGES = {
  logo: optimize("https://i.ibb.co/XZG4XH4N/Untitled-design.png", 200),
  logoLarge: optimize("https://i.ibb.co/XZG4XH4N/Untitled-design.png", 400)
};

// --- DATA CONSTANTS ---
const SEO_DATA = {
  title: "Lilac Minds | Best Psychologist & Career Counsellor in Jamnagar, Gujarat",
  description: "Lilac Minds by Prarthana Thaker offers expert psychotherapy, anxiety treatment, depression counselling, career guidance, and student mentorship in Jamnagar. Book your mental wellness session today.",
  keywords: "psychologist Jamnagar, career counsellor Jamnagar, mental health clinic Gujarat, anxiety treatment, depression therapy, stress management, student career guidance, psychotherapy near me, best therapist Jamnagar, clinical psychologist Gujarat, emotional wellness, behavioral therapy, cognitive therapy, relationship counselling, adolescent counselling, online therapy India, psychological assessment, burnout treatment, sleep disorder therapy",
  googleMyBusiness: "https://share.google/rmquC8AtoERfXER0R",
  phone: "+918200711499",
  email: "hello@lilacminds.com",
  address: {
    street: "Sarvoday Society, 9, Krishna Nagar Main Rd",
    locality: "Jamnagar",
    region: "Gujarat",
    postalCode: "361006",
    country: "India"
  }
};

const TESTIMONIAL_DATA = [
  {
    text: "Prarthana ma'am helped me find clarity when I was completely lost about my career path. Her guidance is practical yet so empathetic.",
}
src/App.jsx
-0
+2
} from './components/shared';
const ResourcesView = lazy(() => import('./views/ResourcesView'));
const PrivacyPolicy = lazy(() => import('./views/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./views/TermsOfUse'));
// --- IMAGE OPTIMIZATION ---
const optimize = (url, width) => 
Commit
Enhance and expand existing blog content in the resources section
Update the 'Understanding Therapy' blog post in ResourcesView.jsx to be more thorough with additional details on neuroplasticity, therapy effectiveness, and debunking common myths.

PR

prarthana3
prarthana3
committed
4 days ago
1 parent 
Showing 1 changed file.

ResourcesView.jsx
src/views
Modified
        "lucide-react": "^0.344.0",
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
Lilac Minds
Overview
Lilac Minds is a psychology and career guidance website for a mental health clinic in Jamnagar, Gujarat, India. The site is built with React and Vite, using Tailwind CSS for styling and Framer Motion for animations.

Project Structure
/src - React source code
App.jsx - Main application component
main.jsx - Entry point
components/ - Shared components
utils/ - Utility modules
security.js - Input validation, sanitization, and rate limiting utilities
views/ - Page views
ResourcesView.jsx - Resources and self-assessment tools
PrivacyPolicy.jsx - Privacy Policy page
TermsOfUse.jsx - Terms of Use page
/public - Static assets (sitemap.xml, robots.txt, _redirects)
index.html - HTML entry point with SEO meta tags and structured data
Tech Stack
React 18
React Router DOM (path-based routing)
Vite 5 (dev server and build tool)
Tailwind CSS
Framer Motion (animations)
Lucide React (icons)
Security Features
Input Validation: All form inputs validated with schema-based rules (type checks, length limits, pattern matching)
Input Sanitization: HTML/script injection prevention via sanitizeInput utility
Rate Limiting: Client-side throttling prevents form submission spam (5 requests per minute per form)
Error Handling: Graceful error messages without exposing system details
No Hardcoded Secrets: Uses Formspree for form handling (public endpoint, no API keys required)
Routing
Path-based routing with React Router for SEO-friendly URLs:

/ - Home page
/resources - Resources and self-assessment tools
/privacy - Privacy Policy
/terms - Terms of Use
SPA fallback configured via public/_redirects for production deployment.

Development
Run npm run dev to start the development server on port 5000
Run npm run build to create production build in /dist
Deployment
Configured for static deployment. The build output is in the /dist directory.

Remove redundant schema injection from application code
getting this - To the owner of lilacminds.com:

Search Console has identified that your site is affected by 1 Unparsable structured data issue(s). The following issues were found on your site.

Top critical issues*
Incorrect value type

*Critical issues prevent your page or feature from appearing in Search results.

We recommend that you fix these issues when possible to enable the best experience and coverage in Google Search. Go through it and fix everything properly

there was one more error, is it fixed or not? - Search Console has identified that some pages on your site are not being indexed due to the following new reason:

Page with redirect

If this reason is not intentional, we recommend that you fix it in order to get affected pages indexed and appearing on Google.

can we do / instead of # and make resources page another page all together

give me list of all the files that are updated

any new files added?

unparsable structured data error here - type="application/ld+json">undefined</script><link rel="icon" type="image/png" sizes="32x32" href="https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FXZG4XH4N%2FUntitled-design.png&amp;w=200&amp;q=80&amp;output=webp" /></head>

<body>
the error is here - <script type="module" crossorigin src="/assets/index-D5j4CBIg.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-CR0rPiWn.css">

<script id="schema-json" type="application/ld+json">undefined</script><link rel="icon" type="image/png" sizes="32x32" href="https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FXZG4XH4N%2FUntitled-design.png&amp;w=200&amp;q=80&amp;output=webp" /></head> <body>. Here is the link, you will find all the errors here - https://search.google.com/test/rich-results/result?id=LWmhQYNAgUUPOuWsG3Xf4w
Checked console and system logs
Found and fixed the issue. There was code in App.jsx that was trying to dynamically inject a schema script with SEO_DATA.schema, but that property didn't exist - so it was inserting "undefined" into the page.

I've removed that code since all your structured data is already properly defined in index.html (with the Organization, LocalBusiness, Person, Articles, WebApplication schemas, etc.).

You'll need to republish your site for this fix to appear on the live/production version. After republishing, test again with the Google Rich Results Test and the "undefined" error should be gone.

give me list of all the files you have updated

Here's the complete list of files updated in this session:

Modified files:

src/App.jsx - Added React Router routes, updated navigation, removed broken schema injection code, updated email to hello@lilacminds.com
src/main.jsx - Wrapped App with BrowserRouter
index.html - Updated all structured data URLs to path-based format
public/sitemap.xml - Changed URLs from hash-based to path-based
replit.md - Updated documentation for routing changes
New file created:
6. public/_redirects - SPA fallback for production deployment


Scroll to latest

Make, test, iterate…
