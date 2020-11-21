import { SPEND_DONUTS } from "../constants/constants";

export function spendDonuts(donuts, feature) {
    console.log('feature:  ', feature);
    return {
        type: SPEND_DONUTS,
        payload: { donuts, feature },
    };
}
