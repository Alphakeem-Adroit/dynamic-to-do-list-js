# Dynamic To-Do List JS

A simple, browser-based to-do list application built with **HTML**, **CSS**, and **vanilla JavaScript**.  
The app lets users add tasks, remove them, and persists the task list using **Local Storage** so tasks remain even after page reloads.  

---

## ⚙️ What It Does

- Allows users to **add tasks** via an input field and “Add Task” button (or pressing Enter).  
- Renders tasks as a list (`<ul>` / `<li>`).  
- Each task has a **Remove** button — clicking it deletes the task.  
- Uses `localStorage` so tasks are saved across page reloads.  
- On page load, previously saved tasks are loaded and displayed automatically.  

---

## 🗂 Project Structure

```

/           (root)
├── index.html      — The UI for the to-do list
├── styles.css      — Styling for the list, buttons, layout
├── script.js       — JavaScript logic (adding, removing, saving, loading tasks)
└── README.md       — This documentation

```

---

## 🚀 How to Run / Use

1. Clone or download this repository:

    ```bash
   git clone https://github.com/Alphakeem-Adroit/dynamic-to-do-list-js.git
    ```

2. Open `index.html` in your web browser.

3. Start using:

   * Type a task in the input field.
   * Press **Enter** or click **“Add Task”** to add it.
   * Click **“Remove”** on any task to delete it.
   * Tasks persist — refresh the page to see that saved tasks remain.

No installation, build steps, or backend needed — everything runs in the browser.

---

## 🛠️ How It Works (Key Logic)

* On page load (`DOMContentLoaded`), the script checks Local Storage for existing tasks.
* If there are saved tasks, they are parsed from JSON to an array and rendered in the task list.
* When a user adds a task:

  * A new `<li>` is created with the task text and a Remove button.
  * The task is added to the in-memory list and saved to Local Storage.
* When a user removes a task:

  * The `<li>` is removed from the DOM.
  * The task is removed from the stored list in Local Storage.

This ensures the to-do list stays in sync between the UI and storage.

---

## ✅ Features & Highlights

* ✅ Add tasks via button or **Enter key**
* ✅ Remove tasks individually
* ✅ Persistent storage via Local Storage — tasks survive page reloads
* ✅ Simple, clean, and dependency-free (only HTML, CSS, JS)
* ✅ Good foundation if you want to extend it — e.g. add editing, completion status, filters, etc.

---

## 🔧 How to Extend / Improve

You can easily extend the project by adding features such as:

* Mark tasks as “completed” (with a checkbox or toggle)
* Edit existing tasks
* Add timestamps or creation dates
* Add categories or tags for tasks
* Implement filtering (all / active / completed)
* Add a “Clear All” button to remove all tasks at once
* Improve UI/UX: animations, better styling, mobile responsiveness

---

## 📚 Why This Project Matters

This to-do list project is a great way to practice:

* DOM manipulation (creating/removing elements)
* Event handling (click, keypress)
* Working with Local Storage (persisting data across sessions)
* Vanilla JavaScript — no frameworks needed

It’s a solid starter project for beginners learning frontend development, and a good base to build more complex task managers.

---

## 🙋 Contribution

You are welcome to fork this project, experiment, and add new features.
If you build something useful or interesting (e.g. filtering, editing, UI improvements), feel free to open a pull request.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

> Built by **Alphakeem Adroit** — enjoy and happy coding!

---
