import classes from "./CoursesPage.module.scss"
import BreadCrumbs from "@/shared/ui/BreadCrumbs/BreadCrumbs.tsx";
import {EducationDirections} from "@/widgets/EducationDirections";

const CoursesPage = () => {
    return (
        <main className={classes.page_content}>
            <div className={classes.container}>
                <BreadCrumbs />
                <h1>В Центре обучение осуществляется по следующим основным направлениям</h1>
                <EducationDirections />
            </div>
        </main>
    );
};

export default CoursesPage;