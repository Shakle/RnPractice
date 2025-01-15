import {DefaultTheme} from "react-native-paper";
import AppColors from "./colors.ts";

const mainTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: AppColors.orange,
        secondaryContainer: AppColors.orange,
        background: '#FAFAFA',
    },
};

export default mainTheme;