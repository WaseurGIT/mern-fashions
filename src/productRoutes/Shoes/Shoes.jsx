import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Shoe from "./Shoe";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const shoeItems = data.filter((item) => item.category === "Sneakers");
        setShoes(shoeItems);
      });
  }, []);

  return (
    <div>
      <SectionHeader title="Shoes"></SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shoes.map((shoe) => (
          <Shoe key={shoe.id} shoe={shoe}></Shoe>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
