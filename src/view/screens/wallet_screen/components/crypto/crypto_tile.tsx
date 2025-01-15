import { View, Text, Image, StyleSheet } from 'react-native';

interface CryptoTileProps {
    imageUrl: string;
    name: string;
    price: string;
}

const CryptoTile = ({ imageUrl, name, price }: CryptoTileProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 135,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
    },    
    image: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginBottom: 14,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
});

export default CryptoTile;