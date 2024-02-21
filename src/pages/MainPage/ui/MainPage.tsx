import classes from "./MainPage.module.scss"
import {CoursesField} from "@/widgets/CoursesField";
import Button, {ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {AdvantagesField} from "@/features/AdvantagesField";
import RegistrationProcedure from "@/widgets/RegistrationProcedure/ui/RegistrationProcedure.tsx";
import {Reviews} from "@/widgets/Reviews";
import ReverseForm from "@/features/ReverseForm/ui/ReverseForm.tsx";
import {useState} from "react";

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <div className={classes.page_content}>
            <div className={classes.title_wrapper}>
                <div className={classes.title_and_button_wrapper}>
                    <h1>Изучай программирование вместе с ИТМО</h1>
                    <Button size={ButtonSize.LARGE} theme={ButtonTheme.PRIMARY} onClick={() => setIsModalOpen(true)}>
                        Начать
                    </Button>
                </div>
            </div>
            <CoursesField />
            <AdvantagesField />
            <RegistrationProcedure />
            <Reviews />
            <ReverseForm setIsOpen={setIsModalOpen} isOpen={isModalOpen}/>
        </div>
    );
};

export default MainPage;