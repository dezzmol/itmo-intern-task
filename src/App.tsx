import {AppRouter} from "@/modules/AppRouter"
import {Header} from "@/modules/Header";
import "./App.scss"
import Footer from "@/modules/Footer/components/Footer.tsx";

const App = () => {
    return (
        <>
            <Header />
                <main className={"page-wrapper"}>
                    <AppRouter/>
                </main>
            <Footer />
        </>
    );
};

export default App;