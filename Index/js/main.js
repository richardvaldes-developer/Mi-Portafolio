import { initializeScrollAnimations } from './scrollAnimations.js';
import { initializeResizeHandler } from './resizeHandler.js';
import { initializeGitHubProjects } from './githubProjects.js';
import { initializeContactForm } from './contactForm.js';
import { initializeFooterIcons } from './footerIcons.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeScrollAnimations();
    initializeResizeHandler();
    initializeGitHubProjects();
    initializeContactForm();
    initializeFooterIcons();
});

