# Product Builders 🚀

[![Netlify Status](https://api.netlify.com/api/v1/badges/1d889c8b-5070-453f-8209-78fce7ebb4e0/deploy-status)](https://app.netlify.com/sites/productbuilders/deploys)

A comprehensive guide for non-technical founders to build real applications using AI coding assistants. Learn how to leverage tools like Cursor, Bolt, and Lovable to create production-ready applications.

## About this Guide

Product Builders is an open-source, collaborative guide that helps non-technical founders and entrepreneurs build and launch digital products by coding with AI-powered agents. It shows you how to use tools like Cursor, Bolt, and Lovable to write real code without traditional coding knowledge. The guide emphasizes problem identification, user understanding, and iterative development - all powered by AI coding assistants.

## Key Topics Covered

- Identifying valuable problems to solve
- Methods for understanding your users
- Designing and prototyping your product
- Building with AI coding agents (Cursor, Bolt, Lovable, Claude, etc.)
- Using AI to write, debug, and deploy real code
- Launching, getting feedback, and iterating
- Creating a successful product as a non-technical founder

## Built With

This guide is built using:
- [VitePress](https://vitepress.dev/) - A static site generator
- Markdown for content
- GitHub for collaboration and version control
- Google Analytics for usage tracking
- Custom Vue components for enhanced functionality
- [Netlify](https://www.netlify.com/) - Hosting & Deployment
- [CloudFlare](https://www.cloudflare.com/) - DNS & SSL
- [Namecheap](https://www.namecheap.com/) - Domain Management
- [Ahrefs](https://ahrefs.com/) - SEO & Analytics
- [Utterances](https://utteranc.es/) - GitHub-based comments system

## Features

- **AI-First Approach**: Learn how to code using AI assistants without traditional programming knowledge
- **Comprehensive Guide**: From ideation to scaling, covering the entire product development lifecycle
- **Interactive Components**: Track user engagement with Google Analytics event tracking
- **Real-World Case Studies**: Examples of applications built by non-technical founders using AI coding tools
- **Community Integration**: Connect with other founders through our Discord community
- **Comments System**: Discuss content on each page using GitHub-powered comments via utterances

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn
- A GitHub account (for contributing)

### Environment Setup

No special environment variables are needed for local development.

### Local Development

1. Clone the repository
```bash
git clone https://github.com/angshu-min-js/productbuilders.git
cd productbuilders
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run docs:dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
productbuilders/
├── docs/                      # VitePress content
│   ├── .vitepress/            # VitePress configuration
│   │   ├── theme/             # Custom theme components
│   │   │   ├── analytics.js   # Google Analytics integration
│   │   │   └── ...           # Other theme files
│   │   └── config.mjs         # Site configuration
│   ├── introduction/          # Introduction content
│   ├── part1/                 # Part 1: Ideation & Problem Discovery
│   ├── part2/                 # Part 2: Planning Your Product
│   ├── part3/                 # Part 3: Building With AI Coding Agents
│   ├── part4/                 # Part 4: Deploying with Confidence
│   ├── part5/                 # Part 5: Monetize, Launch and Get Noticed
│   ├── part6/                 # Part 6: Grow to New Heights
│   ├── case-studies/          # Case Studies
│   ├── contribute.md          # Contribution guide
│   ├── contributors.md        # Contributors list
│   └── index.md               # Home page
└── package.json               # Dependencies
```

## Analytics & Tracking

The website implements Google Analytics (GA4) to track:

- **Page Views**: Track which content is most popular
- **Button Clicks**: Monitor CTA effectiveness through event tracking
- **User Engagement**: Follow user journeys through the site
- **User Information**: Basic demographic and device information
- **Session Duration**: How long users stay engaged with the content

## Deployment

This site is automatically deployed to Netlify when changes are pushed to the main branch. To deploy manually:

1. Build the site:
```bash
npm run docs:build
```

2. Preview the build locally:
```bash
npm run docs:preview
```

### Infrastructure

The Product Builders website uses the following infrastructure:
- **Domain Registration**: [Namecheap](https://www.namecheap.com/) manages the productbuilders.xyz domain
- **Hosting**: [Netlify](https://www.netlify.com/) hosts the site with automatic deployments from GitHub
- **DNS & SSL**: [CloudFlare](https://www.cloudflare.com/) handles DNS management and SSL certification
- **Primary Domain**: https://productbuilders.xyz
- **Alternate Domain**: https://productbuilders.netlify.app (redirects to primary domain)

## How to Contribute

We welcome contributions from the community! Whether it's adding new content, fixing typos, sharing your experience using AI coding agents, or showcasing apps you've built with AI assistance, your help is appreciated.

See our [Contribution Guide](https://productbuilders.xyz/contribute) for detailed instructions.

## Join Our Discord Community

Connect with other non-technical founders, product builders, and AI enthusiasts in our Discord community. Get help, share your experiences, discuss the latest AI coding tools, and collaborate on projects.

- Ask questions and get help with AI coding agents
- Share your journey building products with AI assistance
- Learn about new AI development tools and techniques
- Connect with other non-technical founders
- Get direct feedback on your product ideas and code

[Join our Discord server](https://discord.gg/XbYrxMPW) to become part of the Product Builders community!

## Author

Product Builders is created and maintained by [Angshuman Gupta](https://angshumangupta.com/), a product leader with experience at multinationals, tech unicorns and early stage startups who has built multiple products using AI coding assistants.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors

A big thank you to all our [contributors](https://productbuilders.xyz/contributors) who help make this resource better!

## Documentation Rules

### Chapter Rules
Located in `.cursor/rules/part-chapter.mdc`, these rules define the structure and formatting for adding new chapters:

- File structure and naming conventions
- Frontmatter requirements
- Content structure and sections
- UI elements and styling
- Navigation and SEO guidelines
- Best practices for writing chapters

### Case Study Rules
Located in `.cursor/rules/case-study.mdc`, these rules define the structure and formatting for adding new case studies:

- File structure and naming conventions
- Frontmatter requirements
- Content structure and sections
- UI elements and styling
- Navigation and SEO guidelines
- Best practices for writing case studies

## Adding New Content

### Adding a New Chapter
1. Create a new markdown file in the appropriate part directory
2. Follow the chapter rules in `.cursor/rules/part-chapter.mdc`
3. Include required sections and formatting
4. Add navigation links in the sidebar configuration

### Adding a New Case Study
1. Create a new markdown file in the `docs/case-studies/` directory
2. Follow the case study rules in `.cursor/rules/case-study.mdc`
3. Include required sections and formatting
4. Add to the case studies list in the sidebar configuration

## Site Features

### Navigation
- Top navigation bar with links to Home, Build, Contribute, Contributors, and API
- Sidebar navigation showing chapter hierarchy and case studies
- Breadcrumb navigation at the top of each page
- Previous/Next navigation at the bottom of each page

### Comments System
- Uses Utterances for GitHub-based comments
- Appears at the bottom of each page
- Requires GitHub authentication to comment

### SEO Components
- Automatically manages meta tags
- Generates JSON-LD schema
- Handles Open Graph and Twitter cards

### Analytics Integration
- Google Analytics (GA4) tracking
- Event tracking for:
  - Page views
  - Button clicks
  - User engagement
  - Session duration

### Mobile Responsiveness
- Content boxes adapt to screen size
- Images are responsive
- Tables become scrollable on mobile
- Navigation collapses into hamburger menu

### Dark/Light Mode
- Automatically adapts to system preference
- Manual toggle in navigation
- Maintains consistent contrast in both modes

## Contributing

1. Fork the repository
2. Create a new branch for your changes
3. Follow the documentation rules for adding new content
4. Submit a pull request with a clear description of your changes

## License

This project is licensed under the MIT License - see the LICENSE file for details. 