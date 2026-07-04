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
  {
    title: "Plage du Veillon",
    destination: "Vendée",
    alt: "Surf och strandmiljo vid Plage du Veillon.",
    imageUrl:
      "https://www.destination-vendeegrandlittoral.com/wp-content/smush-webp/2026/03/Surf-Veillon-9734.jpg-1200px.jpg.webp",
    sourceName: "Destination Vendée Grand Littoral",
    sourceUrl:
      "https://www.destination-vendeegrandlittoral.com/explorer/destination/talmont-saint-hilaire/plage-du-veillon-2/",
  },
  {
    title: "Jard-sur-Mer kustby",
    destination: "Vendée",
    alt: "Kvarn och kustbymiljo i Jard-sur-Mer.",
    imageUrl:
      "https://www.destination-vendeegrandlittoral.com/wp-content/uploads/2018/03/moulin-jard-sur-mer-cr%C3%A9dit-photo-destination-vend%C3%A9e-grand-littoral-1.jpg",
    sourceName: "Destination Vendée Grand Littoral",
    sourceUrl:
      "https://www.destination-vendeegrandlittoral.com/explorer/destination/jard-sur-mer/",
  },
];

const matrixRows = [
  {
    factor: "Värme-risk",
    normandy: ["Bra", "Kust och kortare Parisdel gör värmen lättare att hantera."],
    vendee: ["Bra", "Ren kustsemester minskar Paris-risk men transporten kan bli längre."],
  },
  {
    factor: "Transport-enkelhet",
    normandy: ["Stark", "Rimligare om Paris är med i planen."],
    vendee: ["Mellan", "Bäst om ni väljer bort Paris eller accepterar längre resa."],
  },
  {
    factor: "Bad",
    normandy: ["Bra", "Houlgate, Villers och närliggande badorter."],
    vendee: ["Stark", "Plage du Veillon och flera Jard-stränder ger mer variation."],
  },
  {
    factor: "Snäckor och strandfynd",
    normandy: ["Bra", "Strandpromenader och lågvatten kan bli konkreta fyndstunder."],
    vendee: ["Bra", "Många stränder och kustpromenader."],
  },
  {
    factor: "Fossiler",
    normandy: ["Stark", "Falaises des Vaches Noires och Paléospace, särskilt 6 augusti."],
    vendee: ["Svag", "Inte samma tydliga fossilcase i briefen."],
  },
  {
    factor: "Marknader",
    normandy: ["Mellan", "Kan lösas med kustorter, men inte huvudstyrkan i briefen."],
    vendee: ["Stark", "Port Bourgenay kvällsmarknad och Jard-sur-Mer marknad."],
  },
  {
    factor: "Barnpepp",
    normandy: ["Mellan", "Bra om fossil blir äventyr i liten dos, inte hela resan."],
    vendee: ["Stark", "Bad, surf/bodyboard och hamn är lättare att sälja in direkt."],
  },
  {
    factor: "Vuxenpepp",
    normandy: ["Stark", "Bra kompromiss mellan Paris, kust och Saras fossilspår."],
    vendee: ["Stark", "Tydlig semesterkänsla och enklare kustfokus."],
  },
];

const plans = {
  normandie: [
    ["3 aug", "Resa", "Paris eller direkt mot Normandie beroende på värme och transport."],
    ["4 aug", "Houlgate strand", "Bad, enkel promenad och första kustkänslan."],
    ["5 aug", "Cabourg/Houlgate/Villers", "Bad, snäckor och valfri badortskänsla."],
    [
      "6 aug",
      "Fossilaktivitet",
      "Paléospace/Falaises des Vaches Noires om platsen fortfarande är bokningsbar.",
    ],
    ["7 aug", "Reservdag", "Väderbuffert, strand eller kuststad."],
    ["8 aug", "Barnens val", "Lugn dag med bad, glass, marknad eller kort utflykt."],
    ["9 aug", "Hemresa", "Håll dagen enkel."],
  ],
  vendee: [
    ["3 aug", "Resa", "Mot Vendée/Jard/Talmont, alternativt övernattning på väg."],
    ["4 aug", "Plage du Veillon", "Bad, strand och eventuell surf/bodyboard-koll."],
    [
      "5 aug",
      "Bad + kvällsmarknad",
      "Port Bourgenay kvällsmarknad om den är aktiv detta datum.",
    ],
    ["6 aug", "Pointe du Payré", "Kustnatur, vyer och promenad utan att göra dagen för lång."],
    ["7 aug", "Barnaktivitet", "Surf/bodyboard, bad eller annan enkel aktivitet."],
    ["8 aug", "Reservdag", "Hamn, marknad, livemusik eller extra strandtid."],
    ["9 aug", "Hemresa", "Håll marginal för lång transport."],
  ],
};

function scoreClass(label) {
  if (label === "Stark") return "";
  if (label === "Bra" || label === "Mellan") return "warn";
  return "low";
}

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

function renderMatrix() {
  document.querySelector("#matrix-body").innerHTML = matrixRows
    .map(
      (row) => `
      <tr>
        <td><strong>${row.factor}</strong></td>
        <td><span class="score ${scoreClass(row.normandy[0])}">${row.normandy[0]}</span><br>${row.normandy[1]}</td>
        <td><span class="score ${scoreClass(row.vendee[0])}">${row.vendee[0]}</span><br>${row.vendee[1]}</td>
      </tr>
    `,
    )
    .join("");
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
renderMatrix();
renderPlan("normandie");
setupTabs();
