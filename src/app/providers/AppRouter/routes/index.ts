import {FunctionComponent} from "react";
import MainPage from "@/pages/MainPage/ui/MainPage.tsx";
import CoursePage from "@/pages/CoursePage/ui/CoursePage.tsx";
import AboutPage from "@/pages/AboutPage/ui/AboutPage.tsx";
import ContactsPage from "@/pages/ContactsPage/ui/ContactsPage.tsx";
import {IssuedDocumentsPage} from "@/pages/IssuedDocumentsPage";
import CoursesPage from "@/pages/CoursesPage/ui/CoursesPage.tsx";

interface IPages {
    path: string
    component: FunctionComponent
}

export const routes: IPages[] = [
    {path: "/", component: MainPage},
    {path: "/courses/:course_title", component: CoursePage},
    {path: "/courses", component: CoursesPage},
    {path: "/about", component: AboutPage},
    {path: "/contacts", component: ContactsPage},
    {path: "/about/issued_documents", component: IssuedDocumentsPage}
]