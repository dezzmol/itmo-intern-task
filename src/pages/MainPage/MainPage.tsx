import "../pages.module.scss"
import classes from "./MainPage.module.scss"
const MainPage = () => {
    return (
        <div className={"page-content"}>
            <div className={classes.title_wrapper}>
                <h1>Изучай программирование вместе с ИТМО</h1>
            </div>
        </div>
    );
};

export default MainPage;