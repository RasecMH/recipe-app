const drinks = require('./drinks');
const oneDrink = require('./oneDrink');
const ginDrinks = require('./ginDrinks');
const ordinaryDrinks = require('./ordinaryDrinks');
const cocktailDrinks = require('./cocktailDrinks');
const milkDrinks = require('./milkDrinks');
const otherDrinks = require('./otherDrinks');
const cocoaDrinks = require('./cocoaDrinks');
const emptyDrinks = require('./emptyDrinks');
const drinkCategories = require('./drinkCategories');
const drinkIngredients = require('./drinkIngredients');
const drinksByIngredient = require('./drinksByIngredient');
const oneDrinkId15997 = require('./oneDrinkId15997');

const fetchDrinks = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list') { return Promise.resolve(drinkCategories); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list') { return Promise.resolve(drinkIngredients); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Light rum') { return Promise.resolve(drinksByIngredient); }

    if (
      url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Aquamarine'
      || url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319'
    ) { return Promise.resolve(oneDrink); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997') { return Promise.resolve(oneDrinkId15997); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin') { return Promise.resolve(ginDrinks); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink') { return Promise.resolve(ordinaryDrinks); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail') { return Promise.resolve(cocktailDrinks); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake') { return Promise.resolve(milkDrinks); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown') { return Promise.resolve(otherDrinks); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa') { return Promise.resolve(cocoaDrinks); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=xablau') { return Promise.resolve(emptyDrinks); }

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') { return Promise.resolve(drinks); }

    return Promise.reject(new Error('Invalid url'));
  },
});

export default fetchDrinks;
