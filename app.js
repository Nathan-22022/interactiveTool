function createCard(category, question, ask) {
    let container = document.getElementById('container')
    let card = document.createElement('article')
    card.className = 'card'

    card.innerHTML = `
    <div class="card__content">
    <h3>${category}</h3>
    <div class="card__content__question">
        <p>${question}</p>
    </div>
    <div class="card__content__awnser">
        <p>${ask}</p>
    </div>
    </div>
    `

    let isVisibleAsk = false

    function turnCard() {
        isVisibleAsk = !isVisibleAsk
        card.classList.toggle('active', isVisibleAsk)
    }
    card.addEventListener('click', turnCard)


    container.appendChild(card)
}