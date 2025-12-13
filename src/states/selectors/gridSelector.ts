import { selectorFamily } from "recoil";
import { gridState } from "../atoms/gridState";
import { fetchGridData } from "@/apis/service/grid.service.";

export const gridDataQuery = selectorFamily({
    key: 'gridDataQuery',
    get: (gridKey: string) => async ({ get }) => {
        const state = get(gridState(gridKey));
        const sortQuery = state.sortModel?.map(m => `${m.colId},${m.sort}`).join(';');
        return fetchGridData(gridKey, { ...state, sortQuery });
    },
});