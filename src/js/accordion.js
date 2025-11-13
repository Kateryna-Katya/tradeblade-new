
document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const parent = trigger.closest('.faq-acc-el');
    const panel = parent.querySelector('.faq-acc-el-descr-frame');
    const isOpen = parent.classList.contains('open');

    document.querySelectorAll('.faq-acc-el.open').forEach(openItem => {
      if (openItem !== parent) {
        openItem.classList.remove('open');
        const openPanel = openItem.querySelector('.faq-acc-el-descr-frame');
        openPanel.style.maxHeight = '0';
      }
    });

    if (!isOpen) {
      parent.classList.add('open');
      setTimeout(() => {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }, 30);
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      setTimeout(() => {
        panel.style.maxHeight = '0';
        parent.classList.remove('open');
      }, 30);
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const firstItem = document.querySelector('.faq-acc-el');
  if (firstItem) {
    const panel = firstItem.querySelector('.faq-acc-el-descr-frame');
    firstItem.classList.add('open');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
});
