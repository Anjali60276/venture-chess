## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Agent Rules

### Rule 1: Commands need my permission
- NEVER run `npm run check`, `npm run build`, or `git status` until I clearly say "approved".
- After finishing work, list the commands you want to run and wait for permission.

### Rule 2: Explain every change like a teacher
After every task, give a report written like an ex-Google senior engineer turned professor teaching beginners, including students with ADHD or dyslexia.

**Format:**
1. **One-line summary**: what changed, in plain words (in a boxed callout with BEFORE vs AFTER changes).
2. **Big idea first**: the concept in 2-3 short sentences, before any code.
3. **Real-world analogy**: one simple everyday example (e.g., "a picture frame that swaps photos by room size").
4. **Step-by-step walkthrough**: one small step at a time, each with: what, why, and the exact file link with line ranges.
5. **Summary & Code Reference Tables**: comparison tables showing BEFORE vs AFTER changes for every modified file, with exact line numbers and clickable file links.
6. **ASCII diagram**: a simple visual of the layout or flow.
7. **Code explained section by section**: quote a few lines, then explain each in simple words.
8. **Common mistakes**: what beginners usually get wrong here.
9. **What to learn next**: the 5 most important lines or concepts, with file and line numbers.
10. **Quick recap**: 3 bullet points.

**Style:**
- Short sentences. Short paragraphs. No walls of text.
- Define every technical word the first time it appears.
- Use headings, bullets, tables, and spacing generously.
- Be encouraging, never condescending.
### Rule 3: Clickable direct line links
- Every file reference in reports, walkthroughs, and comparison tables MUST be a clickable link with line numbers using the `file:///` protocol (e.g., `[Header.astro:L28-L34](file:///c:/Users/HP/Desktop/Chess/venture-chessacademy/src/components/global/Header.astro#L28-L34)`).
- Clicking the link must navigate directly to the specified file and line range.

### Rule 4: BEFORE vs AFTER Changes Table
- In every report's summary table, list every modified file with a comparison showing the BEFORE value vs AFTER value and mention the exact line numbers (with clickable `file:///` links).


# Project rules

## 1. Scope and speed
- Do only the task in my message. No extra work, extra improvements or extra audits.
- Work on one section or one page at a time. If a task touches more than I named, or more than 3 files, stop and ask first.
- Read only the file of the section I named, plus the shared style file if needed. Search for values. Don't open every file.
- Do an audit only when I write the word "audit". Keep it to one short table.
- Don't open images to measure them. Don't recompress images unless I ask.
- Edit only the parts that need a change. Don't rewrite whole files. Make the change, then stop. No polish pass.
- Don't create new files, components or libraries unless I approve.
- Remove the old code your change replaces. No dead code and no commented-out blocks.

## 2. Commands
- Don't run the dev server, build, `npm run check`, `git status`, or any other command. Don't open the browser. I test it myself.
- If you think a command is needed, name it, say why, and wait for my answer.

## 3. Corrections
- When I point out a problem, fix only that problem.
- Say the cause in one or two plain sentences before you fix it. Fix the root cause. Don't hide it with a patch.
- Don't undo work I already approved.
- Don't say "it is fixed". Say what you changed and what I should check.
- If your fix doesn't work, stop and tell me what you think is wrong. Don't pile on more changes. Remove the leftovers of the wrong attempt.
- If my request is unclear, ask one short question before you edit.
- If a style is shared and your change would also change other sections, don't edit the shared style. Add the rule only for the section, or stop and ask.
- Shared parts (navbar, footer) are edited in their one shared place. If a copy exists on each page, stop and ask.

## 4. Typography
- Maximum 3 font families, prefer 2 (one for headings, one for body). Every font has a fallback. Load fonts in one place, only the weights in use, with `font-display: swap`. Remove unused fonts.
- Define the type scale once and use it everywhere. No random sizes.
  - Hero title (H1): about 52px, the largest text.
  - Section titles (H2): 32 to 36px, weight 700, line height about 1.2.
  - Item titles (H3): 22 to 24px. Card titles: 18 to 20px.
  - Body text: 15 to 16px, line height 1.5 to 1.6. Small text and labels: 13 to 14px.
  - Smallest body text on phone: 14px. Use `clamp()` so sizes scale smoothly.
- One H1 per page. Section titles are H2, card and item titles are H3.
- Titles use sentence case.
- Small labels and numbers on light backgrounds use brand orange, never yellow.

## 5. Spacing and layout
- One shared container for all sections and pages. Side padding on phone: 16 to 20px.
- Use only the shared spacing scale. No random pixel values.
- The gap between sections comes from the section's top and bottom padding only. No margins on top of it.
  - Laptop about 80 to 96px, tablet about 72 to 80px, phone about 56px.
- The gap between a section title and its content is the same in every section.
- Cards use the same inner padding, the same gap between cards, and the same gap between image, title and text.
- No negative margins, empty spacer elements or fixed heights to close a gap.
- Nothing may scroll sideways at any width, including 320px.

## 6. Layout patterns (lessons from earlier problems)
- A button's text never wraps. A button is only as wide as its text plus padding, and it is never placed in a column narrower than that.
- In a grid, anything that should be wider than one column (a button, a divider, a bottom bar) spans all columns.
- Spacing between list items comes from one gap value. Remove default margins on paragraphs, list items and links.
- In rows of links that wrap, the row gap is the same as, or a little smaller than, the gap between links.
- Tap areas are at least 44px, even when the visible element is smaller.
- Sticky titles only on laptop two-column layouts. Never on phone and tablet.
- Carousels show whole cards only. One click moves one card. Swipe works. Arrows are disabled at the first and last card. All arrows use one shared style.
- No hover effect on the FAQ rows. Animate only transform and opacity, about 0.2 to 0.4 seconds, and respect reduced motion.
- Buttons already changed to an 8px radius (Join Free Session, View All Results, View All Courses) keep it. Don't change other buttons' shape without asking.

## 7. Images and performance
- Use webp, kept in the public folder. Every image has width, height and a short description.
- Serve the right size for each screen. Lazy-load images below the first screen.
- The banner image loads first, with high priority, and is never lazy-loaded.
- Load each script once, only on pages that need it. No new library without asking.

## 8. Design values
- Breakpoints: phone up to 640px, tablet 641 to 1024px, laptop above 1024px.
- Navbar active link: peach `#FDE6CB` pill with burnt orange `#B65617` text.
- Test widths I use: 320, 360, 390 or 412, 768, 1440.

## 9. Teaching style and after-change report
- Explain for a beginner. Use short sentences and simple words. Explain a new term the first time you use it.
- Explain the idea first, then the code, section by section. Use one real-world example. Add a small ASCII diagram when a layout changed.
- After every change, give a short work summary first (files edited, what changed), then this report in the same order:
  1. **What changed:** file, section, old value to new value.
  2. **Why:** the cause, and why you chose this fix. Say clearly if you made a choice I didn't ask for.
  3. **Learn before:** 2 or 3 ideas I need to follow the change, with where I can see them in the file.
  4. **Learn after:** 2 or 3 ideas to study next, linked to this change.
  5. **Example:** one real-world comparison.
  6. **Test:** 2 or 3 things for me to check, with the screen widths.
- Keep each part to 2 to 4 lines. Build the report only from the changes you made. Don't read more files or run anything to write it.
- If I write "skip explanation", give only the work summary. If I only ask a question and you changed nothing, give no report.

## 10. Conflicts
- If two rules conflict, or my message conflicts with a rule, tell me and wait. For that task, my message wins.
