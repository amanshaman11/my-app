document.getElementById('search-btn').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value;
    searchRecipes(searchQuery).then(displayRecipes);
});

function searchRecipes(query) {
    // Mocking an API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: 'Recipe 1', description: 'This is a sample description for Recipe 1.' },
                { name: 'Recipe 2', description: 'This is a sample description for Recipe 2.' }
                // Add more mock recipes or replace with actual API call
            ]);
        }, 1000);
    });
}

function displayRecipes(recipes) {
    const resultsSection = document.getElementById('results-section');
    resultsSection.innerHTML = ''; // Clear previous results
    recipes.forEach((recipe) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.description}</p>`;
        resultsSection.appendChild(div);
    });
}
