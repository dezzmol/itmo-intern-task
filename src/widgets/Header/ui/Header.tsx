import {Link} from "react-router-dom";
import ItmoLogo from "@/shared/assets/RU Logo.svg?react"
import classes from "./Header.module.scss"
import Button, {ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button.tsx";

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
                            theme={ButtonTheme.SECONDARY}
                            size={ButtonSize.MEDIUM}
                            onClick={(e) => e.stopPropagation()}
                        >
                            О нас
                        </Button>
                    </Link>
                    <Link to={"/contacts"}>
                        <Button
                            theme={ButtonTheme.SECONDARY}
                            size={ButtonSize.MEDIUM}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Контакты
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;