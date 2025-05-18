---
title: "PM Games - Building Interactive Games for Personal Website"
description: "A case study on building interactive product management games using AI coding assistants"
keywords: "product management games, interactive learning, Cursor AI, React, TypeScript, Vite, Tailwind CSS"
author: "Angshuman Gupta"
date: 2024-03-20
type: case-study
---

# PM Games: Building Interactive Games for Personal Website 🎮

> "The best way to learn is by doing, and the best way to do is by playing." - Anonymous

<div class="content-box">

This case study explores how I built a suite of interactive games for my personal website (angshumangupta.com) to help product managers practice real-world skills through play. These games simulate scenarios like feature prioritization, metric matching, and team planning, providing engaging and educational experiences for PMs. I used Cursor as my AI coding assistant to generate and refine the components, dramatically speeding up development.

</div>

## 🎯 Development Approach

<div class="content-box">

The development process followed a consistent pattern for each game:

1. **Idea Generation & Brainstorming:**
   - Used ChatGPT to brainstorm game concepts and mechanics
   - Generated initial feature lists and gameplay scenarios
   - Refined game ideas through iterative AI conversations

2. **Prompt Structure (For Cursor):**
   ```
   In my existing website built with React, TypeScript, Vite, and Tailwind CSS, build me the game {game name}. The game does {game functionality}. Create them as separate files.
   ```

3. **Component Architecture:**
   - Each game was developed as an independent component
   - Seamless integration with existing React + Tailwind codebase
   - Consistent state management using React hooks

</div>

## 🛠️ Tools Used

<div class="content-box">

- **AI Assistants:** 
  - Cursor for code generation and implementation
  - ChatGPT for brainstorming and idea generation
- **Stack:** React, TypeScript, Vite, Tailwind CSS, Shadcn UI

</div>

## 🎲 Game Portfolio

### 1. Quick Prioritization Game

<div class="content-box">

**URL:** [https://angshumangupta.com/#/?game=prioritization](https://angshumangupta.com/#/?game=prioritization)

**Purpose:**
- Simulate sprint planning exercise
- Select features based on value and effort
- Stay within fixed capacity

**Gameplay:**
- Players select features from a list with Value and Effort scores
- Capacity is capped with feedback when exceeded
- Players aim to maximize total Value without exceeding Effort

**Technical Features:**
- React component with useState hooks
- UI: Cards, Progress bar for capacity usage
- Final score display with close button

</div>

### 2. Feature-Metric Matcher

<div class="content-box">

**URL:** [https://angshumangupta.com/#/?game=feature-metric](https://angshumangupta.com/#/?game=feature-metric)

**Purpose:**
- Teach players to associate product initiatives with relevant success metrics

**Gameplay:**
- Drag and drop metrics onto features
- Real-time feedback for each match
- Final score shows performance

**Technical Features:**
- Drag-and-drop using react-beautiful-dnd
- State for matching, scoring, and feedback
- Two-column layout for clarity

</div>

### 3. Stack Challenge

<div class="content-box">

**URL:** [https://angshumangupta.com/#/?game=stack-challenge](https://angshumangupta.com/#/?game=stack-challenge)

**Purpose:**
- Help PMs think through basic tech stack decisions based on hypothetical projects

**Gameplay:**
- Player selects frontend, backend, and database options
- Based on choices, feedback is given (e.g., "Good choice", "Overkill")

**Technical Features:**
- Simple card/radio selection UI
- Predefined logic for feedback
- State for stack selections and scenario

</div>

### 4. Burnout Meter

<div class="content-box">

**URL:** [https://angshumangupta.com/#/?game=burnout-meter](https://angshumangupta.com/#/?game=burnout-meter)

**Purpose:**
- Balance sprint planning with team well-being

**Gameplay:**
- Choose tasks based on Effort and Impact
- Stay within capacity to avoid increasing burnout
- Play through 3 sprints, receive team feedback

**Technical Features:**
- State-managed sprints, burnout, and impact
- Visual indicators for burnout and sprint number
- Summary message at the end of game

</div>

### 5. PM vs Engineer Tic Tac Toe

<div class="content-box">

**URL:** [https://angshumangupta.com/#/?game=tictactoe](https://angshumangupta.com/#/?game=tictactoe)

**Purpose:**
- Lighthearted take on PM-Engineer collaboration and conflict

**Gameplay:**
- Classic Tic Tac Toe with a twist: PM vs AI Engineer
- AI sometimes makes suboptimal moves (30% chance)
- Score tracked across rounds

**Technical Features:**
- Minimax algorithm with randomness
- React state for board, turns, winner, and score
- UI: Grid layout, icons, toast notifications

</div>

## 🎯 Key Takeaways

<div class="content-box">

1. **Rapid Prototyping:**
   - AI tools like Cursor enabled quick iteration and refinement
   - Each game component was developed independently
   - Seamless integration with existing codebase

2. **Educational Value:**
   - Games provide practical PM skill practice
   - Interactive learning through real-world scenarios
   - Engaging way to demonstrate PM concepts

3. **Technical Implementation:**
   - Clean component architecture
   - Consistent state management
   - Modern React patterns and practices

4. **Future Potential:**
   - Framework for adding more educational games
   - Potential for multiplayer features
   - Integration with learning management systems

</div>

## 🔗 Resources

<div class="content-box">

- [Personal Website](https://angshumangupta.com)
- [GitHub Repository](https://github.com/angshu-min-js/angshumangupta.com)
- [Cursor AI](https://cursor.sh)

</div>

<script setup>
import BaseSEO from '../.vitepress/theme/components/BaseSEO.vue'
</script>

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