// Script d'introduction pour Maroc en 360°
// Réglage du volume de l'audio et activation automatique

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('introAudio');
  if (audio) {
    audio.volume = 0.85;

    // Optionnel : Lecture automatique si permise
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Lecture audio bloquée par le navigateur :", error);
      });
    }
  }

  // Bonus : Animation de texte (si ajoutée dans le HTML)
  const title = document.querySelector('h1');
  if (title) {
    title.style.opacity = 0;
    setTimeout(() => {
      title.style.transition = 'opacity 2s ease-in-out';
      title.style.opacity = 1;
    }, 500);
  }
});
