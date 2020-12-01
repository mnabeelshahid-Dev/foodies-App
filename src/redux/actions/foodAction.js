// export const createFood = () => {
//   return (dispatch, getState, {getFirebase, getFirestore}) => {
//     const firestore = getFirestore();
//     firestore
//       .collection('projects')
//       .add({
//         authorFirstName: 'saeed',
//         authorLastName: 'ahamad',
//         title: 'food search',
//         content:'yoo yoo',
//         authorId: 12345,
//         craetedAt: new Date(),
//       })
//       .then(() => {
//         dispatch({type: 'CREATE_FOOD', payload});
//       })
//       .catch((error) => {
//         dispatch({type: 'CREATE_FOOD_ERROR', error});
//       });
//   };
// };
