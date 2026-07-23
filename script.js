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
      "Barnens önskemål: Notre-Dame på morgonen innan värmen. Nytt utflyktsförslag: Katakomberna, som passar tisdag 4 augusti eftersom måndagar är stängt; boka tidsbiljett när de släpps 7 dagar i förväg. Blir det för hett mitt på dagen: skugga i Jardin du Luxembourg, Paris Plages vid Seine eller dagsutflykt till Moret-sur-Loing. På kvällen: Eiffeltornets glittershow varje hel timme efter mörkrets inbrott.",
    ],
    [
      "5 aug",
      "Bokat: Eiffeltornet + hyrbil till Deauville",
      "Utcheckning i Paris senast 11. Eiffeltornet, toppen med hiss, 12:30 för 4 personer (101 €). Lös bagaget i förväg och sikta på Alamo Ternes, 38 avenue des Ternes, senast 16:45. Bilen hämtas 17:00 och stationen stänger 18:00. Kör därefter till You Hotel Deauville.",
    ],
    ["6 aug", "Bokat: Paléospace + valfri kväll", "Guidad tur vid Falaises des Vaches Noires är bokad med start i Villers-sur-Mer kl 10:15. 4 biljetter finns som PDF, totalt 35,60 €. Kombinera med strand om tidvatten och energi passar. Kväll: semi-nocturne-marknad när info kommer; boka taxi hem till Deauville om ni väljer den."],
    ["7 aug", "Förslag: strand + Houlgate nattmarknad", "Houlgate, Villers eller Cabourg efter väder. Förslag för fredag kväll: nattmarknad i Houlgate, info kommer via e-post. Boka taxi eller annan hemtransport till Deauville om ni väljer den."],
    ["8 aug", "Val på plats: barnens dag", "Bad, glass, marknad eller kort utflykt. Håll dagen enkel inför hemresan."],
    ["9 aug", "Bokat: bilretur + hemresa", "Utcheckning från You Hotel Deauville senast 12. Lämna Alamo-bilen vid CDG Terminal 2D kl 17:30 och följ sedan avgångsterminalen på SAS boardingkort. SAS direkt till Stockholm Arlanda avgår 20:50 och ankommer 23:20; returtiden ger 3 timmar 20 minuter till avgång."],
  ],
};

const weatherPlaces = {
  paris: {
    name: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  deauville: {
    name: "Deauville",
    latitude: 49.357,
    longitude: 0.083,
  },
  villers: {
    name: "Villers-sur-Mer",
    latitude: 49.322,
    longitude: 0.001,
  },
  houlgate: {
    name: "Houlgate",
    latitude: 49.299,
    longitude: -0.074,
  },
};

const weatherDays = [
  {
    date: "2026-08-02",
    label: "2 aug",
    title: "Ankomst till Paris",
    stops: ["paris"],
    note: "CDG, taxi och första kvällen i Marais.",
  },
  {
    date: "2026-08-03",
    label: "3 aug",
    title: "Paris från Marais",
    stops: ["paris"],
    note: "Lugn stadsdag med korta förflyttningar.",
  },
  {
    date: "2026-08-04",
    label: "4 aug",
    title: "Parisval på plats",
    stops: ["paris"],
    note: "Notre-Dame, sval paus eller kväll vid Eiffeltornet.",
  },
  {
    date: "2026-08-05",
    label: "5 aug",
    title: "Paris till Deauville",
    stops: ["paris", "deauville"],
    note: "Eiffeltornet mitt på dagen och vidare mot Normandie.",
  },
  {
    date: "2026-08-06",
    label: "6 aug",
    title: "Villers-sur-Mer",
    stops: ["villers", "deauville"],
    note: "Paléospace, strand eller semi-nocturne-kväll.",
  },
  {
    date: "2026-08-07",
    label: "7 aug",
    title: "Houlgateförslag",
    stops: ["houlgate", "deauville"],
    note: "Stranddag och möjlig nattmarknad i Houlgate.",
  },
  {
    date: "2026-08-08",
    label: "8 aug",
    title: "Normandie på plats",
    stops: ["deauville"],
    note: "Bad, glass, marknad eller kort utflykt.",
  },
  {
    date: "2026-08-09",
    label: "9 aug",
    title: "Hemresedag",
    stops: ["deauville", "paris"],
    note: "Utcheckning i Deauville och kvällsflyg från CDG.",
  },
];

const weatherCodeText = {
  0: "klart",
  1: "mest klart",
  2: "halvklart",
  3: "mulet",
  45: "dimma",
  48: "dimma med rimfrost",
  51: "lätt duggregn",
  53: "duggregn",
  55: "täta duggregn",
  56: "underkylt duggregn",
  57: "kraftigt underkylt duggregn",
  61: "lätt regn",
  63: "regn",
  65: "kraftigt regn",
  66: "underkylt regn",
  67: "kraftigt underkylt regn",
  71: "lätt snöfall",
  73: "snöfall",
  75: "kraftigt snöfall",
  77: "snökorn",
  80: "lätta regnskurar",
  81: "regnskurar",
  82: "kraftiga regnskurar",
  85: "lätta snöbyar",
  86: "kraftiga snöbyar",
  95: "åska",
  96: "åska med hagel",
  99: "kraftig åska med hagel",
};

const dayForecastCache = new Map();
const currentWeatherCache = new Map();

const tripMapCategories = {
  stay: { label: "Boende", marker: "B" },
  booked: { label: "Bokat", marker: "✓" },
  transport: { label: "Transport", marker: "T" },
  shopping: { label: "Shopping", marker: "S" },
  food: { label: "Mat & kväll", marker: "M" },
  outing: { label: "Utflykt & bad", marker: "U" },
};

const tripMapPlaces = [
  {
    name: "Paris Charles de Gaulle (CDG)",
    category: "transport",
    scope: "route",
    meta: "Flygplats · bokad ut- och hemresa",
    detail: "Ankomst 2 augusti 10:05 med bokad taxi. Hemflyg 9 augusti 20:50.",
    latitude: 49.0068908,
    longitude: 2.571082,
  },
  {
    name: "Hämta bil · Alamo Paris Ternes",
    category: "booked",
    scope: "paris",
    meta: "38 avenue des Ternes · 5 aug 17:00",
    detail: "Bokad och betald envägshyra till CDG Terminal 2D. Intermediate SUV Auto, Peugeot 3008 eller liknande, obegränsade kilometer, Damage Waiver och Excess Protection. Gå ned i Indigo-garaget; kom senast 16:45 eftersom stationen stänger 18:00.",
    latitude: 48.879014,
    longitude: 2.2933445,
  },
  {
    name: "208 Suite Guerlain",
    category: "stay",
    scope: "paris",
    meta: "15 rue Sainte-Croix de la Bretonnerie",
    detail: "Bokat Parisboende 2–5 augusti i Marais. Incheckning 16–23, utcheckning senast 11.",
    latitude: 48.8581216,
    longitude: 2.3563572,
  },
  {
    name: "Eiffeltornet",
    category: "booked",
    scope: "paris",
    meta: "5 augusti · 12:30",
    detail: "Bokat för fyra personer till toppen med hiss.",
    latitude: 48.8582599,
    longitude: 2.2945006,
  },
  {
    name: "Notre-Dame",
    category: "outing",
    scope: "paris",
    meta: "Barnens Parisönskemål",
    detail: "Förslag på morgonen före dagens värme och större folkmängder.",
    latitude: 48.8529371,
    longitude: 2.3500501,
  },
  {
    name: "Jardin du Luxembourg",
    category: "outing",
    scope: "paris",
    meta: "Sval paus i Paris",
    detail: "Skuggigt reservstopp om värmen blir för tung mitt på dagen.",
    latitude: 48.8467228,
    longitude: 2.3364148,
  },
  {
    name: "Katakomberna i Paris",
    category: "outing",
    scope: "paris",
    meta: "1 avenue du Colonel Henri Rol-Tanguy · tis 4 aug",
    detail: "Förslag på cirka en timmes besök. Öppet 9:45–20:30, sista insläpp 19:30; boka tidsbiljett 7 dagar i förväg. Ta med något varmt: 14 °C under jord och 243 trappsteg.",
    latitude: 48.8337439,
    longitude: 2.3322925,
  },
  {
    name: "Trocadéro",
    category: "outing",
    scope: "paris",
    meta: "Kvällsvy mot Eiffeltornet",
    detail: "Ett av två gratislägen på sidan för att se glittershowen efter mörkrets inbrott.",
    latitude: 48.8620535,
    longitude: 2.2886173,
  },
  {
    name: "Champ de Mars",
    category: "outing",
    scope: "paris",
    meta: "Kvällsvy vid Eiffeltornet",
    detail: "Det andra föreslagna läget för glittershowen, nära tornet.",
    latitude: 48.8561447,
    longitude: 2.2978204,
  },
  {
    name: "Vedettes du Pont Neuf",
    category: "food",
    scope: "paris",
    meta: "Place du Pont-Neuf",
    detail: "Förslag på prisvärd Seine-kryssning på kvällen.",
    latitude: 48.8574208,
    longitude: 2.3409595,
  },
  {
    name: "Paris Plages · Rives de Seine",
    category: "outing",
    scope: "paris",
    meta: "Vid Pont d'Arcole / Hôtel de Ville",
    detail: "Centralt riktmärke för Paris Plages längs Seine, öppet under resan.",
    latitude: 48.8554806,
    longitude: 2.3505655,
  },
  {
    name: "Paris Plages · Bassin de la Villette",
    category: "outing",
    scope: "paris",
    meta: "Badzon och familjeaktiviteter",
    detail: "Det andra utpekade Paris Plages-stoppet, med bad och barnaktiviteter.",
    latitude: 48.883966,
    longitude: 2.3693023,
  },
  {
    name: "Berthillon",
    category: "food",
    scope: "paris",
    meta: "31 rue Saint-Louis en l'Île",
    detail: "Glassförslag onsdag–söndag, enkelt att kombinera med kvällspromenad på Île Saint-Louis.",
    latitude: 48.8517084,
    longitude: 2.356718,
  },
  {
    name: "Parc de la Villette",
    category: "outing",
    scope: "paris",
    meta: "Förslag: utomhusbio",
    detail: "Gratis sommarbio, men stängd måndag och tisdag enligt sidans kontroll.",
    latitude: 48.8948898,
    longitude: 2.3884384,
  },
  {
    name: "Moret-sur-Loing · gamla bron",
    category: "outing",
    scope: "route",
    meta: "Värmeflykt från Paris",
    detail: "Medeltida småstad, picknick och möjlig kanot cirka 45–50 minuter från Gare de Lyon.",
    latitude: 48.3600421,
    longitude: 2.8164748,
  },
  {
    name: "Jinji",
    category: "shopping",
    marker: "1",
    scope: "paris",
    meta: "22 rue des Canettes · tis 4 aug 11:00–19:30",
    detail: "Förstavalet för japansk workwear, easy pants och vida 7/8-silhuetter.",
    latitude: 48.8517104,
    longitude: 2.3336947,
  },
  {
    name: "Royalcheese",
    category: "shopping",
    marker: "2",
    scope: "paris",
    meta: "113 rue de Turenne · mån 3 aug 11:00–20:00",
    detail: "Bästa budgetstoppet för Cookman, Service Works och Gramicci.",
    latitude: 48.8629065,
    longitude: 2.3645274,
    markerOffset: 10,
  },
  {
    name: "Gaijin Paris",
    category: "shopping",
    marker: "3",
    scope: "paris",
    meta: "20 rue du Pont aux Choux · mån 3 aug 11:00–19:30",
    detail: "Japansk designer-secondhand med högre pris men rolig fyndpotential.",
    latitude: 48.8613177,
    longitude: 2.364963,
    markerOffset: -10,
  },
  {
    name: "You Hotel Deauville",
    category: "stay",
    scope: "normandy",
    meta: "1 rue Désiré Le Hoc",
    detail: "Bokat familjerum 5–9 augusti. Incheckning från 15, utcheckning senast 12.",
    latitude: 49.359789,
    longitude: 0.080122,
  },
  {
    name: "Gare de Trouville–Deauville",
    category: "transport",
    scope: "normandy",
    meta: "Möjlig tågankomst och hyrbilshämtning",
    detail: "Praktiskt riktmärke för beslutet Paris → Deauville den 5 augusti.",
    latitude: 49.3596984,
    longitude: 0.0838375,
  },
  {
    name: "Place Morny · Deauville centrum",
    category: "food",
    scope: "normandy",
    meta: "Restauranger och enkel kväll nära hotellet",
    detail: "Bra riktmärke för middag och kväll utan extra transport från basen.",
    latitude: 49.3596225,
    longitude: 0.0775011,
  },
  {
    name: "Les Planches · Deauville",
    category: "outing",
    scope: "normandy",
    meta: "Strand och träpromenad",
    detail: "Bred sandstrand och strandklubbar; ett enkelt badval nära hotellet.",
    latitude: 49.3593879,
    longitude: 0.0728154,
  },
  {
    name: "Trouville strand",
    category: "outing",
    scope: "normandy",
    meta: "Bad och strandnära kväll",
    detail: "Alternativ till Deauville med restauranger och sommarprogram i närheten.",
    latitude: 49.3669812,
    longitude: 0.0789966,
  },
  {
    name: "Paléospace",
    category: "outing",
    scope: "normandy",
    meta: "Avenue Jean Moulin, Villers-sur-Mer",
    detail: "Dinosaurie- och fossilspår nära stranden; kan kombineras med klippturen.",
    latitude: 49.3278578,
    longitude: 0.0133596,
  },
  {
    name: "Villers-sur-Mer · bokad klipptur",
    category: "booked",
    scope: "normandy",
    meta: "6 augusti · 10:15",
    detail: "Guidad tur till Falaises des Vaches Noires. Markören visar Villers; kontrollera exakt mötesplats i biljett-PDF:en.",
    latitude: 49.322,
    longitude: 0.001,
  },
  {
    name: "Falaises des Vaches Noires",
    category: "outing",
    scope: "normandy",
    meta: "Fossilområde mellan Villers och Houlgate",
    detail: "Klippor och fossilspaning; lågvatten, guidning och säkerhetskoll styr besöket.",
    latitude: 49.3174053,
    longitude: -0.0258823,
  },
  {
    name: "Houlgate strand",
    category: "outing",
    scope: "normandy",
    meta: "Bad, restauranggator och möjlig nattmarknad",
    detail: "Föreslaget stopp fredag 7 augusti; bekräfta marknad och hemtransport först.",
    latitude: 49.30238,
    longitude: -0.0822755,
  },
  {
    name: "Place du Marché · Cabourg",
    category: "food",
    scope: "normandy",
    meta: "Fredagsmarknad 18–23",
    detail: "Kvällsmarknad, mat och semesterkänsla; fungerar bra med middag i Cabourg.",
    latitude: 49.2891859,
    longitude: -0.1143081,
  },
  {
    name: "Parc de l'Aquilon",
    category: "outing",
    scope: "normandy",
    meta: "Cabourg · Guignol kl 18",
    detail: "Dockteaterförslag för barnen, varje dag enligt sidans underlag.",
    latitude: 49.2884428,
    longitude: -0.1246932,
  },
  {
    name: "Port Guillaume · Dives-sur-Mer",
    category: "food",
    scope: "normandy",
    meta: "Hamn, glass och restaurangkväll",
    detail: "Kort kvällsutflykt som passar ihop med Cabourg eller Houlgate.",
    latitude: 49.2938073,
    longitude: -0.0975326,
  },
  {
    name: "Beuvron-en-Auge",
    category: "outing",
    scope: "normandy",
    meta: "Halvdagsutflykt",
    detail: "Bymiljö, glass och en kort roadtrip i normandisk landsbygd.",
    latitude: 49.1878748,
    longitude: -0.0460321,
  },
  {
    name: "Cambremer · Route du Cidre",
    category: "outing",
    scope: "normandy",
    meta: "Startpunkt för ciderrundan",
    detail: "Kan kombineras med Beuvron-en-Auge som en lugn halvdag med bil.",
    latitude: 49.1517477,
    longitude: 0.0479889,
  },
  {
    name: "Poterie du Mesnil de Bavent",
    category: "outing",
    scope: "normandy",
    meta: "5 Côte du Mesnil, Bavent",
    detail: "Hantverksstopp som passar om vädret blir sämre.",
    latitude: 49.226075,
    longitude: -0.218728,
  },
  {
    name: "Mémorial Pegasus",
    category: "outing",
    scope: "normandy",
    meta: "D-Day-förslag nära kusten",
    detail: "Historia i hanterbar dos och nära nog att kombinera med Batterie de Merville.",
    latitude: 49.2426319,
    longitude: -0.2714385,
  },
  {
    name: "Batterie de Merville",
    category: "outing",
    scope: "normandy",
    meta: "D-Day-förslag",
    detail: "Ett närmare historiskt heldagsalternativ än Omaha och Bayeux.",
    latitude: 49.2707827,
    longitude: -0.1961101,
  },
  {
    name: "Vieux Bassin · Honfleur",
    category: "outing",
    scope: "normandy",
    meta: "Heldagsförslag",
    detail: "Vykortshamn och promenad. Åk tidigt för att minska kö och parkeringsstrul.",
    latitude: 49.4201773,
    longitude: 0.2331522,
  },
  {
    name: "Festyland",
    category: "outing",
    scope: "normandy",
    meta: "Nöjesparksförslag nära Caen",
    detail: "Barnens heldagsalternativ om ni vill bryta av strand och historia.",
    latitude: 49.1863588,
    longitude: -0.4303514,
  },
];

function weatherApiUrl(place, params) {
  const search = new URLSearchParams({
    latitude: place.latitude,
    longitude: place.longitude,
    timezone: "Europe/Paris",
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    precipitation_unit: "mm",
    ...params,
  });

  return `https://api.open-meteo.com/v1/forecast?${search.toString()}`;
}

async function fetchWeatherJson(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.reason || "Väderrapporten kunde inte hämtas.");
  }

  return data;
}

function dailyReportFrom(data, date) {
  const index = data.daily?.time?.indexOf(date) ?? -1;
  if (index === -1) return null;

  return {
    code: data.daily.weather_code?.[index],
    tempMax: data.daily.temperature_2m_max?.[index],
    tempMin: data.daily.temperature_2m_min?.[index],
    rainRisk: data.daily.precipitation_probability_max?.[index],
    windMax: data.daily.wind_speed_10m_max?.[index],
  };
}

async function fetchCurrentWeather(placeKey, fallbackReason) {
  if (!currentWeatherCache.has(placeKey)) {
    const place = weatherPlaces[placeKey];
    const url = weatherApiUrl(place, {
      current: "temperature_2m,weather_code,wind_speed_10m,precipitation",
      forecast_days: "1",
    });

    currentWeatherCache.set(
      placeKey,
      fetchWeatherJson(url)
        .then((data) => ({
          type: "current",
          place,
          current: data.current,
        }))
        .catch(() => ({
          type: "error",
          place,
        })),
    );
  }

  const report = await currentWeatherCache.get(placeKey);
  return {
    ...report,
    fallbackReason,
  };
}

async function fetchForecastForStop(placeKey, date) {
  const cacheKey = `${placeKey}:${date}`;

  if (!dayForecastCache.has(cacheKey)) {
    dayForecastCache.set(
      cacheKey,
      (async () => {
        const place = weatherPlaces[placeKey];
        const url = weatherApiUrl(place, {
          current: "temperature_2m,weather_code,wind_speed_10m,precipitation",
          daily:
            "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max",
          start_date: date,
          end_date: date,
        });

        try {
          const data = await fetchWeatherJson(url);
          const daily = dailyReportFrom(data, date);
          if (!daily) {
            return fetchCurrentWeather(placeKey, "Resedagens prognos är inte släppt ännu.");
          }

          return {
            type: "forecast",
            place,
            date,
            current: data.current,
            daily,
          };
        } catch (error) {
          return fetchCurrentWeather(placeKey, "Resedagens prognos är inte släppt ännu.");
        }
      })(),
    );
  }

  return dayForecastCache.get(cacheKey);
}

function describeWeather(code) {
  return weatherCodeText[code] || "väderdata saknas";
}

function formatRounded(value, suffix = "") {
  if (typeof value !== "number" || Number.isNaN(value)) return "okänt";
  return `${Math.round(value)}${suffix}`;
}

function formatWeatherTime(value) {
  if (!value) return "";

  return new Date(value).toLocaleString("sv-SE", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderStopWeather(report) {
  if (report.type === "forecast") {
    return `
      <div class="weather-report">
        <strong>${report.place.name}</strong>
        <span>${describeWeather(report.daily.code)} · ${formatRounded(report.daily.tempMin, "°")}–${formatRounded(report.daily.tempMax, "°")}</span>
        <span>Regnrisk ${formatRounded(report.daily.rainRisk, "%")} · vind upp till ${formatRounded(report.daily.windMax, " km/h")}</span>
      </div>
    `;
  }

  if (report.type === "current") {
    return `
      <div class="weather-report muted-report">
        <strong>${report.place.name} just nu</strong>
        <span>${describeWeather(report.current?.weather_code)} · ${formatRounded(report.current?.temperature_2m, "°")} · vind ${formatRounded(report.current?.wind_speed_10m, " km/h")}</span>
        <span>${report.fallbackReason}</span>
      </div>
    `;
  }

  return `
    <div class="weather-report muted-report">
      <strong>${report.place.name}</strong>
      <span>Väderrapporten kunde inte hämtas just nu.</span>
    </div>
  `;
}

async function renderWeather() {
  const grid = document.querySelector("#weather-grid");
  const updated = document.querySelector("#weather-updated");
  if (!grid || !updated) return;

  const dayCards = await Promise.all(
    weatherDays.map(async (day) => {
      const reports = await Promise.all(day.stops.map((stop) => fetchForecastForStop(stop, day.date)));
      const places = day.stops.map((stop) => weatherPlaces[stop].name).join(" + ");
      const hasForecast = reports.some((report) => report.type === "forecast");

      return `
        <article class="weather-card${hasForecast ? "" : " pending"}">
          <div class="weather-date">
            <time datetime="${day.date}">${day.label}</time>
            <span>${day.title}</span>
          </div>
          <p class="weather-places">${places}</p>
          <div class="weather-reports">
            ${reports.map(renderStopWeather).join("")}
          </div>
          <p class="weather-note">${day.note}</p>
        </article>
      `;
    }),
  );

  grid.innerHTML = dayCards.join("");

  const currentReports = await Promise.all(Object.keys(weatherPlaces).map((placeKey) => fetchCurrentWeather(placeKey)));
  const reportTimes = currentReports
    .map((report) => report.current?.time)
    .filter(Boolean)
    .sort();
  const latestReportTime = reportTimes.at(-1);
  const forecastCount = grid.querySelectorAll(".weather-card:not(.pending)").length;

  updated.innerHTML = `
    <span>${forecastCount ? "Prognos finns för vissa resedagar." : "Resedagsprognoserna är inte släppta än."}</span>
    <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>
    ${latestReportTime ? `<span>Observation uppdaterad ${formatWeatherTime(latestReportTime)}</span>` : ""}
  `;
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

function setupTripMap() {
  const mapElement = document.querySelector("#trip-map");
  if (!mapElement) return;

  if (typeof L === "undefined") {
    mapElement.innerHTML = '<p class="trip-map-fallback">Kartan kunde inte laddas. Platserna beskrivs i respektive avsnitt på sidan.</p>';
    return;
  }

  mapElement.innerHTML = "";
  const map = L.map(mapElement, {
    scrollWheelZoom: false,
    zoomControl: false,
  });

  L.control.zoom({ position: "topright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  tripMapPlaces.forEach((place) => {
    const category = tripMapCategories[place.category];
    const markerText = place.marker || category.marker;
    const markerIcon = L.divIcon({
      className: "",
      html: `<div class="trip-map-marker category-${place.category}"><span>${markerText}</span></div>`,
      iconAnchor: [13 + (place.markerOffset || 0), 26],
      iconSize: [26, 26],
      popupAnchor: [0, -24],
    });

    L.marker([place.latitude, place.longitude], {
      icon: markerIcon,
      title: place.name,
    })
      .addTo(map)
      .bindPopup(`
        <small>${category.label}</small>
        <strong>${place.name}</strong>
        <span>${place.meta}</span>
        <p>${place.detail}</p>
        <a href="https://www.openstreetmap.org/?mlat=${place.latitude}&mlon=${place.longitude}#map=17/${place.latitude}/${place.longitude}" target="_blank" rel="noreferrer">Öppna i OpenStreetMap ↗</a>
      `)
      .bindTooltip(place.name, {
        direction: "top",
        offset: [0, -22],
        opacity: 0.92,
      });
  });

  const status = document.querySelector("#trip-map-status");
  const scopeButtons = document.querySelectorAll("[data-map-scope]");
  const scopeNames = {
    all: "hela resan",
    paris: "Paris",
    normandy: "Normandie",
  };

  function fitMapScope(scope) {
    const places = scope === "all" ? tripMapPlaces : tripMapPlaces.filter((place) => place.scope === scope);
    const bounds = places.map((place) => [place.latitude, place.longitude]);

    map.closePopup();
    map.fitBounds(bounds, {
      padding: [42, 42],
      maxZoom: scope === "paris" ? 13 : scope === "normandy" ? 10 : 8,
    });

    scopeButtons.forEach((button) => {
      const isActive = button.dataset.mapScope === scope;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (status) {
      status.textContent =
        scope === "all"
          ? `${tripMapPlaces.length} platser · hela resan`
          : `${places.length} platser i ${scopeNames[scope]} · alla markörer kvar`;
    }
  }

  scopeButtons.forEach((button) => {
    button.addEventListener("click", () => fitMapScope(button.dataset.mapScope));
  });

  fitMapScope("all");
  window.requestAnimationFrame(() => map.invalidateSize());
}

renderImageCards();
renderWeather();
renderPlan("paris-normandie");
setupTabs();
setupTripMap();
