// Fonction pour récupérer les livres récents de l'API Google Books
        function fetchRecentBooks() {
            // Faire une requête GET à l'API Google Books pour récupérer des livres de fiction récents
            fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=10')
                .then(response => {
                    // Vérifier si la réponse est correcte (code de statut 200-299)
                    if (!response.ok) {
                        // Lancer une erreur si la réponse n'est pas correcte
                        throw new Error('La réponse du réseau n\'était pas correcte ' + response.statusText);
                    }
                    // Analyser la réponse comme JSON
                    return response.json();
                })
                .then(data => {
                    // Appeler la fonction pour afficher les livres avec les données reçues
                    displayBooks(data.items);
                })
                .catch(error => {
                    // Afficher toute erreur qui survient lors de la requête ou de l'analyse
                    console.error('Erreur lors de la récupération des livres:', error);
                });
        }

        // Fonction pour afficher les livres sur la page
        function displayBooks(books) {
            // Obtenir l'élément conteneur où les livres seront affichés
            const booksContainer = document.getElementById('books');
            // Vider tout contenu existant dans le conteneur
            booksContainer.innerHTML = '';
            // Itérer sur chaque livre dans le tableau des livres
            books.forEach(book => {
                // Créer un élément div pour chaque livre
                const bookElement = document.createElement('div');
                bookElement.className = 'book'; // Ajouter une classe pour les styles

                // Obtenir le titre du livre, les auteurs, la date de publication et la couverture, ou fournir des valeurs par défaut s'ils sont manquants
                const title = book.volumeInfo.title || 'Titre non disponible';
                const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Auteurs non disponibles';
                const publishedDate = book.volumeInfo.publishedDate || 'Date de publication non disponible';
                const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';

                // Définir le HTML interne de l'élément livre avec les détails du livre
                bookElement.innerHTML = `
                    <img src="${thumbnail}" alt="Couverture non disponible">
                    <div>
                        <h2>${title}</h2>
                        <p><strong>Auteurs :</strong> ${authors}</p>
                        <p><strong>Date de publication :</strong> ${publishedDate}</p>
                    </div>
                `;

                // Ajouter l'élément livre au conteneur des livres
                booksContainer.appendChild(bookElement);
            });
        }

        // Appeler la fonction fetchRecentBooks lorsque la page se charge
        window.onload = fetchRecentBooks;