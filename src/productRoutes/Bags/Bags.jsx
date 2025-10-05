import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Bag from "./Bag";

const Bags = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const bagItems = data.filter(
          (item) => item.category === "Female Hand Bags"
        );

        setBags(bagItems);
      });
  }, []);

  return (
    <div>
      <SectionHeader title="Bags"></SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bags.map((bag) => (
          <Bag key={bag.id} bag={bag}></Bag>
        ))}
      </div>
    </div>
  );
};

export default Bags;
