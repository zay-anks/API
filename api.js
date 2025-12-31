const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");

async function convert() {
  if (!amount.value || amount.value <= 0) {
    result.innerText = "Hasil: -";
    return;
  }

  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount.value}&from=${from.value}&to=${to.value}`
    );
    const data = await res.json();

    const nilai = data.rates[to.value];
    result.innerText = `Hasil: ${nilai.toFixed(2)} ${to.value}`;
  } catch (error) {
    result.innerText = "Gagal konversi";
    console.error(error);
  }
}

amount.addEventListener("input", convert);
from.addEventListener("change", convert);
to.addEventListener("change", convert);