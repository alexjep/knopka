const bankIconWrapper = document.getElementById("bankIconWrapper");
const scannerGroup = document.getElementById("scannerGroup");

function handleFileUpload() {
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  const reader = new FileReader();

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
        img.alt = "A";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("Альфа 045004774");
        imageAdded = true; // Устанавливаем флаг, чтобы изображение добавлялось только один раз
      }
      if (!imageAdded && line.includes("044525974")) {
        const img = document.createElement("img");
        img.src = "./logos/tinkoff.png";
        img.alt = "A";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("Тинькофф");
        imageAdded = true;
      }
      if (
        !imageAdded &&
        (line.includes("047102651") || line.includes("044525225"))
      ) {
        const img = document.createElement("img");
        img.src = "./logos/sber.png";
        img.alt = "S";
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
        img.alt = "S";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("Точка");
        imageAdded = true;
      }
      if (!imageAdded && line.includes("044525411")) {
        const img = document.createElement("img");
        img.src = "./logos/vtb.png";
        img.alt = "A";
        img.classList.add("logo-img");
        bankIconWrapper.appendChild(img);
        console.log("ВТБ");
        imageAdded = true;
      }
    });

    console.log("File scanning complete");
  };

  reader.readAsText(file);
}
