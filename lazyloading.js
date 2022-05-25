const loadingImg = (mode) => (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      mode === 'src'
        ? (entry.target.src = entry.target.dataset.src)
        : (entry.target.style.backgroundImage = `url("${entry.target.dataset.src}")`);
      observer.unobserve(entry.target);
    }
  });
};

const lazyLoading = (elements = 'img', mode = 'src') => {
  const els = document.querySelectorAll(elements);
  let observer = new IntersectionObserver(loadingImg(mode));

  els.forEach((el) => observer.observe(el));
};
