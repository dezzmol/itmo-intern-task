import classes from "./RegistrationProcedure.module.scss"
import RegistrationBlock from "@/features/RegistrationBlock/ui/RegistrationBlock.tsx";

const RegistrationProcedure = () => {
    return (
        <section className={classes.registration_procedure}>
            <RegistrationBlock />
        </section>
    );
};

export default RegistrationProcedure;