"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  // to navigate rogramatically
  const router = useRouter();
  function handleClick() {
    // console.log("placing order");
    // router.push("/register");
    // router.replace("/register");
    router.back();
  }

  return (
    <>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>place order</button>
    </>
  );
};

export default OrderProduct;
