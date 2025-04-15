# Dog Breed Explorer

## Project Overview

This project is a simple Dog Breed Explorer web application built using React. It fetches data from the Dog CEO API and displays a list of dog breeds dynamically. It demonstrates the use of a custom useFetch hook for data fetching, error handling, conditional rendering, and modular CSS for clean UI.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (Recommended version: 16+)

- npm or yarn package manager

- A code editor (VS Code recommended)

## Installation Steps

Follow these steps to set up and run the project:

1. Using Vite: npm create vite@4.1.0

2. Create the project name and choose React + JavaScript

3. Move to the project directory: cd dog-breed-explorer

4. Install dependencies: npm install OR yarn install

5. Start the development server: npm run dev OR yarn run dev

6. View the project - Open your browser and go to: http://localhost:5173

## Technologies Used

- **React.js**.

- **Vite**: Fast development server

- **JavaScript**: JSX syntax.

- **CSS**: For styling

- **Dog CEO API**: Public API for dog breeds

## Project Structure

dog-breed-explorer

    src

        components

            DogComponent.jsx

            DogLists.jsx

            ErrorComponent.jsx

            dogcomponent.module.css

            doglists.module.css

            errorcomponent.module.css

        hooks

            useFetch.js

        App.jsx

        app.module.css

        main.jsx

        index.html

    README.md

## Features

- Fetches a list of dog breeds from a public API

- Shows loading state during data fetch

- Displays error message when request fails

- Clean, responsive UI with CSS Modules

- Organized code with reusable components and a custom hook
- A "Load More" feature is included to progressively reveal more breeds, improving performance and usability for mobile and desktop users.
- Clean UI with hover effects and modular, responsive layout.

## Author

Shammah Shemang Ayuba
