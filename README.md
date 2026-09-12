# 🚀 DevStack - Build Your Ideal Development Stack

**DevStack** is a modern and responsive web application built for developers to explore various frontend, backend, database, and tooling options, compare them, and build their ideal project technology stack.

---

## 🛠️ Technologies Used
* **React** (Vite)
* **TypeScript**
* **Tailwind CSS**
* **React Toastify** (for notifications)

---

## ✨ Key Features
1. **Interactive Tech Stack Selection:** Browse through multiple technologies and add them to your custom stack with duplicate detection.
2. **Responsive UI & Shared Brand Theme:** Features a mobile-friendly design, hamburger menu, and a unified gradient theme.
3. **Toast Notifications:** Real-time feedback alerts using `react-toastify` for adding, removing, and clearing stacks.

---

# 📚 React Conceptual Questions & Answers

### i. What is JSX, and why is it used in React?
**Answer:** JSX stands for JavaScript XML. It allows us to write HTML structures directly inside JavaScript code. It is used in React because it makes the code much cleaner, easier to read, and write UI components without needing complex `createElement` methods.

### ii. What is the difference between props and state?
**Answer:** 
* **Props** These are data passed down from a parent component to a child component. They are read-only, cannot be changed by the child.
* **State** This is data managed inside a component itself. It can change and update over time when a user interacts with the app

### iii. What does the `useState` hook do, and where did you use it in this project?
**Answer:** useState is a React Hook that lets us store and update data (state) in a component. In this project, we used it to manage the selected technologies list (selectedStack) and open/close the mobile menu.
### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**useEffect lets us run side effects in components, such as fetching data from an API or a local file. We used it to load the technology data from our JSON file when the app first loads.
### v. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** eact uses the key prop to easily track which items in a list have changed, been added, or removed. This helps React update the screen efficiently and keeps performance fast.
### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:** Conditional rendering means displaying different UI elements or components based on certain conditions (like `true` or `false`). 
* *Example used in our project:*
```tsx
{selectedStack.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    <div className="space-y-4">...</div>
)}
### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
* **Parent to Child:** We pass data down using **props**.
* **Child to Parent:** The child sends data back by calling a **function (callback)** that was passed down from the parent via props.
