import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist({
    key: "loginCheck",
    storage: localStorage,
})

export const loginCheckState = atom<boolean>({
    key: "loginCheckState",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const logoutState = atom({
    key: "logoutState",
    default: false,
});