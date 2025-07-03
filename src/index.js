// const { resources } = require('./translations.js');

// Initialize language switcher
document.addEventListener("DOMContentLoaded", function () {
  // Show loading
  setTimeout(() => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.classList.remove("invisible");
      i18next.init(
        {
          lng: "de",
          resources: resources,
        },
        function (err, t) {
          updateContent();
        }
      );
    }
  }, 3000);

  // Toggle switch
  const langToggle = document.getElementById("langToggle");
  const langSlider = document.getElementById("langSlider");
  const enLabel = document.getElementById("en-label");
  const deLabel = document.getElementById("de-label");
  let currentLang = "de"; // Set default to German

  if (langToggle && langSlider && enLabel && deLabel) {
    // Initial styling for default German state
    langToggle.classList.add("bg-indigo-100");
    langSlider.classList.add("bg-indigo-600");
    enLabel.classList.add("text-gray-400");
    deLabel.classList.add("text-indigo-600");

    langToggle.addEventListener("click", function () {
      if (currentLang === "en") {
        // Switch to German
        currentLang = "de";
        if (langSlider.style) {
          langSlider.style.left = "auto";
          langSlider.style.right = "4px";
        }
        langToggle.classList.add("bg-indigo-100");
        enLabel.classList.remove("text-indigo-600");
        enLabel.classList.add("text-gray-400");
        deLabel.classList.remove("text-gray-400");
        deLabel.classList.add("text-indigo-600");
      } else {
        // Switch to English
        currentLang = "en";
        if (langSlider.style) {
          langSlider.style.right = "auto";
          langSlider.style.left = "4px";
        }
        langToggle.classList.remove("bg-indigo-100");
        langToggle.classList.add("bg-gray-200");
        enLabel.classList.remove("text-gray-400");
        enLabel.classList.add("text-indigo-600");
        deLabel.classList.remove("text-indigo-600");
        deLabel.classList.add("text-gray-400");
      }
      i18next.changeLanguage(currentLang, updateContent);
    });
  }

  // Set up translations
  const resources = {
    de: {
      translation: {
        download_cv: "Lebenslauf herunterladen",
        download_cl: "Anschreiben herunterladen",
        download_cc: "Zertifikate ansehen",
        about: "Über mich",
        projects: "Projekte",
        skills: "Fähigkeiten",
        contact: "Kontakt",
        otw: "Offen für Arbeit",
        "job-title": "Web/Mobile(Android/IOS) Entwickler",
        "sentance-1": `Hallo, 👋 mit 12 Jahren Erfahrung in den Bereichen Web, mobile Entwicklung (iOS/Android) und
                  Backend hatte ich die Gelegenheit, in verschiedenen Phasen des Software Development Life Cycle (SDLC)
                  zu arbeiten. Von Projekten auf der grünen Wiese bis hin zur Produktentwicklung und dem Refactoring von
                  Altsystemen habe ich meine Fähigkeiten in einer breiten Palette von Technologien verfeinert und bin
                  dabei immer bestrebt, der Zeit voraus zu sein.`,
        "sentance-2": `In meiner Karriere habe ich mich nicht nur auf die technische Entwicklung konzentriert, sondern auch
                  eng mit funktionsübergreifenden Teams zusammengearbeitet - mit UX-, Backend- und Produktteams, um User
                  Stories zu erstellen, Stand-up-Meetings zu leiten und Kollegen zu beraten. Ich fühle mich in
                  dynamischen, schnelllebigen Umgebungen wohl, in denen ich die Verantwortung für Aufgaben übernehmen
                  und zu den übergeordneten Zielen des Unternehmens beitragen kann, um sicherzustellen, dass wir den
                  Kunden einen sinnvollen Mehrwert bieten. `,
        "sentance-3": `Mein Ansatz ist geprägt von der Leidenschaft für kontinuierliches Lernen und dem Wunsch, meine Fähigkeiten zur Lösung komplexer Probleme einzusetzen. Dieses Portfolio spiegelt sowohl meine Arbeit als auch meine Herangehensweise an jedes Projekt wider: lernen, anpassen und effektiv beitragen.`,
      },
    },
    en: {
      translation: {
        download_cv: "View CV",
        download_cl: "View cover letter",
        download_cc: "View certificates",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        otw: "Open to Work",
        "job-title": "Web/Mobile(Android/IOS) Developer",
        "sentance-1": `
          Hi, 👋
          with 12 years of experience in web, mobile development (iOS/Android) and backend, I've had the opportunity to work in various stages of the Software Development Life Cycle (SDLC). From greenfield projects to product development and refactoring legacy systems, I have honed my skills in a wide range of technologies, always striving to stay ahead of the curve.`,
        "sentance-2": `In my career, I have not only focused on technical development, but also worked closely with cross-functional teams - with UX, backend and product teams to create user stories, lead stand-up meetings and mentor colleagues. I thrive in a dynamic, fast-paced environments where I can take ownership of tasks and contribute to the overall goals of the business to ensure we deliver meaningful value to customers.`,
        "sentance-3": `My approach is driven by a passion for continuous learning and a desire to apply my skills to solve complex problems. This portfolio reflects both the work I’ve done and the approach I take to every project: to learn, adapt, and contribute effectively.`,
      },
    },
  };

  // Initialize i18next with German as default
  i18next.init(
    {
      lng: "de",
      resources: resources,
    },
    function (err, t) {
      updateContent();
    }
  );

  // Add data-i18n attributes to elements
  const aboutElement = document.querySelectorAll(".about");
  const projectsElement = document.querySelectorAll(".projects");
  const skillsElement = document.querySelectorAll(".skills");
  const contactElement = document.querySelectorAll(".contact");
  const jobTitleElement = document.querySelector(".job-title");
  const otw = document.querySelector(".otw");
  const downloadElement = document.querySelector("span[download_cv]");
  const downloadCLElement = document.querySelector("span[download_cl]");
  const downloadCCElement = document.querySelector("span[download_cc]");
  const downloadSentance1Element = document.querySelector(".sentance-1");
  const downloadSentance2Element = document.querySelector(".sentance-2");
  const downloadSentance3Element = document.querySelector(".sentance-3");

  aboutElement.forEach((el) => el.setAttribute("data-i18n", "about"));
  projectsElement.forEach((el) => el.setAttribute("data-i18n", "projects"));
  skillsElement.forEach((el) => el.setAttribute("data-i18n", "skills"));
  contactElement.forEach((el) => el.setAttribute("data-i18n", "contact"));

  if (jobTitleElement) jobTitleElement.setAttribute("data-i18n", "job-title");
  if (otw) otw.setAttribute("data-i18n", "otw");
  if (downloadElement) downloadElement.setAttribute("data-i18n", "download_cv");
  if (downloadCLElement)
    downloadCLElement.setAttribute("data-i18n", "download_cl");
  if (downloadCCElement)
    downloadCCElement.setAttribute("data-i18n", "download_cc");
  if (downloadSentance1Element)
    downloadSentance1Element.setAttribute("data-i18n", "sentance-1");
  if (downloadSentance2Element)
    downloadSentance2Element.setAttribute("data-i18n", "sentance-2");
  if (downloadSentance3Element)
    downloadSentance3Element.setAttribute("data-i18n", "sentance-3");

  // Update content with translations
  function updateContent() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key) {
        element.textContent = i18next.t(key);
      }
    });

    // Set html lang attribute
    document.documentElement.lang = i18next.language;
  }
});

window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  const scrollProgressElement = document.getElementById("scroll-progress");
  if (scrollProgressElement) {
    scrollProgressElement.style.width = scrollPercentage + "%";
  }
});
