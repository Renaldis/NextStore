import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  // konversi rating dari string ke number
  const products = latestProducts.map((product) => ({
    ...product,
    rating: Number(product.rating),
  }));

  return (
    <div className="space-y-8">
      {/* <h2 className="h2-bold">Latest Product</h2> */}
      <ProductList data={products} title="Newest Arrivals" limit={4} />
    </div>
  );
};

export default HomePage;
