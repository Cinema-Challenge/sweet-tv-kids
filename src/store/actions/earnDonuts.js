import { EARN_DONUTS } from "../constants/constants";

export function earnDonuts(donuts, challenge) {
    return {
        type: EARN_DONUTS,
        payload: { donuts, challenge },
    };
}
