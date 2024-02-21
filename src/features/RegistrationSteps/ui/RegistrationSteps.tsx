import Stepper from "@/shared/ui/Stepper/Stepper.tsx";
import classes from "./RegistrationSteps.module.scss"
import Calendar_logo from "@/shared/assets/calendar_month.svg?react"
import Assignment from "@/shared/assets/assignment.svg?react"
import Handshake from "@/shared/assets/handshake.svg?react"

const RegistrationSteps = () => {
    return (
        <div className={classes.steps}>
            <Stepper
                item={{
                    title: "Выбираете курс и дату его начала",
                    description: "",
                    isFirst: true
                }}
            >
                <Calendar_logo />
            </Stepper>
            <Stepper
                item={{
                    title: "Форма обратной связи",
                    description: "",
                }}
            >
                <Assignment />
            </Stepper>
            <Stepper
                item={{
                    title: "Заключаете договор",
                    description: "",
                    isLast: true
                }}
            >
                <Handshake style={{color: "white"}}/>
            </Stepper>
        </div>
    );
};

export default RegistrationSteps;