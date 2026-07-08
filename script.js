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

renderImageCards();
renderWeather();
renderPlan("paris-normandie");
setupTabs();
