import {advantagesMock} from "@/features/AdvantagesField/mock";
import AdvantageCard from "@/shared/ui/AdvantageCard/AdvantageCard.tsx";
import classes from "./AdvantagesField.module.scss"

const AdvantagesField = () => {
    return (
        <section className={classes.advantages_field}>
            <div className={classes.container}>
                <h2>Наши преимущества</h2>
                <div className={classes.advantages_wrapper}>
                    {advantagesMock.map((advantage) =>
                        <AdvantageCard advantage={advantage} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesField;