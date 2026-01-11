
// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('aureaTheme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        if (themeIcon) {
            themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    } 
    
    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            
            localStorage.setItem('aureaTheme', newTheme);
        });
    }

    // Password Toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    if (passwordToggles.length > 0) {
        passwordToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const passwordField = this.previousElementSibling;
                const icon = this.querySelector('i');
                
                if (passwordField.type === 'password') {
                    passwordField.type = 'text';
                    icon.className = 'fas fa-eye';
                } else {
                    passwordField.type = 'password';
                    icon.className = 'fas fa-eye-slash';
                }
            });
        });
    }

    // Login/Registration Form Submission
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulate login with localStorage (for demo purposes only)
            const users = JSON.parse(localStorage.getItem('aureaUsers') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('aureaCurrentUser', JSON.stringify(user));
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const age = document.getElementById('age').value;
            const email = document.getElementById('email').value;   
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Store user data (for demo purposes only)
            const users = JSON.parse(localStorage.getItem('aureaUsers') || '[]');
            
            // Check if email already exists
            if (users.some(u => u.email === email)) {
                alert('Email already registered! Please login instead.');
                return;
            }
            
            const newUser = {
                fullname,
                age,
                email,
                phone,
                password
            };
            
            users.push(newUser);
            localStorage.setItem('aureaUsers', JSON.stringify(users));
            
            // Auto login after registration
            localStorage.setItem('aureaCurrentUser', JSON.stringify(newUser));
            alert('Registration successful! You are now logged in.');
            window.location.href = 'index.html';
        });
    }

    // Logout Functionality
    const logoutButton = document.getElementById('logout');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('aureaCurrentUser');
            window.location.href = 'index.html';
        });
    }

    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('aureaCurrentUser'));
    const loginButton = document.querySelector('.login-button');
    const userProfile = document.querySelector('.user-profile');
    
    if (currentUser && loginButton && userProfile) {
        loginButton.classList.add('hidden');
        userProfile.classList.remove('hidden');
    }

    // Slideshow Navigation
    const prevBtn = document.querySelector('.slide-nav.prev');
    const nextBtn = document.querySelector('.slide-nav.next');
    const artworks = document.querySelectorAll('.artwork');
    
    if (prevBtn && nextBtn && artworks.length > 0) {
        let currentIndex = 0;
        
        // Initialize - show the first artwork
        artworks[0].classList.add('current');
        
        // Next button click
        nextBtn.addEventListener('click', function() {
            artworks[currentIndex].classList.remove('current');
            currentIndex = (currentIndex + 1) % artworks.length;
            artworks[currentIndex].classList.add('current');
        });
        
        // Previous button click
        prevBtn.addEventListener('click', function() {
            artworks[currentIndex].classList.remove('current');
            currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
            artworks[currentIndex].classList.add('current');
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        });
    }

    // Artwork Modal
    const allArtworks = document.querySelectorAll('.artwork');
    const artworkModal = document.getElementById('artwork-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalArtist = document.getElementById('modal-artist');
    const modalDescription = document.getElementById('modal-description');
    const contactArtistBtn = document.getElementById('contact-artist');
    const meetingForm = document.querySelector('.meeting-form');
    
    if (allArtworks.length > 0 && artworkModal) {
        allArtworks.forEach(artwork => {
            artwork.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                
                // Example data, in a real app this would be fetched from a database
                const artworkData = {
                    1: {
                        title: 'Abstract Dimensions',
                        artist: 'Emma Rodriguez',
                        description: 'An exploration of geometric forms and vibrant colors that evoke emotions through abstract expressionism. Created using acrylic on canvas with a palette knife technique.',
                        image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968'
                    },
                    2: {
                        title: 'Mountain Serenity',
                        artist: 'David Chen',
                        description: 'A landscape painting of the Cascade mountain range at dawn, capturing the tranquil morning light as it spreads across the peaks. Oil on linen, painted en plein air.',
                        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119'
                    },
                    3: {
                        title: 'Contemplation',
                        artist: 'Sophia Mendes',
                        description: 'A portrait study exploring human emotion and introspection through expressive brushwork and limited color palette. Charcoal and watercolor on heavyweight paper.',
                        image: 'https://img.artpal.com/259121/6-19-10-30-7-39-35m.jpg'
                    },
                    4: {
                        title: 'Urban Patterns',
                        artist: 'Marcus Wong',
                        description: 'A mixed media piece examining the geometric patterns and rhythms found in modern city architecture. Collage, ink and digital manipulation.',
                        image: 'https://images.unsplash.com/photo-1549490349-8643362247b5'
                    },
                    5: {
                        title: 'Ethereal Light',
                        artist: 'Naomi Clark',
                        description: 'A study of light and shadow using translucent layers of resin to create depth and luminosity. Mixed media with resin on wood panel.',
                        image: 'https://images.unsplash.com/photo-1573221566340-81bdde00e00b'
                    },
                    6: {
                        title: 'Silent Witness',
                        artist: 'James Peterson',
                        description: 'A photographic exploration of abandoned spaces and the stories they contain. Digital photography with minimal post-processing.',
                        image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7'
                    },
                    7: {
                        title: 'Contemplation',
                        artist: 'Jiya Sachdeva',
                        description: 'A photographic exploration of abandoned spaces and the stories they contain. Digital photography with minimal post-processing.',
                        image: 'Screenshot 2025-05-21 120418.png'
                    }

                };
                
                const data = artworkData[id];
                if (data) {
                    modalImage.src = data.image;
                    modalTitle.textContent = data.title;
                    modalArtist.textContent = data.artist;
                    modalDescription.textContent = data.description;
                    
                    // Hide meeting form initially
                    if (meetingForm) {
                        meetingForm.classList.add('hidden');
                    }
                    
                    artworkModal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }
            });
        });
        
        // Contact Artist Button - Show Meeting Form
        if (contactArtistBtn && meetingForm) {
            contactArtistBtn.addEventListener('click', function() {
                meetingForm.classList.toggle('hidden');
            });
        }
        
        // Meeting Form Submission
        const scheduleForm = document.getElementById('schedule-form');
        if (scheduleForm) {
            scheduleForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Meeting request sent! The artist will contact you soon.');
                meetingForm.classList.add('hidden');
            });
        }
        
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                artworkModal.style.display = 'none';
                document.body.style.overflow = ''; // Restore scrolling
            });
        }
        
        // Close modal when clicking outside content
        window.addEventListener('click', function(e) {
            if (e.target === artworkModal) {
                artworkModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && artworkModal.style.display === 'block') {
                artworkModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
});
