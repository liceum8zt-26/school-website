/* BURGER MENU */

const burgerMenu = document.querySelector('#burger-menu');
const header = document.querySelector('header');

burgerMenu.addEventListener('click', function() {
    header.classList.toggle('active');
})

/* MENU ITEMS */

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function () {
        header.classList.remove('active');
    })
});

/* FORM */

const form = document.querySelector('#contacts-form');
const success = document.querySelector('.contacts-form-success');
const error = document.querySelector('.contacts-form-error');

form.addEventListener('submit', async function() {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name');
    const phone = formData.get('phone');

    const message = encodeURI("Нова заявка з сайту." + "\r\n\r\n" + "🅰️ Імʼя: " + name + "\r\n" + "📞 Телефон: " + phone);

    // TODO: hide this
    const TELEGRAM_TOKEN = "8727345675:AAH2geBYpqrSbyBR--pBgdCIB3KyrvdI4kI";
    const TELEGRAM_CHAT_ID = "-1003032335339";

    const response = await fetch("https://api.telegram.org/bot" + TELEGRAM_TOKEN + "/sendMessage?chat_id=" + TELEGRAM_CHAT_ID+ "&text=" + message + "&message_thread_id=2676");
    
    if (response.ok) {
        error.style.display = 'none';
        success.style.display = 'block';
        form.reset();
    } else {
        error.style.display = 'block';
        success.style.display = 'none';
    }
});