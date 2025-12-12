import { PopupService } from '@/services/popupService';
import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type PopupType = 'alert' | 'confirm';

interface PopupOptions {
  type: PopupType;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface PopupContextType {
  showAlert: (message: string, onConfirm?: () => void) => void;
  showConfirm: (message: string, onConfirm: () => void, onCancel?: () => void) => void;
  hide: () => void;
}

const PopupContext = createContext<PopupContextType | null>(null);

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) throw new Error("usePopup must be used within PopupProvider");
    return context;
};

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popup, setPopup] = useState<PopupOptions | null>(null);

    useEffect(() => {
        PopupService.setShowAlert(showAlert);
    }, []);

    const showAlert = (message: string, onConfirm?: () => void) => {
      setPopup({ type: 'alert', message, onConfirm });
    };

    const showConfirm = (message: string, onConfirm: () => void, onCancel?: () => void) => {
        setPopup({ type: 'confirm', message, onConfirm, onCancel });
    };

    const hide = () => {
        setPopup(null);
    };

    const handleConfirm = () => {
        // popup?.onConfirm?.();
        // hide();
        const onConfirm = popup?.onConfirm;
        setPopup(null); // 먼저 닫기
        // 약간의 시간차로 호출 (팝업이 DOM에서 완전히 사라진 후)
        setTimeout(() => {
            onConfirm?.();
        }, 0);
    };

    const handleCancel = () => {
        popup?.onCancel?.();
        hide();
    };

    return (
        <PopupContext.Provider value={{ showAlert, showConfirm, hide }}>
        {children}
        {popup && (
            <div className="popup-overlay" style={{ zIndex: 99999999 }}>
                <div className="popup-modal">
                <p className="popup-message">{popup.message}</p>
                <div className="popup-buttons">
                    {popup.type === 'confirm' && (
                    <button className="popup-button cancel" onClick={handleCancel}>
                        취소
                    </button>
                    )}
                    <button className="popup-button confirm" onClick={handleConfirm}>
                        확인
                    </button>
                </div>
                </div>
            </div>
        )}
        </PopupContext.Provider>
    );
};