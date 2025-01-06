import { ScrollView, View } from "react-native";
import CryptoTile from "./crypto_tile";
import { HorizontalSpacer } from "../../../../components/spacers";

const CryptoSelector = () => {
    return (
        <View style={{height: 170}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewStyle}>
            <CryptoTile imageUrl="https://cryptologos.cc/logos/bitcoin-btc-logo.png" name="Bitcoin" price="10$" />
            {Spacer()}
            <CryptoTile imageUrl="https://cryptologos.cc/logos/ethereum-eth-logo.png" name="ETH" price="20$" />
            {Spacer()}
            <CryptoTile imageUrl="https://cryptologos.cc/logos/xrp-xrp-logo.png" name="XRP" price="30$" />
            {Spacer()}
            <CryptoTile imageUrl="https://cryptologos.cc/logos/solana-sol-logo.png" name="Solana" price="40$" />
            {Spacer()}
            <CryptoTile imageUrl="https://cryptologos.cc/logos/internet-computer-icp-logo.png" name="ICP" price="50$" />
            {Spacer()}
            <CryptoTile imageUrl="https://cryptologos.cc/logos/tezos-xtz-logo.png" name="XTZ" price="60$" />
        </ScrollView>
        </View>
    )
}

const Spacer = (): JSX.Element => {
    return (
        <HorizontalSpacer width={12} />
    )
}

const styles = {
    scrollViewStyle: {
        flexDirection: 'row' as 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
}

export default CryptoSelector;