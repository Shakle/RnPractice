import React from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import AppColors from "../../../../app/theme/colors";

interface OrderTileProps {
    name: string;
    icon: string;
    price: string;
}

const OrderHistoryArea = () => {
    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 6 }}>Order History</Text>
                <ViewAllButton  />
            </View>
            <ScrollView style={{ flexDirection: 'column', flex: 1 }} 
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <OrderTile name="Bitcoin" icon="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" price='50000' />
                <OrderTile name="ETH" icon="https://assets.coingecko.com/coins/images/279/large/ethereum.png" price='3000' />
            </ScrollView>
        </View>
    );
};

const ViewAllButton = (): JSX.Element => {
    return (
        <IconButton
            icon="menu"
            iconColor={AppColors.orange}
            onPress={() => console.log('Pressed')}
      />
    );
}

const OrderTile = ({ name, icon, price }: OrderTileProps) => {
    return (
        <View style={styles.orderTile}>
            <Image source={{ uri: icon }} style={{ width: 20, height: 20, marginRight: 10 }} />
            <Text style={{fontWeight: 'bold', flex: 1 }}>{name}</Text>
            <Text style={{color: '#888' }}>${price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    orderTile: {
        flexDirection: 'row', 
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default OrderHistoryArea;