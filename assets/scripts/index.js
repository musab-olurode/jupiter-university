window.addEventListener('DOMContentLoaded', () => {
	handleMobileToggle();
});

const handleMobileToggle = () => {
	const navButton = document.querySelector('.nav-toggle');
	const mainNav = document.querySelector('.nav-content');

	navButton.addEventListener('click', () => {
		const visibility = mainNav.getAttribute('data-visible');

		if (visibility === 'false') {
			mainNav.setAttribute('data-visible', true);
			navButton.setAttribute('aria-expanded', true);
		} else if (visibility === 'true') {
			mainNav.setAttribute('data-visible', false);
			navButton.setAttribute('aria-expanded', false);
		}
	});
};
