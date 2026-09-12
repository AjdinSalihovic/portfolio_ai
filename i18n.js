/* ============================================================
   i18n — EN (default, in HTML) / BA / DE / SL
   Keys are the normalized English textContent of each element.
   Values may contain HTML (links, spans) and replace innerHTML.
   ============================================================ */
(function () {
  "use strict";

  var BA = {
    // ---- nav ----
    "home": "početna",
    "work": "iskustvo",
    "projects": "projekti",
    "contact": "kontakt",

    // ---- shared ----
    "Get in touch": "Javi se",
    "Full experience →": "Cjelokupno iskustvo →",
    "© 2026 Ajdin Salihović · Tuzla, Bosnia & Herzegovina": "© <span id=\"year\">2026</span> Ajdin Salihović · Tuzla, Bosna i Hercegovina",

    // ---- index: hero ----
    "Hi, I'm Ajdin.I think in data.": "Zdravo, ja sam Ajdin.<br /><span class=\"title-line\">Razmišljam u podacima.</span>",
    "Eight years across software, data and AI — LLM document processing, production pipelines, and the validation that makes both trustworthy. Currently at Hypatos.": "Osam godina u softveru, podacima i AI — LLM obrada dokumenata, produkcijski pipeline-i i validacija koja čini oboje pouzdanim. Trenutno u Hypatosu.",
    "Start a project": "Pokreni projekat",
    "See my work": "Pogledaj radove",

    // ---- index: featured ----
    "Featured": "Istaknuto",
    "LLM document extraction at Hypatos": "LLM ekstrakcija dokumenata u Hypatosu",
    "Turning contracts, invoices and scanned forms into structured data that businesses can actually trust. Building the context layer — extraction schemas, prompts, ground-truth datasets — that makes LLMs reliable on real documents.": "Pretvaranje ugovora, faktura i skeniranih obrazaca u strukturirane podatke kojima biznisi zaista mogu vjerovati. Grade kontekstni sloj — šeme ekstrakcije, promptove i ground-truth skupove — koji čine LLM-ove pouzdanim na stvarnim dokumentima.",
    "See all work →": "Cjelokupno iskustvo →",

    // ---- index: about ----
    "How I got here.": "Kako sam došao ovdje.",
    "Eight years across web dev, QA, data engineering, and now AI. Each stop taught me something the next one needed — QA made me distrust unvalidated data, warehousing taught me pipelines fail at 3 a.m., and LLM work showed me the model is only as good as the context around it.": "Osam godina kroz web razvoj, QA, inženjering podataka, a sada AI. Svaka stanica me naučila nešto što je sljedeća trebala — QA me naučio da ne vjerujem nevalidiranim podacima, skladištenje me naučilo da pipeline-i padaju u 3 ujutro, a rad s LLM-ovima mi je pokazao da je model dobar onoliko koliko je dobar kontekst oko njega.",
    "At Hypatos I turn contracts, invoices and scanned forms into structured data. On the side, I freelance and study financial engineering. Since 2022 I've also taught programming to kids aged 6 to 18.": "U Hypatosu pretvaram ugovore, fakture i skenirane obrazce u strukturirane podatke. Sa strane radim freelance projekte i studiram finansijski inženjering. Od 2022. podučavam programiranje djecu od 6 do 18 godina.",

    // ---- index: education ----
    "Education": "Obrazovanje",
    "MSc Financial Engineering": "MSc Finansijski inženjering",
    "WorldQuant University · in progress, remote": "WorldQuant University · u toku, online",
    "MSc Data Science": "MSc Data Science",
    "International Burch University · Sarajevo": "International Burch University · Sarajevo",
    "BEng Information Technology": "BEng Informacione tehnologije",
    "American University in BiH · Tuzla": "American University in BiH · Tuzla",

    // ---- index: languages ----
    "Languages": "Jezici",
    "Bosnian": "Bosanski",
    "Native": "Maternji",
    "English": "Engleski",
    "C2 — Full professional fluency": "C2 — Puna profesionalna tečnost",
    "Slovene": "Slovenski",
    "B1": "B1",
    "German": "Njemački",
    "A1 — And climbing": "A1 — I napreduje",

    // ---- index: dark section ----
    "Currently at Hypatos": "Trenutno u Hypatosu",
    "Engineering the context layer behind LLM document processing — extraction schemas, prompts and ground-truth datasets. Building evaluation sets that raise extraction accuracy.": "Grade kontekstni sloj iza LLM obrade dokumenata — šeme ekstrakcije, promptove i ground-truth skupove podataka. Grade evaluacijske skupove koji podižu tačnost ekstrakcije.",

    // ---- work page ----
    "Freelance": "Freelance",
    "Have a data problem?I build the fix.": "Imate problem s podacima?<br /><span class=\"title-line\">Ja gradim rješenje.</span>",
    "Backend, data and AI — scoping, building, deploying, and handing over documentation your team can actually maintain.": "Backend, podaci i AI — definisanje obima, izgradnja, deployment i predaja dokumentacije koju vaš tim zaista može održavati.",
    "Tell me what you're building": "Reci mi šta gradiš",
    "See my experience ↓": "Pogledaj iskustvo ↓",
    "Services": "Usluge",
    "LLM document automation": "LLM automatizacija dokumenata",
    "Invoices, contracts, forms — extracted into structured data with LLM pipelines and evaluation sets.": "Fakture, ugovori, obrasci — izvučeni u strukturirane podatke pomoću LLM pipeline-a i evaluacijskih skupova.",
    "Data pipelines & warehousing": "Data pipeline-i i skladištenje",
    "ETL/ELT, modelling and orchestration on BigQuery, Snowflake, Redshift or Databricks.": "ETL/ELT, modeliranje i orkestracija na BigQuery, Snowflake, Redshift ili Databricks platformama.",
    "Web data acquisition": "Prikupljanje web podataka",
    "Scraping, API integration, enrichment and QA — structured records delivered to your tools.": "Scraping, integracija API-ja, obogaćivanje i QA — strukturirani zapisi isporučeni u vaše alate.",
    "Dashboards & reporting": "Dashboardi i izvještaji",
    "Looker Studio dashboards and scheduled reporting on clean, validated data.": "Looker Studio dashboardi i zakazano izvještavanje na čistim, validiranim podacima.",
    "Not on the list? Scripts, integrations, internal tools, data cleanups — if it's technical, I can build it. Describe your problem →": "Nije na listi? Skripte, integracije, interni alati, čišćenje podataka — ako je tehničko, mogu to napraviti. <a href=\"contact\">Opiši svoj problem →</a>",
    "Describe your problem →": "Opiši svoj problem →",
    "Experience": "Iskustvo",
    "Context layer for LLM document processing — schemas, prompts, evaluation sets.": "Kontekstni sloj za LLM obradu dokumenata — šeme, promptovi, evaluacijski skupovi.",
    "Automated investor data pipelines with LLM agents and multi-stage QA.": "Automatizovani pipeline-i za investitorske podatke s LLM agentima i višestepenim QA-om.",
    "Quality ownership for multi-platform banking product — web, iOS, Android.": "Odgovornost za kvalitet multiplatformskog bankarskog proizvoda — web, iOS, Android.",
    "BigQuery warehouses, ETL/ELT pipelines, Looker Studio dashboards on GCP.": "BigQuery skladišta, ETL/ELT pipeline-i, Looker Studio dashboardi na GCP-u.",
    "PySpark/Databricks platform — streaming data to gold-layer analytics.": "PySpark/Databricks platforma — streaming podaci u gold-layer analitiku.",
    "Airflow DAGs, SQL models on Snowflake and Oracle for real-time analytics.": "Airflow DAG-ovi, SQL modeli na Snowflake i Oracle za real-time analitiku.",
    "Production pipelines on Redshift and Snowflake, data quality improvements.": "Produkcijski pipeline-i na Redshift i Snowflake, poboljšanja kvaliteta podataka.",
    "Angular, Drupal, JavaScript apps with Selenium UI testing.": "Angular, Drupal, JavaScript aplikacije s Selenium UI testiranjem.",
    "Python, C# and web fundamentals for students aged 6–18.": "Python, C# i osnove weba za učenike od 6 do 18 godina.",
    "Toolbox": "Alati",
    "ai & llm": "ai i llm",
    "backend": "backend",
    "frontend": "frontend",
    "data & databases": "podaci i baze",
    "cloud & devops": "cloud i devops",
    "quality": "kvalitet",
    "Document processing, prompt engineering, RAG, evaluation, agent APIs, MCP tooling": "Obrada dokumenata, prompt engineering, RAG, evaluacija, agent API-ji, MCP alati",
    "Python (FastAPI, Flask), REST APIs, async processing, C#": "Python (FastAPI, Flask), REST API-ji, asinhrona obrada, C#",
    "JavaScript, Angular, Vue.js, HTML/CSS — TypeScript/React learning": "JavaScript, Angular, Vue.js, HTML/CSS — TypeScript/React učim",
    "SQL, PostgreSQL, Snowflake, BigQuery, Redshift; DBT, Airflow, PySpark, Databricks; ETL/ELT": "SQL, PostgreSQL, Snowflake, BigQuery, Redshift; DBT, Airflow, PySpark, Databricks; ETL/ELT",
    "GCP, AWS, Azure, Docker, Kubernetes, Git, Linux": "GCP, AWS, Azure, Docker, Kubernetes, Git, Linux",
    "Selenium, TestRail, data validation, debugging, Agile/Scrum": "Selenium, TestRail, validacija podataka, debugging, Agile/Scrum",

    // ---- contact page ----
    "Contact": "Kontakt",
    "Questions, ideas,or a project brief?": "Pitanja, ideje,<br /><span class=\"title-line\">ili projektni zadatak?</span>",
    "Pipeline, documents, automation, or just a question — send a message and I'll reply personally.": "Pipeline, dokumenti, automatizacija, ili samo pitanje — pošaljite poruku i odgovoriću lično.",
    "name": "ime",
    "email": "email",
    "message": "poruka",
    "Send message": "Pošalji poruku",
    "Open in your email app": "Otvori u email aplikaciji",
    "Goes straight to my inbox — I reply personally, usually within a day.": "Ide pravo u moj inbox — odgovaram lično, obično u roku od jednog dana.",
    "Prefer email directly? This works too.": "Radije direktno emailom? I to radi.",
    "GitHub & LinkedIn": "GitHub & LinkedIn",
    "— thoughts on data and AI, in between the pipelines.": "— misli o podacima i AI, između pipeline-a.",

    // ---- projects page ----
    "Projects": "Projekti",
    "Things I'vebuilt & shipped.": "Stvari koje sam<br /><span class=\"title-line\">izgradio i isporučio.</span>",
    "Things I've built & shipped.": "Stvari koje sam<br /><span class=\"title-line\">izgradio i isporučio.</span>",
    "Website development and data engineering projects — from complete builds to data pipelines and visualizations.": "Projekti web razvoja i inženjeringa podataka — od potpune izgradnje do podatkovnih pipeline-a i vizualizacija.",
    "Website Development": "Web razvoj",
    "Complete website builds, redesigns, and e-commerce setups.": "Potpune web izgradnje, redizajni i e-commerce postavke.",
    "Instituten.shop": "Instituten.shop",
    "Website Redesign": "Redizajn web stranice",
    "Full redesign of an existing shop with improved UX and modern styling.": "Potpun redizajn postojeće trgovine s poboljšanim UX i modernim stilom.",
    "Live site →": "Živa stranica →",
    "Rukja Hidžama": "Rukja Hidžama",
    "Complete Website Creation": "Potpuna izgradnja web stranice",
    "End-to-end website build — design, development, and deployment from scratch.": "Cjelovita izgradnja web stranice — dizajn, razvoj i implementacija od nule.",
    "Mister Dzirlo": "Mister Dzirlo",
    "WooCommerce Payment Setup": "Postavka WooCommerce plaćanja",
    "Payment integration and WooCommerce configuration for an existing site.": "Integracija plaćanja i konfiguracija WooCommerce za postojeću stranicu.",
    "Data Projects": "Data projekti",
    "Data pipelines, visualization, and research projects.": "Data pipeline-i, vizualizacija i istraživački projekti.",
    "Data Miner Insights — Feeding App": "Data Miner Insights — Feeding App",
    "Data Pipeline": "Data pipeline",
    "Project for feeding and structuring investor data locally.": "Projekt za hranjenje i strukturiranje investitorskih podataka lokalno.",
    "Data Visualization with Python": "Data Visualization with Python",
    "Visualization": "Vizualizacija",
    "Python-based data visualization projects and analysis notebooks.": "Projekti vizualizacije podataka zasnovani na Pythonu i analitički blokovi.",
    "GitHub →": "GitHub →",
    "Spotify Data Research": "Spotify Data Research",
    "Research": "Istraživanje",
    "Data research and analysis on Spotify listening patterns and trends.": "Istraživanje i analiza obrazaca slušanja i trendova na Spotify.",
    "Want to work together?": "Želiš saradnju?",
    "I'm always open to interesting projects — whether it's web development, data engineering, or something in between.": "Uvijek sam otvoren za zanimljive projekte — bilo web razvoj, inženjering podataka, ili nešto između.",
    "Get in touch →": "Javi se →",

    // ---- thanks page ----
    "status: delivered": "status: isporučeno",
    "Message sent.Talk soon.": "Poruka poslana.<br /><span class=\"title-line\">Čujemo se uskoro.</span>",
    "Your message is in my inbox — I reply personally, usually within a day. In the meantime, feel free to look around.": "Vaša poruka je u mom inboxu — odgovaram lično, obično u roku od jednog dana. U međuvremenu, slobodno razgledajte.",
    "Back to home": "Nazad na početnu",
    "See my work": "Pogledaj radove"
  };

  var DE = {
    // ---- nav ----
    "home": "start",
    "work": "erfahrung",
    "projects": "projekte",
    "contact": "kontakt",

    // ---- shared ----
    "Get in touch": "Kontakt aufnehmen",
    "Full experience →": "Gesamte Erfahrung →",
    "© 2026 Ajdin Salihović · Tuzla, Bosnia & Herzegovina": "© <span id=\"year\">2026</span> Ajdin Salihović · Tuzla, Bosnien und Herzegowina",

    // ---- index: hero ----
    "Hi, I'm Ajdin.I think in data.": "Hi, ich bin Ajdin.<br /><span class=\"title-line\">Ich denke in Daten.</span>",
    "Eight years across software, data and AI — LLM document processing, production pipelines, and the validation that makes both trustworthy. Currently at Hypatos.": "Acht Jahre in Software, Daten und KI — LLM-Dokumentenverarbeitung, Produktionspipelines und die Validierung, die beides verlässlich macht. Derzeit bei Hypatos.",
    "Start a project": "Projekt starten",
    "See my work": "Meine Arbeit ansehen",

    // ---- index: featured ----
    "Featured": "Hervorgehoben",
    "LLM document extraction at Hypatos": "LLM-Dokumentenextraktion bei Hypatos",
    "Turning contracts, invoices and scanned forms into structured data that businesses can actually trust. Building the context layer — extraction schemas, prompts, ground-truth datasets — that makes LLMs reliable on real documents.": "Verträge, Rechnungen und gescannte Formulare in strukturierte Daten verwandeln, denen Unternehmen wirklich vertrauen können. Ich entwickle die Kontextschicht — Extraktionsschemata, Prompts und Ground-Truth-Datensätze — die LLMs auf echten Dokumenten zuverlässig macht.",
    "See all work →": "Gesamte Erfahrung →",

    // ---- index: about ----
    "How I got here.": "Wie ich hierher kam.",
    "Eight years across web dev, QA, data engineering, and now AI. Each stop taught me something the next one needed — QA made me distrust unvalidated data, warehousing taught me pipelines fail at 3 a.m., and LLM work showed me the model is only as good as the context around it.": "Acht Jahre über Webentwicklung, QA, Data Engineering und jetzt KI. Jede Station hat mich etwas gelehrt, das die nächste brauchte — QA lehrte mich, nicht validierten Daten zu trauen, Warehousing lehrte mich, dass Pipelines um 3 Uhr morgens ausfallen, und die LLM-Arbeit zeigte mir, dass ein Modell nur so gut ist wie der Kontext drumherum.",
    "At Hypatos I turn contracts, invoices and scanned forms into structured data. On the side, I freelance and study financial engineering. Since 2022 I've also taught programming to kids aged 6 to 18.": "Bei Hypatos verwandle ich Verträge, Rechnungen und gescannte Formulare in strukturierte Daten. Nebenbei übernehme ich Freelance-Projekte und studiere Financial Engineering. Seit 2022 unterrichte ich außerdem Kinder von 6 bis 18 Jahren im Programmieren.",

    // ---- index: education ----
    "Education": "Ausbildung",
    "MSc Financial Engineering": "MSc Financial Engineering",
    "WorldQuant University · in progress, remote": "WorldQuant University · laufend, remote",
    "MSc Data Science": "MSc Data Science",
    "International Burch University · Sarajevo": "International Burch University · Sarajevo",
    "BEng Information Technology": "BEng Informationstechnologie",
    "American University in BiH · Tuzla": "American University in BiH · Tuzla",

    // ---- index: languages ----
    "Languages": "Sprachen",
    "Bosnian": "Bosnisch",
    "Native": "Muttersprache",
    "English": "Englisch",
    "C2 — Full professional fluency": "C2 — Verhandlungssicher",
    "Slovene": "Slowenisch",
    "B1": "B1",
    "German": "Deutsch",
    "A1 — And climbing": "A1 — Tendenz steigend",

    // ---- index: dark section ----
    "Currently at Hypatos": "Derzeit bei Hypatos",
    "Engineering the context layer behind LLM document processing — extraction schemas, prompts and ground-truth datasets. Building evaluation sets that raise extraction accuracy.": "Ich entwickle die Kontextschicht hinter LLM-Dokumentenverarbeitung — Extraktionsschemata, Prompts und Ground-Truth-Datensätze. Ich erstelle Evaluationssets, die die Extraktionsgenauigkeit erhöhen.",

    // ---- work page ----
    "Freelance": "Freelance",
    "Have a data problem?I build the fix.": "Ein Datenproblem?<br /><span class=\"title-line\">Ich baue die Lösung.</span>",
    "Backend, data and AI — scoping, building, deploying, and handing over documentation your team can actually maintain.": "Backend, Daten und KI — Scoping, Aufbau, Deployment und Übergabedokumentation, die Ihr Team wirklich pflegen kann.",
    "Tell me what you're building": "Erzählen Sie mir von Ihrem Projekt",
    "See my experience ↓": "Erfahrung ansehen ↓",
    "Services": "Leistungen",
    "LLM document automation": "LLM-Dokumentenautomatisierung",
    "Invoices, contracts, forms — extracted into structured data with LLM pipelines and evaluation sets.": "Rechnungen, Verträge, Formulare — extrahiert in strukturierte Daten mit LLM-Pipelines und Evaluationssets.",
    "Data pipelines & warehousing": "Datenpipelines & Warehousing",
    "ETL/ELT, modelling and orchestration on BigQuery, Snowflake, Redshift or Databricks.": "ETL/ELT, Modellierung und Orchestrierung auf BigQuery, Snowflake, Redshift oder Databricks.",
    "Web data acquisition": "Web-Datenerfassung",
    "Scraping, API integration, enrichment and QA — structured records delivered to your tools.": "Scraping, API-Integration, Anreicherung und QA — strukturierte Datensätze, geliefert in Ihre Tools.",
    "Dashboards & reporting": "Dashboards & Reporting",
    "Looker Studio dashboards and scheduled reporting on clean, validated data.": "Looker-Studio-Dashboards und geplantes Reporting auf sauberen, validierten Daten.",
    "Not on the list? Scripts, integrations, internal tools, data cleanups — if it's technical, I can build it. Describe your problem →": "Nicht auf der Liste? Skripte, Integrationen, interne Tools, Datenbereinigungen — wenn es technisch ist, kann ich es bauen. <a href=\"contact\">Problem beschreiben →</a>",
    "Describe your problem →": "Problem beschreiben →",
    "Experience": "Erfahrung",
    "Context layer for LLM document processing — schemas, prompts, evaluation sets.": "Kontextschicht für LLM-Dokumentenverarbeitung — Schemata, Prompts, Evaluationssets.",
    "Automated investor data pipelines with LLM agents and multi-stage QA.": "Automatisierte Investorendaten-Pipelines mit LLM-Agenten und mehrstufigem QA.",
    "Quality ownership for multi-platform banking product — web, iOS, Android.": "Qualitätsverantwortung für Multi-Plattform-Banking — Web, iOS, Android.",
    "BigQuery warehouses, ETL/ELT pipelines, Looker Studio dashboards on GCP.": "BigQuery-Warehouses, ETL/ELT-Pipelines, Looker-Studio-Dashboards auf GCP.",
    "PySpark/Databricks platform — streaming data to gold-layer analytics.": "PySpark/Databricks-Plattform — Streaming-Daten zu Gold-Layer-Analytik.",
    "Airflow DAGs, SQL models on Snowflake and Oracle for real-time analytics.": "Airflow-DAGs, SQL-Modelle auf Snowflake und Oracle für Echtzeit-Analytik.",
    "Production pipelines on Redshift and Snowflake, data quality improvements.": "Produktionspipelines auf Redshift und Snowflake, Datenqualitätsverbesserungen.",
    "Angular, Drupal, JavaScript apps with Selenium UI testing.": "Angular-, Drupal-, JavaScript-Apps mit Selenium-UI-Testing.",
    "Python, C# and web fundamentals for students aged 6–18.": "Python, C# und Web-Grundlagen für Schüler von 6 bis 18 Jahren.",
    "Toolbox": "Werkzeuge",
    "ai & llm": "ai & llm",
    "backend": "backend",
    "frontend": "frontend",
    "data & databases": "daten & datenbanken",
    "cloud & devops": "cloud & devops",
    "quality": "qualität",
    "Document processing, prompt engineering, RAG, evaluation, agent APIs, MCP tooling": "Dokumentenverarbeitung, Prompt-Engineering, RAG, Evaluierung, Agent-APIs, MCP-Tooling",
    "Python (FastAPI, Flask), REST APIs, async processing, C#": "Python (FastAPI, Flask), REST-APIs, asynchrone Verarbeitung, C#",
    "JavaScript, Angular, Vue.js, HTML/CSS — TypeScript/React learning": "JavaScript, Angular, Vue.js, HTML/CSS — TypeScript/React aktiv erlernend",
    "SQL, PostgreSQL, Snowflake, BigQuery, Redshift; DBT, Airflow, PySpark, Databricks; ETL/ELT": "SQL, PostgreSQL, Snowflake, BigQuery, Redshift; DBT, Airflow, PySpark, Databricks; ETL/ELT",
    "GCP, AWS, Azure, Docker, Kubernetes, Git, Linux": "GCP, AWS, Azure, Docker, Kubernetes, Git, Linux",
    "Selenium, TestRail, data validation, debugging, Agile/Scrum": "Selenium, TestRail, Datenvalidierung, Debugging, Agile/Scrum",

    // ---- contact page ----
    "Contact": "Kontakt",
    "Questions, ideas,or a project brief?": "Fragen, Ideen<br /><span class=\"title-line\">oder ein Projektbriefing?</span>",
    "Pipeline, documents, automation, or just a question — send a message and I'll reply personally.": "Pipeline, Dokumente, Automatisierung oder einfach eine Frage — schreiben Sie mir, ich antworte persönlich.",
    "name": "name",
    "email": "e-mail",
    "message": "nachricht",
    "Send message": "Nachricht senden",
    "Open in your email app": "In E-Mail-App öffnen",
    "Goes straight to my inbox — I reply personally, usually within a day.": "Landet direkt in meinem Posteingang — ich antworte persönlich, meist innerhalb eines Tages.",
    "Prefer email directly? This works too.": "Lieber direkt per E-Mail? Geht auch.",
    "GitHub & LinkedIn": "GitHub & LinkedIn",
    "— thoughts on data and AI, in between the pipelines.": "— Gedanken zu Daten und KI, zwischen den Pipelines.",

    // ---- projects page ----
    "Projects": "Projekte",
    "Things I'vebuilt & shipped.": "Dinge, die ich<br /><span class=\"title-line\">gebaut und ausgeliefert habe.</span>",
    "Things I've built & shipped.": "Dinge, die ich<br /><span class=\"title-line\">gebaut und ausgeliefert habe.</span>",
    "Website development and data engineering projects — from complete builds to data pipelines and visualizations.": "Webentwicklungs- und Datenprojekte — von kompletten Builds bis zu Datenpipelines und Visualisierungen.",
    "Website Development": "Webentwicklung",
    "Complete website builds, redesigns, and e-commerce setups.": "Komplette Webseiten-Erstellungen, Redesigns und E-Commerce-Einrichtungen.",
    "Instituten.shop": "Instituten.shop",
    "Website Redesign": "Webseiten-Redesign",
    "Full redesign of an existing shop with improved UX and modern styling.": "Komplettes Redesign eines bestehenden Shops mit verbessertem UX und modernem Styling.",
    "Live site →": "Live-Seite →",
    "Rukja Hidžama": "Rukja Hidžama",
    "Complete Website Creation": "Komplette Webseiten-Erstellung",
    "End-to-end website build — design, development, and deployment from scratch.": "End-to-End Webseiten-Erstellung — Design, Entwicklung und Deployment von Grund auf.",
    "Mister Dzirlo": "Mister Dzirlo",
    "WooCommerce Payment Setup": "WooCommerce-Zahlungseinrichtung",
    "Payment integration and WooCommerce configuration for an existing site.": "Zahlungsintegration und WooCommerce-Konfiguration für eine bestehende Seite.",
    "Data Projects": "Datenprojekte",
    "Data pipelines, visualization, and research projects.": "Datenpipelines, Visualisierung und Forschungsprojekte.",
    "Data Miner Insights — Feeding App": "Data Miner Insights — Feeding App",
    "Data Pipeline": "Datenpipeline",
    "Project for feeding and structuring investor data locally.": "Projekt zum lokalen Speichern und Strukturieren von Investorendaten.",
    "Data Visualization with Python": "Data Visualization with Python",
    "Visualization": "Visualisierung",
    "Python-based data visualization projects and analysis notebooks.": "Python-basierte Datenvisualisierungsprojekte und Analyse-Notebooks.",
    "GitHub →": "GitHub →",
    "Spotify Data Research": "Spotify Data Research",
    "Research": "Forschung",
    "Data research and analysis on Spotify listening patterns and trends.": "Datenforschung und Analyse von Spotify-Hörgewohnheiten und -Trends.",
    "Want to work together?": "Zusammenarbeiten?",
    "I'm always open to interesting projects — whether it's web development, data engineering, or something in between.": "Ich bin immer offen für interessante Projekte — ob Webentwicklung, Datenengineering oder etwas dazwischen.",
    "Get in touch →": "Kontakt aufnehmen →",

    // ---- thanks page ----
    "status: delivered": "status: zugestellt",
    "Message sent.Talk soon.": "Nachricht gesendet.<br /><span class=\"title-line\">Bis bald.</span>",
    "Your message is in my inbox — I reply personally, usually within a day. In the meantime, feel free to look around.": "Ihre Nachricht ist in meinem Posteingang — ich antworte persönlich, meist innerhalb eines Tages. Schauen Sie sich in der Zwischenzeit gern um.",
    "Back to home": "Zur Startseite",
    "See my work": "Meine Arbeit ansehen"
  };

  var SL = {
    // ---- nav ----
    "home": "domov",
    "work": "izkušnje",
    "projects": "projekti",
    "contact": "kontakt",

    // ---- shared ----
    "Get in touch": "Kontaktiraj me",
    "Full experience →": "Celotne izkušnje →",
    "© 2026 Ajdin Salihović · Tuzla, Bosnia & Herzegovina": "© <span id=\"year\">2026</span> Ajdin Salihović · Tuzla, Bosna in Hercegovina",

    // ---- index: hero ----
    "Hi, I'm Ajdin.I think in data.": "Živjo, sem Ajdin.<br /><span class=\"title-line\">Razmišljam v podatkih.</span>",
    "Eight years across software, data and AI — LLM document processing, production pipelines, and the validation that makes both trustworthy. Currently at Hypatos.": "Osem let v programiranju, podatkih in umetni inteligenci — LLM obdelava dokumentov, produkcijske podatkovne cevi in validacija, ki naredi oboje zanesljivo. Trenutno pri Hypatos.",
    "Start a project": "Začni projekt",
    "See my work": "Poglej delo",

    // ---- index: featured ----
    "Featured": "Izpostavljeno",
    "LLM document extraction at Hypatos": "LLM ekstrakcija dokumentov pri Hypatos",
    "Turning contracts, invoices and scanned forms into structured data that businesses can actually trust. Building the context layer — extraction schemas, prompts, ground-truth datasets — that makes LLMs reliable on real documents.": "Pretvaranje pogodb, faktur in skeniranih obrazcev v strukturirane podatke, katerim podjetja resnično lahko zaupajo. Razvijam kontekstno plast — sheme ekstrakcije, pozive in nabora ground-truth — ki naredijo LLM-je zanesljive na resničnih dokumentih.",
    "See all work →": "Celotne izkušnje →",

    // ---- index: about ----
    "How I got here.": "Kako sem prišel sem.",
    "Eight years across web dev, QA, data engineering, and now AI. Each stop taught me something the next one needed — QA made me distrust unvalidated data, warehousing taught me pipelines fail at 3 a.m., and LLM work showed me the model is only as good as the context around it.": "Osem let prek spletnega razvoja, QA, inženiringa podatkov in zdaj AI. Vsaka postaja me je naučila nekaj, kar je naslednja potrebovala — QA me je naučil, da ne zaupam nevalidiranim podatkom, skladiščenje me je naučilo, da cevi odpovedujejo ob 3 zjutraj, delo z LLM pa mi je pokazalo, da je model tako dober, kot je dober kontekst okoli njega.",
    "At Hypatos I turn contracts, invoices and scanned forms into structured data. On the side, I freelance and study financial engineering. Since 2022 I've also taught programming to kids aged 6 to 18.": "Pri Hypatos pretvarjam pogodbe, fakture in skenirane obrazce v strukturirane podatke. Ob strani sprejemam freelance projekte in študiram finančni inženiring. Od 2022 učim programiranje otroke od 6 do 18 let.",

    // ---- index: education ----
    "Education": "Izobrazba",
    "MSc Financial Engineering": "MSc Finančni inženiring",
    "WorldQuant University · in progress, remote": "WorldQuant University · v teku, na daljavo",
    "MSc Data Science": "MSc Data Science",
    "International Burch University · Sarajevo": "International Burch University · Sarajevo",
    "BEng Information Technology": "BEng Informacijska tehnologija",
    "American University in BiH · Tuzla": "American University in BiH · Tuzla",

    // ---- index: languages ----
    "Languages": "Jeziki",
    "Bosnian": "Bosanščina",
    "Native": "Maternji",
    "English": "Angleščina",
    "C2 — Full professional fluency": "C2 — Polna profesionalna tekočnost",
    "Slovene": "Slovenščina",
    "B1": "B1",
    "German": "Nemščina",
    "A1 — And climbing": "A1 — In narašča",

    // ---- index: dark section ----
    "Currently at Hypatos": "Trenutno pri Hypatos",
    "Engineering the context layer behind LLM document processing — extraction schemas, prompts and ground-truth datasets. Building evaluation sets that raise extraction accuracy.": "Razvijam kontekstno plast za LLM obdelavo dokumentov — sheme ekstrakcije, pozive in nabora ground-truth. Gradim evalvacijske nabora, ki dvigujejo natančnost ekstrakcije.",

    // ---- work page ----
    "Freelance": "Freelance",
    "Have a data problem?I build the fix.": "Imate problem s podatki?<br /><span class=\"title-line\">Jaz zgradim rešitev.</span>",
    "Backend, data and AI — scoping, building, deploying, and handing over documentation your team can actually maintain.": "Backend, podatki in UI — določitev obsega, izgradnja, deployment in predaja dokumentacije, ki jo vaš tim resnično lahko vzdržuje.",
    "Tell me what you're building": "Povej mi, kaj gradiš",
    "See my experience ↓": "Poglej izkušnje ↓",
    "Services": "Storitve",
    "LLM document automation": "LLM avtomatizacija dokumentov",
    "Invoices, contracts, forms — extracted into structured data with LLM pipelines and evaluation sets.": "Fakture, pogodbe, obrazci — ekstrahirani v strukturirane podatke z LLM cevmi in evalvacijskimi nabori.",
    "Data pipelines & warehousing": "Podatkovne cevi in skladiščenje",
    "ETL/ELT, modelling and orchestration on BigQuery, Snowflake, Redshift or Databricks.": "ETL/ELT, modeliranje in orkestracija na BigQuery, Snowflake, Redshift ali Databricks.",
    "Web data acquisition": "Pridobivanje spletnih podatkov",
    "Scraping, API integration, enrichment and QA — structured records delivered to your tools.": "Scrapanje, integracija API-jev, obogatitev in QA — strukturirani zapisi, dostavljeni v vaša orodja.",
    "Dashboards & reporting": "Nadzorne plošče in poročanje",
    "Looker Studio dashboards and scheduled reporting on clean, validated data.": "Looker Studio nadzorne plošče in načrtovano poročanje na čistih, validiranih podatkih.",
    "Not on the list? Scripts, integrations, internal tools, data cleanups — if it's technical, I can build it. Describe your problem →": "Ni na seznamu? Skripte, integracije, interna orodja, čiščenje podatkov — če je tehnično, to lahko zgradim. <a href=\"contact\">Opišite svoj problem →</a>",
    "Describe your problem →": "Opišite svoj problem →",
    "Experience": "Izkušnje",
    "Context layer for LLM document processing — schemas, prompts, evaluation sets.": "Kontekstna plast za LLM obdelavo dokumentov — sheme, pozivi, evalvacijski nabori.",
    "Automated investor data pipelines with LLM agents and multi-stage QA.": "Avtomatizirane cevi za podatke vlagateljev z LLM agenti in večstopenjskim QA-jem.",
    "Quality ownership for multi-platform banking product — web, iOS, Android.": "Odgovornost za kakovost večplatformskega bančnega izdelka — splet, iOS, Android.",
    "BigQuery warehouses, ETL/ELT pipelines, Looker Studio dashboards on GCP.": "BigQuery skladišča, ETL/ELT cevi, Looker Studio nadzorne plošče na GCP.",
    "PySpark/Databricks platform — streaming data to gold-layer analytics.": "PySpark/Databricks platforma — pretakanje podatkov v gold-layer analitiko.",
    "Airflow DAGs, SQL models on Snowflake and Oracle for real-time analytics.": "Airflow DAG-ovi, SQL modeli na Snowflake in Oracle za realnočasovno analitiko.",
    "Production pipelines on Redshift and Snowflake, data quality improvements.": "Produkcijske cevi na Redshift in Snowflake, izboljšave kakovosti podatkov.",
    "Angular, Drupal, JavaScript apps with Selenium UI testing.": "Angular, Drupal, JavaScript aplikacije z Selenium UI testiranjem.",
    "Python, C# and web fundamentals for students aged 6–18.": "Python, C# in spletne osnove za učence od 6 do 18 let.",
    "Toolbox": "Orodjarna",
    "ai & llm": "ai in llm",
    "backend": "backend",
    "frontend": "frontend",
    "data & databases": "podatki in baze podatkov",
    "cloud & devops": "cloud in devops",
    "quality": "kakovost",
    "Document processing, prompt engineering, RAG, evaluation, agent APIs, MCP tooling": "Obdelava dokumentov, prompt inženiring, RAG, evalvacija, agent API-ji, MCP orodja",
    "Python (FastAPI, Flask), REST APIs, async processing, C#": "Python (FastAPI, Flask), REST API-ji, asinhrone obdelave, C#",
    "JavaScript, Angular, Vue.js, HTML/CSS — TypeScript/React learning": "JavaScript, Angular, Vue.js, HTML/CSS — TypeScript/React aktivno učim",
    "SQL, PostgreSQL, Snowflake, BigQuery, Redshift; DBT, Airflow, PySpark, Databricks; ETL/ELT": "SQL, PostgreSQL, Snowflake, BigQuery, Redshift; DBT, Airflow, PySpark, Databricks; ETL/ELT",
    "GCP, AWS, Azure, Docker, Kubernetes, Git, Linux": "GCP, AWS, Azure, Docker, Kubernetes, Git, Linux",
    "Selenium, TestRail, data validation, debugging, Agile/Scrum": "Selenium, TestRail, validacija podatkov, odpravljanje napak, Agile/Scrum",

    // ---- contact page ----
    "Contact": "Kontakt",
    "Questions, ideas,or a project brief?": "Vprašanja, ideje<br /><span class=\"title-line\">ali projektna naloga?</span>",
    "Pipeline, documents, automation, or just a question — send a message and I'll reply personally.": "Pipeline, dokumenti, avtomatizacija ali samo vprašanje — pošljite sporočilo in odgovoril bom osebno.",
    "name": "ime",
    "email": "e-pošta",
    "message": "sporočilo",
    "Send message": "Pošlji sporočilo",
    "Open in your email app": "Odpri v e-poštni aplikaciji",
    "Goes straight to my inbox — I reply personally, usually within a day.": "Gre naravnost v moj nabiralnik — odgovarjam osebno, običajno v enem dnevu.",
    "Prefer email directly? This works too.": "Raje neposredno po e-pošti? Tudi to dela.",
    "GitHub & LinkedIn": "GitHub & LinkedIn",
    "— thoughts on data and AI, in between the pipelines.": "— misli o podatkih in UI, med cevmi.",

    // ---- projects page ----
    "Projects": "Projekti",
    "Things I'vebuilt & shipped.": "Stvari, ki sem jih<br /><span class=\"title-line\">zgradil in dostavil.</span>",
    "Things I've built & shipped.": "Stvari, ki sem jih<br /><span class=\"title-line\">zgradil in dostavil.</span>",
    "Website development and data engineering projects — from complete builds to data pipelines and visualizations.": "Projekti spletnega razvoja in inženiringa podatkov — od popolnih izgradenj do podatkovnih cevi in vizualizacij.",
    "Website Development": "Spletni razvoj",
    "Complete website builds, redesigns, and e-commerce setups.": "Popolne spletne izgradnje, preoblikovanja in e-commerce nastavitve.",
    "Instituten.shop": "Instituten.shop",
    "Website Redesign": "Preoblikovanje spletne strani",
    "Full redesign of an existing shop with improved UX and modern styling.": "Popolno preoblikovanje obstoječe trgovine z izboljšanim UX in modernim slogom.",
    "Live site →": "Živo mesto →",
    "Rukja Hidžama": "Rukja Hidžama",
    "Complete Website Creation": "Popolna izgradnja spletne strani",
    "End-to-end website build — design, development, and deployment from scratch.": "Celovita izgradnja spletne strani — oblikovanje, razvoj in objava od začetka.",
    "Mister Dzirlo": "Mister Dzirlo",
    "WooCommerce Payment Setup": "Nastavitev WooCommerce plačil",
    "Payment integration and WooCommerce configuration for an existing site.": "Integracija plačil in konfiguracija WooCommerce za obstoječe mesto.",
    "Data Projects": "Podatkovni projekti",
    "Data pipelines, visualization, and research projects.": "Podatkovne cevi, vizualizacija in raziskovalni projekti.",
    "Data Miner Insights — Feeding App": "Data Miner Insights — Feeding App",
    "Data Pipeline": "Podatkovna cev",
    "Project for feeding and structuring investor data locally.": "Projekt za hranjenje in strukturiranje podatkov vlagateljev lokalno.",
    "Data Visualization with Python": "Data Visualization with Python",
    "Visualization": "Vizualizacija",
    "Python-based data visualization projects and analysis notebooks.": "Projekti vizualizacije podatkov na osnovi Pythona in analizni zvezki.",
    "GitHub →": "GitHub →",
    "Spotify Data Research": "Spotify Data Research",
    "Research": "Raziskava",
    "Data research and analysis on Spotify listening patterns and trends.": "Raziskava in analiza poslušalnih vzorcev in trendov na Spotify.",
    "Want to work together?": "Želiš sodelovati?",
    "I'm always open to interesting projects — whether it's web development, data engineering, or something in between.": "Vedno sem odprt za zanimive projekte — naj bo spletni razvoj, inženiring podatkov ali nekaj vmes.",
    "Get in touch →": "Kontaktiraj me →",

    // ---- thanks page ----
    "status: delivered": "status: dostavljeno",
    "Message sent.Talk soon.": "Sporočilo poslano.<br /><span class=\"title-line\">Kmalu se slišimo.</span>",
    "Your message is in my inbox — I reply personally, usually within a day. In the meantime, feel free to look around.": "Vaše sporočilo je v mojem nabiralniku — odgovarjam osebno, običajno v enem dnevu. Medtem si lahko ogledate stran.",
    "Back to home": "Nazaj na domačo stran",
    "See my work": "Poglej delo"
  };

  var PLACEHOLDERS = {
    ba: { name: "Vaše ime", email: "vi@kompanija.com", message: "Šta gradite? Koji podaci su uključeni i kako treba izgledati rezultat?" },
    de: { name: "Ihr Name", email: "sie@firma.de", message: "Woran arbeiten Sie? Welche Daten sind im Spiel, und wie soll das Ergebnis aussehen?" },
    sl: { name: "Vaše ime", email: "vi@podjetje.si", message: "Kaj gradite? Kateri podatki so vključeni in kako naj bi izgledal rezultat?" }
  };

  var DICTS = { ba: BA, de: DE, sl: SL };
  var LANG_CODES = { en: "en", ba: "bs", de: "de", sl: "sl" };
  var SELECTOR = "title, p, h1, h2, h3, li, dt, dd, b, button, a, span, figcaption";
  var SKIP_CLASSES = ["stack-line", "chips", "record-org", "brand", "footer-links", "lang-switch"];

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  function skippable(el) {
    if (el.closest && el.closest("svg")) return true;
    for (var i = 0; i < SKIP_CLASSES.length; i++) {
      if (el.closest && el.closest("." + SKIP_CLASSES[i])) return true;
    }
    return false;
  }

  // Snapshot at load: element -> its English key + original innerHTML
  var ELS = [], KEYS = new Map(), ORIG = new Map(), PH = {};
  var DICT_KEYS = new Set(Object.keys(BA));

  function snapshot() {
    var nodes = document.querySelectorAll(SELECTOR);
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (skippable(el)) continue;
      var key = norm(el.textContent);
      if (!key) continue;
      ELS.push(el);
      KEYS.set(el, key);
      ORIG.set(el, el.innerHTML);
    }
    ["name", "email", "message"].forEach(function (id) {
      var input = document.getElementById(id);
      if (input) PH[id] = input.placeholder;
    });
  }

  function handledByAncestor(el) {
    for (var n = el.parentElement; n; n = n.parentElement) {
      var k = KEYS.get(n);
      if (k && DICT_KEYS.has(k)) return true;
    }
    return false;
  }

  function applyLang(lang) {
    var dict = DICTS[lang] || null;
    for (var i = 0; i < ELS.length; i++) {
      var el = ELS[i];
      if (!el.isConnected) continue;
      if (handledByAncestor(el)) continue;
      var key = KEYS.get(el);
      if (dict && dict[key] != null) {
        el.innerHTML = dict[key];
      } else {
        var orig = ORIG.get(el);
        if (el.innerHTML !== orig) el.innerHTML = orig;
      }
    }
    // placeholders
    ["name", "email", "message"].forEach(function (id) {
      var input = document.getElementById(id);
      if (!input) return;
      var ph = PLACEHOLDERS[lang];
      input.placeholder = ph && ph[id] ? ph[id] : PH[id];
    });
    // document language + active button
    document.documentElement.lang = LANG_CODES[lang] || "en";
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
  }

  function init() {
    snapshot();
    var saved = "en";
    try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
    if (!DICTS[saved] && saved !== "en") saved = "en";
    applyLang(saved);
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
