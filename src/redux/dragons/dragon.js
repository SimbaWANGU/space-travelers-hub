const GET_DRAGONS = 'space-traveler-hub/redux/dragon/GET_DRAGONS';

const RESERVE_DRAGON = 'space-traveler-hub/redux/dragon/RESERVE_DRAGON';

export const dragonAction = (dragons) => ({
  type: GET_DRAGONS,
  dragons,
});

export const reverseDragonAction = (id) => ({
  type: RESERVE_DRAGON,
  id,
});

const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.dragons;
    case RESERVE_DRAGON:
      return [...state].map((dragon) => {
        if (dragon.id !== action.id) { return dragon; }
        return { ...dragon, reserved: true };
      });
    default:
      return state;
  }
};

export default dragonsReducer;
