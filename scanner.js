const bankIconWrapper = document.getElementById("bankIconWrapper");

const bankData = {
  "044525593": {
    name: "Альфа",
    logo: "./logos/alfa.png",
    url: "https://zp.alfabank.ru/msos-ext/protected/index.jsf",
  },
  "044030786": {
    name: "Альфа",
    logo: "./logos/alfa.png",
    url: "https://zp.alfabank.ru/msos-ext/protected/index.jsf",
  },
  "045004774": {
    name: "Альфа",
    logo: "./logos/alfa.png",
    url: "https://zp.alfabank.ru/msos-ext/protected/index.jsf",
  },
  "044525974": {
    name: "Tinkoff",
    logo: "./logos/tinkoff.png",
    url: "https://sme.tinkoff.ru/",
  },
  "047102651": {
    name: "Сбер",
    logo: "./logos/sber.png",
    url: "https://sbi.sberbank.ru:9443/ic/ufs/login.html",
  },
  "041909644": {
    name: "Сбер",
    logo: "./logos/sber.png",
    url: "https://sbi.sberbank.ru:9443/ic/ufs/login.html",
  },
  "044525225": {
    name: "Сбер",
    logo: "./logos/sber.png",
    url: "https://sbi.sberbank.ru:9443/ic/ufs/login.html",
  },
  "046614632": {
    name: "Сбер",
    logo: "./logos/sber.png",
    url: "https://sbi.sberbank.ru:9443/ic/ufs/login.html",
  },
  "044030653": {
    name: "Сбер",
    logo: "./logos/sber.png",
    url: "https://sbi.sberbank.ru:9443/ic/ufs/login.html",
  },
  "049205603": {
    name: "Сбер",
    logo: "./logos/sber.png",
    url: "https://sbi.sberbank.ru:9443/ic/ufs/login.html",
  },
  "046015602": {
    name: "Сбер",
    logo: "./logos/sber.png",
    url: "https://sbi.sberbank.ru:9443/ic/ufs/login.html",
  },
  "040813608": {
    name: "Сбер",
    logo: "./logos/sber.png",
    url: "https://sbi.sberbank.ru:9443/ic/ufs/login.html",
  },
  "044525420": {
    name: "Tochka",
    logo: "./logos/tochka.png",
    url: "https://id.tochka.com/",
  },
  "044525999": {
    name: "Tochka",
    logo: "./logos/tochka.png",
    url: "https://id.tochka.com/",
  },
  "044525104": {
    name: "Tochka",
    logo: "./logos/tochka.png",
    url: "https://id.tochka.com/",
  },
  "044525411": {
    name: "VTB",
    logo: "./logos/vtb.png",
    url: "https://db.vtb.ru/login",
  },
  "044525700": {
    name: "Raiffeisen",
    logo: "./logos/raiffeisen.png",
    url: "https://sso.rbo.raiffeisen.ru/signin",
  },
  "044525092": {
    name: "Modul",
    logo: "./logos/modul.png",
    url: "",
  },
  // Добавьте остальные банки здесь
};

function handleFileUpload() {
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];
  const reader = new FileReader();

  let date = new Date();
  date = `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;

  reader.onload = function (event) {
    const fileContent = event.target.result;
    const lines = fileContent.split("\n");

    let imageAdded = false;

    lines.some((line) => {
      const bankKeys = Object.keys(bankData);
      const foundBank = bankKeys.find((key) => line.includes(key));

      if (foundBank) {
        const bank = bankData[foundBank];
        let bankLinkItem = document.createElement("div");
        let clsBtn = document.createElement("button");
        const bankLink = document.createElement("a");
        const img = document.createElement("img");
        const time = document.createElement("span");

        img.src = bank.logo;
        img.alt = bank.name;
        img.classList.add("logo-img");

        time.textContent = date;

        clsBtn.classList.add("bank-link-closebtn");
        bankLinkItem.classList.add("bank-link-item");
        bankLink.classList.add("bank-link");
        bankLink.href = bank.url;
        time.classList.add("logo-time");

        bankLink.appendChild(img);
        bankLinkItem.appendChild(clsBtn);
        bankLinkItem.appendChild(bankLink);
        bankLinkItem.appendChild(time);
        bankIconWrapper.appendChild(bankLinkItem);

        imageAdded = true;
        return true; // Завершаем поиск после первого найденного банка
      }
      return false;
    });
  };

  reader.readAsText(file);
}
