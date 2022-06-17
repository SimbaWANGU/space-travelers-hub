const GET_DRAGONS = 'space-traveler-hub/redux/dragon/GET_DRAGONS';

const RESERVE_DRAGON = 'space-traveler-hub/redux/dragon/RESERVE_DRAGON';

const CANCEL_RESERVATION = 'space-traveler-hub/redux/dragon/CANCEL_RESERVATION';

export const dragonAction = (dragons) => ({
  type: GET_DRAGONS,
  dragons,
});

export const reverseDragonAction = (id) => ({
  type: RESERVE_DRAGON,
  id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.dragons;
    case RESERVE_DRAGON: {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.id) { return dragon; }
        return { ...dragon, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default dragonsReducer;
