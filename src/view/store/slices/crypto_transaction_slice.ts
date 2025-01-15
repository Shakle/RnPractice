import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CryptoTransactionState {
    transactions: number[];
}

const initialState: CryptoTransactionState = {
    transactions: [],
};

const cryptoTransactionSlice = createSlice({
    name: "crypto_transaction",
    initialState,
    reducers: {
        addCryptoTransactionRecord: (state, action: PayloadAction<number>) => {
            state.transactions.unshift(action.payload);
        },
    },
});

export const { addCryptoTransactionRecord } = cryptoTransactionSlice.actions;
export default cryptoTransactionSlice;
