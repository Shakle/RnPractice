import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardBalanceState {
    value: number;
    error: string | null;
}

const initialState: CardBalanceState = {
    value: 1000,
    error: null,
};

const cardBalanceSlice = createSlice({
    name: "card_balance",
    initialState,
    reducers: {
        changeCardBalance: (state, action: PayloadAction<number>) => {
            if (state.value + action.payload < 0) {
                state.error = "Insufficient balance: Cannot go below 0"; // Set the error message
            } else {
                state.value += action.payload; // Update the balance
                state.error = null; // Clear any previous errors
            }
        },
    },
});

export const { changeCardBalance } = cardBalanceSlice.actions;
export default cardBalanceSlice;
