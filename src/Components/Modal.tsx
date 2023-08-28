import React, {FC, ReactNode} from "react";

interface ModalProps{
    visible: boolean;
    onClickAway: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({visible, onClickAway, children}) =>{
    const className = visible ? 'modal visible' : 'modal hidden';

    return <div onClick={onClickAway} className={className}>
        {children}
    </div>;
}