import classes from "./AdvantageCard.module.scss"
import {AdvantageCardAttributes} from "@/shared/types/advantageCardAttributes/advantageCardAttributes.ts";
import {FC} from "react";

interface Props {
    advantage: AdvantageCardAttributes
}

const AdvantageCard: FC<Props> = ({advantage}) => {
    return (
        <article className={classes.card}>
            <img src={advantage.imgSrc} alt={advantage.title}/>
            <div>
                <h3>{advantage.title}</h3>
                <p>{advantage.desc}</p>
            </div>
        </article>
    );
};

export default AdvantageCard;