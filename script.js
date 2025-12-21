<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  // حماية في حال لم يوجد النموذج
  if (!form || !statusEl) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "⏳ Envoi en cours...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        statusEl.textContent = "✅ Message envoyé avec succès.";
        form.reset();

        // 🎯 GA4 Conversion
        if (typeof gtag === "function") {
          gtag("event", "submit_contact_form", {
            event_category: "conversion",
            event_label: "Contact Form"
          });
        }

      } else {
        statusEl.textContent = "❌ Erreur lors de l’envoi. Réessayez.";
      }

    } catch (error) {
      statusEl.textContent = "❌ Problème de connexion.";
    }
  });
});
</script>
