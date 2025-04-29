const ratingBtnEl = document.querySelector("#rating-btn");
const sectionEl = document.querySelector("section");

ratingBtnEl.addEventListener("click", handleRatingBtnClick);

function handleRatingBtnClick() {
  const selectedRating = document.querySelector('input[type="radio"]:checked');
  if (selectedRating) {
    const ratingValue = selectedRating.value;
    sectionEl.innerHTML = getThankYouMessage(ratingValue);
  }
}

function getThankYouMessage(ratingValue) {
  return `
     <div class="thank-you">
        <img src="images/illustration-thank-you.svg" alt="thank you">
        <p>You selected ${ratingValue} out of 5</p>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
     </div>
     `;
}
