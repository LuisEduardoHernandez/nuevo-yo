export const Modal = ({ isOpen, closeModal, children }) => {
    const handleModalDialogClick = e => {
        e.stopPropagation();
    };

    return (
        <div
            className={`modal_react ${isOpen && 'modal_react_open'}`}
            onClick={closeModal}
        >
            <div className={"modal_react__dialog"} onClick={handleModalDialogClick}>
            <button
                className={"modal_react__dialog__button_close"}
                onClick={closeModal}
            >
                x
            </button>
            <div className={"modal_react__dialog__children"}>{children}</div>
            </div>
        </div>
    );
};