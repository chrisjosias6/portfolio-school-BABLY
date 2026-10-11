// Vérifier les champs du formulaire sans recharger la page.
const formulaire = document.querySelector("#form-contact");
const confirmation = document.querySelector("#form-message");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  // Retirer les espaces : un champ rempli d'espaces ne doit pas être accepté.
  formulaire.querySelectorAll("input, textarea").forEach(function (champ) {
    champ.value = champ.value.trim();
  });

  if (!formulaire.reportValidity()) {
    confirmation.textContent = "Veuillez remplir correctement tous les champs.";
    return;
  }

  confirmation.className = "alert alert-success mt-3";
  confirmation.textContent = "Tous les champs sont valides. Aucun message n'a été envoyé.";
  formulaire.reset();
});

// Changer le thème et mémoriser le choix.
const boutonTheme = document.querySelector("#btn-theme");

function appliquerTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  boutonTheme.textContent = theme === "dark" ? "Mode clair" : "Mode sombre";
  boutonTheme.setAttribute("aria-pressed", String(theme === "dark"));
  try { localStorage.setItem("theme", theme); } catch { /* Stockage facultatif. */ }
}

let theme = "light";
try { if (localStorage.getItem("theme") === "dark") theme = "dark"; } catch {}
appliquerTheme(theme);

boutonTheme.addEventListener("click", function () {
  theme = theme === "light" ? "dark" : "light";
  appliquerTheme(theme);
});
