<script>
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

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
      } else {
        statusEl.textContent = "❌ Erreur lors de l’envoi. Réessayez.";
      }
    } catch (error) {
      statusEl.textContent = "❌ Problème de connexion.";
    }
  });
</script>
