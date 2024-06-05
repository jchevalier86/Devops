# TP2 : Formulaire de contact

Créer un formulaire de contact en utilisant JavaScript natif avec l'API emailjs est un excellent moyen d'ajouter une fonctionnalité de contact à votre site Web. 

- Création de la structure HTML (formulaire avec nom, email, message).


- Configuration de l'API emailjs :
  Pour utiliser l'API emailjs, vous devez obtenir un USER_ID, un SERVICE_ID et un TEMPLATE_ID. Vous pouvez les obtenir en créant un compte sur le site d'emailjs et en configurant votre service de messagerie.
  https://www.emailjs.com/


- Ajout d'un fichier `emailjs.js` permettant d'envoyer le mail à la soumission du formulaire.
  Aidez vous de https://www.emailjs.com/docs/.
  ```js
  // Initialisation de l'API emailjs
  emailjs.init("YOUR_USER_ID");

  // Récupération du formulaire
  const contactForm = document.getElementById('contact-form');

  // Écouteur d'événement pour le soumission du formulaire
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche l'envoi par défaut du formulaire

      // Récupération des valeurs du formulaire
      const formData = new FormData(contactForm);

      // Envoi du formulaire via emailjs
      emailjs.sendForm(
        // TODO
      );
  });
  ```