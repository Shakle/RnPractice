import React, { RefObject } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

class BottomSheetModalManager {
    public modalRef: RefObject<BottomSheetModal> | null = null;
    private content: React.ReactNode = null;
    private onContentChange: ((content: React.ReactNode) => void) | null = null;

    setRef(ref: RefObject<BottomSheetModal>) {
        this.modalRef = ref;
    }

    setContent(content: React.ReactNode) {
        this.content = content;
        this.onContentChange?.(content); // Notify when content changes
    }

    present(content?: React.ReactNode) {
        if (content) {
            this.setContent(content); // Set dynamic content
        }
        this.modalRef?.current?.present();
    }

    dismiss() {
        this.modalRef?.current?.dismiss();
        this.setContent(null); // Clear content when dismissed
    }

    setOnContentChange(callback: (content: React.ReactNode) => void) {
        this.onContentChange = callback;
    }
}

export default new BottomSheetModalManager();
