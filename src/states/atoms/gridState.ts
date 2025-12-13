import type { GridState } from "@/types/grid.types";
import { atomFamily } from "recoil";

export const gridState = atomFamily<GridState, string>({
    key: "gridState",
    default: { page: 1, pageSize: 30, sortModel: [], searchParams: {} },
});