export default function toggleAnswer() {
  const cards = document.querySelectorAll("[data-js=card]");
  cards.forEach((card) => {
    const answerButton = card.querySelector("[data-js=answer-button]");
    const answer = card.querySelector("[data-js=answer]");
    answerButton.addEventListener("click", () => {
      answer.classList.toggle("hide");
    });
  });
}
