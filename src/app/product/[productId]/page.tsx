import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  return { title: `product ${params.productId}` };
};

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>details about product {params.productId}</h1>;
}
