// TIDAK DIUBAH: Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// TIDAK DIUBAH: Toggle Navigation
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // DITAMBAHKAN: Burger Animation
    burger.classList.toggle('toggle');
    
    // DITAMBAHKAN: Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// DITAMBAHKAN: Add Active Class to Nav Links
const currentLocation = location.href;
const menuItems = document.querySelectorAll('.nav-links a');

menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
});

// DITAMBAHKAN: Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    
    // Reveal Elements on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
});

// DITAMBAHKAN: Add reveal class to elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Add typing animation to hero text
    if (document.querySelector('.hero')) {
        const greeting = document.querySelector('.greeting');
        const name = document.querySelector('.name');
        const title = document.querySelector('.title');
        
        setTimeout(() => {
            greeting.style.opacity = '1';
            greeting.style.transform = 'translateY(0)';
        }, 300);
        
        setTimeout(() => {
            name.style.opacity = '1';
            name.style.transform = 'translateY(0)';
        }, 600);
        
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 900);
    }
});

// DITAMBAHKAN: Add CSS for animations
const style = document.createElement('style');
style.innerHTML = `
    .reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s ease;
    }
    
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .greeting, .name, .title {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
    }
    
    .burger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .burger.toggle .line2 {
        opacity: 0;
    }
    
    .burger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);