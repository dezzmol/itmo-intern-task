import {FunctionComponent} from "react";
import MainPage from "@/pages/MainPage/ui/MainPage.tsx";
import CoursePage from "@/pages/CoursePage/ui/CoursePage.tsx";
import AboutPage from "@/pages/AboutPage/ui/AboutPage.tsx";
import ContactsPage from "@/pages/ContactsPage/ui/ContactsPage.tsx";
import {IssuedDocumentsPage} from "@/pages/ IssuedDocumentsPage";

interface IPages {
    path: string
    component: FunctionComponent
}

export const routes: IPages[] = [
    {path: "/", component: MainPage},
    {path: "/course/:course_title", component: CoursePage},
    {path: "/about", component: AboutPage},
    {path: "/contacts", component: ContactsPage},
    {path: "/issued_documents", component: IssuedDocumentsPage}
]