import { IconButton } from "react-native-paper";
import { Text, View, StyleSheet } from "react-native";
import mainTheme from "../../../../app/theme/theme.ts";
import { VerticalSpacer } from "../../../components/spacers.tsx";

interface CreditCardButtonProps {
    icon: string;
    name: string;
    onPress: () => void;
}

const CreditCardButton =
    ({ onPress, name, icon }: CreditCardButtonProps) => {
    return (
        <View style={styles.container}>
            <IconButton
                size={30}
                containerColor={mainTheme.colors.secondaryContainer}
                icon={icon}
                onPress={onPress}
            />
            <VerticalSpacer height={5} />
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    },
});

export default CreditCardButton;
