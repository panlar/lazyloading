function lazyLoading (elements = 'img', mode = 'src') {
  const els = document.querySelectorAll(elements);
  let Observer;

  if (mode === 'src') {
    Observer = new IntersectionObserver(loadingSRC);
  } else if (mode === 'bg') {
    Observer = new IntersectionObserver(loadingBG);
  }

  els.forEach(el => Observer.observe(el))
}

function loadingSRC (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
    };
  });
}

function loadingBG (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.backgroundImage = `url("${entry.target.dataset.src}")`
        observer.unobserve(entry.target);
    };
  });
}