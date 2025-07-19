import Header from "../components/client/header";
import HeroBanner from "../components/client/hero.banner";
import ProductSection from "../components/client/product.section";

const ClientLayout = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="flex-grow ">
                <HeroBanner />
                <ProductSection title="Sản phẩm nổi bật" subtitle="Các sản phẩm được khách hàng yêu thích nhất" />
            </main>
        </div>
    )
};

export default ClientLayout;