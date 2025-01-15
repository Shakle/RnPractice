import { configureStore } from "@reduxjs/toolkit";
import cryptoBalanceSlice from "./slices/crypto_balance_slice.ts";
import cardBalanceSlice from "./slices/card_balance_slice.ts";
import cryptoTransactionSlice from "./slices/crypto_transaction_slice.ts";
import cardTransactionSlice from "./slices/card_transaction_history.ts";

const store = configureStore({
    reducer: {
        crypto_balance: cryptoBalanceSlice.reducer,
        crypto_transaction: cryptoTransactionSlice.reducer,
        card_balance: cardBalanceSlice.reducer,
        card_transaction: cardTransactionSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
