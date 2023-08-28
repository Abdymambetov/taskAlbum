import React, {FC, ReactNode} from "react";
interface TopBarProps {
    children: ReactNode; // ReactNode позволяет передавать любые JSX элементы
  }

export const TopBar: FC<TopBarProps> = (props) => {
    return <div className={'top-bar hover-container'}>
        {props.children}
    </div>;
}