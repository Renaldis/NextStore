import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const HomePage = async () => {
  return (
    <div className="space-y-8">
      {/* <h2 className="h2-bold">Latest Product</h2> */}
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
};

export default HomePage;
