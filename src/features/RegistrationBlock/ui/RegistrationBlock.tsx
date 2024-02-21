import classes from "./RegistrationBlock.module.scss";

const RegistrationBlock = () => {
    return (
        <div className={classes.block}>
            <div className={classes.container}>
                <h2>Порядок оформления на обучение</h2>
                <div className={classes.holder}>
                    <p>
                        Оформление договоров на обучение проводится дистанционно по предварительной регистрации.
                        Выберите специализацию профессиональной переподготовки или программу повышения квалификации,
                        которая Вас интересует:
                        Инженер-программист, Full Stack-разработчик, Java-разработчик, Python-разработчик, Основы
                        DevOps или другую, и зарегистрируйтесь через форму обратной связи.
                        Если есть вопросы, пишите нам по адресу info@ifmo.spb.ru.
                    </p>
                    <div>
                        <img src={"https://itcenter.itmo.ru/thumb/2/EeGqS_wTWZZ_4RhpIvTncQ/280c170/d/02-open.png"}
                             alt={"Порядок оформления на обучение"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationBlock;