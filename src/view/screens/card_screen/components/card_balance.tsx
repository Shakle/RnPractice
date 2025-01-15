import React from 'react';
import {Text, View} from 'react-native';
import {VerticalSpacer} from "../../../components/spacers.tsx";

type BalanceProps = {
    amount: number; // Balance amount in USD
    fontSize?: number;
};

const CardBalance: React.FC<BalanceProps> = ({amount, fontSize = 25}) => {
    return (
        <View style={{alignItems: "center"}}>
            <Text>Balance</Text>
            <VerticalSpacer height={5} />
            <Text style={{fontWeight: 'bold', fontSize: fontSize}}>${amount.toFixed(2)}</Text>
        </View>
    );
};

export default CardBalance;