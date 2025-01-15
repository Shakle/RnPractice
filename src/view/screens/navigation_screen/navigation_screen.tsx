import React from "react";
import { BottomNavigation, TouchableRipple } from "react-native-paper";
import WalletScreen from "../wallet_screen/wallet_screen.tsx";
import theme from "../../../app/theme/theme.ts";
import CardScreen from "../card_screen/card_screen.tsx";
import {View} from "react-native";
import AppBottomSheet from "../../components/modals/bottom_sheet/app_bottom_sheet.tsx";

const WalletRoute = () => <WalletScreen />;
const CardRoute = () => <CardScreen />;

const NavigationScreen = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'wallet', title: 'Wallet', focusedIcon: 'wallet' },
        { key: 'card', title: 'Card', focusedIcon: 'credit-card' },
    ]);

    const renderScene = ({ route }: { route: { key: string } }) => {
        switch (route.key) {
            case 'wallet':
                return <WalletRoute />;
            case 'card':
                return <CardRoute />;
            default:
                return null;
        }
    };

    return (
        <View style={{flex: 1}}>
            <BottomNavigation
                barStyle={{ backgroundColor: theme.colors.background}}
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                renderTouchable={({ key, ...props }) =>
                    <TouchableRipple key={key} {...props} />}
            />
            <AppBottomSheet />
        </View>
    );
};

export default NavigationScreen;
