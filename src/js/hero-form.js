document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.subscribe-form');

  forms.forEach(form => {
    const emailInput = form.querySelector('.email');
    const message = form.querySelector('.form-message');
    const btn = form.querySelector('.submitBtn');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (!email) {
        message.textContent = 'Введите ваш email!';
        message.style.color = '#FF5C5C';
        message.style.opacity = 1;
        return;
      }

      message.textContent = 'Отправка...';
      message.style.color = '#48CFFF';
      message.style.opacity = 1;

      setTimeout(() => {
        message.textContent = 'Спасибо! Форма отправлена ✅';
        message.style.color = '#48CFFF';

        setTimeout(() => {
          emailInput.value = '';
          message.style.opacity = 0;
        }, 5000);
      }, 1500);
    });
  });
});
