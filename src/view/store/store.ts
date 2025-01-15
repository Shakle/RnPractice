import { configureStore } from "@reduxjs/toolkit";
import cryptoBalanceSlice from "./slices/crypto_balance_slice.ts";

const store = configureStore({
    reducer: {
        crypto_balance: cryptoBalanceSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
