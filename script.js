// Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');

    // Scroll Detection
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active Link Detection
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');
        // Burger Animation
        burger.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
}

// Initialize navigation
navSlide();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize EmailJS with proper configuration
(function() {
    // TODO: Replace these with your actual EmailJS credentials
    const publicKey = "5To8EY60UkA78mLAE";
    const serviceID = "service_5dehy4x";
    const templateID = "template_29mowso";
    
    emailjs.init(publicKey);
    
    // Store for later use
    window.emailConfig = {
        serviceID: serviceID,
        templateID: templateID
    };
})();

// Contact Form Handling with improved validation and feedback
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

if (contactForm) {
    // Form validation
    const validateForm = () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset messages
        successMessage.classList.remove('show-message');
        errorMessage.classList.remove('show-message');
        
        // Validation checks
        if (name.length < 2) {
            showError('Name must be at least 2 characters long');
            return false;
        }
        
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showError('Please enter a valid email address');
            return false;
        }
        
        if (message.length < 10) {
            showError('Message must be at least 10 characters long');
            return false;
        }
        
        return true;
    };
    
    const showError = (message) => {
        errorMessage.textContent = message;
        errorMessage.classList.add('show-message');
        setTimeout(() => {
            errorMessage.classList.remove('show-message');
        }, 5000);
    };
    
    const showSuccess = () => {
        successMessage.classList.add('show-message');
        setTimeout(() => {
            successMessage.classList.remove('show-message');
        }, 5000);
    };

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Get form data
        const templateParams = {
            from_name: document.getElementById('name').value.trim(),
            from_email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim(),
            to_name: 'Koteswararao',
            to_email: 'ayinalakoteswararao@gmail.com'
        };

        try {
            // Send email using EmailJS
            await emailjs.send(
                window.emailConfig.serviceID,
                window.emailConfig.templateID,
                templateParams
            );
            
            // Show success message
            showSuccess();
            
            // Clear form
            contactForm.reset();
            
            // Redirect to thanks page after a delay
            setTimeout(() => {
                window.location.href = 'thanks.html';
            }, 2000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            showError('Failed to send message. Please try again later.');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });

    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    });
}

// Scroll animations
const fadeInOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize
window.addEventListener('load', () => {
    navSlide();
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check
});

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Add some animation to the hero section
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);
}

// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "AI Engineer",
    "Software Developer",
    "AI ML Engineer ",
    "Full Stack Developer ",
    "Web Developer",
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Certificate Modal Functionality (only for image certificates)
const modal = document.getElementById('certModal');
const certImage = document.getElementById('certImage');
const closeModal = document.querySelector('.close-modal');

function openCertificate(imagePath) {
    // Only handle image certificates
    if (imagePath.endsWith('.jpg') || imagePath.endsWith('.png')) {
        modal.style.display = 'block';
        certImage.src = imagePath;
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }
}

function closeCertificateModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        certImage.src = '';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal when clicking close button
closeModal.addEventListener('click', closeCertificateModal);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeCertificateModal();
    }
});

// Close modal with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeCertificateModal();
    }
});
