# DMI Medical Website - Redesign Plan

## Overview
Redesign the existing single-page site to have a premium, handcrafted medical-industrial brand feel. This involves visual enhancements, adding a new section, and implementing scroll-triggered animations.

## Key Tasks

### 1. Setup & Dependencies
- [x] Install `framer-motion` for animations.
- [x] Install `react-countup` for the animated stats.
- [x] Install `react-intersection-observer` to trigger animations on scroll.
- [x] Generate a new hero background image.

### 2. New Component Creation
- [ ] Create `src/components/Verification.tsx` for the "Verification & Compliance" section.
- [ ] Create `src/hooks/useScrollAnimation.tsx` to manage scroll-triggered animations.

### 3. Component Redesign & Animation
- [ ] **Hero.tsx**:
    - Replace placeholder with a full-width background image.
    - Implement fade-up animation on load for text and buttons.
    - Use overlapping layers for a more dynamic layout.
- [ ] **Services.tsx**:
    - Implement stagger-in animation for service cards on scroll.
- [ ] **Process.tsx**:
    - Implement an animated connecting line between steps.
- [ ] **About.tsx**:
    - Integrate `react-countup` for the stats to animate when visible.
- [ ] **index.css**:
    - Add subtle section dividers and refine spacing for a premium feel.

### 4. Integration & Finalization
- [ ] Update `src/pages/Index.tsx` to include the new `Verification` section and animation logic.
- [ ] Run `pnpm run lint` to ensure code quality.
- [ ] Final review of all changes.