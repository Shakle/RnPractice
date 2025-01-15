import React from "react";
import {Text, View, ScrollView} from "react-native";
import { IconButton } from "react-native-paper";
import AppColors from "../../../app/theme/colors.ts";
import TransactionTile from "./transaction_tile.tsx";

interface TransactionsHistoryProps {
    title: string;
    onPress: () => void;
}

const TransactionsHistory = ({title, onPress} : TransactionsHistoryProps) => {
    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 6 }}>{title}</Text>
                <ViewAllButton onPress={onPress}/>
            </View>
            <ScrollView style={{ flexDirection: 'column', flex: 1 }} 
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}>
                <TransactionTile name="Bitcoin" icon="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" price='50000' />
                <TransactionTile name="ETH" icon="https://assets.coingecko.com/coins/images/279/large/ethereum.png" price='3000' />
            </ScrollView>
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