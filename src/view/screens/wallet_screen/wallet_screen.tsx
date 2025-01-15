import {SafeAreaView, View} from 'react-native';
import HomeAppBar from './components/home_app_bar';
import BalanceTile from './components/balance_tile.tsx';
import { VerticalSpacer } from '../../components/spacers';
import CryptoSelector from './components/crypto/crypto_selector';
import TransactionsHistory from '../../components/transactions/transactions_history.tsx';
import React from "react";


const WalletScreen = () => {
    return (
        <SafeAreaView style={{flexDirection: 'column', flex: 1}}>
            <TopArea/>
            <VerticalSpacer height={5} />
            <CryptoSelector/>
            <VerticalSpacer height={5} />
            <View style={{paddingHorizontal: 20, flex: 1}}>
                <TransactionsHistory title={"Order history"} onPress={() => {}}/>
            </View>
        </SafeAreaView>
    );
};

const TopArea = () => {
    return (
        <View style={{ flexDirection: 'column', padding: 20 }}>
            <HomeAppBar />
            <VerticalSpacer height={30} />
            <BalanceTile />
        </View>
    );
};

export default WalletScreen;