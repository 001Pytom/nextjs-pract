import Link from "next/link";

export default function Product() {
  return (
    <div>
      <h1>Product list</h1>
      <Link href="product/1">
        <h2>Product 1</h2>
      </Link>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </div>
  );
}
