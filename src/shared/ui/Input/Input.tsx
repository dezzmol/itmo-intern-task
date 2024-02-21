import {FC, InputHTMLAttributes} from 'react';
import cls from "./Input.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames.ts";

export enum InputSize {
    LARGE="large",
    MEDIUM="medium",
    SMALL="small"
}

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    className?: string;
    size: InputSize;
}


const Input: FC<Props> = (props) => {
    const {
        className,
        size,
        ...otherProps
    } = props

    return (
        <input
            className={classNames(cls.input, {}, [className, cls[size]])}
            {...otherProps}
        />
    );
};

export default Input;