// Sample blog post data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with JavaScript",
        summary: "Learn the basics of JavaScript programming language.",
        date: "May 15, 2023",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 2,
        title: "CSS Grid Layout Guide",
        summary: "Master the modern CSS Grid layout system.",
        date: "June 2, 2023",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 3,
        title: "Responsive Design Principles",
        summary: "Key principles for creating responsive websites.",
        date: "June 10, 2023",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 4,
        title: "Introduction to React",
        summary: "Begin your journey with React framework.",
        date: "June 25, 2023",
        image: "https://via.placeholder.com/300x200"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load recent posts
    const postGrid = document.querySelector('.post-grid');
    
    blogPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
                <small>${post.date}</small>
                <a href="posts/post${post.id}.html">Read More</a>
            </div>
        `;
        postGrid.appendChild(postCard);
    });
    
    // Subscribe form handling
    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!`);
        this.reset();
    });
    
    // Dark mode toggle (bonus feature)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.id = 'dark-mode-toggle';
    document.querySelector('header').appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});