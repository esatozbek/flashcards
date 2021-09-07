function getModalRootHelper(): () => HTMLElement | null {
    let modalRoot: HTMLElement | null;

    return function getModalRoot(): HTMLElement | null {
        if (modalRoot) {
            return modalRoot;
        }

        modalRoot = document.getElementById('modal-root');

        if (!modalRoot) {
            console.warn("Modal root didn't found");
        }

        return modalRoot;
    };
}

export default getModalRootHelper();
