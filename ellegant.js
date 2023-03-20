const elle_checkbox = document.getElementsByClassName('elle-checkbox');
for (checkbox of elle_checkbox) {
	const labels = document.querySelectorAll(`.elle-label[for="${checkbox.getAttribute('id')}"]`);
  
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