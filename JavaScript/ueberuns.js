'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const placeId = "ChIJ7eGAkZsfuEcRUgSu8TvAynQ"; // Ersetze mit deinem Place ID
    const apiKey = "AIzaSyAAxHcFc516d32Uma7lS0XYruobAwi5htg"; // Ersetze mit deinem API Key
    const reviewsContainer = document.getElementById("reviews-container");

    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.result && data.result.reviews) {
                const reviews = data.result.reviews.map(review => `
                    <div class="review">
                        <h5>${review.author_name}</h5>
                        <p>${review.text}</p>
                        <span>Bewertung: ${review.rating}/5</span>
                    </div>
                    <hr>
                `).join('');
                reviewsContainer.innerHTML = reviews;
            } else {
                reviewsContainer.innerHTML = '<p>Keine Rezensionen gefunden.</p>';
            }
        })
        .catch(error => {
            reviewsContainer.innerHTML = '<p>Fehler beim Laden der Rezensionen.</p>';
            console.error("Google Reviews API Fehler:", error);
        });
});
