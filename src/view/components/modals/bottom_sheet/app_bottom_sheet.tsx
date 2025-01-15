import React, { useEffect, useRef, useState } from "react";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import BottomSheetModalManager from "./bottom_sheet_manager";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const AppBottomSheet = () => {
    const modalRef = useRef<BottomSheetModal>(null);
    const [content, setContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        BottomSheetModalManager.setRef(modalRef);

        // Listen for content changes
        BottomSheetModalManager.setOnContentChange((newContent) => {
            setContent(newContent);
        });
    }, []);

    const renderBackdrop = (props: any) => (
        <BottomSheetBackdrop
            {...props}
            opacity={0.5} // Adjust the transparency
            disappearsOnIndex={-1} // Hide when fully closed
            appearsOnIndex={0} // Show when opened
        />
    );

    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={modalRef}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView style={{ flex: 1 }}>
                    <KeyboardAwareScrollView style={{ flex: 1}}
                        showsVerticalScrollIndicator={false}
                        extraScrollHeight={80}
                        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
                        contentContainerStyle={{ flexGrow: 1}
                    }>
                        {content}
                    </KeyboardAwareScrollView>
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

export default AppBottomSheet;
