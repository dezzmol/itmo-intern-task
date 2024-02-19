import React, {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "@/helpers/classNames.ts";
import cls from "./Button.module.scss"

export enum ButtonSize {
    LARGE="large",
    MEDIUM="medium",
    SMALL="small"
}

export enum ButtonTheme {
    PRIMARY="primary",
    SECONDARY="secondary",
    CLEAR="clear"
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
    size: ButtonSize
    theme: ButtonTheme
}

const Button: FC<Props> = (props) => {
    const {
        className,
        children,
        size,
        theme,
        ...otherProps
    } = props;
    return (
        <button
            type={"button"}
            className={classNames(cls.button, {}, [className, cls[size], cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;