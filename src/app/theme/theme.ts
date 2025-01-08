import {DefaultTheme} from "react-native-paper";
import AppColors from "./colors.ts";

const mainTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        secondaryContainer: AppColors.orange,
        background: '#FAFAFA',
    },
};

export default mainTheme;