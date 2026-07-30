/* ============================================================
   i18n — EN (default, in HTML) / BA / DE
   Keys are the normalized English textContent of each element.
   Values may contain HTML (links, spans) and replace innerHTML.
   ============================================================ */
(function () {
  "use strict";

  var BA = {
    // ---- nav ----
    "home": "početna",
    "work": "iskustvo",
    "freelance": "freelance",
    "about": "o meni",
    "contact": "kontakt",

    // ---- shared ----
    "current": "trenutno",
    "ongoing": "aktivno",
    "section": "sekcija",
    "Get in touch": "Javi se",
    "Full experience →": "Cjelokupno iskustvo →",
    "© 2026 Ajdin Salihović · Tuzla, Bosnia & Herzegovina": "© <span id=\"year\">2026</span> Ajdin Salihović · Tuzla, Bosna i Hercegovina",

    // ---- index: hero ----
    "Unstructured in.Trusted data out.": "Nestrukturirano unutra.<br /><span class=\"title-line\">Pouzdani podaci van.</span>",
    "Eight years across software, data and AI. I build LLM-powered document processing, production data pipelines, and the validation layers that make both trustworthy — currently engineering the context layer behind AI document extraction at Hypatos.": "Osam godina u softveru, podacima i AI. Gradim LLM obradu dokumenata, produkcijske data pipeline-e i validacijske slojeve koji ih čine pouzdanima — trenutno radim na kontekstnom sloju iza AI ekstrakcije dokumenata u Hypatosu.",
    "Start a project": "Pokreni projekat",
    "See my work": "Pogledaj radove",
    "8 yrs": "8 god",
    "4 yrs": "4 god",
    "software · data · ai": "softver · podaci · ai",
    "data platforms in production": "data platformi u produkciji",
    "msc programs — fin. eng & data science": "msc programa — fin. inž. i data science",
    "teaching code, ages 6–18": "podučavanje programiranja, uzrast 6–18",

    // ---- index: teasers ----
    "Explore": "Istraži",
    "Three ways in.": "Tri ulaza.",
    "Work": "Iskustvo",
    "Eight years of roles and systems — from LLM document processing at Hypatos to warehouses on BigQuery, Snowflake and Databricks.": "Osam godina uloga i sistema — od LLM obrade dokumenata u Hypatosu do skladišta na BigQuery, Snowflake i Databricks platformama.",
    "view experience →": "pogledaj iskustvo →",
    "What I build for clients: document automation, data pipelines, scraping & enrichment, dashboards — scoped, shipped, documented.": "Šta gradim za klijente: automatizacija dokumenata, data pipeline-i, scraping i obogaćivanje, dashboardi — definisano, isporučeno, dokumentovano.",
    "view services →": "pogledaj usluge →",
    "About me": "O meni",
    "The person behind the pipelines — education, certifications, languages, and why my Instagram handle is @ajdin_thinks_data.": "Osoba iza pipeline-a — obrazovanje, certifikati, jezici, i zašto je moj Instagram nadimak @ajdin_thinks_data.",
    "meet me ↓": "upoznaj me ↓",

    // ---- index: current focus ----
    "Right now": "Trenutno",
    "Current focus.": "Trenutni fokus.",
    "Engineering the context layer behind LLM-based document processing — extraction schemas, prompts and ground-truth datasets.": "Gradim kontekstni sloj iza LLM obrade dokumenata — šeme ekstrakcije, promptove i ground-truth skupove podataka.",
    "Building evaluation sets and error taxonomies that feed back into engineering and raise extraction accuracy.": "Gradim evaluacijske skupove i taksonomije grešaka koji se vraćaju inženjeringu i podižu tačnost ekstrakcije.",

    // ---- index: about ----
    "Hi, I'm Ajdin. I think in data.": "Zdravo, ja sam Ajdin. Razmišljam u podacima.",
    "I've spent eight years moving across the stack — web development, then QA, then data engineering, and now AI. That path wasn't an accident: each stop taught me a habit the next one needed. QA made me distrust every record until it's validated. Warehousing taught me that pipelines fail at 3 a.m., so they'd better log well. LLM work taught me that the model is only as good as the context you engineer around it.": "Proveo sam osam godina krećući se kroz cijeli stack — web development, pa QA, pa data engineering, a sada AI. Taj put nije bio slučajan: svaka stanica me naučila naviku koju je sljedeća trebala. QA me naučio da ne vjerujem nijednom zapisu dok nije validiran. Skladištenje podataka me naučilo da pipeline-i padaju u 3 ujutro, pa je bolje da dobro loguju. Rad s LLM-ovima me naučio da je model dobar onoliko koliko je dobar kontekst koji izgradiš oko njega.",
    "Today I work on LLM-powered document processing — the unglamorous, high-value problem of turning contracts, invoices and scanned forms into data a business can actually trust. On the side, I take freelance projects and study financial engineering, because markets are just another messy data source waiting for structure.": "Danas radim na LLM obradi dokumenata — neglamurozan, ali vrijedan problem pretvaranja ugovora, faktura i skeniranih obrazaca u podatke kojima biznis zaista može vjerovati. Sa strane radim freelance projekte i studiram finansijski inženjering, jer su tržišta samo još jedan neuredan izvor podataka koji čeka strukturu.",
    "Since 2022 I've also taught programming to kids aged 6 to 18. Four years of explaining recursion to ten-year-olds is the best communication training an engineer can get — if you can't make it clear to them, you don't understand it well enough yourself.": "Od 2022. podučavam programiranje djecu od 6 do 18 godina. Četiri godine objašnjavanja rekurzije desetogodišnjacima najbolji je komunikacijski trening koji inženjer može dobiti — ako to ne možeš njima objasniti, ni sam to ne razumiješ dovoljno dobro.",
    "Off the clock I post about data and AI as @ajdin_thinks_data — the handle is honest, it's how my brain works. I speak Bosnian and English fluently, get by in Slovene, and I'm slowly convincing German to cooperate.": "Van posla objavljujem o podacima i AI kao <a href=\"https://www.instagram.com/ajdin_thinks_data/\" target=\"_blank\" rel=\"noopener\">@ajdin_thinks_data</a> — nadimak je iskren, tako mi mozak radi. Tečno govorim bosanski i engleski, snalazim se na slovenskom, a njemački polako nagovaram na saradnju.",
    "education": "obrazovanje",
    "WorldQuant University · Apr 2025 – Sep 2027 (in progress, remote)": "WorldQuant University · apr 2025 – sep 2027 (u toku, online)",
    "certifications": "certifikati",
    "languages": "jezici",
    "bosnian": "bosanski",
    "english": "engleski",
    "slovene": "slovenski",
    "german": "njemački",
    "Native": "maternji",
    "C2 — full professional fluency": "C2 — puna profesionalna tečnost",
    "A1 — and climbing": "A1 — i napreduje",

    // ---- record meta ----
    "period Jul 2026 – present": "<span class=\"field\">period</span> jul 2026 – danas",
    "location Germany (remote)": "<span class=\"field\">lokacija</span> Njemačka (remote)",
    "period Apr 2026 – Jul 2026": "<span class=\"field\">period</span> apr 2026 – jul 2026",
    "location remote": "<span class=\"field\">lokacija</span> remote",
    "period Feb 2025 – Apr 2026": "<span class=\"field\">period</span> feb 2025 – apr 2026",
    "location Tuzla, BiH": "<span class=\"field\">lokacija</span> Tuzla, BiH",
    "period Oct 2024 – Feb 2025": "<span class=\"field\">period</span> okt 2024 – feb 2025",
    "period Aug 2024 – Dec 2024": "<span class=\"field\">period</span> avg 2024 – dec 2024",
    "period Oct 2022 – Jul 2023": "<span class=\"field\">period</span> okt 2022 – jul 2023",
    "location Sarajevo, BiH": "<span class=\"field\">lokacija</span> Sarajevo, BiH",
    "period Oct 2020 – Sep 2022": "<span class=\"field\">period</span> okt 2020 – sep 2022",
    "period Feb 2018 – Oct 2019": "<span class=\"field\">period</span> feb 2018 – okt 2019",
    "location BiH": "<span class=\"field\">lokacija</span> BiH",
    "period Feb 2022 – present": "<span class=\"field\">period</span> feb 2022 – danas",

    // ---- work page ----
    "The record,role by role.": "Zapis,<br /><span class=\"title-line\">ulogu po ulogu.</span>",
    "Every role below shaped how I build today: QA taught me to distrust data until it's validated, warehousing taught me scale, and LLM work taught me that context is the product.": "Svaka uloga ispod oblikovala je način na koji danas gradim: QA me naučio da ne vjerujem podacima dok nisu validirani, skladištenje me naučilo skali, a rad s LLM-ovima da je kontekst proizvod.",
    "Experience.": "Iskustvo.",
    "Engineer the context layer behind LLM-based document processing — extraction schemas, prompts and ground-truth datasets that drive automated capture of structured data from unstructured business documents.": "Gradim kontekstni sloj iza LLM obrade dokumenata — šeme ekstrakcije, promptove i ground-truth skupove podataka koji pokreću automatsko izvlačenje strukturiranih podataka iz nestrukturiranih poslovnih dokumenata.",
    "Build evaluation sets and error taxonomies from model output, feeding structured findings back to engineering to raise extraction accuracy and reduce manual review.": "Gradim evaluacijske skupove i taksonomije grešaka iz izlaza modela, vraćajući strukturirane nalaze inženjeringu kako bi se podigla tačnost ekstrakcije i smanjio ručni pregled.",
    "Automate data preparation, validation and reporting across large document corpora with Python and SQL.": "Automatizujem pripremu, validaciju i izvještavanje podataka nad velikim korpusima dokumenata pomoću Pythona i SQL-a.",
    "Built automated acquisition and enrichment pipelines combining third-party APIs (Apollo, Airtable, Google Workspace) with LLM agents to research, structure and validate investor data at scale.": "Izgradio automatizovane pipeline-e za prikupljanje i obogaćivanje koji kombinuju API-je trećih strana (Apollo, Airtable, Google Workspace) s LLM agentima za istraživanje, strukturiranje i validaciju investitorskih podataka u velikom obimu.",
    "Designed reusable Python automation and multi-stage QA workflows that replaced manual research steps and enforced validation rules on every record.": "Dizajnirao ponovo upotrebljivu Python automatizaciju i višestepene QA tokove koji su zamijenili ručne korake istraživanja i nametnuli validacijska pravila na svakom zapisu.",
    "Integrated LLM tooling into internal processes and documented repeatable workflows adopted by the wider team.": "Integrisao LLM alate u interne procese i dokumentovao ponovljive tokove rada koje je usvojio širi tim.",
    "Owned quality for a multi-platform banking product across web, iOS and Android — test design, regression, functional, UI and exploratory testing managed in TestRail.": "Bio odgovoran za kvalitet multiplatformskog bankarskog proizvoda na webu, iOS-u i Androidu — dizajn testova, regresijsko, funkcionalno, UI i eksplorativno testiranje vođeno u TestRail-u.",
    "Debugged issues across the stack using logs, API responses and multiple environments, working directly with developers and product.": "Debugovao probleme kroz cijeli stack koristeći logove, API odgovore i više okruženja, radeći direktno s developerima i product timom.",
    "Improved release confidence through systematic edge-case coverage and maintained test documentation.": "Povećao pouzdanost izdanja sistematskim pokrivanjem rubnih slučajeva i održavanom test dokumentacijom.",
    "Designed and maintained BigQuery data warehouses and ETL/ELT pipelines on GCP supporting analytics and reporting for product and marketing teams.": "Dizajnirao i održavao BigQuery skladišta podataka i ETL/ELT pipeline-e na GCP-u za analitiku i izvještavanje product i marketing timova.",
    "Developed modular Python services for recurring ingestion, cleaning and transformation.": "Razvijao modularne Python servise za redovnu ingestiju, čišćenje i transformaciju podataka.",
    "Integrated third-party APIs (Google Analytics, Hyros) for attribution data and delivered Looker Studio dashboards used across the organisation.": "Integrisao API-je trećih strana (Google Analytics, Hyros) za atribucijske podatke i isporučio Looker Studio dashboarde korištene u cijeloj organizaciji.",
    "Spearheaded a custom data platform on PySpark and Databricks, transforming raw streaming data into gold-layer analytics datasets.": "Vodio izgradnju prilagođene data platforme na PySparku i Databricksu, pretvarajući sirove streaming podatke u gold-layer analitičke skupove.",
    "Wrote scalable, testable Python modules for validation, transformation and enrichment.": "Pisao skalabilne, testabilne Python module za validaciju, transformaciju i obogaćivanje.",
    "Developed and maintained Python Airflow DAGs automating ETL processes, with advanced error-handling and logging.": "Razvijao i održavao Python Airflow DAG-ove koji automatizuju ETL procese, s naprednim rukovanjem greškama i logovanjem.",
    "Designed performant SQL queries and data models on Snowflake and Oracle for near real-time analytics use cases.": "Dizajnirao performantne SQL upite i modele podataka na Snowflakeu i Oracleu za analitiku u gotovo realnom vremenu.",
    "Built and monitored production pipelines on Redshift and Snowflake using Python, Airflow and shell scripting.": "Gradio i nadzirao produkcijske pipeline-e na Redshiftu i Snowflakeu koristeći Python, Airflow i shell skripte.",
    "Drove data quality and reliability improvements through validation checks, refactoring and clearer logging.": "Unapređivao kvalitet i pouzdanost podataka kroz validacijske provjere, refaktorisanje i jasnije logovanje.",
    "Built and shipped web applications with Angular, Drupal, JavaScript, jQuery and HTML/CSS, with automated UI testing in Selenium.": "Gradio i isporučivao web aplikacije s Angularom, Drupalom, JavaScriptom, jQueryjem i HTML/CSS-om, uz automatizovano UI testiranje u Seleniumu.",
    "Produced mockups and drafts for client sites and documented implementation step by step.": "Izrađivao mockupe i nacrte za klijentske stranice i dokumentovao implementaciju korak po korak.",
    "Programming Instructor": "Instruktor programiranja",
    "Teach Python, C# and web fundamentals to students aged 6–18 — four years of practice turning complex technical ideas into clear, accessible explanations.": "Podučavam Python, C# i osnove weba učenike od 6 do 18 godina — četiri godine pretvaranja složenih tehničkih ideja u jasna, pristupačna objašnjenja.",
    "Earlier roles": "Ranije uloge",
    "Technical Support Analyst — Marvelsoft: log analysis, Sphinx documentation, GitLab.": "<b>Technical Support Analyst — Marvelsoft</b>: analiza logova, Sphinx dokumentacija, GitLab.",
    "Software Engineer — Alfa24: Vue.js, PostgreSQL.": "<b>Software Engineer — Alfa24</b>: Vue.js, PostgreSQL.",
    "Web Developer — Leftor d.o.o.: PHP, Yii, HTML5/CSS3.": "<b>Web Developer — Leftor d.o.o.</b>: PHP, Yii, HTML5/CSS3.",
    "Toolbox": "Alati",
    "Skills, grouped.": "Vještine, grupisane.",
    "LLM-based document processing & data extraction, prompt and context engineering, RAG, embeddings & vector search, evaluation sets and error analysis, LLM/agent APIs, MCP tooling": "LLM obrada dokumenata i ekstrakcija podataka, prompt i context engineering, RAG, embeddings i vektorska pretraga, evaluacijski skupovi i analiza grešaka, LLM/agent API-ji, MCP alati",
    "Python (FastAPI, Flask), REST API design & integration, background jobs and scheduling, asynchronous / event-driven processing, C#": "Python (FastAPI, Flask), dizajn i integracija REST API-ja, pozadinski poslovi i raspoređivanje, asinhrona / event-driven obrada, C#",
    "JavaScript, Angular, Vue.js, HTML5, CSS3, responsive UI work — TypeScript / React actively learning": "JavaScript, Angular, Vue.js, HTML5, CSS3, responzivan UI rad — TypeScript / React aktivno učim",
    "data & databases": "podaci i baze",
    "Advanced SQL, PostgreSQL, Oracle, Snowflake, BigQuery, Redshift, MongoDB, Cassandra; DBT, Airflow, Fivetran, PySpark, Databricks; ETL/ELT, warehouse & lakehouse design": "Napredni SQL, PostgreSQL, Oracle, Snowflake, BigQuery, Redshift, MongoDB, Cassandra; DBT, Airflow, Fivetran, PySpark, Databricks; ETL/ELT, dizajn skladišta i lakehousea",
    "Google Cloud Platform, AWS (S3, Athena), Azure, Docker, Kubernetes, Git/GitLab, Linux, logging & monitoring": "Google Cloud Platform, AWS (S3, Athena), Azure, Docker, Kubernetes, Git/GitLab, Linux, logovanje i monitoring",
    "quality": "kvalitet",
    "Test design & automation (Selenium, TestRail), data validation, debugging & performance analysis, technical documentation (Sphinx), Agile/Scrum, Jira": "Dizajn i automatizacija testova (Selenium, TestRail), validacija podataka, debugging i analiza performansi, tehnička dokumentacija (Sphinx), Agile/Scrum, Jira",

    // ---- freelance page ----
    "Have a data problem?I build the fix.": "Imate problem s podacima?<br /><span class=\"title-line\">Ja gradim rješenje.</span>",
    "I take projects end to end — scoping, backend and API development, containerised cloud deployment, and handover documentation your team can actually maintain. If it involves messy data, repetitive work, or documents nobody wants to read, it's probably my kind of project.": "Preuzimam projekte od početka do kraja — definisanje obima, backend i API development, kontejnerizovani cloud deployment i primopredajnu dokumentaciju koju vaš tim zaista može održavati. Ako uključuje neuredne podatke, repetitivan posao ili dokumente koje niko ne želi čitati, vjerovatno je moj tip projekta.",
    "Tell me what you're building": "Reci mi šta gradiš",
    "Services": "Usluge",
    "What I build for clients.": "Šta gradim za klijente.",
    "service": "usluga",
    "LLM document automation": "LLM automatizacija dokumenata",
    "Invoices, contracts, forms, reports — extracted into structured, validated data with LLM pipelines, evaluation sets and human-auditable review workflows. The same discipline I apply at Hypatos, scaled to your documents.": "Fakture, ugovori, obrasci, izvještaji — izvučeni u strukturirane, validirane podatke pomoću LLM pipeline-a, evaluacijskih skupova i tokova pregleda koje ljudi mogu auditirati. Ista disciplina koju primjenjujem u Hypatosu, skalirana na vaše dokumente.",
    "Data pipelines & warehousing": "Data pipeline-i i skladištenje",
    "Ingestion, ETL/ELT, modelling and orchestration on BigQuery, Snowflake, Redshift or Databricks — with the error handling, logging and validation that keep pipelines boring in the best way.": "Ingestija, ETL/ELT, modeliranje i orkestracija na BigQuery, Snowflake, Redshift ili Databricks platformama — s rukovanjem greškama, logovanjem i validacijom koji pipeline-e drže dosadnima na najbolji način.",
    "Web data acquisition & enrichment": "Prikupljanje i obogaćivanje web podataka",
    "Scraping, API integration, deduplication, enrichment and QA rules that turn the open web into structured records delivered to the tools your team already uses — Airtable, Notion, sheets, or a custom app.": "Scraping, integracija API-ja, deduplikacija, obogaćivanje i QA pravila koja otvoreni web pretvaraju u strukturirane zapise isporučene u alate koje vaš tim već koristi — Airtable, Notion, tabele ili custom aplikaciju.",
    "Dashboards & automated reporting": "Dashboardi i automatski izvještaji",
    "Looker Studio dashboards and scheduled reporting built on clean, validated data — plus the automations that save your team a week every month.": "Looker Studio dashboardi i zakazano izvještavanje izgrađeni na čistim, validiranim podacima — plus automatizacije koje vašem timu štede sedmicu svakog mjeseca.",
    "everything else": "sve ostalo",
    "Not on the list? Ask anyway.": "Nije na listi? Svejedno pitaj.",
    "If it's technical, I can build it or write it — scripts, integrations, internal tools, technical documentation, data cleanups, one-off automations, or the weird project that doesn't fit a category. Describe the problem; I'll tell you honestly whether I'm the right person for it, and what it would take.": "Ako je tehničko, mogu to izgraditi ili napisati — skripte, integracije, interne alate, tehničku dokumentaciju, čišćenje podataka, jednokratne automatizacije ili čudan projekat koji ne staje ni u jednu kategoriju. Opišite problem; iskreno ću vam reći jesam li prava osoba za to i šta bi bilo potrebno.",
    "Describe your problem →": "Opiši svoj problem →",
    "Process": "Proces",
    "How working together goes.": "Kako izgleda saradnja.",
    "ScopeA short call or email thread to understand the problem, the data, and what \"done\" looks like. Free, no commitment.": "<div><b>Obim</b><p>Kratak poziv ili email prepiska da razumijem problem, podatke i kako izgleda \"gotovo\". Besplatno, bez obaveza.</p></div>",
    "ProposalA written plan: deliverables, timeline, and a fixed or milestone-based price. No surprises later.": "<div><b>Ponuda</b><p>Pisani plan: isporuke, rokovi i fiksna cijena ili cijena po fazama. Bez iznenađenja kasnije.</p></div>",
    "BuildIterative development with regular demos, so you see progress on real data — not just status updates.": "<div><b>Izgradnja</b><p>Iterativni razvoj s redovnim demoima, da napredak vidite na stvarnim podacima — ne samo u statusnim izvještajima.</p></div>",
    "HandoverDeployed, documented, and explained. You own the code, and your team knows how to run it.": "<div><b>Primopredaja</b><p>Deployano, dokumentovano i objašnjeno. Kod je vaš, a vaš tim zna kako da ga pokreće.</p></div>",
    "Send an inquiry": "Pošalji upit",
    "Email me directly": "Pošalji email direktno",

    // ---- contact page ----
    "Contact": "Kontakt",
    "Questions, ideas,or a project brief?": "Pitanja, ideje,<br /><span class=\"title-line\">ili projektni zadatak?</span>",
    "Whether it's a pipeline that needs building, documents that need structure, or an automation that would save your team a week every month — send a message and I'll reply personally.": "Bilo da je u pitanju pipeline koji treba izgraditi, dokumenti kojima treba struktura ili automatizacija koja bi vašem timu uštedjela sedmicu svakog mjeseca — pošaljite poruku i odgovoriću lično.",
    "name": "ime",
    "email": "email",
    "message": "poruka",
    "Send message": "Pošalji poruku",
    "Open in your email app": "Otvori u email aplikaciji",
    "Goes straight to my inbox — I reply personally, usually within a day.": "Ide pravo u moj inbox — odgovaram lično, obično u roku od jednog dana.",
    "Prefer email directly? This works too.": "Radije direktno emailom? I to radi.",
    "professional": "profesionalno",
    "social": "društvene mreže",
    "@ajdin_thinks_data — thoughts on data and AI, in between the pipelines.": "<a href=\"https://www.instagram.com/ajdin_thinks_data/\" target=\"_blank\" rel=\"noopener\">@ajdin_thinks_data</a> — misli o podacima i AI, između pipeline-a.",

    // ---- thanks page ----
    "status: delivered": "status: isporučeno",
    "Message sent.Talk soon.": "Poruka poslana.<br /><span class=\"title-line\">Čujemo se uskoro.</span>",
    "Your message is in my inbox — I reply personally, usually within a day. In the meantime, feel free to look around.": "Vaša poruka je u mom inboxu — odgovaram lično, obično u roku od jednog dana. U međuvremenu, slobodno razgledajte.",
    "Back to home": "Nazad na početnu"
  };

  var DE = {
    // ---- nav ----
    "home": "start",
    "work": "erfahrung",
    "freelance": "freelance",
    "about": "über mich",
    "contact": "kontakt",

    // ---- shared ----
    "current": "aktuell",
    "ongoing": "laufend",
    "section": "bereich",
    "Get in touch": "Kontakt aufnehmen",
    "Full experience →": "Gesamte Erfahrung →",
    "© 2026 Ajdin Salihović · Tuzla, Bosnia & Herzegovina": "© <span id=\"year\">2026</span> Ajdin Salihović · Tuzla, Bosnien und Herzegowina",

    // ---- index: hero ----
    "Unstructured in.Trusted data out.": "Unstrukturiert rein.<br /><span class=\"title-line\">Verlässliche Daten raus.</span>",
    "Eight years across software, data and AI. I build LLM-powered document processing, production data pipelines, and the validation layers that make both trustworthy — currently engineering the context layer behind AI document extraction at Hypatos.": "Acht Jahre in Software, Daten und KI. Ich baue LLM-gestützte Dokumentenverarbeitung, produktive Datenpipelines und die Validierungsschichten, die beides verlässlich machen — derzeit arbeite ich an der Kontextschicht hinter der KI-Dokumentenextraktion bei Hypatos.",
    "Start a project": "Projekt starten",
    "See my work": "Meine Arbeit ansehen",
    "8 yrs": "8 J.",
    "4 yrs": "4 J.",
    "software · data · ai": "software · daten · ki",
    "data platforms in production": "datenplattformen in produktion",
    "msc programs — fin. eng & data science": "msc-programme — fin.-eng. & data science",
    "teaching code, ages 6–18": "programmieren unterrichten, alter 6–18",

    // ---- index: teasers ----
    "Explore": "Entdecken",
    "Three ways in.": "Drei Wege hinein.",
    "Work": "Erfahrung",
    "Eight years of roles and systems — from LLM document processing at Hypatos to warehouses on BigQuery, Snowflake and Databricks.": "Acht Jahre Rollen und Systeme — von LLM-Dokumentenverarbeitung bei Hypatos bis zu Warehouses auf BigQuery, Snowflake und Databricks.",
    "view experience →": "erfahrung ansehen →",
    "What I build for clients: document automation, data pipelines, scraping & enrichment, dashboards — scoped, shipped, documented.": "Was ich für Kunden baue: Dokumentenautomatisierung, Datenpipelines, Scraping & Anreicherung, Dashboards — sauber definiert, geliefert, dokumentiert.",
    "view services →": "leistungen ansehen →",
    "About me": "Über mich",
    "The person behind the pipelines — education, certifications, languages, and why my Instagram handle is @ajdin_thinks_data.": "Der Mensch hinter den Pipelines — Ausbildung, Zertifikate, Sprachen, und warum mein Instagram-Handle @ajdin_thinks_data ist.",
    "meet me ↓": "mehr über mich ↓",

    // ---- index: current focus ----
    "Right now": "Aktuell",
    "Current focus.": "Aktueller Fokus.",
    "Engineering the context layer behind LLM-based document processing — extraction schemas, prompts and ground-truth datasets.": "Ich entwickle die Kontextschicht hinter LLM-basierter Dokumentenverarbeitung — Extraktionsschemata, Prompts und Ground-Truth-Datensätze.",
    "Building evaluation sets and error taxonomies that feed back into engineering and raise extraction accuracy.": "Ich baue Evaluationssets und Fehlertaxonomien, die ins Engineering zurückfließen und die Extraktionsgenauigkeit erhöhen.",

    // ---- index: about ----
    "Hi, I'm Ajdin. I think in data.": "Hi, ich bin Ajdin. Ich denke in Daten.",
    "I've spent eight years moving across the stack — web development, then QA, then data engineering, and now AI. That path wasn't an accident: each stop taught me a habit the next one needed. QA made me distrust every record until it's validated. Warehousing taught me that pipelines fail at 3 a.m., so they'd better log well. LLM work taught me that the model is only as good as the context you engineer around it.": "Acht Jahre habe ich mich durch den Stack bewegt — Webentwicklung, dann QA, dann Data Engineering, jetzt KI. Dieser Weg war kein Zufall: Jede Station hat mir eine Gewohnheit beigebracht, die die nächste brauchte. QA lehrte mich, keinem Datensatz zu trauen, bis er validiert ist. Warehousing lehrte mich, dass Pipelines um 3 Uhr morgens ausfallen — also sollten sie gut loggen. Die Arbeit mit LLMs lehrte mich, dass ein Modell nur so gut ist wie der Kontext, den man darum baut.",
    "Today I work on LLM-powered document processing — the unglamorous, high-value problem of turning contracts, invoices and scanned forms into data a business can actually trust. On the side, I take freelance projects and study financial engineering, because markets are just another messy data source waiting for structure.": "Heute arbeite ich an LLM-gestützter Dokumentenverarbeitung — dem unglamourösen, aber wertvollen Problem, Verträge, Rechnungen und gescannte Formulare in Daten zu verwandeln, denen ein Unternehmen wirklich vertrauen kann. Nebenbei übernehme ich Freelance-Projekte und studiere Financial Engineering, denn Märkte sind nur eine weitere unordentliche Datenquelle, die auf Struktur wartet.",
    "Since 2022 I've also taught programming to kids aged 6 to 18. Four years of explaining recursion to ten-year-olds is the best communication training an engineer can get — if you can't make it clear to them, you don't understand it well enough yourself.": "Seit 2022 unterrichte ich außerdem Kinder von 6 bis 18 Jahren im Programmieren. Vier Jahre lang Zehnjährigen Rekursion zu erklären ist das beste Kommunikationstraining, das ein Engineer bekommen kann — wenn du es ihnen nicht klar erklären kannst, hast du es selbst nicht gut genug verstanden.",
    "Off the clock I post about data and AI as @ajdin_thinks_data — the handle is honest, it's how my brain works. I speak Bosnian and English fluently, get by in Slovene, and I'm slowly convincing German to cooperate.": "Nach Feierabend poste ich über Daten und KI als <a href=\"https://www.instagram.com/ajdin_thinks_data/\" target=\"_blank\" rel=\"noopener\">@ajdin_thinks_data</a> — der Handle ist ehrlich, so funktioniert mein Kopf. Ich spreche fließend Bosnisch und Englisch, komme auf Slowenisch zurecht und überrede das Deutsche langsam zur Zusammenarbeit.",
    "education": "ausbildung",
    "WorldQuant University · Apr 2025 – Sep 2027 (in progress, remote)": "WorldQuant University · Apr 2025 – Sep 2027 (laufend, remote)",
    "certifications": "zertifikate",
    "languages": "sprachen",
    "bosnian": "bosnisch",
    "english": "englisch",
    "slovene": "slowenisch",
    "german": "deutsch",
    "Native": "Muttersprache",
    "C2 — full professional fluency": "C2 — verhandlungssicher",
    "A1 — and climbing": "A1 — Tendenz steigend",

    // ---- record meta ----
    "period Jul 2026 – present": "<span class=\"field\">zeitraum</span> Jul 2026 – heute",
    "location Germany (remote)": "<span class=\"field\">standort</span> Deutschland (remote)",
    "period Apr 2026 – Jul 2026": "<span class=\"field\">zeitraum</span> Apr 2026 – Jul 2026",
    "location remote": "<span class=\"field\">standort</span> remote",
    "period Feb 2025 – Apr 2026": "<span class=\"field\">zeitraum</span> Feb 2025 – Apr 2026",
    "location Tuzla, BiH": "<span class=\"field\">standort</span> Tuzla, BiH",
    "period Oct 2024 – Feb 2025": "<span class=\"field\">zeitraum</span> Okt 2024 – Feb 2025",
    "period Aug 2024 – Dec 2024": "<span class=\"field\">zeitraum</span> Aug 2024 – Dez 2024",
    "period Oct 2022 – Jul 2023": "<span class=\"field\">zeitraum</span> Okt 2022 – Jul 2023",
    "location Sarajevo, BiH": "<span class=\"field\">standort</span> Sarajevo, BiH",
    "period Oct 2020 – Sep 2022": "<span class=\"field\">zeitraum</span> Okt 2020 – Sep 2022",
    "period Feb 2018 – Oct 2019": "<span class=\"field\">zeitraum</span> Feb 2018 – Okt 2019",
    "location BiH": "<span class=\"field\">standort</span> BiH",
    "period Feb 2022 – present": "<span class=\"field\">zeitraum</span> Feb 2022 – heute",

    // ---- work page ----
    "The record,role by role.": "Der Werdegang,<br /><span class=\"title-line\">Rolle für Rolle.</span>",
    "Every role below shaped how I build today: QA taught me to distrust data until it's validated, warehousing taught me scale, and LLM work taught me that context is the product.": "Jede Rolle unten hat geprägt, wie ich heute baue: QA lehrte mich, Daten erst nach Validierung zu trauen, Warehousing lehrte mich Skalierung, und die LLM-Arbeit, dass Kontext das Produkt ist.",
    "Experience.": "Erfahrung.",
    "Engineer the context layer behind LLM-based document processing — extraction schemas, prompts and ground-truth datasets that drive automated capture of structured data from unstructured business documents.": "Ich entwickle die Kontextschicht hinter LLM-basierter Dokumentenverarbeitung — Extraktionsschemata, Prompts und Ground-Truth-Datensätze für die automatisierte Erfassung strukturierter Daten aus unstrukturierten Geschäftsdokumenten.",
    "Build evaluation sets and error taxonomies from model output, feeding structured findings back to engineering to raise extraction accuracy and reduce manual review.": "Ich erstelle Evaluationssets und Fehlertaxonomien aus Modellausgaben und spiele strukturierte Erkenntnisse ans Engineering zurück, um die Extraktionsgenauigkeit zu erhöhen und manuelle Prüfung zu reduzieren.",
    "Automate data preparation, validation and reporting across large document corpora with Python and SQL.": "Ich automatisiere Datenaufbereitung, Validierung und Reporting über große Dokumentkorpora mit Python und SQL.",
    "Built automated acquisition and enrichment pipelines combining third-party APIs (Apollo, Airtable, Google Workspace) with LLM agents to research, structure and validate investor data at scale.": "Automatisierte Erfassungs- und Anreicherungspipelines gebaut, die Dritt-APIs (Apollo, Airtable, Google Workspace) mit LLM-Agenten kombinieren, um Investorendaten in großem Maßstab zu recherchieren, zu strukturieren und zu validieren.",
    "Designed reusable Python automation and multi-stage QA workflows that replaced manual research steps and enforced validation rules on every record.": "Wiederverwendbare Python-Automatisierung und mehrstufige QA-Workflows entworfen, die manuelle Rechercheschritte ersetzten und Validierungsregeln für jeden Datensatz durchsetzten.",
    "Integrated LLM tooling into internal processes and documented repeatable workflows adopted by the wider team.": "LLM-Tooling in interne Prozesse integriert und wiederholbare Workflows dokumentiert, die vom gesamten Team übernommen wurden.",
    "Owned quality for a multi-platform banking product across web, iOS and Android — test design, regression, functional, UI and exploratory testing managed in TestRail.": "Qualität eines Multi-Plattform-Banking-Produkts über Web, iOS und Android verantwortet — Testdesign, Regressions-, Funktions-, UI- und exploratives Testen, verwaltet in TestRail.",
    "Debugged issues across the stack using logs, API responses and multiple environments, working directly with developers and product.": "Probleme über den gesamten Stack hinweg debuggt — mit Logs, API-Antworten und mehreren Umgebungen, in direkter Zusammenarbeit mit Entwicklung und Produkt.",
    "Improved release confidence through systematic edge-case coverage and maintained test documentation.": "Release-Sicherheit durch systematische Edge-Case-Abdeckung und gepflegte Testdokumentation erhöht.",
    "Designed and maintained BigQuery data warehouses and ETL/ELT pipelines on GCP supporting analytics and reporting for product and marketing teams.": "BigQuery-Data-Warehouses und ETL/ELT-Pipelines auf GCP entworfen und betrieben — für Analytics und Reporting von Produkt- und Marketingteams.",
    "Developed modular Python services for recurring ingestion, cleaning and transformation.": "Modulare Python-Services für wiederkehrende Ingestion, Bereinigung und Transformation entwickelt.",
    "Integrated third-party APIs (Google Analytics, Hyros) for attribution data and delivered Looker Studio dashboards used across the organisation.": "Dritt-APIs (Google Analytics, Hyros) für Attributionsdaten integriert und Looker-Studio-Dashboards geliefert, die in der gesamten Organisation genutzt wurden.",
    "Spearheaded a custom data platform on PySpark and Databricks, transforming raw streaming data into gold-layer analytics datasets.": "Aufbau einer maßgeschneiderten Datenplattform auf PySpark und Databricks geleitet — von Roh-Streamingdaten zu Gold-Layer-Analysedatensätzen.",
    "Wrote scalable, testable Python modules for validation, transformation and enrichment.": "Skalierbare, testbare Python-Module für Validierung, Transformation und Anreicherung geschrieben.",
    "Developed and maintained Python Airflow DAGs automating ETL processes, with advanced error-handling and logging.": "Python-Airflow-DAGs zur Automatisierung von ETL-Prozessen entwickelt und gepflegt, mit fortgeschrittenem Error-Handling und Logging.",
    "Designed performant SQL queries and data models on Snowflake and Oracle for near real-time analytics use cases.": "Performante SQL-Abfragen und Datenmodelle auf Snowflake und Oracle für Near-Realtime-Analytics entworfen.",
    "Built and monitored production pipelines on Redshift and Snowflake using Python, Airflow and shell scripting.": "Produktionspipelines auf Redshift und Snowflake gebaut und überwacht — mit Python, Airflow und Shell-Skripten.",
    "Drove data quality and reliability improvements through validation checks, refactoring and clearer logging.": "Datenqualität und -zuverlässigkeit durch Validierungschecks, Refactoring und klareres Logging verbessert.",
    "Built and shipped web applications with Angular, Drupal, JavaScript, jQuery and HTML/CSS, with automated UI testing in Selenium.": "Webanwendungen mit Angular, Drupal, JavaScript, jQuery und HTML/CSS gebaut und ausgeliefert, mit automatisiertem UI-Testing in Selenium.",
    "Produced mockups and drafts for client sites and documented implementation step by step.": "Mockups und Entwürfe für Kundenseiten erstellt und die Umsetzung Schritt für Schritt dokumentiert.",
    "Programming Instructor": "Programmierdozent",
    "Teach Python, C# and web fundamentals to students aged 6–18 — four years of practice turning complex technical ideas into clear, accessible explanations.": "Ich unterrichte Python, C# und Web-Grundlagen für Schüler von 6 bis 18 Jahren — vier Jahre Übung darin, komplexe technische Ideen klar und zugänglich zu erklären.",
    "Earlier roles": "Frühere Rollen",
    "Technical Support Analyst — Marvelsoft: log analysis, Sphinx documentation, GitLab.": "<b>Technical Support Analyst — Marvelsoft</b>: Log-Analyse, Sphinx-Dokumentation, GitLab.",
    "Software Engineer — Alfa24: Vue.js, PostgreSQL.": "<b>Software Engineer — Alfa24</b>: Vue.js, PostgreSQL.",
    "Web Developer — Leftor d.o.o.: PHP, Yii, HTML5/CSS3.": "<b>Web Developer — Leftor d.o.o.</b>: PHP, Yii, HTML5/CSS3.",
    "Toolbox": "Werkzeuge",
    "Skills, grouped.": "Skills, gruppiert.",
    "LLM-based document processing & data extraction, prompt and context engineering, RAG, embeddings & vector search, evaluation sets and error analysis, LLM/agent APIs, MCP tooling": "LLM-basierte Dokumentenverarbeitung & Datenextraktion, Prompt- und Context-Engineering, RAG, Embeddings & Vektorsuche, Evaluationssets und Fehleranalyse, LLM/Agent-APIs, MCP-Tooling",
    "Python (FastAPI, Flask), REST API design & integration, background jobs and scheduling, asynchronous / event-driven processing, C#": "Python (FastAPI, Flask), REST-API-Design & -Integration, Hintergrundjobs und Scheduling, asynchrone / ereignisgesteuerte Verarbeitung, C#",
    "JavaScript, Angular, Vue.js, HTML5, CSS3, responsive UI work — TypeScript / React actively learning": "JavaScript, Angular, Vue.js, HTML5, CSS3, responsive UI-Arbeit — TypeScript / React aktuell im Aufbau",
    "data & databases": "daten & datenbanken",
    "Advanced SQL, PostgreSQL, Oracle, Snowflake, BigQuery, Redshift, MongoDB, Cassandra; DBT, Airflow, Fivetran, PySpark, Databricks; ETL/ELT, warehouse & lakehouse design": "Fortgeschrittenes SQL, PostgreSQL, Oracle, Snowflake, BigQuery, Redshift, MongoDB, Cassandra; DBT, Airflow, Fivetran, PySpark, Databricks; ETL/ELT, Warehouse- & Lakehouse-Design",
    "Google Cloud Platform, AWS (S3, Athena), Azure, Docker, Kubernetes, Git/GitLab, Linux, logging & monitoring": "Google Cloud Platform, AWS (S3, Athena), Azure, Docker, Kubernetes, Git/GitLab, Linux, Logging & Monitoring",
    "quality": "qualität",
    "Test design & automation (Selenium, TestRail), data validation, debugging & performance analysis, technical documentation (Sphinx), Agile/Scrum, Jira": "Testdesign & -automatisierung (Selenium, TestRail), Datenvalidierung, Debugging & Performance-Analyse, technische Dokumentation (Sphinx), Agile/Scrum, Jira",

    // ---- freelance page ----
    "Have a data problem?I build the fix.": "Ein Datenproblem?<br /><span class=\"title-line\">Ich baue die Lösung.</span>",
    "I take projects end to end — scoping, backend and API development, containerised cloud deployment, and handover documentation your team can actually maintain. If it involves messy data, repetitive work, or documents nobody wants to read, it's probably my kind of project.": "Ich übernehme Projekte von Anfang bis Ende — Scoping, Backend- und API-Entwicklung, containerisiertes Cloud-Deployment und Übergabedokumentation, die Ihr Team wirklich pflegen kann. Wenn es um unordentliche Daten, repetitive Arbeit oder Dokumente geht, die niemand lesen will, ist es wahrscheinlich mein Projekt.",
    "Tell me what you're building": "Erzählen Sie mir von Ihrem Projekt",
    "Services": "Leistungen",
    "What I build for clients.": "Was ich für Kunden baue.",
    "service": "leistung",
    "LLM document automation": "LLM-Dokumentenautomatisierung",
    "Invoices, contracts, forms, reports — extracted into structured, validated data with LLM pipelines, evaluation sets and human-auditable review workflows. The same discipline I apply at Hypatos, scaled to your documents.": "Rechnungen, Verträge, Formulare, Berichte — extrahiert in strukturierte, validierte Daten mit LLM-Pipelines, Evaluationssets und menschlich prüfbaren Review-Workflows. Dieselbe Disziplin wie bei Hypatos, skaliert auf Ihre Dokumente.",
    "Data pipelines & warehousing": "Datenpipelines & Warehousing",
    "Ingestion, ETL/ELT, modelling and orchestration on BigQuery, Snowflake, Redshift or Databricks — with the error handling, logging and validation that keep pipelines boring in the best way.": "Ingestion, ETL/ELT, Modellierung und Orchestrierung auf BigQuery, Snowflake, Redshift oder Databricks — mit dem Error-Handling, Logging und der Validierung, die Pipelines auf die beste Art langweilig halten.",
    "Web data acquisition & enrichment": "Web-Datenerfassung & -Anreicherung",
    "Scraping, API integration, deduplication, enrichment and QA rules that turn the open web into structured records delivered to the tools your team already uses — Airtable, Notion, sheets, or a custom app.": "Scraping, API-Integration, Deduplizierung, Anreicherung und QA-Regeln, die das offene Web in strukturierte Datensätze verwandeln — geliefert in die Tools, die Ihr Team schon nutzt: Airtable, Notion, Tabellen oder eine eigene App.",
    "Dashboards & automated reporting": "Dashboards & automatisiertes Reporting",
    "Looker Studio dashboards and scheduled reporting built on clean, validated data — plus the automations that save your team a week every month.": "Looker-Studio-Dashboards und geplantes Reporting auf sauberen, validierten Daten — plus die Automatisierungen, die Ihrem Team jeden Monat eine Woche sparen.",
    "everything else": "alles andere",
    "Not on the list? Ask anyway.": "Nicht auf der Liste? Fragen Sie trotzdem.",
    "If it's technical, I can build it or write it — scripts, integrations, internal tools, technical documentation, data cleanups, one-off automations, or the weird project that doesn't fit a category. Describe the problem; I'll tell you honestly whether I'm the right person for it, and what it would take.": "Wenn es technisch ist, kann ich es bauen oder schreiben — Skripte, Integrationen, interne Tools, technische Dokumentation, Datenbereinigungen, einmalige Automatisierungen oder das seltsame Projekt, das in keine Kategorie passt. Beschreiben Sie das Problem; ich sage Ihnen ehrlich, ob ich der Richtige dafür bin und was es braucht.",
    "Describe your problem →": "Problem beschreiben →",
    "Process": "Ablauf",
    "How working together goes.": "So läuft die Zusammenarbeit.",
    "ScopeA short call or email thread to understand the problem, the data, and what \"done\" looks like. Free, no commitment.": "<div><b>Scoping</b><p>Ein kurzes Gespräch oder ein E-Mail-Austausch, um Problem, Daten und das Ziel zu verstehen. Kostenlos, unverbindlich.</p></div>",
    "ProposalA written plan: deliverables, timeline, and a fixed or milestone-based price. No surprises later.": "<div><b>Angebot</b><p>Ein schriftlicher Plan: Leistungen, Zeitplan und ein Fest- oder Meilensteinpreis. Keine Überraschungen später.</p></div>",
    "BuildIterative development with regular demos, so you see progress on real data — not just status updates.": "<div><b>Umsetzung</b><p>Iterative Entwicklung mit regelmäßigen Demos — Sie sehen Fortschritt an echten Daten, nicht nur Statusupdates.</p></div>",
    "HandoverDeployed, documented, and explained. You own the code, and your team knows how to run it.": "<div><b>Übergabe</b><p>Deployt, dokumentiert und erklärt. Der Code gehört Ihnen, und Ihr Team weiß, wie man ihn betreibt.</p></div>",
    "Send an inquiry": "Anfrage senden",
    "Email me directly": "Direkt per E-Mail",

    // ---- contact page ----
    "Contact": "Kontakt",
    "Questions, ideas,or a project brief?": "Fragen, Ideen<br /><span class=\"title-line\">oder ein Projektbriefing?</span>",
    "Whether it's a pipeline that needs building, documents that need structure, or an automation that would save your team a week every month — send a message and I'll reply personally.": "Ob eine Pipeline gebaut, Dokumente strukturiert oder eine Automatisierung geschaffen werden soll, die Ihrem Team jeden Monat eine Woche spart — schreiben Sie mir, ich antworte persönlich.",
    "name": "name",
    "email": "e-mail",
    "message": "nachricht",
    "Send message": "Nachricht senden",
    "Open in your email app": "In E-Mail-App öffnen",
    "Goes straight to my inbox — I reply personally, usually within a day.": "Landet direkt in meinem Posteingang — ich antworte persönlich, meist innerhalb eines Tages.",
    "Prefer email directly? This works too.": "Lieber direkt per E-Mail? Geht auch.",
    "professional": "beruflich",
    "social": "social media",
    "@ajdin_thinks_data — thoughts on data and AI, in between the pipelines.": "<a href=\"https://www.instagram.com/ajdin_thinks_data/\" target=\"_blank\" rel=\"noopener\">@ajdin_thinks_data</a> — Gedanken zu Daten und KI, zwischen den Pipelines.",

    // ---- thanks page ----
    "status: delivered": "status: zugestellt",
    "Message sent.Talk soon.": "Nachricht gesendet.<br /><span class=\"title-line\">Bis bald.</span>",
    "Your message is in my inbox — I reply personally, usually within a day. In the meantime, feel free to look around.": "Ihre Nachricht ist in meinem Posteingang — ich antworte persönlich, meist innerhalb eines Tages. Schauen Sie sich in der Zwischenzeit gern um.",
    "Back to home": "Zur Startseite"
  };

  var PLACEHOLDERS = {
    ba: { name: "Vaše ime", email: "vi@kompanija.com", message: "Šta gradite? Koji podaci su uključeni i kako treba izgledati rezultat?" },
    de: { name: "Ihr Name", email: "sie@firma.de", message: "Woran arbeiten Sie? Welche Daten sind im Spiel, und wie soll das Ergebnis aussehen?" }
  };

  var DICTS = { ba: BA, de: DE };
  var LANG_CODES = { en: "en", ba: "bs", de: "de" };
  var SELECTOR = "title, p, h1, h2, h3, li, dt, dd, b, button, a, span";
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
  var DICT_KEYS = new Set(Object.keys(BA)); // BA and DE cover the same keys

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
