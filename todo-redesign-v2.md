# DMI Medical Website - "Engineered" Redesign Plan

## Overview
Transform the site into a custom, hand-crafted, and "engineered" experience. This involves significant layout changes, custom grid systems, and advanced styling with angled dividers and enhanced animations.

## Key Tasks

### 1. Global Styles & Structure
- [ ] **index.css**:
    - Implement angled section dividers using CSS `clip-path`.
    - Refine the color palette and typography for a more premium feel.
- [ ] **components/ui/Section.tsx**:
    - Create a reusable Section component to handle angled dividers and consistent padding.

### 2. Component Redesign
- [ ] **Hero.tsx**:
    - Implement a full-height layout with a dark gradient overlay.
    - Position text to the left and make buttons overlap the section below.
    - Refine the fade-in animation.
- [ ] **Services.tsx**:
    - Rebuild the layout into a custom, asymmetrical grid (1 large, 2 medium, etc.).
    - Add subtle icon motion on hover.
- [ ] **Process.tsx**:
    - Verify and enhance the horizontal animated line connecting the steps.
- [ ] **About.tsx (to become Stats.tsx)**:
    - Refactor the component to be a dedicated stats bar.
    - Style it as a colored strip that overlaps adjacent sections.
    - Ensure the count-up animation is smooth.
- [ ] **Verification.tsx**:
    - Redesign into a two-column layout: a paragraph on the left and a vertical timeline on the right.

### 3. Integration & Finalization
- [ ] Update `src/pages/Index.tsx` to reflect component changes (e.g., renaming About to Stats).
- [ ] Run `pnpm run lint` and `pnpm run build` to ensure code quality and successful compilation.
- [ ] Final review of all visual and interactive changes.