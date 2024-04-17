const bankIconWrapper = document.getElementById("bankIconWrapper");
const scannerGroup = document.getElementById("scannerGroup");

function handleFileUpload() {
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  const reader = new FileReader();

  let date = new Date();
  date = `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;

  reader.onload = function (event) {
    // bankIconWrapper.innerHTML = "";
    const fileContent = event.target.result;
    const lines = fileContent.split("\n");

    let imageAdded = false;

    lines.forEach((line, index) => {
      if (
        !imageAdded &&
        (line.includes("044525593") ||
          line.includes("044030786") ||
          line.includes("045004774"))
      ) {
        const img = document.createElement("img");
        img.src = "./logos/alfa.png";
        img.alt = "Alfa";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("Альфа");
        imageAdded = true; // Устанавливаем флаг, чтобы изображение добавлялось только один раз
      }
      if (!imageAdded && line.includes("044525974")) {
        const img = document.createElement("img");
        img.src = "./logos/tinkoff.png";
        img.alt = "Tinkoff";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log(`Тинькофф`);
        imageAdded = true;
      }
      if (
        !imageAdded &&
        (line.includes("047102651") ||
          line.includes("044525225") ||
          line.includes("044030653") ||
          line.includes("049205603") ||
          line.includes("046015602"))
      ) {
        const img = document.createElement("img");
        img.src = "./logos/sber.png";
        img.alt = "Sber";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("Сбер");
        imageAdded = true;
      }
      if (
        !imageAdded &&
        (line.includes("044525420") ||
          line.includes("044525999") ||
          line.includes("044525104"))
      ) {
        const img = document.createElement("img");
        img.src = "./logos/tochka.png";
        img.alt = "Tochka";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("Точка");
        imageAdded = true;
      }
      if (!imageAdded && line.includes("044525411")) {
        const img = document.createElement("img");
        img.src = "./logos/vtb.png";
        img.alt = "VTB";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("ВТБ");
        imageAdded = true;
      }
      if (!imageAdded && line.includes("044525700")) {
        const img = document.createElement("img");
        img.src = "./logos/raiffeisen.png";
        img.alt = "Raiffeisen";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("Райфайзен");
        imageAdded = true;
      }
    });

    console.log(`File scanning complete  ${date}`);
  };

  reader.readAsText(file);
}
