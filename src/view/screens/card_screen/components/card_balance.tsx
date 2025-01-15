import React from 'react';
import {Text, View} from 'react-native';
import {VerticalSpacer} from "../../../components/spacers.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";

type BalanceProps = {
    fontSize?: number;
};

const CardBalance: React.FC<BalanceProps> = ({fontSize = 25}) => {
    const cardBalance = useSelector((state: RootState) => state.card_balance.value);

    return (
        <View style={{alignItems: "center"}}>
            <Text>Balance</Text>
            <VerticalSpacer height={5} />
            <Text style={{fontWeight: 'bold', fontSize: fontSize}}>${cardBalance.toFixed(2)}</Text>
        </View>
    );
};

export default CardBalance;