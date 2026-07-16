## Lecture 1: Project Setup, json-server & First Data Fetch

**Checkout this lecture's code:** `git checkout lecture-01`

### What we covered

- Created a Next.js app (TypeScript, Tailwind CSS, App Router)
- Installed and configured `json-server` as a fake REST API (`npm run api` → localhost:4000)
- Built an industry-style feature-based folder structure (`components/`, `features/`, `lib/api/`, `types/`)
- Wrote our first TypeScript `interface` (`Contact`) as the single source of truth for contact data shape
- Wrote a typed API function (`getContacts`) — the only place in the app allowed to call `fetch`
- Rendered the contact list using an `async` Server Component — no `useEffect`, no client-side loading state, data is fetched on the server before the page is sent to the browser

### Key commands

| Command       | Purpose                                                         |
| ------------- | --------------------------------------------------------------- |
| `npm run dev` | Start Next.js (localhost:3000)                                  |
| `npm run api` | Start json-server (localhost:4000) — run in a separate terminal |

### Key concept: Server Components fetch data directly

In the App Router, components are Server Components by default and can be `async`. They run entirely on the server — the browser only ever receives the finished HTML, not the fetching logic.
