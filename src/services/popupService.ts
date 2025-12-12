let showAlert: ((message: string, onConfirm?: () => void) => void) | null = null;

export const PopupService = {
    setShowAlert(fn: typeof showAlert) {
        showAlert = fn;
    },
    alert(message: string, onConfirm?: () => void) {
        if (showAlert) {
            showAlert(message, onConfirm);
        } else {
            console.warn('showAlert is not initialized yet');
        }
    },
};
