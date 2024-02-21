import classes from "./IssuedDocumentsList.module.scss"
import {docs} from "@/features/IssuedDocumentsList/mock/docs.ts";
import IssuedDocumentCard from "@/entities/IssuedDocumentCard/IssuedDocumentCard.tsx";

const IssuedDocumentsList = () => {
    return (
        <div className={classes.list}>
            {docs.map(doc =>
                <IssuedDocumentCard document={doc} key={doc.title}/>
            )}
        </div>
    );
};

export default IssuedDocumentsList;