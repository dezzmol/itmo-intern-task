import classes from "./ContactsPage.module.scss"
import BreadCrumbs from "@/shared/ui/BreadCrumbs/BreadCrumbs.tsx";

const ContactsPage = () => {
    return (
        <main className={classes.page_content}>
            <div className={classes.container}>

                <BreadCrumbs/>
                <h1>Контакты</h1>
                <h2>Работаем в дистанционном режиме</h2>
                <p>
                    Для записи на курс воспользуйтесь формой обратной связи
                    <br/>Звонки: +7 (812) 480-40-40 или +7 (812) 480-30-30
                    <br/>по будним дням с 10-00 до 18-30
                </p>
                <h3>Адрес</h3>
                <p>196135, Россия, г. Санкт-Петербург, ул. Гастелло, 12, офис 311</p>
                <h3>E-mail</h3>
                <p>info@ifmo.spb.ru</p>
            </div>
        </main>
    );
};

export default ContactsPage;