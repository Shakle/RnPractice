import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CryptoBalanceState {
    value: number;
    error: string | null;
}

const initialState: CryptoBalanceState = {
    value: 0,
    error: null,
};

const cryptoBalanceSlice = createSlice({
    name: "crypto_balance",
    initialState,
    reducers: {
        changeBalance: (state, action: PayloadAction<number>) => {
            if (state.value + action.payload < 0) {
                state.error = "Insufficient balance: Cannot go below 0"; // Set the error message
            } else {
                state.value += action.payload; // Update the balance
                state.error = null; // Clear any previous errors
            }
        },
    },
});

export const { changeBalance } = cryptoBalanceSlice.actions;
export default cryptoBalanceSlice;
