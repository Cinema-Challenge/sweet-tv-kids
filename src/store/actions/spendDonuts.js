import { SPEND_DONUTS } from "../constants/constants";

export function spendDonuts(donuts, feature) {
    return {
        type: SPEND_DONUTS,
        payload: { donuts, feature },
    };
}
