import {SafeAreaView, View} from "react-native";
import TransactionsHistory from "../../components/transactions/transactions_history.tsx";
import CardBalance from "./components/card_balance.tsx";
import CreditCardAnimated from "./components/credit_card_animated.tsx";
import CreditCardButton from "./components/credit_card_button.tsx";

const CardScreen = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
          <CreditCardAnimated />
          <View style={{paddingHorizontal: 20, flex: 1}}>
              <View style={{alignItems:"center"}}>
                  <CardBalance/>
              </View>
              <ButtonRow />
              <TransactionsHistory title={"Transactions history"} isCardHistory={true} onPress={() => {}}/>
          </View>
      </SafeAreaView>
    );
};

const ButtonRow = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 20,
            marginVertical: 20
        }}>
            <CreditCardButton name={'Top up'} icon={'plus'} onPress={() => {
                console.log('Top up button pressed');
            }}/>
            <CreditCardButton name={'Withdraw'} icon={'minus'} onPress={() => {
                console.log('Top up button pressed');
            }}/>
        </View>
    );
}

export default CardScreen;