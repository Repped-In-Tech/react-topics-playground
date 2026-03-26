# React Topics — Lesson Guide

This project covers the core React concepts you'll use every day: **props**, **state**, **events**, **hooks**, and **routing**. Each lesson is a page in the app. Follow the order below.

---

## Lesson Order

### 1. Props — `src/app/props/page.js`
**Key component:** `src/components/Loading.js`

Props are data passed into a component from the outside, like arguments to a function. The parent controls what values are sent; the component decides what to do with them.

**What to look for:**
- `<Loading />` with no props — triggers default values defined in the component
- `<Loading color="green" />` — a named prop changes the spinner color
- `<Loading>...</Loading>` — anything between the tags becomes the special `children` prop
- In `Loading.js`: how props are destructured from the parameter list, and how defaults are set

---

### 2. Events — `src/app/events/page.js`

This is your first look at **state**. State is data that lives inside a component and causes a re-render when it changes.

**What to look for:**
- `useState('')` — declares a piece of state with an initial value; returns `[value, setter]`
- Each handler (`handleClick`, `handleChange`, `handleSubmit`, `handleReset`) demonstrates a different browser event
- `event.preventDefault()` on form submit — stops the browser from reloading the page
- `{eventText || 'Welcome to events!'}` — the `||` fallback pattern for empty state

---

### 3. Hooks — `src/app/hooks/page.js`

Builds on `useState` and introduces `useEffect` — the hook for running side effects after a component renders.

**What to look for:**
- `useState` with a non-empty initial value
- `useEffect` with an empty `[]` dependency array — runs once on mount
- The cleanup `return () => clearTimeout(timer)` — prevents memory leaks when the component unmounts
- Watch the page load: the text changes after 5 seconds, driven entirely by the effect

---

### 4. Forms — `src/app/forms/page.js`
**Key components:** `src/components/Form.js`, `src/components/NameCard.js`

Ties everything together: array state, object state, controlled inputs, and **lifting state up** so sibling components can share data.

**What to look for:**
- Array state (`useState([])`) — adding items with the spread operator
- Object state (`useState({})`) — tracking which item is in "edit mode"
- Functional state update: `prevState => [...prevState, newPerson]` — safer than spreading directly
- **Lifting state up**: `editItem` and `setEditItem` live in the parent (`forms/page.js`) so both `NameCard` and `Form` can read and update the same value
- In `Form.js`: computed property name `[name]: value` — one `handleChange` for all inputs
- The form knows whether to add or update based on whether `obj.name` is set

---

### 5. Routes — `src/app/routes/page.js` *(time permitting)*
**Key files:** `src/app/my-folder/new-route/page.js`, `src/app/my-folder/[dynamicKey]/page.js`

Demonstrates how Next.js App Router handles navigation and dynamic URL segments.

**What to look for:**
- Folder structure = URL structure — no route config needed
- `[dynamicKey]` folder name — square brackets create a dynamic segment
- `params.dynamicKey` in the component — how the URL value is accessed
- You can only have one dynamic folder per directory level

---

## Server vs Client Components

| | Server Component | Client Component |
|---|---|---|
| Marker | *(no marker needed — default)* | `'use client'` at top of file |
| Can use hooks? | No | Yes |
| Runs on | Server | Browser |
| Examples in this project | `props/page.js`, `routes/page.js` | `events/page.js`, `hooks/page.js`, `forms/page.js` |

If you try to use `useState` or `useEffect` without `'use client'`, Next.js will throw an error.
