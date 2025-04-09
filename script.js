
  const works = document.querySelectorAll('.work');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showWork(index) {
    works.forEach((work, i) => {
      work.classList.toggle('active', i === index);
      dots[i].classList.toggle('active-dot', i === index);
    });
  }

  document.querySelector('.left').addEventListener('click', () => {
    current = (current - 1 + works.length) % works.length;
    showWork(current);
  });

  document.querySelector('.right').addEventListener('click', () => {
    current = (current + 1) % works.length;
    showWork(current);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showWork(current);
    });
  });

  showWork(current); // initialize

