import {FC} from "react";
import {CourseCardAttributes} from "@/shared/types/courseCardAttributes/courseCardAttributes.ts";
import classes from "./CourseCard.module.scss"
import { useNavigate } from "react-router-dom";

interface Props {
    course: CourseCardAttributes
}

const CourseCard: FC<Props> = (props) => {
    const {
        course
    } = props;

    const navigate = useNavigate();

    return (
        <article className={classes.card} onClick={() => navigate("/courses")}>
            <div className={classes.img_holder}>
                <img  src={course.imgSrc} alt={course.title}/>
            </div>

            <h3>{course.title}</h3>
            {course.links.map(link =>
                <div>{link.title}</div>
            )}
        </article>
    );
};

export default CourseCard;