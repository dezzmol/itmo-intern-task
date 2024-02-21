import {ReviewCardAttributes} from "@/shared/types/reviewCardAttributes/reviewCardAttributes.ts";
import {FC} from "react";
import classes from "./ReviewCard.module.scss"

interface Props {
    review: ReviewCardAttributes
}

const ReviewCard: FC<Props> = ({review}) => {
    return (
        <article className={classes.card}>
            <div className={classes.img_holder}>
                <img src={review.imgSrc} alt={review.title}/>
            </div>
            <div className={classes.info}>
                <h3>
                    {review.title}
                </h3>
                <p>
                    {review.desc}
                </p>
                <p>
                    {review.date}
                </p>
            </div>
        </article>
    );
};

export default ReviewCard;