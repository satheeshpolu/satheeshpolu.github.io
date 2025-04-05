// // Import i18next types
// import i18next from 'i18next';

// // Define translation resource types
// interface TranslationResource {
//  download: string;
//  about: string;
//  projects: string;
//  skills: string;
//  contact: string;
//  "job-title": string;
// }

// interface Resources {
//  [language: string]: {
//    translation: TranslationResource;
//  };
// }

// // Initialize language switcher
// document.addEventListener("DOMContentLoaded", function () {
//  // Show loading
//  setTimeout(() => {
//    const contentElement = document.getElementById("content");
//    if (contentElement) {
//      contentElement.classList.remove("invisible");
//    }
//  }, 3000);

//  // Toggle switch
//  const langToggle = document.getElementById("langToggle") as HTMLButtonElement;
//  const langSlider = document.getElementById("langSlider") as HTMLSpanElement;
//  const enLabel = document.getElementById("en-label") as HTMLSpanElement;
//  const deLabel = document.getElementById("de-label") as HTMLSpanElement;
//  let currentLang: string = "de"; // Set default to German

//  if (langToggle && langSlider && enLabel && deLabel) {
//    // Initial styling for default German state
//    langToggle.classList.add("bg-indigo-100");
//    langSlider.classList.add("bg-indigo-600");
//    enLabel.classList.add("text-gray-400");
//    deLabel.classList.add("text-indigo-600");

//    langToggle.addEventListener("click", function () {
//      if (currentLang === "en") {
//        // Switch to German
//        currentLang = "de";
//        if (langSlider.style) {
//          langSlider.style.left = "auto";
//          langSlider.style.right = "4px";
//        }
//        langToggle.classList.add("bg-indigo-100");
//        enLabel.classList.remove("text-indigo-600");
//        enLabel.classList.add("text-gray-400");
//        deLabel.classList.remove("text-gray-400");
//        deLabel.classList.add("text-indigo-600");
//      } else {
//        // Switch to English
//        currentLang = "en";
//        if (langSlider.style) {
//          langSlider.style.right = "auto";
//          langSlider.style.left = "4px";
//        }
//        langToggle.classList.remove("bg-indigo-100");
//        langToggle.classList.add("bg-gray-200");
//        enLabel.classList.remove("text-gray-400");
//        enLabel.classList.add("text-indigo-600");
//        deLabel.classList.remove("text-indigo-600");
//        deLabel.classList.add("text-gray-400");
//      }
//      i18next.changeLanguage(currentLang, updateContent);
//    });
//  }

//  // Set up translations
//  const resources: Resources = {
//    de: {
//      translation: {
//        download: "Lebenslauf herunterladen",
//        about: "Über mich",
//        projects: "Projekte",
//        skills: "Fähigkeiten",
//        contact: "Kontakt",
//        "job-title": "Web/Mobile(Android/IOS) Entwickler",
//      },
//    },
//    en: {
//      translation: {
//        download: "Download CV",
//        about: "About",
//        projects: "Projects",
//        skills: "Skills",
//        contact: "Contact",
//        "job-title": "Web/Mobile(Android/IOS) Developer",
//      },
//    },
//  };

//  // Initialize i18next with German as default
//  i18next.init(
//    {
//      lng: "de",
//      resources: resources,
//    },
//    function (err: any, t: i18next.TFunction) {
//      updateContent();
//    }
//  );

//  // Add data-i18n attributes to elements
//  const aboutElement = document.querySelector('a[href="#about"]');
//  const projectsElement = document.querySelector('a[href="#projects"]');
//  const skillsElement = document.querySelector('a[href="#skills"]');
//  const contactElement = document.querySelector('a[href="#contact"]');
//  const jobTitleElement = document.querySelector('.text-gray-600');
//  const downloadElement = document.querySelector('a[download]');

//  if (aboutElement) aboutElement.setAttribute("data-i18n", "about");
//  if (projectsElement) projectsElement.setAttribute("data-i18n", "projects");
//  if (skillsElement) skillsElement.setAttribute("data-i18n", "skills");
//  if (contactElement) contactElement.setAttribute("data-i18n", "contact");
//  if (jobTitleElement) jobTitleElement.setAttribute("data-i18n", "job-title");
//  if (downloadElement) downloadElement.setAttribute("data-i18n", "download");

//  // Update content with translations
//  function updateContent(): void {
//    const elements = document.querySelectorAll("[data-i18n]");
//    elements.forEach((element) => {
//      const key = element.getAttribute("data-i18n");
//      if (key) {
//        element.textContent = i18next.t(key);
//      }
//    });
   
//    // Set html lang attribute
//    document.documentElement.lang = i18next.language;
//  }
// });

// window.addEventListener("scroll", () => {
//  const scrollTop =
//    document.documentElement.scrollTop || document.body.scrollTop;
//  const scrollHeight =
//    document.documentElement.scrollHeight -
//    document.documentElement.clientHeight;
//  const scrollPercentage = (scrollTop / scrollHeight) * 100;
 
//  const scrollProgressElement = document.getElementById("scroll-progress");
//  if (scrollProgressElement) {
//    scrollProgressElement.style.width = scrollPercentage + "%";
//  }
// });

// Initialize language switcher

document.addEventListener("DOMContentLoaded", function () {
  // Show loading
  setTimeout(() => {
    document.getElementById("content").classList.remove("invisible");
  }, 3000);

  // Toggle switch
  const langToggle = document.getElementById("langToggle");
  const langSlider = document.getElementById("langSlider");
  const enLabel = document.getElementById("en-label");
  const deLabel = document.getElementById("de-label");
  let currentLang = "de"; // Set default to German

  // Initial styling for default German state
  langToggle.classList.add("bg-indigo-100");
  langSlider.classList.add("bg-indigo-600");
  enLabel.classList.add("text-gray-400");
  deLabel.classList.add("text-indigo-600");

  langToggle.addEventListener("click", function () {
    if (currentLang === "en") {
      // Switch to German
      currentLang = "de";
      langSlider.style.left = "auto";
      langSlider.style.right = "4px";
      langToggle.classList.add("bg-indigo-100");
      enLabel.classList.remove("text-indigo-600");
      enLabel.classList.add("text-gray-400");
      deLabel.classList.remove("text-gray-400");
      deLabel.classList.add("text-indigo-600");
    } else {
      // Switch to English
      currentLang = "en";
      langSlider.style.right = "auto";
      langSlider.style.left = "4px";
      langToggle.classList.remove("bg-indigo-100");
      langToggle.classList.add("bg-gray-200");
      enLabel.classList.remove("text-gray-400");
      enLabel.classList.add("text-indigo-600");
      deLabel.classList.remove("text-indigo-600");
      deLabel.classList.add("text-gray-400");
    }
    i18next.changeLanguage(currentLang, updateContent);
  });

  // Set up translations
  const resources = {
    de: {
      translation: {
        download: "Lebenslauf herunterladen",
        about: "Über mich",
        projects: "Projekte",
        skills: "Fähigkeiten",
        contact: "Kontakt",
        "job-title": "Web/Mobile(Android/IOS) Entwickler",
      },
    },
    en: {
      translation: {
        download: "Download CV",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        "job-title": "Web/Mobile(Android/IOS) Developer",
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
  document.querySelector('a[href="#about"]').setAttribute("data-i18n", "about");
  document
    .querySelector('a[href="#projects"]')
    .setAttribute("data-i18n", "projects");
  document
    .querySelector('a[href="#skills"]')
    .setAttribute("data-i18n", "skills");
  document
    .querySelector('a[href="#contact"]')
    .setAttribute("data-i18n", "contact");
  document
    .querySelector(".text-gray-600")
    .setAttribute("data-i18n", "job-title");
  document.querySelector("a[download]").setAttribute("data-i18n", "download");

  // Update content with translations
  function updateContent() {
    debugger
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = i18next.t(key);
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

  document.getElementById("scroll-progress").style.width =
    scrollPercentage + "%";
});
