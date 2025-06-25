

document.getElementById('toggleButton').addEventListener('click', function() {
    const textContent = document.getElementById('textContent');
    textContent.classList.toggle('visible');
    this.textContent = textContent.classList.contains('visible') ? 'Show Less' : 'Show More';
});