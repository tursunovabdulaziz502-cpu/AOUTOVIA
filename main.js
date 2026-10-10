const qutilar = document.querySelectorAll(".quti");

qutilar.forEach(function (quti) {
  quti.addEventListener("click", function () {
    qutilar.forEach(function (q) {
      q.classList.remove("yonadi");
    });
    quti.classList.add("yonadi");
  });
});

const book = document.getElementById("book");
const explore = document.getElementById("explore");
const explore1 = document.getElementById("explore1");
const search = document.querySelector(".card5 button");
const footer = document.getElementById("footer");
const car = document.getElementById("car");
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");
const hearts = document.querySelectorAll(".heart");
// const qutilar = document.querySelectorAll(".quti");

book.onclick = function () {
  footer.scrollIntoView({ behavior: "smooth" });
};

explore.onclick = function () {
  car.scrollIntoView({ behavior: "smooth" });
};

search.onclick = function () {
  car.scrollIntoView({ behavior: "smooth" });
};

explore1.onclick = function () {
  alert("Video tez orada qo'shiladi");
};

buttons.forEach(function (btn) {
  btn.onclick = function () {
    buttons.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    const type = btn.textContent.toLowerCase();

    cards.forEach(function (card) {
      if (type === "all cars" || card.dataset.type === type) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
});

hearts.forEach(function (heart) {
  heart.onclick = function () {
    const liked = heart.textContent === "♥";
    heart.textContent = liked ? "♡" : "♥";
    heart.style.color = liked ? "" : "#e10600";
  };
});

qutilar.forEach(function (quti) {
  quti.onclick = function () {
    qutilar.forEach(function (q) {
      q.classList.remove("yonadi");
    });
    quti.classList.add("yonadi");
  };
});