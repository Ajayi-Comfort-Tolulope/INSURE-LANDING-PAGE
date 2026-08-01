# Frontend Mentor - Insure Landing Page

This is my solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-u3q273R1m).

Frontend Mentor challenges provide realistic projects that help developers improve their HTML, CSS, JavaScript, responsive design, and accessibility skills.

## Table of Contents

* [Overview](#overview)

  * [The Challenge](#the-challenge)
  * [Features](#features)
  * [Screenshot](#screenshot)
  * [Links](#links)
* [My Process](#my-process)

  * [Built With](#built-with)
  * [What I Learned](#what-i-learned)
  * [Challenges](#challenges)
  * [Continued Development](#continued-development)
* [Author](#author)

## Overview

### The Challenge

Users should be able to:

* View the optimal layout for the site depending on their device's screen size
* See hover states for all interactive elements
* Toggle the mobile navigation menu on smaller screens
* Navigate the page using a responsive mobile navigation menu
* Experience a clean and responsive layout across different screen sizes

### Features

* Responsive navigation bar
* Mobile hamburger menu with open and close states
* Responsive hero section
* Responsive feature cards
* Responsive call-to-action section
* Responsive footer layout
* Hover states for interactive buttons and navigation links
* Desktop and mobile SVG background patterns
* Semantic HTML structure
* Accessible navigation toggle using `aria-expanded`
* Responsive layouts for smaller screen sizes

### Screenshot

![Insure Landing Page Screenshot](./images/Screenshot%20.png)


### Links

* Solution URL: [Add your Frontend Mentor solution URL here](YOUR_FRONTEND_MENTOR_SOLUTION_URL)
* Live Site URL: [Add your live site URL here](YOUR_LIVE_SITE_URL)
* GitHub Repository: [Add your GitHub repository URL here](YOUR_GITHUB_REPOSITORY_URL)

## My Process

### Built With

* Semantic HTML5 markup
* CSS custom properties (variables)
* Flexbox
* CSS Grid
* Responsive design with CSS media queries
* Vanilla JavaScript
* Google Fonts
* Accessible navigation controls

### What I Learned

While building this project, I improved my understanding of responsive layouts and learned how to create a navigation menu that changes between desktop and mobile views.

I also practiced using CSS custom properties to manage colors and typography consistently throughout the project.

Some of the key things I learned include:

* Creating responsive layouts using CSS Grid and Flexbox.
* Using CSS media queries to adapt the layout for different screen sizes.
* Implementing a mobile navigation menu with JavaScript.
* Using `aria-expanded` to communicate the state of the mobile navigation menu.
* Creating hover states for buttons and navigation links.
* Working with layered SVG background patterns.
* Using CSS specificity to prevent general hover styles from overriding button styles.
* Testing layouts at different viewport widths, including smaller mobile screens.

### Challenges

One of the main challenges I encountered was creating a responsive navigation menu that worked correctly on smaller screens.

I solved this by using JavaScript to toggle CSS classes on the navigation menu and menu button. The `nav-open` class controls the visibility of the mobile navigation, while the `open` class switches between the hamburger and close icons.

I also encountered a CSS specificity issue with the "View plans" navigation button. A general navigation hover selector was overriding the button's hover text color. I resolved this by targeting only non-button navigation links with:

```css
.nav-links a:not(.btn):hover {
  color: var(--clr-neutral-very-dark-violet);
}
```

This allowed the button's own hover state to work correctly.

Another challenge was ensuring the layout remained visually balanced on very small screens. I addressed this by adding an extra responsive breakpoint for screens below 375px and adjusting font sizes, spacing, padding, and button sizes.

### Continued Development

In future projects, I would like to continue improving:

* Accessibility and keyboard navigation
* Responsive design across a wider range of screen sizes
* Semantic HTML and accessible interactive elements
* CSS architecture and maintainability
* JavaScript interactions and user experience
* Performance optimization

I would also like to improve the navigation links by connecting them to real sections or pages instead of using placeholder `#` links.

## Author

* Frontend Mentor - [@Ajayi-Comfort-Tolulope](https://www.frontendmentor.io/)
* GitHub - [Ajayi-Comfort-Tolulope](https://github.com/Ajayi-Comfort-Tolulope)
* LinkedIn - [Comfort Tolulope Ajayi](https://www.linkedin.com/in/comfort-tolulope-ajayi-717a5a365/)
