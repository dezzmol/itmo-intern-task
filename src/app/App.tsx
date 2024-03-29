import {AppRouter} from "@/app/providers/AppRouter"
import {Header} from "@/widgets/Header";
import "./App.scss"
import {Footer} from "@/widgets/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <main className={"page-wrapper"}>
                <AppRouter/>
            </main>
            <Footer/>
        </>
    );
};

export default App;