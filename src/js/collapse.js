document.querySelectorAll('.faq .question h3').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      if (answer.classList.contains('show')) {
        answer.classList.remove('show');
      } else {
        document.querySelectorAll('.faq .answer').forEach(answer => {
          answer.classList.remove('show');
        });
        answer.classList.add('show');
      }
    });
  });
  