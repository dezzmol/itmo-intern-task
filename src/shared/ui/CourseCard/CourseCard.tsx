import {FC} from "react";
import {CourseCardAttributes} from "@/shared/types/courseCardAttributes/courseCardAttributes.ts";
import classes from "./CourseCard.module.scss"

interface Props {
    course: CourseCardAttributes
}

const CourseCard: FC<Props> = (props) => {
    const {
        course
    } = props;

    return (
        <article className={classes.card}>
            <img src={course.imgSrc} alt={course.title}/>
            <h3>{course.title}</h3>
            {course.links.map(link =>
                <div>{link.title}</div>
            )}
        </article>
    );
};

export default CourseCard;