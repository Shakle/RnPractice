import React from "react";
import {Text, View, FlatList} from "react-native";
import { IconButton } from "react-native-paper";
import AppColors from "../../../app/theme/colors.ts";
import TransactionTile from "./transaction_tile.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import DashAnimated from "../animations/dash_animated.tsx";

interface TransactionsHistoryProps {
    title: string;
    isCardHistory: boolean;
    onPress: () => void;
}

const TransactionsHistory = ({title, isCardHistory,  onPress} : TransactionsHistoryProps) => {
    const transactionHistory = useSelector(
        (state: RootState) => isCardHistory
            ? state.card_transaction.transactions
            : state.crypto_transaction.transactions);

    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 6 }}>{title}</Text>
                <ViewAllButton onPress={onPress}/>
            </View>
            <FlatList
                data={transactionHistory}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TransactionTile
                        name={'USDT'}
                        icon={"https://assets.coingecko.com/coins/images/325/large/Tether.png"}
                        price={item.toString()} />
                )}
                ListEmptyComponent={
                <View style={{alignItems: "center", paddingTop: 20}}>
                    <DashAnimated/>
                    <Text style={{ textAlign: 'center', marginTop: 20, color: '#888' }}>
                        No history yet
                    </Text>
                </View>
                }
            />

        </View>
    );
};

const ViewAllButton = ({ onPress }: Pick<TransactionsHistoryProps, 'onPress'>) => {
    return (
        <IconButton
            icon="menu"
            iconColor={AppColors.orange}
            onPress={onPress}
        />
    );
};


export default TransactionsHistory;