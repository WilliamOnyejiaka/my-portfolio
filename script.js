const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const mailtoFormBtn = document.querySelector('#mailto-form');
const reviewBtn = document.querySelectorAll('.review-btn');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

mailtoFormBtn.addEventListener('click', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phoneNumber = document.getElementById('number').value;
    const subject = document.getElementById('subject').value;
    const body = `Name: ${name} Email: ${email} Phone Number: ${phoneNumber} Message: ${message}`;
    const mailtoLink = `mailto:williamonyejiaka08062528003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});

reviewBtn.forEach(btn => {
    btn.addEventListener('click', event => {
        const url = btn.dataset.url;
        window.open(url, "_blank");
    });
});