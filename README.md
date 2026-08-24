# 🌍 REST Countries Explorer

A modern and responsive **Vue 3** application that allows users to explore countries around the world using real-time data from the **REST Countries API**.

> 🚀 **Live Demo:** [Open REST Countries Explorer](https://rest-countries-one-phi.vercel.app/)

---

## 📸 Preview

<img
src="https://github.com/user-attachments/assets/9ffc4ea6-216b-4980-adda-9adeaf95019a"
alt="REST Countries Explorer Preview"
/>

---

## ✨ Features

### 🔍 Country Discovery

* Search countries by name
* Filter countries by region
* Browse country cards with:

  * Flag
  * Population
  * Region
  * Capital
* Responsive country grid layout

### 📄 Country Details

* View detailed country information
* Native name
* Population
* Region and sub-region
* Capital
* Top-level domain
* Currencies
* Languages
* Border countries

### 🧭 Navigation

* Vue Router based navigation
* Dedicated country details route
* Back navigation
* Navigate directly between neighboring countries

### 📱 Responsive UI

* Responsive layout for different screen sizes
* Clean and simple interface
* Bootstrap-based layout and components

---

## 🧰 Tech Stack

| Technology         | Purpose                       |
| ------------------ | ----------------------------- |
| Vue 3              | Frontend framework            |
| Vue Router         | Client-side routing           |
| JavaScript (ES6+)  | Application logic             |
| REST Countries API | Country data                  |
| HTML5              | Page structure                |
| SCSS               | Styling                       |
| Bootstrap          | Responsive layout and UI      |
| Vite               | Development and build tooling |
| Fetch API          | HTTP requests                 |

---

## 🔌 API Integration

The application consumes data from the **REST Countries API**.

### Countries

```text
GET https://restcountries.com/v3.1/all
```

Used to retrieve country data for the main explorer page.

### Country Details

```text
GET https://restcountries.com/v3.1/name/{country}
```

Used to retrieve detailed information for a selected country.

### Border Countries

```text
GET https://restcountries.com/v3.1/alpha?codes={codes}
```

Used to resolve neighboring country codes into country information.

---

## 📁 Project Structure

```text id="n5n9p6"
rest-countries/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── NavBar.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   └── CountryDetails.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js `20.19+` or `22.12+`
* npm

### Installation

```bash id="8d8m8k"
git clone https://github.com/MustafaKullab/Countries-Explorer-App-Vue.js-REST-API-Integration-with-Search-Filtering.git
cd Countries-Explorer-App-Vue.js-REST-API-Integration-with-Search-Filtering
npm install
```

### Run the development server

```bash id="k43j8x"
npm run dev
```

The application will be available at:

```text id="2h6x86"
http://localhost:5173
```

### Build for production

```bash id="a7l1u9"
npm run build
```

### Preview the production build

```bash id="12qvvf"
npm run preview
```

---

## 🎯 Project Goal

This project was built as a solution to the **Frontend Mentor REST Countries API Challenge**.

The main goal was to practice:

* Working with external REST APIs
* Fetching and displaying remote data
* Search and filtering logic
* Vue Router navigation
* Dynamic route parameters
* Responsive frontend development
* Handling country and border-country data

---

## 📚 What I Learned

* Fetching data from external APIs with the Fetch API
* Handling asynchronous requests
* Managing reactive state in Vue
* Using computed properties for search and filtering
* Working with Vue Router
* Using route parameters to load dynamic content
* Fetching related data from multiple API endpoints
* Building responsive interfaces with Vue and Bootstrap

---

## 🗺️ Future Improvements

* Add dark mode
* Add favorite countries
* Improve filtering options
* Add loading and error states
* Add richer country statistics and visualizations
* Improve accessibility and keyboard navigation

---

## 👨‍💻 Author

**Mustafa Kullab**

[GitHub](https://github.com/MustafaKullab)

---

> Built as a personal Vue.js project to strengthen API integration, routing, filtering, and responsive frontend development.
