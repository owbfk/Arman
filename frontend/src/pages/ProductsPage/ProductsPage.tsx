import NavBar from "../../components/NavBar/NavBar";
import ProductList from "../../components/ProductList/ProductList";

const ProductsPage: React.FC = () => {

  return(
    <>
    <NavBar current="products"></NavBar>
    Products
    <ProductList></ProductList>
    </>
  )

}

export default ProductsPage;