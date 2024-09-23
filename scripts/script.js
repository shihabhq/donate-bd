const balance = document.querySelector(".balance");
const historyBtn = document.querySelector(".history-button");
const donationBtn = document.querySelector(".donation");
const cardContainer = document.querySelector(".card-container");
const historyContainer = document.querySelector(".history-container");

donationBtn.addEventListener("click", function () {
  donationBtn.classList.add("green-active");
  historyBtn.classList.remove("green-active");
  historyContainer.classList.add("hidden-true");
  cardContainer.classList.remove("hidden-true");
});
historyBtn.addEventListener("click", function () {
  donationBtn.classList.remove("green-active");
  historyBtn.classList.add("green-active");
  historyContainer.classList.remove("hidden-true");
  cardContainer.classList.add("hidden-true");
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const cardHeading = card.querySelector(".card-heading");
  const amount = card.querySelector(".card-amount");
  const donateNowBtn = card.querySelector(".donate-now");
  const donateInput = card.querySelector(".donate-input");

  donateNowBtn.addEventListener("click", function () {
    if (donateInput.value && Number(donateInput.value) > 0) {
      if (Number(donateInput.value) <= Number(balance.innerText)) {
        updateBalance(donateInput, amount);
        congratsOnDonation();
        updateHistory(donateInput, cardHeading);

        donateInput.value = "";
      } else {
        alert("insufficient Balance");
      }
    } else {
      alert("invalid donation amount");
    }
  });
});

function updateBalance(donateInput, amount) {
  balance.innerText = Number(balance.innerText) - Number(donateInput.value);

  amount.innerText = Number(amount.innerText) + Number(donateInput.value);
}

// congrats functionality
function congratsOnDonation() {
  congratsDiv.classList.remove("hidden-true");
}

const congratsDiv = document.querySelector(".congrats-container");
const closeCongrats = document.querySelector(".close-congrats");

closeCongrats.addEventListener("click", function () {
  congratsDiv.classList.add("hidden-true");
});

//history functionality

function updateHistory(donateInput, cardHeading) {
  console.log(donateInput.value);
  const div = document.createElement("div");
  div.classList.add("history");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.innerText = `${parseFloat(donateInput.value)} Taka is donated for ${
    cardHeading.innerText
  }`;
  p.innerText = `Date: ${new Date()}`;
  div.append(h2, p);

  historyContainer.appendChild(div);
}
//blog button
const blogBtn = document.querySelector(".blog-button");
blogBtn.addEventListener("click", function () {
  window.location = "blog.html";
});
