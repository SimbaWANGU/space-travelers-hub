const GET_DRAGONS = 'space-traveler-hub/redux/dragon/GET_DRAGONS';

export const dragonAction = (dragons) => ({
  type: GET_DRAGONS,
  dragons,
});

const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.dragons;
    default:
      return state;
  }
};

export default dragonsReducer;
