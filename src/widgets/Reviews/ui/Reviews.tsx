import {mockReviews} from "../mock/mockReviews.ts";
import ReviewCard from "@/entities/ReviewCard/ReviewCard.tsx";
import classes from "./Reviews.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const Reviews = () => {
    return (
        <section className={classes.reviews}>
            <div className={classes.container}>
                <h2>Отзывы</h2>
                <div className={classes.slider_holder}>
                    <Carousel
                        showArrows={true}
                        swipeable={true}
                    >
                        {mockReviews.map((review) =>
                            <ReviewCard review={review} key={review.title}/>
                        )}
                    </Carousel>
                </div>
            </div>

        </section>
    );
};

export default Reviews;