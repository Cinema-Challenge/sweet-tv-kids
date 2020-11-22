import { SPEND_DONUTS, EARN_DONUTS } from "../constants/constants";

const initialState = {
    donuts: 1000,
    features: [],
    challenges: []
};

export const featuresHistory = (state = initialState, action) => {
    console.log('store .... ', state);
    switch (action.type) {
        case EARN_DONUTS:
            console.log('store .... ', state);
            return {
                ...state,
                donuts: (state.donuts + action.payload.donuts),
                challenges: [...state.challenges, action.payload.challenge]
            }
        case SPEND_DONUTS:
            if (state.donuts < action.payload.donuts) {
                return state;
            }
            return {
                ...state,
                donuts: (state.donuts - action.payload.donuts),
                features: [...state.features, action.payload.feature]
            }
        default:
            return state;
    }
};
