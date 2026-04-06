const reveals = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target); // repeat na ho
    }
  });
}, { threshold: 0.25 });

reveals.forEach(el => io.observe(el));
