import {IssuedDocumentCardAttributes} from "@/shared/types/issuedDocumentCardAttributes/issuedDocumentCardAttributes.ts";
import {FC} from "react";
import classes from "./IssuedDocumentCard.module.scss"

interface Props {
    document: IssuedDocumentCardAttributes
}

const IssuedDocumentCard: FC<Props> = ({document}) => {
    return (
        <div className={classes.card}>
            <h3>{document.title}</h3>
            <img src={document.imgSrc} alt={document.title}/>
        </div>
    );
};

export default IssuedDocumentCard;