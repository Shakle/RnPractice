import {Alert, StyleSheet, Text, View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import React from "react";
import {VerticalSpacer} from "../../../../components/spacers.tsx";
import CreditCardAnimated from "../../../card_screen/components/credit_card_animated.tsx";
import CardBalance from "../../../card_screen/components/card_balance.tsx";

const CryptoBalanceTransactionsModalLayout = () => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.mainContainer}>
            <View style={{height: 150, marginBottom: 25}}>
                <CreditCardAnimated />
            </View>
            <CardBalance amount={10000} fontSize={15}/>
            <Text style={{marginVertical: 20, textAlign: 'center', fontWeight: '500'}}>
                Charge crypto account from credit card
            </Text>
            <TextInput
                mode="outlined"
                label="Amount"
                value={text}
                left={<TextInput.Affix text="$" />}
                keyboardType="numeric"
                onChangeText={(value) => {
                    if (/^\d*$/.test(value)) { // Only numbers
                        setText(value);
                    }
                }}
            />
            <VerticalSpacer height={20}/>
            <Button mode="contained" disabled={!text} onPress={() => {
                console.log(text);
            }}>
                <Text>Confirm</Text>
            </Button>
        </View>
    );
};

function confirmTransaction(amount: number, balance: number) {
    if (amount > 0 && amount <= balance) {
        //confirm
    } else {
        Alert.alert('Error', 'Invalid transaction amount');
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingBottom: 30
    },
});

export default CryptoBalanceTransactionsModalLayout;