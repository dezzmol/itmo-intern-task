import React from 'react';
import styles from './Stepper.module.scss';
import {StepperAttributes} from "@/shared/types/stepperAttributes/stepperAttributes.ts";

interface StepProps {
    item: StepperAttributes
    children: React.ReactNode
}

const StepComponent: React.FC<StepProps> = ({item, children}) => {
    const {
        title,
        description,
        isFirst,
        isLast
    }
    = item

    return (
        <div className={styles.step}>
            {/*{!isFirst && <div className={styles.step__line}></div>}*/}
            <div className={styles.step__line}></div>
            <div className={styles.step__circle}>
                {children}
            </div>
            {/*{!isLast && <div className={styles.step__line}></div>}*/}
            <div className={styles.step__line}></div>
            <div className={styles.step__content}>
                <div className={styles.step__content__title}>{title}</div>
                {/*<div className={styles.step__content__description}>{description}</div>*/}
            </div>
        </div>
    );
};

export default StepComponent;
