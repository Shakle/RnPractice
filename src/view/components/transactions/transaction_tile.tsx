import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

interface TransactionTileProps {
    name: string;
    icon: string;
    price: string;
}

const TransactionTile = ({ name, icon, price }: TransactionTileProps) => {
    return (
        <View style={styles.transactionsTile}>
            <Image source={{ uri: icon }} style={{ width: 20, height: 20, marginRight: 10 }} />
            <Text style={{fontWeight: 'bold', flex: 1 }}>{name}</Text>
            <Text style={{color: '#888' }}>${price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    transactionsTile: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default TransactionTile;