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
5. **Summary & Code Reference Tables**: simple comparison tables of updated pages and exact lines of code added.
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

