const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-20 m-3 shadow-md border-green-50 flex justify-center items-center">
      {children}
    </div>
  );
};
export default Card;
