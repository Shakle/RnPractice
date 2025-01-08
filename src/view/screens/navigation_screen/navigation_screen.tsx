import React from "react";
import { BottomNavigation, TouchableRipple } from "react-native-paper";
import WalletScreen from "../home_screen/wallet_screen.tsx";
import { Text, View } from "react-native";
import theme from "../../../app/theme/theme.ts";

const WalletRoute = () => <WalletScreen />;
const CardRoute = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>To be developed</Text>
    </View>
);

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
        <BottomNavigation
            barStyle={{ backgroundColor: theme.colors.background}}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderTouchable={({ key, ...props }) => <TouchableRipple key={key} {...props} />}
        />
    );
};

export default NavigationScreen;
