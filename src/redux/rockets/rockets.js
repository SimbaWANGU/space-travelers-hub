// Actions
const GET_ROCKETS = 'spacehub/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'spacehub/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'spacehub/rockets/CANCEL_RESERVATION';

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

export function cancelReservation(id) {
  return {
    type: CANCEL_RESERVATION,
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
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default: {
      return state;
    }
  }
}
