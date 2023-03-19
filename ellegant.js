const elle_toggler = document.getElementsByClassName('elle-toggler');
for (e of elle_toggler) {
	const labels = e.querySelectorAll('.elle-label');
  const checkbox = e.querySelector('.elle-checkbox');
  
  checkbox.addEventListener('change', c => {
  	labels.forEach(l => l.setAttribute('aria-checked', c.target.checked));
  });
};

const elle_switcher = document.getElementsByClassName('elle-switcher');
for (e of elle_switcher) {
  const radios = e.querySelectorAll('.elle-radio');
  radios.forEach(radio => {
  	radio.addEventListener('change', c => {
      const nth = c.target.dataset.nth;
      e.querySelectorAll('.elle-label').forEach(l => l.setAttribute('aria-checked', false));
      e.querySelectorAll(`.elle-label[data-nth="${nth}"]`)
      	.forEach(l => l.setAttribute('aria-checked', c.target.checked));
  	});
	});
}