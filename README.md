# Robotics Lab Website

This is a web application developed as part of the Robotics Lab project to showcase the lab's projects, research, and innovations. The website was developed using React and incorporates modern UI/UX techniques, including a responsive design, parallax effects, and dynamic headers.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Components Developed](#components-developed)
  - [Header](#header)
  - [Carousel](#carousel)
  - [Project](#Project-List-&-ProjectItem)
- [Getting Started](#getting-started)
- [Future Enhancements](#future-enhancements)

## Project Overview
This website serves as a portfolio for the Robotics Lab, highlighting its projects, publications, team members, and opportunities. The goal was to create an engaging, user-friendly site with a clean, modern interface.

## Technologies Used
- **React** for building a component-based UI
- **CSS** for styling and responsive design
- **React Router** for routing between pages
- **JavaScript** for interactive components

## Features
- **Responsive Header** with a logo that transitions on scroll
- **Parallax Carousel** with dynamic content
- **Project List** with hover effects to display project videos

## Components Developed

### Header

The `Header` component provides navigation across the site, featuring an interactive logo, scroll effects, and a responsive design that switches to a hamburger menu on smaller screens.

#### Key Features
- **Scroll-Based Color Change:** The header background changes from black to white when the user scrolls down the page.
- **Logo Transition:** Two logos are used to create a smooth up-and-down transition effect on scroll.
- **Responsive Hamburger Menu:** On narrow screens, the header switches to a hamburger menu for better navigation on mobile devices.
  
#### Technical Details
- The `Header` component uses React's `useState` and `useEffect` hooks to handle scroll events and background color changes.
- CSS classes (`.logo-upper` and `.logo-lower`) are toggled based on the scroll position to show and hide the appropriate logo.
- The navigation links use `NavLink` from React Router to highlight the active page.

### Carousel

The `Carousel` component displays rotating slides with a parallax scroll effect, showcasing different lab messages and images.

#### Key Features
- **Parallax Scroll Effect:** Each slide moves at a slower speed relative to the scroll, creating a depth effect.
- **Automatic Slide Transition:** Slides rotate automatically every 9 seconds, with buttons for manual navigation.
- **Customizable Content:** Each slide includes a title, description, and background image.

#### Technical Details
- The `Carousel` component uses `useState` to track the current slide and direction.
- CSS animations are applied for smooth transitions between slides, with specific classes (`next` and `prev`) to control slide-in directions.
- The parallax effect adjusts the slide position based on the scroll offset, achieved with inline CSS `transform` styling.

### Project List & ProjectItem
The Project List displays a list of projects, each styled and organized for easy readability. Each project is represented by a ProjectItem component to ensure a clean, modular structure.

#### Key Features
Data-Driven Project Display: Project data is stored in an array, allowing for easy updates to project content without altering the layout.
Hover Effects for Video Preview: When hovering over a project’s image, a video preview of the project appears, enhancing user engagement.
Modular Design: Each project is encapsulated within a ProjectItem component, keeping styling and functionality independent of the main page.
#### Technical Details
Conditional Rendering on Hover: The ProjectItem component uses React’s useState to track hover status, displaying the project image by default and switching to the video preview on hover.
Reusable Component Structure: By defining project data in the main script and passing it to ProjectItem as props, it’s easy to update or expand project details without needing to restructure the layout.


## Getting Started

To run this project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/username/RoboticsWeb.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Future Enhancements
- **Enhanced Project List Filtering:** Add tags and filters for easier navigation through projects.
- **Enhanced Animations:** Add more animations for transitions and button interactions.
- **Overall design to match vibe of our lab** 


