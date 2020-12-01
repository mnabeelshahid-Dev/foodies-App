const thaiFood1 = require('../../assets/images/thai-food-padped.jpg');
const thaiFood2 = require('../../assets/images/imagesy.png');
const thaiFood3 = require('../../assets/images/images.png');
const thaiFood4 = require('../../assets/images/imageshg.png');
const thaiFood5 = require('../../assets/images/imageshgjjb.png');
const thaiFood6 = require('../../assets/images/imagesdad.png');
const iState = {
  cardArr: [
    {
      id: 1,
      source: thaiFood1,
      time: '1130PM to 11PM',
      brand: 'Good Thai',
      location: '122 Queen Street',
      foodType: 'Thai Style',
      icon:'smileo'
    },
    {
      id: 2,
      source: thaiFood2,
      brand: 'Sushi Car',
      time: '1130PM to 11PM',
      location: '122 Greek Street',
      foodType: 'Yammy',
      icon:'frowno'
    },
    {
      id: 3,
      source: thaiFood3,
      brand: 'BlackSmith Cafe',
      location: '122 House',
      time: '1130PM to 11PM',
      foodType: 'Spaicy',
      icon:'hearto',
    },
    {
      id: 4,
      source: thaiFood4,
      brand: 'Pizza Box',
      location: '1A3 GuburgIII',
      foodType: 'Normal',
      time: '1130PM to 11PM',
      icon:'gitlab'
    },
    {
      id: 5,
      source: thaiFood5,
      brand: 'Good Thai ',
      location: 'unknown Location',
      foodType: 'Burgers',
      time: '1130PM to 11PM',
      icon:'smileo'
    },
    {
      id: 6,
      source: thaiFood6,
      brand: 'Food',
      location: '122 Queen Street',
      foodType: 'vegetables and legumes',
      time: '1130PM to 11PM',
      icon:'hearto',
    },
  ],
};
const RateReducer = (state = iState, action) => {
  return state;
};

export default RateReducer;