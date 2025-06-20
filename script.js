const spiderFacts = [
    "Человек-паук был создан, потому что Стэн Ли хотел сделать супергероя, с которым могли бы идентифицироваться подростки.",
    "Первоначально Человека-паука должны были назвать Человеком-мухой, но в последний момент название изменили.",
    "Питер Паркер — один из немногих супергероев, кто сам шьёт свои костюмы.",
    "Человек-паук был первым подростком-супергероем, который не был помощником взрослого героя.",
    "Фраза «С великой силой приходит великая ответственность» впервые появилась в последней панели комикса Amazing Fantasy #15.",
    "Человек-паук был отвергнут Marvel пять раз, прежде чем получил зелёный свет.",
    "Костюм Венома изначально был чёрной версией костюма Человека-паука, созданного инопланетным симбиотом."
];

const factBtn = document.getElementById('fact-btn');
const factText = document.getElementById('fact-text');

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * spiderFacts.length);
    factText.textContent = spiderFacts[randomIndex];
    factText.style.display = 'block';
    factBtn.textContent = 'Показать другой факт';
}

factBtn.addEventListener('click', showRandomFact);

document.querySelectorAll('.enemy-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});