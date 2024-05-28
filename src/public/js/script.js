// contact
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: 'POST',
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        // url thank you
        window.location.href = "/thankyou.html"
    })
    .catch((e) => alert("Error occured"));
});

// dark mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
    '(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

// Tambahkan event listener untuk tombol pengganti tema
var themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
// Toggle kelas `dark` di elemen HTML
document.documentElement.classList.toggle('dark');
// Simpan preferensi tema pengguna di local storage
if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}
});
