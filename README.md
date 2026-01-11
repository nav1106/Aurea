# Aurea
Art gallery - front end application

Aurea is a responsive front-end web application designed to showcase artworks in a modern digital gallery format. It provides an interactive user experience with features like theme toggling, artwork slideshows, modals for detailed artwork views, and basic authentication simulation using browser storage.

## Features
* Light and dark theme toggle with preference persistence
* Artwork slideshow with next/previous navigation
* Keyboard navigation support (arrow keys and escape)
* Artwork detail modal with artist information
* Login and registration system (client-side simulation)
* Password visibility toggle
* Contact artist and meeting scheduling form
* Responsive layout for different screen sizes

## Technologies Used
* HTML5
* CSS3
* avaScript (Vanilla JS)
* Font Awesome
* Browser LocalStorage API

## Project Structure
```
Aurea/
├── index.html
├── gallery.html
├── login.html
├── register.html
├── styles.css
├── script.js
└── README.md
```

## Authentication Note
This project uses browser `localStorage` to simulate user login and registration.
This implementation is for demonstration and learning purposes only and should not be used in production environments, as client-side storage is not secure.

## Artwork Interaction
* Artworks are displayed in a slideshow format
* Clicking an artwork opens a modal with detailed information
* Artwork data is dynamically loaded using data-id attributes
* Background scrolling is disabled while the modal is open
* Modal can be closed using:
  * Close button
  * Clicking outside the modal
  * Escape key

## JavaScript Concepts Used
* DOM manipulation
* Event listeners (`click`, `submit`, `keydown`)
* `querySelector` and `querySelectorAll`
* `classList` for dynamic styling
* `localStorage` with `JSON.parse()` and `JSON.stringify()`
* Conditional rendering of UI elements
* Keyboard accessibility handling

## Screenshots
<img width="1919" height="1095" alt="Screenshot 2026-01-11 090652" src="https://github.com/user-attachments/assets/ef3e9718-1989-401c-878c-0b94950d87f1" />
<img width="1919" height="1099" alt="Screenshot 2026-01-11 090752" src="https://github.com/user-attachments/assets/46b37ccd-616d-4197-b802-cff7bb87ac54" />
<img width="1919" height="1099" alt="Screenshot 2026-01-11 090829" src="https://github.com/user-attachments/assets/5feddafa-c900-4bc2-85e0-a63549a726b6" />

## Future Enhancements
* Backend integration for real authentication
* Database-driven artwork management
* Admin panel for uploads
* Improved accessibility support
* Animations and transitions
* API-based data fetching

## License
This project is licensed under the MIT License.

## Author
Navnita Krishnan
B.Tech Computer Science (AI & Engineering)
