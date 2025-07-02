import { createSlice } from "@reduxjs/toolkit";

interface IPermissionState {
    permissions: {
        id: string;
        name: string;
        module: string;
        route: string;
        method: string;
    }[];
    isLoading: boolean;
    error: string;
}

const initialState: IPermissionState = {
    permissions: [],
    isLoading: false,
    error: '',
}

export const permissionSlice = createSlice({
    name: 'permissions',
    initialState,
    reducers: {
        setPermissionAction: (state, action) => {
            if (action.payload) {
                state.permissions = action.payload?.permissions ?? [];
                state.isLoading = action.payload?.isLoading ?? false;
                state.error = action.payload?.error ?? '';
            }
        },
    },
});

export const { setPermissionAction } = permissionSlice.actions;

export default permissionSlice.reducer;