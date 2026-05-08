// View Templates
const views = {
    home: `
        <div class="home-view">
            <div class="home-content">
                <h2>Hello, I'm</h2>
                <h1><span>Abhiraj</span></h1>
                <h2>Professional Developer</h2>
                <p>Building beautiful, performant, and accessible digital experiences. Explore my projects and background to learn more.</p>
                <div class="home-buttons" style="flex-wrap: wrap; margin-bottom: 1rem;">
                    <a href="#projects" class="btn btn-primary"><i data-lucide="briefcase"></i> View Projects</a>
                    <a href="#contact" class="btn btn-secondary"><i data-lucide="mail"></i> Contact Me</a>
                </div>
                <div class="home-buttons" style="flex-wrap: wrap; gap: 1rem;">
                    <button onclick="viewImage('public/abhiresume.jpeg')" class="btn btn-primary" style="background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));"><i data-lucide="eye"></i> View Resume</button>
                    <a href="public/abhiresume.jpeg" download="Abhiraj_Resume.jpeg" class="btn btn-secondary"><i data-lucide="download"></i> Download Resume</a>
                </div>
            </div>
            <div class="home-image">
                <img src="public/abhipic.jpeg" alt="Abhiraj" onerror="this.src='https://via.placeholder.com/400?text=Profile+Photo'">
            </div>
        </div>
    `,
    about: `
        <div class="about-view">
            <h2 class="section-title">About <span>Me</span></h2>
            <div class="glass-card">
                <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">Hello! I'm Abhiraj, a passionate developer dedicated to creating engaging and functional web experiences. I specialize in modern web technologies and have a keen eye for design.</p>
                <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">With a strong foundation in software development, I love bringing ideas to life through code. My approach combines clean, maintainable architecture with pixel-perfect aesthetics to deliver high-quality products.</p>
                <p style="font-size: 1.1rem;">When I'm not coding, I enjoy exploring new tech trends, improving my skill set, and working on innovative side projects. I am constantly learning and adapting to the fast-paced world of technology.</p>
            </div>
        </div>
    `,
    projects: `
        <div class="projects-view">
            <h2 class="section-title">My <span>Projects</span></h2>
            <div class="projects-grid">
                <div class="glass-card project-card">
                    <h3>E-Commerce Platform</h3>
                    <p>A full-featured online store with seamless checkout, product management, and user authentication.</p>
                    <a href="#" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">View Details</a>
                </div>
                <div class="glass-card project-card">
                    <h3>Dashboard Analytics</h3>
                    <p>Interactive data visualization dashboard providing real-time insights with beautiful charts.</p>
                    <a href="#" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">View Details</a>
                </div>
                <div class="glass-card project-card">
                    <h3>Portfolio Website</h3>
                    <p>A highly animated, responsive multi-page portfolio designed to showcase professional achievements.</p>
                    <a href="#home" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">View Details</a>
                </div>
            </div>
        </div>
    `,
    education: `
        <div class="education-view">
            <h2 class="section-title">My <span>Education</span></h2>
            <div class="timeline">
                <div class="timeline-item left">
                    <div class="glass-card timeline-content">
                        <div class="date">2020 - 2024</div>
                        <h3>Bachelor of Technology</h3>
                        <p>University Name</p>
                        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 1rem;">Major in Computer Science. Graduated with high honors. Participated in various hackathons and tech clubs.</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="glass-card timeline-content">
                        <div class="date">2018 - 2020</div>
                        <h3>Higher Secondary</h3>
                        <p>High School Name</p>
                        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 1rem;">Focus on Science and Mathematics. Consistently achieved top grades.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    certifications: `
        <div class="certifications-view">
            <h2 class="section-title">Certifications & <span>Resume</span></h2>
            
            <div class="glass-card" style="margin-bottom: 4rem; text-align: center;">
                <i data-lucide="file-text" style="width: 64px; height: 64px; color: var(--accent-blue); margin-bottom: 1rem;"></i>
                <h3 style="font-size: 2rem; margin-bottom: 1rem;">Professional Resume</h3>
                <p style="margin-bottom: 2rem; font-size: 1.1rem; color: var(--text-secondary);">Download or view my detailed professional resume.</p>
                <div class="cert-actions">
                    <button onclick="viewImage('public/abhiresume.jpeg')" class="btn btn-primary"><i data-lucide="eye"></i> View Resume</button>
                    <a href="public/abhiresume.jpeg" download="Abhiraj_Resume.jpeg" class="btn btn-secondary"><i data-lucide="download"></i> Download</a>
                </div>
            </div>

            <h3 style="margin-bottom: 2rem; text-align: center; font-size: 2rem;">Certifications</h3>
            <div class="certs-grid">
                <div class="glass-card cert-card">
                    <i data-lucide="award"></i>
                    <h3>Web Development Masterclass</h3>
                    <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--text-secondary); font-size: 0.95rem;">Issued by Udemy</p>
                    <div class="cert-actions">
                        <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="alert('Certificate view coming soon!')">View Certificate</button>
                    </div>
                </div>
                <div class="glass-card cert-card">
                    <i data-lucide="award"></i>
                    <h3>React Native Specialist</h3>
                    <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--text-secondary); font-size: 0.95rem;">Issued by Coursera</p>
                    <div class="cert-actions">
                         <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="alert('Certificate view coming soon!')">View Certificate</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    contact: `
        <div class="contact-view">
            <h2 class="section-title">Get In <span>Touch</span></h2>
            <div class="glass-card contact-container">
                <p>I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                
                <div class="contact-links">
                    <a href="mailto:contact@abhiraj.com" class="contact-item">
                        <i data-lucide="mail"></i>
                        <span>Email Me</span>
                    </a>
                    <a href="#" class="contact-item" onclick="alert('LinkedIn profile link to be added')">
                        <i data-lucide="linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href="#" class="contact-item" onclick="alert('GitHub profile link to be added')">
                        <i data-lucide="github"></i>
                        <span>GitHub</span>
                    </a>
                </div>

                <div style="margin-top: 4rem;">
                    <a href="mailto:contact@abhiraj.com" class="btn btn-primary" style="font-size: 1.2rem; padding: 1rem 2.5rem;">Say Hello</a>
                </div>
            </div>
        </div>
    `
};

// DOM Elements
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.getElementById('navToggle');
const navLinksContainer = document.getElementById('navLinks');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.querySelector('.close-modal');

// Router logic
function renderView(viewName) {
    // Basic fade out
    app.style.opacity = 0;
    app.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        // Inject HTML
        app.innerHTML = views[viewName] || views['home'];
        
        // Re-initialize Lucide icons for newly injected HTML
        if (window.lucide) {
            lucide.createIcons();
        }

        // Fade in
        app.style.opacity = 1;
        app.style.transform = 'translateY(0)';
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + viewName) {
                link.classList.add('active');
            }
        });
        
        // Close mobile menu
        navLinksContainer.classList.remove('show');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400); // 400ms matches the CSS transition duration
}

// Event Listeners for Navigation
window.addEventListener('hashchange', () => {
    let hash = window.location.hash.replace('#', '');
    if (!hash) hash = 'home';
    renderView(hash);
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Modal Functions
window.viewImage = function(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initial render
let initialHash = window.location.hash.replace('#', '');
if (!initialHash) {
    window.location.hash = 'home';
    initialHash = 'home';
}

// Initialize lucide icons for the static parts
if (window.lucide) {
    lucide.createIcons();
}

// Render first view
renderView(initialHash);
