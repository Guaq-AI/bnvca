# BNVCA Website Update Plan

## Objective
Implement specific content and structural changes based on client feedback to align the website with the firm's brand identity, accurately reflect their services, and simplify the user experience using the approved `copy.docx` content.

## Key Files & Context
- `src/data/content.ts`: Central data store for services, team, and company info.
- `src/components/layout/Navigation.tsx`: Main site navigation.
- `src/components/layout/Footer.tsx`: Site footer.
- `src/app/page.tsx`: Home page (to be merged with About).
- `src/app/about/page.tsx`: About page (to be deleted).
- `src/app/services/[slug]/page.tsx`: Dynamic service page.
- `src/app/team/page.tsx`: Team page.
- `src/app/contact/page.tsx`: Contact page.
- `src/app/privacy/page.tsx` & `src/app/terms/page.tsx`: Legal pages (to be deleted).

## Implementation Steps

### 1. Global Content & Branding Updates (`src/data/content.ts`, `Navigation.tsx`, `Footer.tsx`)
- Update the firm name in the top right corner (Navigation) from "BNV CA" to "B. N. Vaidya & Associates".
- Add a placeholder for the CA logo in the Navigation and Footer to replace the "B" block (pending asset delivery).
- Remove the "Journey/History" section (`firmHistory`) from `content.ts`.
- Remove "Bullion & Advisory" from the `services` array in `content.ts`.
- Remove the `caseStudy` object from all remaining services in `content.ts`.
- Update team profiles in `content.ts` by removing the `role` field ("Senior Partner", "Partner") to prevent misinterpretation, keeping the bio text as is.
- In `Footer.tsx`, rename "Mumbai Office" to "Office".
- Remove copyright, privacy policy, and terms of service links from `Footer.tsx`.

### 2. Legal Pages Removal
- Delete `src/app/privacy/page.tsx`.
- Delete `src/app/terms/page.tsx`.

### 3. Home & About Page Merge (`src/app/page.tsx`, `src/app/about/page.tsx`)
- Simplify the Home page hero section by removing the exaggerated big text and replacing it with a basic, professional introduction using the "About us" text from `copy.docx`.
- Migrate the "Mission" and core principles from the current About page into the Home page, strictly using the approved language from the word document.
- Remove the Statistics section (35+ years, 10k+ audits, etc.) from the Home page.
- Ensure the office address is fully visible on the Home page and includes the Google Maps link.
- Delete the `src/app/about` directory.
- Update `Navigation.tsx` and `Footer.tsx` to remove the "About" link.

### 4. Services Page Updates (`src/app/services/[slug]/page.tsx`)
- Update the dynamic service page template to stop rendering the "Case Study" section, as it will be removed from the data.

### 5. Contact Page Updates (`src/app/contact/page.tsx`)
- Rename the "HEADQUARTERS" label to "OFFICE".
- Update the business hours to simply state "Monday to Saturday", removing the "Saturday by appointment" note.

## Verification & Testing
- Verify all navigation links work and no broken links exist (especially to `/about`, `/privacy`, and `/terms`).
- Check the Home page on mobile and desktop to ensure the simplified text and address layout render correctly without cut-offs.
- Review the `/team` and `/services` pages to confirm the removal of roles, case studies, and the Bullion service.
- Confirm the Contact page reflects the updated terminology and hours.