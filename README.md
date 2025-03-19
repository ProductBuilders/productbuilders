# ProductBuilders

> An open-source book guiding non-technical founders to build products with AI tools

## About this Book

ProductBuilders is an open-source, collaborative book that guides non-technical founders and entrepreneurs through the process of building and launching digital products using AI-powered tools. It emphasizes problem identification, user understanding, and iterative development.

## Key Topics Covered

- Identifying valuable problems to solve
- Methods for understanding your users
- Designing and prototyping your product
- Building with minimal technical knowledge using AI tools
- Launching, getting feedback, and iterating

## Tech Stack

This book is built using:
- [VitePress](https://vitepress.dev/) - A static site generator
- [Supabase](https://supabase.com/) - For authentication
- GitHub API - For fetching content
- Markdown for content
- GitHub for collaboration and version control

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn
- A [Supabase](https://supabase.com/) account
- A GitHub account and personal access token (for content fetching)

### Environment Setup

1. Copy the `.env.example` file to `.env` and fill in the values:

```bash
cp .env.example .env
```

2. Add your Supabase project URL and anon key (from Supabase dashboard)
3. Add your GitHub token, repository owner, and repository name

### Local Development

1. Clone the repository
```bash
git clone https://github.com/yourusername/book-productbuilders.git
cd book-productbuilders
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
book-productbuilders/
├── docs/                      # VitePress content
│   ├── .vitepress/            # VitePress configuration
│   │   ├── theme/             # Custom theme components
│   │   ├── config.mjs         # Site configuration
│   │   ├── github-client.js   # GitHub API client
│   │   └── supabase.js        # Supabase client
│   ├── introduction/          # Introduction content
│   ├── getting-started/       # Getting Started content
│   ├── building-with-ai/      # Building with AI content
│   ├── launching/             # Launching content
│   ├── login.md               # Login page
│   ├── contribute.md          # Contribution guide
│   ├── contributors.md        # Contributors list
│   └── index.md               # Home page
├── .github/workflows/         # GitHub Actions
│   ├── deploy.yml             # Deployment workflow
│   └── pr.yml                 # PR validation workflow
└── package.json               # Dependencies
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. To deploy manually:

1. Build the site:
```bash
npm run docs:build
```

2. Preview the build locally:
```bash
npm run docs:preview
```

## How to Contribute

We welcome contributions from the community! Whether it's adding new content, fixing typos, or improving existing material, your help is appreciated.

See our [Contribution Guide](https://yourusername.github.io/book-productbuilders/contribute) for detailed instructions.

## Supabase Setup

1. Create a new project in Supabase
2. Enable Email and OAuth providers in Authentication settings
3. Copy the project URL and anon key to your `.env` file

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors

A big thank you to all our [contributors](https://yourusername.github.io/book-productbuilders/contributors) who help make this resource better! 