import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";

const AboutProduct = () => {
  const navigate = useNavigate();
  const { title } = useParams();

  const product = data.find(product => product.title === title);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="about-product">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="400" height="500"/>
      <p className="description">{product.description}</p>
      <h3>Price: ${product.price}</h3>

      <button className="change" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default AboutProduct;
