import {createPortal} from "react-dom";
import {MutableRefObject, ReactElement, useEffect, useRef} from "react";

const Modal = ({children}: { children: ReactElement }) => {
    const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        return () => {
            modalRoot.removeChild(elRef.current);
        };
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
