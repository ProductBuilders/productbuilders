# Rules for Adding New Chapters

## File Structure
- Location: `docs/part{number}/chapter-name.md`
- Naming: Use kebab-case for filenames (e.g., `identifying-problems.md`)

## Frontmatter
```yaml
---
title: "Chapter {number} - {Title} | Product Builders"
description: "{One-line description of the chapter content}"
head:
  - - meta
    - name: keywords
      content: "{comma-separated, relevant, keywords}"
  - - meta
    - name: author
      content: "Product Builders Team"
  - - meta
    - property: og:title
      content: "Chapter {number} - {Title} | Product Builders"
  - - meta
    - property: og:description
      content: "{One-line description of the chapter content}"
---
```

## Content Structure

### 1. Title & Introduction
```markdown
# Chapter {number}: {Title} 🔍

> "{Relevant quote}" - [Author](link)

::: tip Key Takeaway
{One-sentence summary of the chapter's main point}
:::
```

### 2. Main Content Sections
- Use `##` for main sections
- Use `###` for subsections
- Include emojis for visual hierarchy
- Use content boxes for important information

### 3. Content Boxes
```markdown
<div class="content-box">

Content goes here...

</div>
```

### 4. UI Elements
- Use `::: tip` for important notes
- Use `::: warning` for cautions
- Use tables for comparisons
- Use checklists for steps
- Use example boxes for demonstrations

### 5. Styling
```css
<style scoped>
.content-box {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  color: var(--vp-c-text-1);
}

h1, h2, h3 {
  color: var(--vp-c-text-1);
}

p, li {
  color: var(--vp-c-text-1);
  line-height: 1.6;
}

a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
```

### 6. Navigation
- Include "Ready to Move Forward?" tip at the end
- Link to the next chapter
- Link to related case studies if applicable

## SEO Guidelines
1. Use descriptive headings (H1, H2, H3)
2. Include relevant keywords naturally in content
3. Add meta tags in frontmatter
4. Use descriptive alt text for images
5. Include internal links to related content
6. Add schema markup for better search visibility

## Required Sections
1. Introduction with key takeaway
2. Main content with clear sections
3. Examples or case studies
4. Summary or TL;DR
5. Resources & Tools
6. Next steps or call to action

## Best Practices
1. Keep paragraphs short and scannable
2. Use bullet points and numbered lists
3. Include real-world examples
4. Add relevant emojis for visual hierarchy
5. Use content boxes for important information
6. Include code snippets where relevant
7. Add links to external resources
8. Include practical exercises or checklists 