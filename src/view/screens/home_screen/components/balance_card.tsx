import { View, Text, StyleSheet } from 'react-native';
import AppColors from '../../../../app/theme/colors';

const BalanceCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.balanceTitle}>Balance</Text>
            <Text style={styles.balanceText}>$ 1,000.00</Text>
        </View>
    );
};

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

export default BalanceCard;