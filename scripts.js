
const qest = confirm("Isso é só uma prototypagem da WELL SPORTS ok? O meu criador ainda esta trabalhando aqui :)");
if (qest) {
    alert("essa interface lhe agrada ? Se não gostou de qualquer um dos detalhes podemos mudar, entre em contato no whatsapp: 11981833942");
}



document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const description = button.previousElementSibling;
        if (description.classList.contains('expanded')) {
            description.classList.remove('expanded');
            button.textContent = 'Leia mais';
        } else {
            description.classList.add('expanded');
            button.textContent = 'Leia menos';
        }
    });
});
