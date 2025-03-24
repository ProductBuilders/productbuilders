---
title: "How to Contribute"
description: "Learn how to contribute to Product Builders - an open-source guide for non-technical founders"
keywords: "contribute, open source, documentation, markdown, product builders"
author: "Product Builders"
---

# How to Contribute

Thank you for your interest in contributing to Product Builders! This open-source guide thrives on community contributions and shared experiences. Just like our tagline says - "Anyone can build Apps!" - anyone can also contribute to making this resource better!

## Ways to Contribute

There are many ways you can help improve this resource, regardless of your technical background:

1. **Content Contributions**: Add new chapters, sections, or improve existing content
2. **Case Studies**: Share your experience building products as a non-technical founder
3. **Tool Reviews**: Document your experience with AI tools for product development
4. **Error Corrections**: Fix typos, broken links, or clarify confusing sections
5. **Translations**: Help translate the guide into other languages
6. **User Testimonials**: Share how Product Builders helped you create your app

## Contribution Process

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** to your local machine
3. **Create a new branch** for your contribution

```bash
git checkout -b your-feature-name
```

### Making Changes

1. **Edit or add Markdown files** in the appropriate directories
2. **Preview your changes** locally using:

```bash
npm run docs:dev
```

3. **Commit your changes** with a clear message:

```bash
git commit -m "Add section on [topic]"
```

### Submitting Changes

1. **Push your changes** to your fork:

```bash
git push origin your-feature-name
```

2. **Create a Pull Request** to the main repository
3. **Describe your changes** in detail in the PR description

## Content Guidelines

To maintain quality and consistency:

- Write in a clear, concise manner accessible to non-technical readers
- Use practical examples from real-world experiences where possible
- Cite sources for statistics or research
- Use inclusive language
- Follow the existing structure and formatting
- Add images to clarify complex concepts (place in `/public` directory)

## Using the Theme's Markup Features

This guide uses a custom theme with specific styling and components. Here's how to use them:

### 1. Frontmatter

Every markdown file should start with frontmatter:

```md
---
title: "Your Title"
description: "A brief description of the content"
keywords: "relevant, keywords, for, SEO"
author: "Product Builders"
---
```

### 2. Content Boxes

Use content boxes to highlight important information:

```md
::: tip Tip
This is a helpful tip or best practice
:::

::: warning Warning
This is an important warning or caution
:::

::: info Info
This is general information
:::
```

1. Numbered
2. List

`inline code`

```js
// Code block with syntax highlighting
function example() {
  return 'hello world';
}
```

```bash
# Shell commands
npm install
npm run dev
```
```

### 5. Tables

Use tables for structured data:

```md
| Feature | Description |
|---------|-------------|
| Feature 1 | Description 1 |
| Feature 2 | Description 2 |
```

### 6. Lists

Use appropriate list types:

```md
- Unordered list item
- Another item
  - Nested item
  - Another nested item

1. Numbered list item
2. Another numbered item
```

### 7. Links and Images

```md
[Link text](https://example.com)

![Image alt text](/path/to/image.png)
```

### 8. Emphasis

```md
*Italic text*
**Bold text**
```

## Recognition

All contributors will be acknowledged in the guide's [Contributors](/contributors) section. We believe in giving credit to everyone who helps make this resource better!

## Questions?

If you have any questions about contributing, please [open an issue](https://github.com/angshu-min-js/productbuilders/issues/new) on GitHub or reach out to [Angshuman Gupta](https://github.com/angshu-min-js) directly. 