// https://stackoverflow.com/questions/77400272/setting-up-redux-toolkit-with-next-js-14-0-1
"use client"
import { Provider } from "react-redux"
import { persistor, store } from "@/store/store"
import { PersistGate } from 'redux-persist/integration/react';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider >
    )
}

export default StoreProvider
