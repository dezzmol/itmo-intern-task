import classes from "./EducationDirectionsCard.module.scss"
import {
    EducationDirectionsCardAttributes
} from "@/shared/types/educationDirectionsCardAttributes/educationDirectionsCardAttributes.ts";
import {FC} from "react";

interface Props {
    educationDirection: EducationDirectionsCardAttributes
}

const EducationDirectionsCard: FC<Props> = ({educationDirection}) => {
    return (
        <article className={classes.card}>
            <img src={educationDirection.imgSrc} alt={educationDirection.title}/>
            <h3>{educationDirection.title}</h3>
        </article>
    );
};

export default EducationDirectionsCard;