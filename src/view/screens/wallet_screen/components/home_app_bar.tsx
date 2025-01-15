import { Image, StyleSheet, Text, View } from "react-native"


const HomeAppBar = () => {
    return (
        <View style={styles.row}>
            <View style={styles.leftColumn}>
                <Text style={styles.title}>Wallet</Text>
                <Text style={styles.subTitle}>Crypto</Text>
            </View>
            <Image 
                source={require('assets/avatar.png')}
                style={{width: 50, height: 50, borderRadius: 50}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftColumn: {
        flexDirection: 'column', 
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 15,
        color: 'gray'
    }
  });

export default HomeAppBar;