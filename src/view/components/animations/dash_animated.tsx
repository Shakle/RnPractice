import Rive, {Fit} from "rive-react-native";

const DashAnimated = () => {
    return (
        <Rive
            resourceName={"dash"}
            autoplay={true}
            style={{height: 100, width: 100}}
        />
    );
}

export default DashAnimated;