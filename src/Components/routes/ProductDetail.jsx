import axios from "axios";
import { useState, useEffect, react } from "react";
import { useParams, NavLink } from "react-router-dom";
import ProductDescription from "../productDescription.jsx/ProductDescription";
import SimilarProducts from "../productDescription.jsx/SimilarProducts";

const ProductDetail = () => {
  const { id } = useParams();

  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/todos/${id}`;
    axios
      .get(URL)
      .then((res) => setProductInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(productInfo);

  return (
    <div>
      <h3 className="card-home_name">{productInfo?.title}</h3>
      <h3 className="card-home_name">
        {productInfo?.completed === false ? "To do" : "work done"}
      </h3>
    </div>
  );
};

export default ProductDetail;
