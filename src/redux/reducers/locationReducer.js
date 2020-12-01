const thaiFood1 = require('../../assets/images/thai-food-padped.jpg');
const thaiFood2 = require('../../assets/images/imagesy.png');
const thaiFood3 = require('../../assets/images/images.png');
const thaiFood4 = require('../../assets/images/imageshg.png');
const thaiFood5 = require('../../assets/images/imageshgjjb.png');
const thaiFood6 = require('../../assets/images/imagesdad.png');
const PrfileImage = require('../../assets/images/profile.jpg');
const Prfile2 = require('../../assets/images/profile2.jpg');
const Prfile3 = require('../../assets/images/profile3.jpg');
const Prfile4 = require('../../assets/images/profile4.jpg');
const iState = {
  cardArr: [
    {
      id: 1,
      source: thaiFood1,
      quantity: 23,
      brand: 'Food',
      location: '122 Queen Street',
      foodType: 'Thai Style',
    },
    {
      id: 2,
      source: thaiFood2,
      brand: 'Specials',
      quantity: 53,
      location: '122 Greek Street',
      foodType: 'Yammy',
    },
    {
      id: 3,
      source: thaiFood3,
      brand: 'Menu',
      location: '122 House',
      quantity: 3,
      foodType: 'Spaicy',
    },
    {
      id: 4,
      source: thaiFood4,
      brand: 'All',
      location: '1A3 GuburgIII',
      foodType: 'Normal',
      quantity: 13,
    },
    {
      id: 5,
      source: thaiFood5,
      brand: 'Food',
      location: 'unknown Location',
      foodType: 'Burgers',
      quantity: 17,
    },
    {
      id: 6,
      source: thaiFood6,
      brand: 'Food',
      location: '122 Queen Street',
      foodType: 'vegetables and legumes',
      quantity: 20,
    },
  ],
  profileArr: [
    {
      id: 1,
      name: 'Kelly West',
      source: PrfileImage,
    },
    {
      id: 2,
      name: 'Olivia',
      source: Prfile2,
    },
    {
      id: 3,
      name: 'Sophia',
      source: Prfile3,
    },
    {
      id: 4,
      name: 'Amelia',
      source: Prfile4,
    },
  ],
};
const LocationReducer = (state = iState, action) => {
  return state;
};

export default LocationReducer;
