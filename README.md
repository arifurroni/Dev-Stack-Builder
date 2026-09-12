# 🧱 Dev Stack Builder

### 🚀 Build Your Perfect Development Stack

A modern and responsive **Dev Stack Builder** web application where developers can explore popular technologies and build their own personalized technology stack.

The project provides technology cards with useful information such as category, difficulty level, rating, badge, and description. Users can add technologies to their personal stack, remove individual technologies, or clear the entire stack.


---


## 🌐 Live Demo

🔗 **Live Website:** [https://dev-stack-builder-ar.netlify.app/](https://dev-stack-builder-ar.netlify.app/)

🔗 **GitHub Repository:** [https://github.com/arifurroni/Dev-Stack-Builder](https://github.com/arifurroni/Dev-Stack-Builder)


---


## 🛠️ Technologies Used

- ⚛️ **React.js** — Building the user interface
- 🔷 **TypeScript** — Type-safe development
- 🎨 **Tailwind CSS** — Styling and responsive design
- 🌼 **DaisyUI** — UI components
- 🔔 **React-Toastify** — Toast notifications
- 📄 **JSON** — Managing technology data
- ⚡ **Vite** — Development and build tool
- 🎯 **Lucide React** — Icons


---


## ✨ Features

### 1. 🔍 Explore Technologies

Browse popular development technologies with useful information including:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Badge
- Technology icon

### 2. 🧱 Build Your Own Stack

Add your favorite technologies to **Your Stack** and create a personalized development stack.

You can:

- ➕ Add technologies
- ❌ Remove individual technologies
- 🗑️ Remove all technologies
- 🚫 Prevent duplicate technologies

### 3. 📱 Fully Responsive Design

The website is designed to work smoothly across:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

The navigation, technology cards, and stack section automatically adapt to different screen sizes.


---

# React Questions & Answers:
1. What is JSX, and why is it used in React?
- JSX (Javascript XML) is a syntax of Javascript that allow us to write HTML like code inside Javascript. React uses JSX for makes UI code easier to read and write.

2. What is the difference between props and state?
- Props and State are both used to manage data in React, but they have different purposes.
Props: passed from parent component to a child component. It is read-only. Used to pass data between component. Child component should not modify props directly.
State: Managed inside a component. Can be changed. Used for data that changes over time. State can be updated using a setter function.

3. What does the useState hook do, and where did you use it in this project?
- The useState hook allows a React component to store and update data. In this project, it can be used to manage the selected technologies in the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
- The useEffect hook allow us to perform side effects in a React component. In this project, it is useful for loading the technology JSON data when the component is initialized.

5. Why does every item in a .map() list need a unique key prop?
- React use the key to identify individual items in a list. A unique key helps React understand which items have changed, been added or removed.

6. What is conditional rendering? Show one place you used it.
- Conditional rendering means displaying different UI depending on a condition. For example, if the user have not selected any technologies, we can display an empty message.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- A parent component send data to a child through props. To send information back to the parent, the parent can pass a function as a props.


---


# 💡 Future Improvements
🔐 User authentication
💾 Save stack to database
🔎 Technology search functionality
🗂️ Filter technologies by category
🌙 Dark mode
📊 Stack statistics

---

👨‍💻 Developer

Md. Arifur Rahman

MERN Stack Developer