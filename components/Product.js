import { ProductContainer } from "../styles/ProductStyles";
import Link from "next/link";

export default function Product({ product }) {
  //Extract infor from props
  const { title, price, image, slug } = product.attributes;
  return (
    <ProductContainer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, type: "tween" }}
      viewport={{ once: true }}
    >
      <Link href={`/product/${slug}`}>
        <div className="image-container">
          <img src={image.data.attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>
        €{price} - {}
        <Link href={`/product/${slug}`}>
          <button className="secondaryBtn">View idea</button>
        </Link>
      </h3>
    </ProductContainer>
  );
}
