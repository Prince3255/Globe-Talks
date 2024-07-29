# Globe Talks

Globe Talks is a news website built using ReactJS and Vite, with Tailwind CSS for styling. The website fetches news from the Google News API, allowing users to receive news based on their selected language and region. It supports over 145 languages and countries and is fully responsive.

## Overview

Globe Talks provides a seamless experience for browsing news articles from around the world. With features like language and region selection, pagination, and responsive design, users can easily find and read the news that matters to them.

## Table of Contents

- [Features](#features)
- [Live Project](#live project)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

- **Language Selector**: Choose news in different languages.
- **Region Selector**: Get news specific to over 130 countries.
- **Pagination**: Easily navigate through different pages of news.
- **Routing**: Smooth navigation across different sections of the site.
- **Responsive Design**: Fully responsive for all device sizes.

## Live Project

Explore the live version of Globe Talks: [Globe Talks](https://globe-talks.vercel.app/)

## Project Structure

The project structure is organized as follows:

```

globe-talks/
├── src/
│ ├── assets/
│ │ ├── convertTimeStamp.js
│ │ ├── Loader.js
│ │ ├── pagination.js
│ ├── components/
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── LanguageSelector.jsx
│ │ ├── Pagination.jsx
│ │ ├── SearchBar.jsx
│ ├── context/
│ │ ├── Context.js
│ │ ├── LanguageContext.js
│ ├── images/
│ │ ├── logo.png
│ ├── pages/
│ │ ├── About.jsx
│ │ ├── Business.jsx
│ │ ├── Contact.jsx
│ │ ├── Entertainment.jsx
│ │ ├── Error.jsx
│ │ ├── Health.jsx
│ │ ├── Home.jsx
│ │ ├── index.js
│ │ ├── Latest1.jsx
│ │ ├── Loader.jsx
│ │ ├── Science.jsx
│ │ ├── Search.jsx
│ │ ├── Sport.jsx
│ │ ├── Technology.jsx
│ │ ├── World.jsx
│ ├── redux/
│ │ ├── store.js
│ │ └── googlenews/
│ │ ├── googlenews.js
| ├── index.html
| ├── app.jsx
| ├── app.css
| ├── index.css
| ├── Layout.jsx
| ├── main.jsx
├── .env
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```


## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   git clone [https://github.com/Prince3255/globe-talks.git](https://github.com/Prince3255/Globe-Talks)
   cd globe-talks
2. **Install dependencies**
   npm install
3. **Add your API Key**
   Create a .env file in the root directory and add your Google News API key:
   VITE_GOOGLE_NEWS_API_KEY=your_api_key_here
4. **Run the development server**
   npm run dev


## Usage

After starting the development server, open your browser and navigate to http://localhost:5173. You can then start using the site to browse news by language and region.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   git checkout -b feature/your-feature-name.
3. **Make your changes and commit them:**
   git commit -m 'Add some feature'.
4. **Push to the branch:**
   git push origin feature/your-feature-name.
5. **Open a Pull Request.**

## Acknowledgements
- Google News API (Rapid api)
- ReactJS
- Tailwind CSS
- Vite
- Redux
- React icons
- GitHub
