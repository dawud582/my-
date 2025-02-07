function toggleSection(id) {
    let section = document.getElementById(id);
    if (section.classList.contains('active')) {
        section.classList.remove('active');
        setTimeout(() => section.style.display = 'none', 500);
    } else {
        section.style.display = 'block';
        setTimeout(() => section.classList.add('active'), 10);
    }
}

function showMessage() {
    let messages = [
        "Keep pushing forward, success is near!",
        "Every challenge is a step toward greatness.",
        "Believe in yourself, you got this!",
        "Your dreams are within reach. Keep going!"
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").textContent = messages[randomIndex];
}
