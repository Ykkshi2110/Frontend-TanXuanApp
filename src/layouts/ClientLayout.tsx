import Header from "../components/client/header";
import HeroBanner from "../components/client/hero.banner";

const ClientLayout = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="flex-grow ">
                <HeroBanner />
            </main>
        </div>
    )
};

export default ClientLayout;