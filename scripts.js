window.addEventListener('scroll', () => {
    const commandsHeader = document.querySelector('.fade-in');
    const { top } = commandsHeader.getBoundingClientRect();

    if (top < window.innerHeight) {
        commandsHeader.classList.add('visible');
    }
});
