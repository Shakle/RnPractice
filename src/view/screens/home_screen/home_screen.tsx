import { View } from 'react-native';
import HomeAppBar from './components/home_app_bar';
import BalanceCard from './components/balance_card';
import { VerticalSpacer } from '../../components/spacers';
import CryptoSelector from './components/crypto/crypto_selector';
import OrderHistoryArea from './components/order_history_area';

const HomeScreen = () => {
    return (
        <View style={{flexDirection: 'column', marginTop: 20, flex: 1}}>
            <TopArea></TopArea>
            <VerticalSpacer height={5} />
            <CryptoSelector />
            <VerticalSpacer height={5} />
            <View style={{paddingHorizontal: 20, flex: 1}}> 
                <OrderHistoryArea />
            </View>
        </View>
    );
};

const TopArea = () => {
    return (
        <View style={{ flexDirection: 'column', padding: 20 }}>
            <HomeAppBar />
            <VerticalSpacer height={30} />
            <BalanceCard />
        </View>
    );
};

export default HomeScreen;