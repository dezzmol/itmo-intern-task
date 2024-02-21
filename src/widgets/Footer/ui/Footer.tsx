import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <section className={classes.holder}>
                <div>Copyright © 2009 - 2024 ЦАО ИТ</div>
                <div>+7(812) 480-40-40</div>
                <div> Россия, 196135, Санкт-Петербург, ул. Гастелло, 12, офис 311</div>
            </section>

        </footer>
    );
};

export default Footer;