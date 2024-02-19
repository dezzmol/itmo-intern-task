import classes from "./CoursesField.module.scss"
import {CoursesList} from "@/features/CoursesList";

const CoursesField = () => {
    return (
        <section className={classes.coursesField}>
            <h2>
                Курсы обучения для IT-специалистов
            </h2>
            <CoursesList />
        </section>
    );
};

export default CoursesField;