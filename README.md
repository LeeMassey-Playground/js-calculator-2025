# 📟 JavaScript Calculator For The Odin Project

A simple, clean, fully functional calculator built with **HTML**, **CSS**, and **vanilla JavaScript**.
This project demonstrates DOM manipulation, event handling, state management, and logical operation flow — without relying on any frameworks.

Includes keyboard functionality

---

## 🚀 Live Demo

👉 https://leemassey-playground.github.io/js-calculator-2025/

---

## ✨ Features

### ➕ Basic Arithmetic

Supports the four fundamental operations:

* Addition
* Subtraction
* Multiplication
* Division

### 🔢 Clean Input Handling

* Prevents multiple decimals
* Prevents invalid leading zeros
* Displays current operation in real-time
* Supports chained operations (e.g., `2 + 3 + 4 =`)

### 🧹 Utility Buttons

* **C** — Clear all values
* **Del** — Delete last entered digit
* **=** — Perform calculation

### 🧠 Smart State Logic

The calculator internally manages:

* `a` — first number
* `b` — second number
* `operator` — selected operator
* `register` — current input
* `result` — last computed value

Ensures clean transitions between entering numbers, pressing operators, and running operations.

---

## 🛠️ Tech Stack

This project uses **no libraries and no frameworks** — only core web technologies:

* **HTML5** for structure
* **CSS3** for layout & styling
* **JavaScript (ES6+)** for logic and interactivity

---

## 📁 File Structure

```
/project-folder
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## 📚 How It Works

The calculator uses a **state-driven** approach, where the UI updates based on the values of internal variables (`a`, `b`, `operator`, `result`, etc).

### Key ideas:

* Numbers append to `register`
* Selecting an operator moves `register` → `a`
* Pressing `=` moves `register` → `b` and triggers the calculation
* Results are converted back to strings for further operations

### Example (pseudo-flow):

```
User presses 7 → register = "7"
User presses + → a = "7", operator = "+"
User presses 3 → register = "3"
User presses = → b = "3", result = 10
```

---

## 🧑‍💻 Author

**Lee Massey**

GitHub: *https://www.github.com/LeeMassey*

---

## ⭐ Acknowledgments

This project was created as part of my learning journey through **The Odin Project**, practicing JavaScript fundamentals and improving my ability to write clean, organized, functional code.