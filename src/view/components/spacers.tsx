import { DimensionValue, View } from 'react-native';

const VerticalSpacer = ({ height }: { height: number | string }) => {
    return <View style={{ height: height as DimensionValue }} />;
};

const HorizontalSpacer = ({ width }: { width: number | string }) => {
    return <View style={{ width: width as DimensionValue }} />;
};

export { VerticalSpacer, HorizontalSpacer }; // Named exports