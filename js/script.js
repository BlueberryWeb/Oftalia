  document.querySelectorAll('.onboarding-card__arrow').forEach(function (arrow) {
    var target = document.querySelector(arrow.dataset.target);
    arrow.addEventListener('click', function (e) {
      document.querySelector('.visible-card').classList.remove('visible-card');
      target.classList.add('visible-card');
    }, false);
  });
  document.querySelectorAll('.onboarding-card-web__arrow').forEach(function (arrow) {
    var target = document.querySelector(arrow.dataset.target);
    arrow.addEventListener('click', function (e) {
      document.querySelector('.visible-card-web').classList.remove('visible-card-web');
      target.classList.add('visible-card-web');
    }, false);
  });
  //MENÚ FIJADO
  

  //TERMINA MENU FIJADO
  