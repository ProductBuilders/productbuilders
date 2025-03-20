# Product Builders

> An open-source guide for non-technical founders: Anyone can build Apps!

## About this Guide

Product Builders is an open-source, collaborative guide that helps non-technical founders and entrepreneurs build and launch digital products using AI-powered tools. It emphasizes problem identification, user understanding, and iterative development, all without requiring coding knowledge.

## Key Topics Covered

- Identifying valuable problems to solve
- Methods for understanding your users
- Designing and prototyping your product
- Building with minimal technical knowledge using AI tools
- Launching, getting feedback, and iterating
- Creating a successful product without code

## Tech Stack

This guide is built using:
- [VitePress](https://vitepress.dev/) - A static site generator
- Markdown for content
- GitHub for collaboration and version control

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
│   │   └── config.mjs         # Site configuration
│   ├── introduction/          # Introduction content
│   ├── part1/                 # Part 1: Ideation & Problem Discovery
│   ├── part2/                 # Part 2: Planning Your Product
│   ├── part3/                 # Part 3: Building Your Product
│   ├── part4/                 # Part 4: Deploying with Confidence
│   ├── part5/                 # Part 5: Monetize, Launch and Get Noticed
│   ├── part6/                 # Part 6: Grow to New Heights
│   ├── case-studies/          # Case Studies
│   ├── contribute.md          # Contribution guide
│   ├── contributors.md        # Contributors list
│   └── index.md               # Home page
├── .github/workflows/         # GitHub Actions
│   ├── deploy.yml             # Deployment workflow
│   └── pr.yml                 # PR validation workflow
└── package.json               # Dependencies
```

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

## How to Contribute

We welcome contributions from the community! Whether it's adding new content, fixing typos, or sharing your experience building products without code, your help is appreciated.

See our [Contribution Guide](https://productbuilders.netlify.app/contribute) for detailed instructions.

## Author

Product Builders is created and maintained by [Angshuman Gupta](https://github.com/angshu-min-js), a product leader with experience at companies like Zalando, Zeta, and Ola.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors

A big thank you to all our [contributors](https://productbuilders.netlify.app/contributors) who help make this resource better! 