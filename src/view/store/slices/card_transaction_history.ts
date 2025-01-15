import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardTransactionState {
    transactions: number[];
}

const initialState: CardTransactionState = {
    transactions: [],
};

const cardTransactionSlice = createSlice({
    name: "card_transaction",
    initialState,
    reducers: {
        addCardTransactionRecord: (state, action: PayloadAction<number>) => {
            state.transactions.unshift(action.payload);
        },
    },
});

export const { addCardTransactionRecord } = cardTransactionSlice.actions;
export default cardTransactionSlice;
