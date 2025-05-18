# Rules for Adding New Case Studies

## File Structure
- Location: `docs/case-studies/case-study-name.md`
- Naming: Use kebab-case for filenames (e.g., `captions-gpt-launching.md`)

## Frontmatter
```yaml
---
title: "📱{Product Name} ({Action})🌟"
description: "{One-line description of the case study}"
keywords: "{comma-separated, relevant, keywords}"
author: "Product Builders"
type: case-study
---
```

## Content Structure

### 1. Title & Introduction
```markdown
# {Product Name}: {Subtitle}

> "{Relevant quote}" - [Author](link)

<div class="content-box">

**{Product Name}** is a {product type} that {main functionality}. This case study shows how the {product type} was built from initial concept to deployment using **{Development Approach}** - {brief description of approach}.

**GitHub Repository**: [repository-name](link)

</div>
```

### 2. Main Content Sections
- Use `##` for main sections
- Use `###` for subsections
- Include emojis for visual hierarchy
- Use content boxes for important information

### 3. Required Sections
1. AI Tools Used
2. Ideation & Problem Discovery
3. Building Your Product
4. Product Development — Iterative Releases
5. Key Lessons
6. Next Steps

### 4. Content Boxes
```markdown
<div class="content-box">

Content goes here...

</div>
```

### 5. UI Elements
- Use tables for comparisons
- Use checklists for steps
- Use example boxes for demonstrations
- Use warning boxes for important notes
- Use tip boxes for best practices

### 6. Styling
```css
<style scoped>
.content-box {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  color: var(--vp-c-text-1);
}

h1 {
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
}

h2 {
  color: var(--vp-c-text-1);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

ul {
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

strong {
  color: var(--vp-c-text-1);
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

## SEO Guidelines
1. Use descriptive headings (H1, H2, H3)
2. Include relevant keywords naturally in content
3. Add meta tags in frontmatter
4. Use descriptive alt text for images
5. Include internal links to related content
6. Add schema markup for better search visibility

## Best Practices
1. Keep paragraphs short and scannable
2. Use bullet points and numbered lists
3. Include real-world examples
4. Add relevant emojis for visual hierarchy
5. Use content boxes for important information
6. Include code snippets where relevant
7. Add links to external resources
8. Include practical exercises or checklists

## Case Study Specific Elements

### 1. AI Tools Section
```markdown
## AI Tools Used in This Project

<div class="content-box">

| AI Tool | Role in Development | Key Contributions |
|---------|---------------------|-------------------|
| **{Tool Name}** | {Role} | {Contributions} |
| **{Tool Name}** | {Role} | {Contributions} |

</div>
```

### 2. Development Journey
```markdown
### 🟢 Release {number} — {Release Name}

#### Prompt to {AI Tool}:

```
{Actual prompt used}
```

#### Development Journey:

**Initial challenges:**
- {Challenge 1}
- {Challenge 2}

✅ **Outcome**: {Result}
```

### 3. Key Lessons
```markdown
## Key Lessons from {Development Approach}

<div class="content-box">

### 🌟 What Worked Well

1. **{Point 1}**: {Description}
2. **{Point 2}**: {Description}

### 🚧 Challenges & Limitations

1. **{Challenge 1}**: {Description}
2. **{Challenge 2}**: {Description}

### 💡 Key Takeaways

1. **{Takeaway 1}**: {Description}
2. **{Takeaway 2}**: {Description}

</div>
```

### 4. Next Steps
```markdown
## Next Steps

<div class="content-box">

::: warning Next I will cover:
- {Next step 1}
- {Next step 2}
- {Next step 3}
:::

Stay tuned for updates on the full launch story!

</div>
``` 