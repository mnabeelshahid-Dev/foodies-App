const thaiFood1 = require('../../assets/images/thai-food-padped.jpg');
const thaiFood2 = require('../../assets/images/imagesy.png');
const thaiFood3 = require('../../assets/images/images.png');
const thaiFood4 = require('../../assets/images/imageshg.png');
const thaiFood5 = require('../../assets/images/imageshgjjb.png');
const thaiFood6 = require('../../assets/images/imagesdad.png');

const initialState = {
  imageArr: [
    {
      id: 1,
      source: thaiFood1,
      quantity: '12 Places',
      foodType: 'Thai Style',
    },
    {
      id: 2,
      source: thaiFood2,
      quantity: '10 Places',
      foodType: 'Yammy',
    },
    {
      id: 3,
      source: thaiFood3,
      quantity: '9, Places',
      foodType: 'Spaicy',
    },
    {
      id: 4,
      source: thaiFood4,
      quantity: '14 Places',
      foodType: 'Normal',
    },
    {
      id: 5,
      source: thaiFood5,
      quantity: '19 Places',
      foodType: 'Others',
    },
    {
      id: 6,
      source: thaiFood6,
      quantity: '17 Places',
      foodType: 'vegetables and legumes',
    },
  ],

  cardArr: [
    {
      id: 1,
      source: thaiFood1,
      brand: 'KFC Broad Way',
      location: '122 Queen Street',
      foodType: 'Thai Style',
    },
    {
      id: 2,
      source: thaiFood2,
      brand: 'KFC Broad Way',
      location: '122 Greek Street',
      foodType: 'Yammy',
    },
    {
      id: 3,
      source: thaiFood3,
      brand: 'KFC Broad Way',
      location: '122 House',
      foodType: 'Spaicy',
    },
    {
      id: 4,
      source: thaiFood4,
      brand: 'KFC Broad Way',
      location: '1A3 GuburgIII',
      foodType: 'Normal',
    },
    {
      id: 5,
      source: thaiFood5,
      brand: 'KFC Broad Way',
      location: 'unknown Location',
      foodType: 'Burgers',
    },
    {
      id: 6,
      source: thaiFood6,
      brand: 'KFC Broad Way',
      location: '122 Queen Street',
      foodType: 'vegetables and legumes',
    },
  ],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_FOOD': {
      console.log('---> craeted food', action.payload);
      return {
        ...state,
      };
    }
    case 'CREATE_FOOD_ERROR': {
      console.log('---error received food', action.error);
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default HomeReducer;
