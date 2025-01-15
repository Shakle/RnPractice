import { View, Text, StyleSheet } from 'react-native';
import AppColors from '../../../../app/theme/colors';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {IconButton} from "react-native-paper";
import {HorizontalSpacer} from "../../../components/spacers.tsx";
import mainTheme from "../../../../app/theme/theme.ts";
import BottomSheetModalManager from "../../../components/modals/bottom_sheet/bottom_sheet_manager.ts";
import CryptoBalanceTransactionsModalLayout from "./modal/crypto_balance_transactions_modal_layout.tsx";

const BalanceTile = () => {
    const openBottomSheet = () => {
        BottomSheetModalManager.present(<CryptoBalanceTransactionsModalLayout/>);
    };

    return (
        <View style={styles.card}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <_BalanceArea />
                <HorizontalSpacer width={10} />
                <_TopUpWithCardButton showModal={openBottomSheet}/>
            </View>
        </View>
    );
};

const _TopUpWithCardButton = ({ showModal }: { showModal: () => void }) => {
    return (
        <IconButton
            icon="credit-card-plus-outline"
            size={24}
            style={{borderColor: mainTheme.colors.secondaryContainer, borderWidth: 1}}
            onPress={showModal}
        />
    );
}

const _BalanceArea = () => {
    const cryptoBalance = useSelector((state: RootState) => state.crypto_balance.value);
    return (
        <View>
            <Text style={styles.balanceTitle}>USDT Balance</Text>
            <Text style={styles.balanceText}>${cryptoBalance}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 12,
        borderWidth: 0.8,
        borderColor: AppColors.orange,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2,
    },
    balanceTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '600',
    },
    balanceText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default BalanceTile;