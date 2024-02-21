import classes from "./EducationDirections.module.scss"
import {directions} from "@/widgets/EducationDirections/mock/directions.ts";
import {EducationDirectionsCard} from "@/entities/EducationDirectionsCard";

const EducationDirections = () => {
    return (
        <section className={classes.educationDirections}>
            {directions.map(direction =>
                <EducationDirectionsCard educationDirection={direction} />
            )}
        </section>
    );
};

export default EducationDirections;