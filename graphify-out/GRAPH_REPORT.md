# Graph Report - .  (2026-06-13)

## Corpus Check
- Corpus is ~1,113 words - fits in a single context window. You may not need a graph.

## Summary
- 75 nodes · 68 edges · 12 communities (8 shown, 4 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.77)
- Token cost: 42,885 input · 3,500 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Compiler Options|TypeScript Compiler Options]]
- [[_COMMUNITY_Package Manifest & Scripts|Package Manifest & Scripts]]
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_Landing Page & Branding|Landing Page & Branding]]
- [[_COMMUNITY_Next.js Config & Agent Rules|Next.js Config & Agent Rules]]
- [[_COMMUNITY_Styling & Runtime Stack|Styling & Runtime Stack]]
- [[_COMMUNITY_Root Layout Internals|Root Layout Internals]]
- [[_COMMUNITY_TSConfig File Scope|TSConfig File Scope]]
- [[_COMMUNITY_Next Config Internals|Next Config Internals]]
- [[_COMMUNITY_Document Icons|Document Icons]]
- [[_COMMUNITY_Globe Icon|Globe Icon]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Next.js 16 Framework` - 6 edges
3. `scripts` - 5 edges
4. `Home Page Component` - 5 edges
5. `RootLayout Component` - 3 edges
6. `idi-center Package` - 3 edges
7. `Tailwind CSS 4` - 3 edges
8. `paths` - 2 edges
9. `Tailwind Dark Mode Theming` - 2 edges
10. `Next.js Breaking-Changes Agent Rule` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Home Page Component` --references--> `create-next-app Bootstrap README`  [INFERRED]
  app/page.tsx → README.md
- `Next.js Breaking-Changes Agent Rule` --rationale_for--> `Next.js 16 Framework`  [INFERRED]
  AGENTS.md → package.json
- `create-next-app Bootstrap README` --references--> `Next.js 16 Framework`  [EXTRACTED]
  README.md → package.json
- `Home Page Component` --references--> `Next.js Wordmark Logo`  [EXTRACTED]
  app/page.tsx → public/next.svg
- `Home Page Component` --references--> `Vercel Triangle Logomark`  [EXTRACTED]
  app/page.tsx → public/vercel.svg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Next.js App Router Tech Stack** — pkg_nextjs16, pkg_react19, pkg_tailwind4, layout_rootlayout, page_home [INFERRED 0.75]
- **Build & Lint Tooling Configuration** — eslint_config, postcss_config, tsconfig_pathalias, nextconfig_default [INFERRED 0.75]
- **Agent Guidance Documentation Chain** — claudemd_agentsref, agents_nextjs_breaking, readme_createnextapp [INFERRED 0.65]

## Communities (12 total, 4 thin omitted)

### Community 0 - "TypeScript Compiler Options"
Cohesion: 0.12
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 1 - "Package Manifest & Scripts"
Cohesion: 0.15
Nodes (12): dependencies, next, react, react-dom, name, private, scripts, build (+4 more)

### Community 2 - "Dev Dependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 3 - "Landing Page & Branding"
Cohesion: 0.25
Nodes (8): Geist Font Configuration, Page Metadata, RootLayout Component, Home Page Component, create-next-app Bootstrap README, Vercel Deployment Guidance, Next.js Wordmark Logo, Vercel Triangle Logomark

### Community 4 - "Next.js Config & Agent Rules"
Cohesion: 0.29
Nodes (6): Next.js Breaking-Changes Agent Rule, CLAUDE.md AGENTS.md Reference, eslintConfig, Next.js Config (empty), Next.js 16 Framework, TypeScript @/* Path Alias

### Community 5 - "Styling & Runtime Stack"
Cohesion: 0.33
Nodes (5): Tailwind Dark Mode Theming, idi-center Package, React 19, Tailwind CSS 4, config

### Community 6 - "Root Layout Internals"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

## Knowledge Gaps
- **51 isolated node(s):** `geistSans`, `geistMono`, `metadata`, `eslintConfig`, `nextConfig` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `TypeScript Compiler Options` to `TSConfig File Scope`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package Manifest & Scripts`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `Next.js 16 Framework` connect `Next.js Config & Agent Rules` to `Landing Page & Branding`, `Styling & Runtime Stack`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Next.js 16 Framework` (e.g. with `Next.js Breaking-Changes Agent Rule` and `eslint.config.mjs`) actually correct?**
  _`Next.js 16 Framework` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `Home Page Component` (e.g. with `RootLayout Component` and `Tailwind Dark Mode Theming`) actually correct?**
  _`Home Page Component` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `geistSans`, `geistMono`, `metadata` to the rest of the system?**
  _52 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._