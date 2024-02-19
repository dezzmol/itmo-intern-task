import {Link} from "react-router-dom";
import ItmoLogo from "@/assets/RU Logo.svg?react"
import classes from "./Header.module.scss"
import Button, {ButtonSize, ButtonTheme} from "@/components/Button/Button.tsx";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header_holder}>
                <Link to={"/"}>
                    <div className={classes.logo_holder}>
                        <ItmoLogo height={"35px"} width={"122px"}/>
                        <img height={"65px"} src={"/CAOLogo.png"} alt={'caoLogo'}/>
                    </div>
                </Link>
                <div className={classes.header_right}>
                    <Link to={"/about"}>
                        <Button
                            theme={ButtonTheme.PRIMARY}
                            size={ButtonSize.MEDIUM}
                            onClick={(e) => e.stopPropagation()}
                        >
                            О нас
                        </Button>
                    </Link>
                    <Link to={"/about"}>
                        <Button
                            theme={ButtonTheme.SECONDARY}
                            size={ButtonSize.MEDIUM}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Отзывы
                        </Button>
                    </Link>

                </div>

            </div>
        </header>
    );
};

export default Header;