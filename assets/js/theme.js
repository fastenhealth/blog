(() => {
  const header = document.querySelector('.site-header');
  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const search = document.querySelector('#post-search');
  const topicButtons = [...document.querySelectorAll('[data-topic]')];
  const cards = [...document.querySelectorAll('.post-card')];
  const noResults = document.querySelector('#no-results');
  let activeTopic = 'all';

  const filterPosts = () => {
    const query = (search?.value || '').trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const topics = (card.dataset.topics || '').split(/\s+/);
      const matchesTopic = activeTopic === 'all' || topics.includes(activeTopic);
      const matchesQuery = !query || (card.dataset.search || '').includes(query);
      card.hidden = !(matchesTopic && matchesQuery);
      if (!card.hidden) visible += 1;
    });

    if (noResults) noResults.hidden = visible !== 0;
  };

  search?.addEventListener('input', filterPosts);
  topicButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeTopic = button.dataset.topic || 'all';
      topicButtons.forEach((candidate) => {
        candidate.classList.toggle('is-active', candidate === button);
      });
      filterPosts();
    });
  });

  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.removeAttribute('open'));
  });
})();
