import {Link, useLocation} from "react-router-dom";
import classes from "./BreadCrumbs.module.scss"
import {pathTranslation} from "@/shared/lib/pathTranslations/pathTranslation.ts";

const BreadCrumbs = () => {
    const location = useLocation()

    let currentLink = ""

    const crumbs = location.pathname
        .split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb, ) => {
            currentLink += `/${crumb}`;
            const translatedCrumb = pathTranslation[crumb] || crumb; // Если нет перевода, используйте английское название
            return (
                <div key={currentLink} className={classes.crumbs}>
                    <Link to={currentLink}>{translatedCrumb}</Link>
                </div>
            );
        });

    crumbs.unshift(
        <div key="/" className={classes.crumbs}>
            <Link to="/">{pathTranslation["home"]}</Link>
        </div>
    );

    return <div className={classes.breadcrumbs}>{crumbs}</div>;
};

export default BreadCrumbs;