document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top  = mouseY - 10 + 'px';
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX - 4 + 'px';
        cursorFollower.style.top  = followerY - 4 + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Элементы, на которые должна срабатывать анимация
    document.querySelectorAll('.card, .about-content, .ask-input, .ask-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    // IntersectionObserver для плавных анимаций появления
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });
    document.querySelectorAll('.card, .hero, .about-content, .ask-input').forEach(el => {
        observer.observe(el);
    });

    // Видимость курсора
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });

    // 👉 По умолчанию активируем ask-input
    const askInput = document.querySelector('.ask-input');
    if (askInput) {
        askInput.focus();
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(2)';
    }

    // Кнопка отправки
    const askBtn = document.querySelector('.ask-btn');
    if (askBtn) {
        askBtn.addEventListener('click', () => {
            if (askInput && askInput.value.trim() !== "") {
                alert("You asked: " + askInput.value);
                askInput.value = "";
            }
        });
    }
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const sidebarIcon = document.getElementById('sidebarIcon');

    let sidebarOpen = true;

    toggleSidebarBtn.addEventListener('click', () => {
    if (sidebarOpen) {
        sidebar.classList.add('-translate-x-full'); // закрыть
        sidebarOpen = false;
    } else {
        sidebar.classList.remove('-translate-x-full'); // открыть
        sidebarOpen = true;
    }
    });

});

