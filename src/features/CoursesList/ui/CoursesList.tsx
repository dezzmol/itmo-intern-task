import {courses as coursesMock} from "@/features/CoursesList/mock/courses.ts";
import CourseCard from "@/shared/ui/CourseCard/CourseCard.tsx";
import classes from "./CoursesList.module.scss"

const CoursesList = () => {
    return (
        <div className={classes.list}>
            {coursesMock.map((course) =>
                <CourseCard course={course}/>
            )}
        </div>
    );
};

export default CoursesList;