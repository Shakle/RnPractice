import Rive from "rive-react-native";

const CreditCardAnimated = () => {
    return (
        <Rive
            resourceName={"credit_card"}
            autoplay={true}
            style={{marginVertical: -50}}
        />
    );
}

export default CreditCardAnimated;
