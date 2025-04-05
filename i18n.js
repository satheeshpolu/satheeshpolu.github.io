// // i18n.js
// const resources = {
//     de: {
//       translation: {
//         download: "Lebenslauf herunterladen",
//         about: "Über mich",
//         projects: "Projekte",
//         skills: "Fähigkeiten",
//         contact: "Kontakt",
//         "job-title": "Web/Mobile(Android/IOS) Entwickler",
//       },
//     },
//     en: {
//       translation: {
//         download: "Download CV",
//         about: "About",
//         projects: "Projects",
//         skills: "Skills",
//         contact: "Contact",
//         "job-title": "Web/Mobile(Android/IOS) Developer",
//       },
//     },
//   };
  
//   // Initialize i18next
//   function initI18n(callback) {
//     debugger
//     i18next.init(
//       {
//         lng: "de", // Default language
//         resources: resources,
//       },
//       function(err, t) {
//         if (callback && typeof callback === 'function') {
//           callback();
//         }
//       }
//     );
//   }
  
//   // Update content with translations
//   function updateContent() {
//     const elements = document.querySelectorAll("[data-i18n]");
//     elements.forEach((element) => {
//       const key = element.getAttribute("data-i18n");
//       element.textContent = i18next.t(key);
//     });
    
//     // Set html lang attribute
//     document.documentElement.lang = i18next.language;
//   }
  
//   // Export the functions and resources
//   export { resources, initI18n, updateContent };