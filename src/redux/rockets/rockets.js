// Actions
const GET_ROCKETS = 'spacehub/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'spacehub/rockets/RESERVE_ROCKET';

// Action Creator
export function getRockets(rockets) {
  return {
    type: GET_ROCKETS,
    payload: rockets,
  };
}

export function reserveRocket(id) {
  return {
    type: RESERVE_ROCKET,
    payload: id,
  };
}

// Reducer
export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case GET_ROCKETS: {
      return action.payload;
    }
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    default: {
      return state;
    }
  }
}
