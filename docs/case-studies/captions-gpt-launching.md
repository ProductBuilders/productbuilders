---
title: 📱Captions GPT (Launching With Vibe Coding)🌟
description: How a non-technical founder built a mobile app for AI-powered social media captions using Cursor AI
keywords: captions gpt, mobile app development, ai tools, cursor, expo, replicate api, vibe coding
author: Product Builders
---

# Captions GPT: From Idea to Launch With Vibe Coding


> "Every app you see started with someone who had a problem to solve." - Anonymous

<div class="content-box">

**Captions GPT** is a mobile app that generates creative captions for social media images and videos using AI. This case study shows how the app was built from initial concept to deployment using **Vibe Coding** - an iterative approach powered by AI agents like Cursor.

**GitHub Repository**: [cursor-captionsgpt](https://github.com/angshu-min-js/cursor-captionsgpt)

</div>

## AI Tools Used in This Project

<div class="content-box">

| AI Tool | Role in Development | Key Contributions |
|---------|---------------------|-------------------|
| **Cursor** | Primary Development Agent | Code generation, debugging, API integration, UI component creation |
| **ChatGPT** | Planning & Research Tool | System prompt design, implementation research, documentation creation |
| **Replicate** | Core AI Engine | Image & video caption generation models, API for media analysis |

</div>

## Ideation & Problem Discovery

<div class="content-box">

### Identifying a Problem Worth Solving

#### 🚀 The Problem

As an avid traveler and social media enthusiast, I love sharing my experiences online. However, I often struggled to create creative and engaging post captions.

While this may seem like a small inconvenience, it's a frustration shared by millions of social media users who want their posts to stand out. A great caption can drive engagement, but not everyone has the time or creativity to craft one.

I knew this was a problem worth solving because:
- ✅ **Personal Experience**: Being the target user, I have firsthand insight into the pain points and requirements
- ✅ **Skill Alignment**: My background in product development equips me to design an intuitive and effective solution
- ✅ **Passion for AI**: This project aligns with my interest in experimenting with Gen AI to solve real-world problems

### 📌 Understanding the Ideal Customer Profile (ICP)

To validate the idea, I outlined the Ideal Customer Profile (ICP):
- 🔹 **Who they are**: Social media users, influencers, travelers, and content creators, in short consumers (B2C Persona)
- 🔹 **Pain point**: Struggle to come up with unique, engaging, and on-brand captions consistently
- 🔹 **Current alternatives**: Existing Apps, Googling captions, using basic caption generators, or asking friends for ideas
- 🔹 **Behavior**: Frequently post on Instagram, Twitter, TikTok, or Facebook and care about engagement

### 🔍 Market & Competitive Research

To validate the problem and identify opportunities, I analyzed existing caption generator applications:

| Feature | CapGen – AI Captions & Hashtags | Captions for Instagram & FB | AI Captions & Hashtags Generator | Caption Generator for Instagram |
|---------|----------------------------------|------------------------------|----------------------------------|----------------------------------|
| Personalised using AI | Yes | No | Yes | No |
| Customization Options | Yes (tone, style, emojis, hashtags) | No | Limited | No |
| Media | Only Images | NA | Only Images | NA |
| User Interface | Modern and user-friendly | Basic | Outdated | Simple |
| Monetization Model | Free with ads | Free | Free with ads | Free |
| App Store Rating | 4.5/5 | 4.0/5 | 3.8/5 | 3.5/5 |

### 💡 Key insight

Many people already use caption generators, but existing solutions are either expensive, lack personalized caption generation or have a cluttered, complex UX.

### 💡 Competitive Edge for Captions GPT

- 🔹 **AI-Powered Captions for Photos & Videos** – Unlike competitors that focus only on images, Captions GPT generates creative captions for both photos and videos using Gen AI.
- 🔹 **Clutter-Free, Ad-Free UX** – No login is required, no ads, and a simple, intuitive flow for a seamless experience.
- 🔹 **Competitive Pricing** – More affordable than ChatGPT, making it a cost-effective alternative for social media users.

</div>

## Building Your Product

<div class="content-box">

### ⭐ Product Vision Recap


> Captions GPT aims to help social media users quickly generate creative, AI-powered captions for their images (and eventually videos), making their posts more engaging and effortless.

After validating the user problem and designing the initial solution, the next step was to define clear, actionable requirements — both product and technical — and break them into manageable releases for iterative delivery.

### 📱 Product Requirements

- **Image Upload** — Users can upload images from their devices
- **AI Caption Generation** — Captions are generated using AI based on the uploaded image
- **Caption Display** — A clean UI to display captions
- **Copy to Clipboard** — Users can copy captions easily
- **History** — Track previously generated captions
- **Terms & Privacy** — Include links to legal docs
- **Welcome Animation** — Engaging intro animation on the first launch
- **Dark Mode** — For user preferences and accessibility

> **Caveat**: Instead of detailing the entire user experience using mockups or wireframes before development, the approach for this app is "vibe coding" — iteratively building and improving the product based on prompts and an evolving understanding of user needs. This ensures faster experimentation and real-time course correction without getting locked into rigid designs upfront.

### ⚙️ Technical Requirements

- Use **Expo** for cross-platform development (iOS & Android)
- **Replicate API** for AI-powered caption generation
- **Streaming Mechanism** to stream responses from Replicate API for real-time caption display
- **Cursor** as the AI Agent for development

</div>

## Product Development — Iterative Releases

<div class="content-box">

### 🟢 Release 1 — Core Captioning App (MVP)

#### Prompt to Cursor AI Agent:

```
Build a mobile app that:
{Product Vision}
{Product Requirements}
{Technical Requirements}
```

#### Development Journey:

**Initial challenges:**
- Replicate API integration caused app crashes
- Cursor helped debug and fix the initial API wiring
- Faced streaming issue — captions appeared only at the end instead of progressively. Cursor adjusted API call handling to enable real-time display
- Formatting issue: Each word appeared on a new line. After several prompts, Cursor reformatted captions into full sentences

✅ **Outcome**: A functional MVP that allowed users to upload an image, generate an AI caption, and copy it — with real-time streaming captions.

### 🟡 Release 2 — Context-Aware Captions with System Prompt

To make captions more relevant and creative, we added a system prompt and user context input:

**System Prompt to AI:**
```
You are my social media manager. Write me an Instagram caption based on the image. Add relevant hashtags. Additional context: ${context}
```

**New feature:**
- A text box for users to add context (e.g., "Birthday party in Paris")
- Cursor modified the API integration to pass user context dynamically

✅ **Outcome**: Personalized captions that understood the image's purpose, mood, and social context.

### 🔵 Release 3 — Video Caption Generation

Expanding functionality to videos required additional AI model handling:

**Challenge:**
- Used Replicate's video captioning model: `lucataco/qwen2-vl-7b-instruct:bf57361c75677fc33d480d0c5f02926e621b2caa2000347cb74aeae9d2ca07ee`
- Cursor initially failed to upload videos properly
- After debugging, switched to Base64 encoding for video uploads to ensure compatibility

✅ **Outcome**:
- Users can now upload both images and videos and receive AI-generated captions
- A video preview player was added for better UX

### 🟣 Release 4 — Usability Enhancements & Cancel Feature

Final polish to make the product robust and user-friendly:
- Cancel ongoing generation to give users control
- Handled errors for interrupted API calls
- Progress indicators during long video processing
- Final UX fixes like dark mode, history tracking, and welcome animation

✅ **Outcome**: A production-ready, cross-platform mobile app supporting real-time, AI-powered caption generation for images and videos, with thoughtful user experience design.

</div>

## Monetization & Analytics

<div class="content-box">

### 🟣 Release 5 — Analytics Integration

**Context**: As we plan for the public launch of the product, it's critical to measure user engagement and feature usage to evaluate product success. To achieve this, we are integrating PostHog, a product analytics tool that will help us track key user actions and flows inside the app.

✅ **Requirements**
- Integrate PostHog SDK into the application to monitor user actions
- Track the following user actions:
  - Screen views — Which screen/page the user is on
  - Button clicks — Which button is clicked
  - Action outcomes — What happens after a button click (e.g., successful image generation, error messages)
- Keep API keys secure — Store API keys and sensitive configs in .env files
- Do NOT commit .env files or secrets to GitHub

Post initial integration, we faced minor issues which were later fixed using Cursor AI code suggestions.

### 🟣 Release 6 — Payment Wall 

⚠️ **Context**: To monetize the app we would need to have Payment Wall. Revenue Cat provides an easy way to implement payment walls. The payment wall can be dynamically controlled through the back-office of Revenue Cat with minimal code changes. Note that the Payment Wall can only be implemented post-production deployment.

#### Implementation Strategy:

1. **Research & Planning**: 
   - Used ChatGPT to outline implementation requirements
   - Prompt: "I am building a mobile app using Expo and I want to incorporate payment wall using Revenue Cat. Write step-by-step instructions I need to follow..."

2. **Core Logic**: 
   - Redirect to payment wall when user clicks "Generate Captions"
   - First-day free trial with no payment wall
   - Check subscription status before caption generation

3. **Integration Details**:
   - API Keys stored in .env file
   - Same user ID for PostHog and Revenue Cat for unified analytics

#### Bonus: Authentication Implementation

Though not required for the initial version, we prepared authentication infrastructure:

- Researched Supabase implementation for email/password login
- Created secure credential storage using environment variables
- Designed login/signup flow that integrates with existing UI

</div>

## Deployment & GitHub

<div class="content-box">

### 🟣 GitHub Setup

- Repository created: [github.com/angshu-min-js/cursor-captionsgpt](https://github.com/angshu-min-js/cursor-captionsgpt)
- Code pushed directly to the repo
- .env files and sensitive information excluded from repository

### App Store Deployment

> 💡 **Note**: For detailed instructions on deploying your own mobile app to the App Store and Google Play Store, check out [Chapter 8: Mobile App Deployment](/part4/mobile-app-deployment) which covers the entire process from build generation to store submission.

### Tech Stack Summary

The final application uses:
- **React Native**: Cross-platform mobile development
- **Expo**: Simplified React Native development and deployment
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation between screens
- **Replicate API**: AI-powered caption generation with real-time updates
- **Expo SecureStore**: Local storage for caption history and settings
- **React Native Reanimated**: Animations
- **PostHog**: Analytics for tracking user engagement and app performance
- **Revenue Cat**: Subscription management and payment processing

</div>

## Key Lessons from Vibe Coding with AI

<div class="content-box">

### 🌟 What Worked Well

1. **Rapid Prototyping**: Using Cursor AI allowed for quick development cycles, cutting weeks off traditional development time
2. **Problem Solving**: AI helped overcome technical challenges like streaming API responses and Base64 encoding issues
3. **Iterative Development**: "Vibe coding" enabled functionality to evolve naturally based on testing and feedback
4. **Full Stack Capabilities**: AI handled both frontend (UI components) and backend (API integration) equally well

### 🚧 Challenges & Limitations

1. **Integration Complexity**: Some third-party services required manual troubleshooting beyond AI's initial solutions
2. **Context Limitation**: The AI sometimes forgot previous implementation details, requiring reminders
3. **Testing Gaps**: Manual testing was still essential, especially for edge cases
4. **API Updates**: When APIs changed, AI guidance needed to be supplemented with documentation research

### 💡 Key Takeaways

1. **Start Simple**: Begin with a clear MVP and expand features incrementally
2. **Work With AI**: Treat AI as a collaborative junior developer - guide it with clear requirements
3. **Verify Implementation**: Always check the generated code against requirements
4. **Keep Learning**: Understanding the basics of your tech stack improves AI collaboration
5. **Document Everything**: Keep track of key decisions and solutions for future reference

</div>

## Next Steps

<div class="content-box">

Part 5 of this project (in progress) will cover:
- Landing page development
- App Store assets creation
- App Store Optimization (ASO)
- Promotional video production
- Marketing strategy

Stay tuned for updates on the full launch story!

</div>

## Stay Updated 📬

Check back soon for the complete case study on Captions GPT's public launch, or [contribute to this section](/contribute) if you have insights about launching AI-powered mobile apps.
