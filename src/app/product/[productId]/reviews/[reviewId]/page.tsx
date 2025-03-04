"use client";
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }
  return (
    <h1>
      review {params.reviewId} for product {params.productId}
    </h1>
  );
}
