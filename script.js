document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX - 4 + 'px';
        cursorFollower.style.top = followerY - 4 + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();

    document.querySelectorAll('.card, .about-content').forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(2)';
        });
        
        card.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    document.querySelectorAll('.card, .hero, .about-content').forEach(el => {
        observer.observe(el);
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
});