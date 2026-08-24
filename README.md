# 🌍 REST Countries Explorer

A modern and responsive **Vue 3** application for exploring countries around the world using the **REST Countries API**.

The application supports country search, region filtering, detailed country information, and navigation between neighboring countries.

> 🚀 **Live Demo:** [Open REST Countries Explorer](https://rest-countries-one-phi.vercel.app/)

> ⚠️ **Note:** The live demo may currently be affected by changes or availability of the external REST Countries API.

---

## 📸 Preview

<img
src="https://github.com/user-attachments/assets/9ffc4ea6-216b-4980-adda-9adeaf95019a"
alt="REST Countries Explorer Preview"
/>

---

## ✨ Features

### 🔍 Country Explorer

* Search countries by name
* Filter countries by region
* Display country flags
* Display population, region, and capital
* Responsive country grid
* Navigate to detailed country information

### 📄 Country Details

* View detailed information about a selected country
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
* Dynamic country detail routes
* Back navigation
* Navigate directly to neighboring countries

### 📱 Responsive Design

* Responsive layout across different screen sizes
* Bootstrap-based layout
* Clean and simple user interface

---

## 🧰 Tech Stack

| Technology         | Usage                         |
| ------------------ | ----------------------------- |
| Vue 3              | Frontend framework            |
| JavaScript (ES6+)  | Application logic             |
| Vue Router         | Client-side routing           |
| Fetch API          | External API requests         |
| REST Countries API | Country data                  |
| Bootstrap          | Responsive layout and UI      |
| SCSS               | Styling                       |
| Vite               | Development and build tooling |

---

## 🔌 API Integration

This project uses the **REST Countries API** to retrieve country information.

The application makes requests for:

* All countries
* Country details by name
* Border countries by country codes

Example request used by the project:

```text
https://restcountries.com/v3.1/all
```

Additional requests are used for country details and neighboring countries.

---

## 📁 Project Structure

```text
rest-countries/
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
├── public/
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm

### Installation

```bash
git clone https://github.com/MustafaKullab/Countries-Explorer-App-Vue.js-REST-API-Integration-with-Search-Filtering.git
cd Countries-Explorer-App-Vue.js-REST-API-Integration-with-Search-Filtering
npm install
```

### Run the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 🎯 Project Goal

This project was built as a solution to the **Frontend Mentor REST Countries API Challenge**.

The main focus was practicing:

* External REST API integration
* Fetching asynchronous data
* Search and filtering logic
* Vue Router and dynamic routes
* Working with related API data
* Responsive frontend development

---

## 📚 What I Learned

* Fetching data from an external REST API
* Handling asynchronous requests
* Working with reactive data using Vue
* Using computed properties for search and filtering
* Using Vue Router with dynamic route parameters
* Fetching neighboring country data from a second API request
* Building responsive interfaces
* Handling missing country information with fallback values

---

## 🗺️ Future Improvements

* Add dark mode
* Add favorite countries
* Expand filtering options
* Improve loading and error states
* Add richer country statistics
* Improve accessibility and keyboard navigation

---

## 👨‍💻 Author

**Mustafa Kullab**

[GitHub](https://github.com/MustafaKullab)

---

> Built as a personal Vue.js project to strengthen API integration, routing, filtering, and responsive frontend development.
