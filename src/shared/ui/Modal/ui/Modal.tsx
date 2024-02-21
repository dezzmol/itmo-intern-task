import {FC} from 'react';
import classes from "./Modal.module.scss"
import Button, {ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button.tsx";

interface ModalProps {
    title: string
    setIsOpen: (flag: boolean) => void
    isOpen: boolean
    onConfirm: () => Promise<void>
    children: React.ReactNode
}

const ModalWindow: FC<ModalProps> = ({ isOpen, setIsOpen, onConfirm, title, children }) => {
    const rootClasses: string[] = [classes.modal]

    if (isOpen) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setIsOpen(false)}>
            <div className={classes.modalContent} onClick={(event) => event.stopPropagation()}>
                <h1 className={classes.modalHead}>{title}</h1>
                {children}
                <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.MEDIUM} className={classes.button} onClick={onConfirm}>
                    Подтвердить
                </Button>
            </div>
        </div>
    )
}

export default ModalWindow