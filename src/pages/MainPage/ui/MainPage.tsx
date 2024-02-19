import classes from "./MainPage.module.scss"
import {CoursesField} from "@/widgets/CoursesField";

const MainPage = () => {
    return (
        <div className={classes.page_content}>
            <div className={classes.title_wrapper}>
                <h1>Изучай программирование вместе с ИТМО</h1>
            </div>
            <CoursesField />
        </div>
    );
};

export default MainPage;