// ===================================
// FILE JAVASCRIPT UNTUK PROFIL PERUSAHAAN
// ===================================

// ===================================
// 1. TOGGLE CONTENT FUNCTION
//    Fungsi untuk tombol "Baca Lebih Banyak"
// ===================================
function toggleContent(id) {
    const content = document.getElementById(id);
    const btn = event.target;

    if (content.style.display === 'none') {
        content.style.display = 'block';
        btn.textContent = 'Baca Lebih Sedikit';
    } else {
        content.style.display = 'none';
        btn.textContent = 'Baca Lebih Banyak';
    }
}

// ===================================
// 2. SMOOTH SCROLL ANIMATION
//    Untuk navigasi yang smooth
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// 3. INTERSECTION OBSERVER
//    Untuk animasi fade-in saat scroll
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Terapkan observer ke semua section
document.querySelectorAll('.content-section, .org-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// ===================================
// 4. NAVBAR SCROLL EFFECT
//    Navbar berubah saat di-scroll
// ===================================
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// ===================================
// 5. CONSOLE LOG (untuk testing)
// ===================================
console.log('Script Profil Perusahaan TEFA MILK loaded successfully!');
