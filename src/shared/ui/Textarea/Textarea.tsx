import {FC, TextareaHTMLAttributes} from 'react';
import classes from "./Textarea.module.scss"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const Textarea: FC<Props> = (props) => {
    const {
        ...otherProps
    } = props

    return (
        <textarea
            className={classes.textarea}
            {...otherProps}
        />


    );
};

export default Textarea;