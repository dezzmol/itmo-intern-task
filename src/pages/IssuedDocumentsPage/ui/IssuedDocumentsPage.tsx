import classes from "./IssuedDocumentPage.module.scss"
import IssuedDocumentsList from "@/features/IssuedDocumentsList/ui/IssuedDocumentsList.tsx";
import BreadCrumbs from "@/shared/ui/BreadCrumbs/BreadCrumbs.tsx";

const IssuedDocumentsPage = () => {
    return (
        <main className={classes.page_content}>
            <div className={classes.container}>
                <BreadCrumbs />
                <IssuedDocumentsList />
            </div>
        </main>
    );
};

export default IssuedDocumentsPage;