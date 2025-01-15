import {Alert, StyleSheet, Text, View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import React from "react";
import {VerticalSpacer} from "../../../../components/spacers.tsx";
import CreditCardAnimated from "../../../card_screen/components/credit_card_animated.tsx";
import CardBalance from "../../../card_screen/components/card_balance.tsx";
import {useDispatch, useSelector} from "react-redux";
import {changeCardBalance} from "../../../../store/slices/card_balance_slice.ts";
import {changeCryptoBalance} from "../../../../store/slices/crypto_balance_slice.ts";
import {RootState} from "../../../../store/store.ts";

const CryptoBalanceTransactionsModalLayout = () => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.mainContainer}>
            <View style={{height: 150, marginBottom: 25}}>
                <CreditCardAnimated />
            </View>
            <CardBalance fontSize={15}/>
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
            <ConfirmButton text={text}/>
        </View>
    );
};

interface ConfirmButtonProps {
    text: string;
}

const ConfirmButton = (props: ConfirmButtonProps) => {
    const cardBalance = useSelector((state: RootState) => state.card_balance.value);
    const dispatch = useDispatch();

    const confirmTransaction = (amount: string) => {
        const amountNumber = parseInt(amount);

        if (amountNumber > 0 && amountNumber <= cardBalance) {
            dispatch(changeCardBalance(-amountNumber));
            dispatch(changeCryptoBalance(amountNumber));
        } else {
            Alert.alert('Error', 'Invalid transaction amount');
        }
    };

    return (
        <Button mode="contained"
                disabled={!props.text}
                onPress={() => confirmTransaction(props.text)}
        ><Text>Confirm</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingBottom: 30
    },
});

export default CryptoBalanceTransactionsModalLayout;