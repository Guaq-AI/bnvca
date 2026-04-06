---
title: BNVCA Website Implementation Plan
date: 2026-04-06
task_complexity: complex
---

# BNVCA Website Implementation Plan

## 1. Plan Overview
- **Total Phases**: 6
- **Agents Involved**: `architect`, `copywriter`, `design_system_engineer`, `coder`, `seo_specialist`
- **Estimated Effort**: High

## 2. Dependency Graph
```mermaid
digraph G {
  P1 [label="Phase 1: Project Setup"];
  P2 [label="Phase 2: Content Parsing"];
  P3 [label="Phase 3: Core Components"];
  P4 [label="Phase 4: Static Pages"];
  P5 [label="Phase 5: Form & Actions"];
  P6 [label="Phase 6: SEO & Polish"];

  P1 -> P2;
  P1 -> P3;
  P2 -> P4;
  P3 -> P4;
  P3 -> P5;
  P4 -> P6;
  P5 -> P6;
}
```

## 3. Execution Strategy

| Phase | Description | Agent | Execution Mode |
|-------|-------------|-------|----------------|
| 1 | Project Setup & Design System | `architect` | Sequential |
| 2 | Content Parsing & Structure | `copywriter` | Parallel (Batch 1) |
| 3 | Core Components & Animations | `design_system_engineer` | Parallel (Batch 1) |
| 4 | Static Page Implementation | `coder` | Parallel (Batch 2) |
| 5 | Consultation Form & Server Actions | `coder` | Parallel (Batch 2) |
| 6 | SEO, Analytics & Polish | `seo_specialist` | Sequential |

## 4. Execution Profile
- Total phases: 6
- Parallelizable phases: 4 (in 2 batches)
- Sequential-only phases: 2
- Estimated parallel wall time: ~10 minutes
- Estimated sequential wall time: ~25 minutes

## 5. Cost Estimation

| Phase | Agent | Model | Est. Input | Est. Output | Est. Cost |
|-------|-------|-------|-----------|------------|----------|
| 1 | architect | Pro | 2000 | 500 | $0.04 |
| 2 | copywriter | Flash | 4000 | 800 | $0.01 |
| 3 | design_system_engineer | Flash | 2500 | 600 | $0.005 |
| 4 | coder | Pro | 5000 | 1200 | $0.09 |
| 5 | coder | Pro | 3500 | 800 | $0.06 |
| 6 | seo_specialist | Flash | 4000 | 400 | $0.006 |
| **Total** | | | **21000** | **4300** | **~$0.21** |

## 6. Phase Details

### Phase 1: Project Setup & Design System
- **Objective**: Initialize the Next.js App Router project, configure Tailwind CSS, install shadcn/ui and Framer Motion.
- **Agent**: `architect`
- **Files Created**: `package.json`, `tailwind.config.ts`, `components.json`, `src/app/globals.css`, `src/app/layout.tsx`.
- **Implementation Details**: Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes`. Install `framer-motion`, `lucide-react`. Initialize shadcn/ui.
- **Validation**: `npm run build` succeeds without errors.
- **Dependencies**: `blocked_by`: [], `blocks`: [2, 3]
- **Risk**: LOW

### Phase 2: Content Parsing & Structure
- **Objective**: Process the parsed `copy.md` (unpacked from `copy.docx`) into structured TypeScript data objects.
- **Agent**: `copywriter`
- **Files Created**: `src/data/content.ts`
- **Implementation Details**: Extract services, team member details, firm history, and contact info into typed constants to decouple text from React presentation logic.
- **Validation**: TypeScript compilation passes (`npx tsc --noEmit`).
- **Dependencies**: `blocked_by`: [1], `blocks`: [4]
- **Risk**: MEDIUM

### Phase 3: Core Components & Animations
- **Objective**: Build reusable Framer Motion wrappers, Global Navigation, and Footer.
- **Agent**: `design_system_engineer`
- **Files Created**: `src/components/animations/ScrollReveal.tsx`, `src/components/layout/Navigation.tsx`, `src/components/layout/Footer.tsx`.
- **Implementation Details**: Create a `ScrollReveal` component using `<motion.div whileInView>`. Build responsive navigation and footer applying the Mumbai address and links.
- **Validation**: `npm run build` succeeds.
- **Dependencies**: `blocked_by`: [1], `blocks`: [4, 5]
- **Risk**: LOW

### Phase 4: Static Page Implementation
- **Objective**: Build the static pages for Home, About, Services, Team, and Contact using the structured content.
- **Agent**: `coder`
- **Files Created**: `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/services/page.tsx`, `src/app/team/page.tsx`, `src/app/contact/page.tsx`.
- **Implementation Details**: Map over `src/data/content.ts` to render sections. Wrap key sections in `<ScrollReveal>`. Integrate `team1.jpeg`, `team2.jpeg`, `team3.jpeg` via `next/image`.
- **Validation**: Next.js builds successfully.
- **Dependencies**: `blocked_by`: [2, 3], `blocks`: [6]
- **Risk**: MEDIUM

### Phase 5: Consultation Form & Server Actions
- **Objective**: Build the secure consultation capture form with Zod validation, a honeypot field, and a Resend server action.
- **Agent**: `coder`
- **Files Created**: `src/components/forms/ConsultationForm.tsx`, `src/app/actions/sendEmail.ts`.
- **Implementation Details**: Create the client-side form using `react-hook-form` and `@hookform/resolvers/zod`. Server action `sendEmail` uses `resend` to send to `bnvcaoffice@gmail.com`. Include a hidden honeypot field.
- **Validation**: Form validates correctly on the client; server action type checks.
- **Dependencies**: `blocked_by`: [3], `blocks`: [6]
- **Risk**: HIGH

### Phase 6: SEO, Analytics & Polish
- **Objective**: Add Vercel Analytics, configure Next.js metadata API for all routes, and inject JSON-LD structured data for local business SEO.
- **Agent**: `seo_specialist`
- **Files Modified**: `src/app/layout.tsx`, `src/app/page.tsx`
- **Files Created**: `src/components/SEO.tsx`
- **Implementation Details**: Install `@vercel/analytics`. Add `<Analytics />` to layout. Generate `generateMetadata` exports for deep SEO. Add LocalBusiness JSON-LD schema for the Mumbai CA firm.
- **Validation**: `npm run build` succeeds and linting passes.
- **Dependencies**: `blocked_by`: [4, 5], `blocks`: []
- **Risk**: LOW