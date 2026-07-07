const imageCards = [
  {
    title: "Houlgate strand och badortskansla",
    destination: "Normandie",
    alt: "Strand och badortsmiljo i Houlgate.",
    imageUrl:
      "https://www.normandie-cabourg-paysdauge-tourisme.fr/app/uploads/iris-images/19585/sans-titre-1-1920x1080-f50_50.webp",
    sourceName: "Normandie Cabourg Pays d'Auge Tourisme",
    sourceUrl: "https://www.normandie-cabourg-paysdauge-tourisme.fr/a-voir/houlgate/",
  },
  {
    title: "Falaises des Vaches Noires",
    destination: "Normandie",
    alt: "Klipporna Falaises des Vaches Noires vid kusten.",
    imageUrl:
      "https://www.normandie-cabourg-paysdauge-tourisme.fr/app/uploads/2025/03/falaises-des-vaches-noires-studio-911-28083.webp",
    sourceName: "Normandie Cabourg Pays d'Auge Tourisme",
    sourceUrl:
      "https://www.normandie-cabourg-paysdauge-tourisme.fr/a-faire/mer-et-nature/les-falaises-des-vaches-noires/",
  },
];

const plans = {
  "paris-normandie": [
    [
      "2 aug",
      "Bokat: flyg + transfer + Paris",
      "Norwegian direkt Stockholm Arlanda (ARN) till Paris CDG. Avgång 07:25, ankomst 10:05. Taxi från CDG till 208 Suite Guerlain är bokad och föraren följer flighten. Incheckning i lägenheten 16-23.",
    ],
    ["3 aug", "Parisdag från Marais", "Boendet ligger vid 15 rue Sainte-Croix de la Bretonnerie, Marais / Hôtel de Ville. Kör en lugn Parisdag med korta förflyttningar och enkel kväll nära boendet."],
    [
      "4 aug",
      "Parisval på plats",
      "Barnens önskemål: Notre-Dame på morgonen innan värmen. Blir det för hett mitt på dagen: skugga i Jardin du Luxembourg, Paris Plages vid Seine eller dagsutflykt till Moret-sur-Loing. På kvällen: Eiffeltornets glittershow varje hel timme efter mörkrets inbrott.",
    ],
    [
      "5 aug",
      "Bokat: Eiffeltornet + Deauville",
      "Utcheckning i Paris senast 11. Eiffeltornet, toppen med hiss, 12:30 för 4 personer (101 €). Därefter vidare till You Hotel Deauville, där incheckning är från 15. Lås transport: tåg, hyrbil från Paris/CDG eller hyrbil i Deauville.",
    ],
    ["6 aug", "Val på plats: Paléospace + semi-nocturne", "Paléospace-betalning är registrerad, men kontrollera separat biljett/tid. Kombinera Villers-sur-Mer med strand eller Falaises des Vaches Noires om tidvatten och energi passar. Kväll: semi-nocturne-marknad när info kommer; boka taxi hem till Deauville."],
    ["7 aug", "Förslag: strand + Houlgate nattmarknad", "Houlgate, Villers eller Cabourg efter väder. Förslag för fredag kväll: nattmarknad i Houlgate, info kommer via e-post. Boka taxi eller annan hemtransport till Deauville om ni väljer den."],
    ["8 aug", "Val på plats: barnens dag", "Bad, glass, marknad eller kort utflykt. Håll dagen enkel inför hemresan."],
    ["9 aug", "Bokat: hemresa", "Utcheckning från You Hotel Deauville senast 12. SAS direkt Paris CDG till Stockholm Arlanda (ARN). Avgång 20:50, ankomst 23:20. Håll god marginal från Normandie till CDG."],
  ],
};

function renderImageCards() {
  const grid = document.querySelector("#image-grid");
  grid.innerHTML = imageCards
    .map(
      (card) => `
      <article class="image-card">
        <figure>
          <div class="image-frame">
            <img src="${card.imageUrl}" alt="${card.alt}" loading="lazy">
            <div class="placeholder">Placeholder: ${card.title}<br>Officiell källa finns i sourceUrl.</div>
          </div>
          <figcaption>
            <p class="eyebrow">${card.destination}</p>
            <h3>${card.title}</h3>
            <div class="source">
              <span>sourceName: ${card.sourceName}</span>
              <span>sourceUrl: <a href="${card.sourceUrl}" target="_blank" rel="noreferrer">${card.sourceUrl}</a></span>
            </div>
          </figcaption>
        </figure>
      </article>
    `,
    )
    .join("");

  grid.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => img.closest(".image-card").classList.add("failed"));
  });
}

function renderPlan(planName) {
  document.querySelector("#timeline").innerHTML = plans[planName]
    .map(
      ([date, title, text]) => `
      <li>
        <time>${date}</time>
        <div>
          <strong>${title}</strong>
          <p>${text}</p>
        </div>
      </li>
    `,
    )
    .join("");
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderPlan(tab.dataset.plan);
    });
  });
}

renderImageCards();
renderPlan("paris-normandie");
setupTabs();
