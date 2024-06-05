// emailjs.js

// Initialiser EmailJS avec mon User ID
(function() {
    emailjs.init("qITuZotTeVcybSyu3");
})();

// Récupération du formulaire
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); //Empêche l'envoi par défaut du formulaire

    // Ces IDs proviennent du compte EmailJS
    const serviceID = 'service_fa8q8mw';
    const templateID = 'template_sv56zeg';

    // Envoi du formulaire via emailjs
    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Message envoyé avec succès !');
        }, function(error) {
            alert('Échec de l’envoi du message, veuillez réessayer.');
            console.error('Échec de l’envoi du message :', error);
        });
});