import CategoryShowcase from "../components/client/categories.showcase";
import FeaturesSection from "../components/client/features.section";
import Header from "../components/client/header";
import HeroBanner from "../components/client/hero.banner";
import ProductSection from "../components/client/product.section";

const ClientLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow ">
        <HeroBanner />
        <ProductSection
          title="Sản phẩm nổi bật"
          subtitle="Các sản phẩm được khách hàng yêu thích nhất"
        />
        <div className="my-10">
          <CategoryShowcase />
        </div>
        <ProductSection
          title="Sản phẩm mới nhất"
          subtitle="Các sản phẩm mới về kho"
        />
        <FeaturesSection />
        <ProductSection
          title="Sản phẩm bán chạy"
          subtitle="Các sản phẩm được khách hàng mua nhiều nhất"
        />
      </main>
    </div>
  );
};

export default ClientLayout;
