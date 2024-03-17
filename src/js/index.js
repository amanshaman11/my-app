document.getElementById('search-btn').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value;
    searchRecipes(searchQuery).then(displayRecipes);
});

function searchRecipes(query) {
    // Mocking an API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: 'Recipe 1', description: 'You can find the recipe on the list' },
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

document.getElementById('search-btn').addEventListener('click', function() {
    searchRecipes();
});

document.getElementById('search-input').addEventListener('input', function() {
    searchRecipes();
});

function searchRecipes() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let resultsSection = document.getElementById('results-section');
    
    // Clear previous results
    resultsSection.innerHTML = '';

    // This is a placeholder for where you would actually fetch data
    let recipes = [
        { title: "Spaghetti Carbonara", description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper." },
        { title: "Chicken Curry", description: "A flavorful curry made with tender chicken in a spicy tomato and cream sauce." }
    ];

    // Filter recipes based on search input (case-insensitive)
    let filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput));

    // Display results
    filteredRecipes.forEach(recipe => {
        let div = document.createElement('div');
        div.classList.add('recipe');
        div.innerHTML = `<h2>${recipe.title}</h2><p>${recipe.description}</p>`;
        resultsSection.appendChild(div);
    });

    if (filteredRecipes.length === 0) {
        resultsSection.innerHTML = '<p>No results found. Try another search!</p>';
    }
}


document.getElementById('search-btn').addEventListener('click', function() {
    searchRecipes();
});

document.getElementById('search-input').addEventListener('input', function() {
    searchRecipes();
});

function searchRecipes() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let resultsSection = document.getElementById('results-section');
    
    // Clear previous results
    resultsSection.innerHTML = '';

    // This is a placeholder for where you would actually fetch data
    let recipes = [
        { title: "Spaghetti Carbonara", description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper." },
        { title: "Chicken Curry", description: "A flavorful curry made with tender chicken in a spicy tomato and cream sauce." },
        { title: "Burger", description: "A delicious sandwich consisting of a grilled beef patty, cheese, lettuce, tomato, and condiments, served in a bun." },
        { title: "Pizza", description: "An oven-baked flatbread typically topped with tomato sauce, cheese, and various toppings such as meats, vegetables, and herbs." }
    ];

    // Filter recipes based on search input (case-insensitive)
    let filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput));

    // Display results
    filteredRecipes.forEach(recipe => {
        let div = document.createElement('div');
        div.classList.add('recipe');
        div.innerHTML = `<h2>${recipe.title}</h2><p>${recipe.description}</p>`;
        resultsSection.appendChild(div);
    });

    if (filteredRecipes.length === 0) {
        resultsSection.innerHTML = '<p>No results found. Try another search!</p>';
    }
}
