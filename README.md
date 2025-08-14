# 📜 User Directory – Fetch API Project

This project demonstrates how to retrieve and display user information from a **public API** using JavaScript's `fetch()` function.  
The interface is styled with a **modern dark theme**, featuring smooth animations and expandable user cards for better interactivity.

---

## 🚀 Features
- **Live API Data** – Retrieves user details from `jsonplaceholder.typicode.com`
- **Asynchronous Fetching** – Uses `async/await` for cleaner code
- **Error Handling** – Displays a friendly error message if the API call fails
- **Interactive Cards** – Click on a user card to reveal extra information
- **Modern UI** – Gradient background, hover animations, and glass-style cards
- **Responsive Layout** – Works on desktops, tablets, and mobiles

---

## 🛠️ Technologies Used
- **HTML5** – Structure of the webpage
- **CSS3** – Dark theme styling with animations and responsiveness
- **JavaScript (ES6+)** – Fetch API, async/await, DOM manipulation

---

## 📂 Project Structure
```
fetch-users/
│── index.html   # Main HTML file
│── style.css    # Styling for the page
│── script.js    # Fetch API logic and interactivity
│── README.md    # Project documentation
```

---

## 📡 API Used
Data is fetched from the free JSONPlaceholder API:
```
https://jsonplaceholder.typicode.com/users
```

Each user object includes:
- Name
- Email
- Address
- Phone
- Website
- Company details

---

## 📖 How It Works
1. **Page Load** – The `fetchUsers()` function runs when the page is opened.
2. **Data Fetch** – JavaScript's Fetch API retrieves JSON data from the API.
3. **Data Display** – User details are displayed inside styled cards.
4. **Toggle Details** – Clicking a card expands/collapses additional info.
5. **Reload Button** – Refetches data without refreshing the entire page.

---

## 🎯 Learning Outcomes
By building this project, you will:
- Understand **asynchronous JavaScript**
- Practice **API integration** using Fetch
- Improve **DOM manipulation** skills
- Create **responsive, interactive UIs**

---
