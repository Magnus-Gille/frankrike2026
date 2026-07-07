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
    title: "Fossilklippor vid Plage de la Mine",
    destination: "Vendée",
    alt: "Klipporna vid Plage de la Mine dar fossil kan hittas.",
    imageUrl: "https://cdt85.media.tourinsoft.eu/upload/jard-falaises-mine.JPG",
    sourceName: "Destination Vendée Grand Littoral",
    sourceUrl:
      "https://www.destination-vendeegrandlittoral.com/sit/agenda/randonnees-et-visites/les-richesses-de-la-plage-de-la-mine/",
  },
  {
    title: "Geologi och fossiljakt på stranden",
    destination: "Vendée",
    alt: "Guidad geologivandring pa stranden vid Plage de la Mine.",
    imageUrl:
      "https://www.destination-vendeegrandlittoral.com/wp-content/uploads/2026/05/CD85-geologie-plage-destination-vendee-grand-littoral.jpg",
    sourceName: "Destination Vendée Grand Littoral",
    sourceUrl:
      "https://www.destination-vendeegrandlittoral.com/sit/agenda/randonnees-et-visites/geologie-a-la-plage-sorties-nature/",
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
    normandy: ["Stark", "Boende i Deauville gör tåg och hyrbil enklare. Hyrbil från Deauville/Trouville gör Houlgate, Villers och utflykter friare."],
    vendee: ["Mellan", "TGV till Les Sables-d'Olonne går fint, men sista ~2 milen till Jard kräver i praktiken hyrbil — bussarna är glesa och målen utspridda."],
  },
  {
    factor: "Bad",
    normandy: ["Bra", "Finkorniga sandstränder med snäckor vid lågvatten: Houlgate, Villers, Deauville."],
    vendee: ["Stark", "Plage du Veillon: bred sandstrand med snäckor, ingen sten i badet. Fler Jard-stränder som variation."],
  },
  {
    factor: "Snäckor och strandfynd",
    normandy: ["Bra", "Stora tidvattnet blottar enorma sandbankar: gräv hjärtmusslor och knivmusslor (reglerat, max 5 kg/person)."],
    vendee: ["Bra", "Klippooler vid Ragounite och Payré-estuariet: snäckor, krabbor och musslor utan grävande — lätt för barnen."],
  },
  {
    factor: "Fossiler",
    normandy: ["Stark", "Guidad fossiljakt vid Falaises des Vaches Noires, särskilt 6 augusti."],
    vendee: ["Bra", "Plage de la Mine: ammoniter och belemniter i jurakalkstenen, guidade familjevandringar finns."],
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
    normandy: ["Stark", "Bra kompromiss mellan Paris, kust och fossilspåret."],
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
      "Fossiljakt",
      "Guidad fossiljakt vid Falaises des Vaches Noires om platsen fortfarande är bokningsbar.",
    ],
    ["7 aug", "Reservdag", "Väderbuffert, strand eller kuststad. Fredag: kvällsmarknad i Houlgate."],
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
    ["6 aug", "Pointe du Payré", "Kustnatur, vyer och fossilspaning vid Plage de la Mine."],
    ["7 aug", "Barnaktivitet", "Surf/bodyboard, bad eller annan enkel aktivitet."],
    ["8 aug", "Reservdag", "Hamn, marknad, livemusik eller extra strandtid."],
    ["9 aug", "Hemresa", "Håll marginal för lång transport."],
  ],
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
    ["6 aug", "Val på plats: Paléospace eller strand", "Paléospace-betalning är registrerad, men kontrollera separat biljett/tid. Kombinera Villers-sur-Mer med strand eller Falaises des Vaches Noires om tidvatten och energi passar."],
    ["7 aug", "Val på plats: strand + kväll", "Houlgate, Villers eller Cabourg efter väder. Fredag kväll: Houlgate kvällsmarknad om energin finns."],
    ["8 aug", "Val på plats: barnens dag", "Bad, glass, marknad eller kort utflykt. Håll dagen enkel inför hemresan."],
    ["9 aug", "Bokat: hemresa", "Utcheckning från You Hotel Deauville senast 12. SAS direkt Paris CDG till Stockholm Arlanda (ARN). Avgång 20:50, ankomst 23:20. Håll god marginal från Normandie till CDG."],
  ],
  "paris-vendee": [
    [
      "2 aug",
      "Flyg till Paris",
      "Bokat: Norwegian direkt Stockholm Arlanda (ARN) till Paris CDG. Avgång 07:25, ankomst 10:05. Parisboendet är bokat 2-5 augusti.",
    ],
    ["3 aug", "Paris från Marais", "Lugn Parisdag med boendet i Marais / Hôtel de Ville som bas."],
    [
      "4 aug",
      "Paris med barnen",
      "Morgonaktivitet innan värmen, paus i skugga mitt på dagen. Blir det för hett: dagsutflykt till Moret-sur-Loing (45–50 min tåg) med kanot och skuggiga flodbankar.",
    ],
    [
      "5 aug",
      "Eiffeltornet + TGV till Vendée",
      "Bokat: Eiffeltornet, toppen med hiss, 12:30 för 4 personer (101 €). Därefter TGV Paris Montparnasse–Les Sables-d'Olonne ca 3,5–4 timmar, med hyrbil vid stationen.",
    ],
    ["6 aug", "Plage du Veillon", "Bad, vågor och eventuell bodyboard-koll."],
    ["7 aug", "Pointe du Payré", "Kustnatur, strandtid och fossilspaning vid Plage de la Mine."],
    ["8 aug", "Marknad + bad", "Kvällsmarknad i Port Bourgenay om den är aktiv, annars extra strandtid."],
    ["9 aug", "Hemresa", "Bokat: SAS direkt Paris CDG till Stockholm Arlanda (ARN). Avgång 20:50, ankomst 23:20. Lång transportdag från Vendée — håll mycket marginal."],
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
renderPlan("paris-normandie");
setupTabs();
