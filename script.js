const recipes = {
    bananabread: {
        title: 'Banana Bread',
        content: 'Ingredients: Bananas, Yogurt, Milk, Baking Soda, Baking Powder, Flour, Brown Sugar, Vanilla extract, Butter.',
        temp: 'Bake at 180°C for 1 hour'
    },
    choux: {
        title: 'Choux au Craquelin',
        content: 'Ingredients: Flour, Butter, Water, Sugar, Eggs, Vanilla Extract.',
        temp: 'Bake at 200°C for 30 minutes'
    },
    doublechoccookies: {
        title: 'Double Chocolate Chip Cookies',
        content: 'Ingredients: Flour, Sugar, Brown Sugar, Chocolate chips, Butter, Eggs, Baking soda.',
        temp: 'Bake at 180°C for 20 minutes'
    }
};

function showRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    document.getElementById('recipeTitle').textContent = recipe.title;
    document.getElementById('recipeContent').textContent = recipe.content;
    document.getElementById('bakeatTemp').textContent = recipe.temp;
    document.getElementById('recipeModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}
