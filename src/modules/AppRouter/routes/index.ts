import {FunctionComponent} from "react";
import MainPage from "@/pages/MainPage/MainPage.tsx";
import CoursePage from "@/pages/CoursePage/CoursePage.tsx";
import AboutPage from "@/pages/AboutPage/AboutPage.tsx";
import ContactsPage from "@/pages/ContactsPage/ContactsPage.tsx";

interface IPages {
    path: string
    component: FunctionComponent
}

export const routes: IPages[] = [
    {path: "/", component: MainPage},
    {path: "/course/:course_title", component: CoursePage},
    {path: "/about", component: AboutPage},
    {path: "/contacts", component: ContactsPage},
]