document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('site-header');
  const headerOffset = header ? header.offsetHeight : 0;


  function smoothScrollToElement(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }


  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href.includes('#')) return;

      const targetId = href.split('#')[1];
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

  
      document.querySelectorAll('.navigation-item').forEach(l => l.classList.remove('active'));
      if (link.classList.contains('navigation-item')) {
        link.classList.add('active');
      }

      smoothScrollToElement(targetId);
    });
  });


  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    setTimeout(() => smoothScrollToElement(targetId), 50);
  }
});