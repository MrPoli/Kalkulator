// stałe pobrane z DOM
const numbers = document.querySelectorAll(".number");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");
const result = document.getElementById("result");
const c = document.getElementById("c");
const ce = document.getElementById("ce");
const bc = document.getElementById("bc");
const operator = document.querySelectorAll(".operation");
const dot = document.querySelector("#dot");
const percent = document.querySelector("#percent");

// zmienne
let numberOne;
let wynik = "";
let dzialanie;

// funkcja wyłączająca wielokrotne zero
function resultText(number) {
  console.log(result.textContent.search(/\./));
  if (result.textContent == 0) {
    result.textContent = number.toString();
  } else {
    result.textContent += number.toString();
  }
}

// funkcja reagująca na naciśnięcie klawiszy operatorów i znaków równości
function oblicz(dzialanie) {
  // reakcja na klawisze operatorów
  operator.forEach((operation) => {
    operation.addEventListener("click", () => {
      numberOne = Number(result.textContent);
      dzialanie = operation.textContent;
      console.log(dzialanie);
      result.textContent = 0;
      obliczanieDzialania(dzialanie);
      console.log(wynik);
    });
  });
  // reakcja na klawisz równości
  equal.addEventListener("click", () => {
    numberOne = Number(result.textContent);
    obliczanieDzialania(dzialanie);
    console.log(wynik);
    result.textContent = wynik;
    wynik = "";
  });
}

// funkcja służąca do dokonywania obliczeń
function obliczanieDzialania(dzialanie) {
  switch (dzialanie) {
    case "+":
      wynik += numberOne;
      wynik = Number(wynik);
      break;
    case "-":
      if (wynik === "") {
        return (wynik = numberOne);
      } else {
        wynik -= numberOne;
        wynik = Number(wynik);
      }
      break;
    case "*":
      if (wynik === "") {
        return (wynik = numberOne);
      } else {
        wynik *= numberOne;
        wynik = Number(wynik);
      }
      break;
    case "/":
      if (wynik === "") {
        return (wynik = numberOne);
      } else {
        wynik /= numberOne;
        wynik = Number(wynik);
      }
      break;
    default:
      return;
  }
}

// cały reset C
c.addEventListener("click", () => {
  result.textContent = 0;
  numberOne = "";
  wynik = "";
  dzialanie = "";
});

//CE
ce.addEventListener("click", () => {
  result.textContent = 0;
});

//BC
bc.addEventListener("click", () => {
  if (result.textContent.length > 1) {
    result.textContent = result.textContent.slice(0, -1);
    console.log(wynik);
    console.log(numberOne);
  } else {
    result.textContent = 0;
  }
});

//percent
percent.addEventListener("click", () => {
  if (wynik === "") {
    wynik = 0;
    result.textContent = 0;
    return;
  } else {
    wynik = (wynik * result.textContent) / 100;
    wynik = Number(wynik);
    result.textContent = wynik;
    delete dzialanie;
    wynik = "";
  }
});

//reakcja na przycisk przecinka
dot.addEventListener("click", () => {
  if (result.textContent.indexOf(".") > -1) {
    return;
  } else {
    result.textContent += ".";
  }
});

// Działanie aplikacji
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    resultText(number.innerText);
  });
});

oblicz(dzialanie);
