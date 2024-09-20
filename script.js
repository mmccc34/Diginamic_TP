// Code JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Afficher une alerte automatiquement
    alert("Bienvenue dans l'univers du TP !");
    
    // Changer le texte d'un élément existant
    const messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = "Merci de visiter notre site sur le Blues !";
    }
});