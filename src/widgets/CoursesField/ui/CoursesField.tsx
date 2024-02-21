import classes from "./CoursesField.module.scss"
import {courses as coursesMock} from "../mock/courses.ts";
import CourseCard from "@/entities/CourseCard/ui/CourseCard.tsx";

const CoursesField = () => {
    return (
        <section className={classes.coursesField}>

            <div className={classes.container}>
                <h2 className={classes.title}>
                    Курсы обучения для IT-специалистов
                </h2>
                <div className={classes.list}>
                    {coursesMock.map((course) =>
                        <CourseCard course={course}/>
                    )}
                </div>

            </div>
        </section>
    );
};

export default CoursesField;