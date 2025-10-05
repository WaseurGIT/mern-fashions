import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Bottle from "./Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const bottleItems = data.filter(
          (item) => item.category === "Steel Body Water Bottle"
        );
        setBottles(bottleItems);
      });
  }, []);

  return (
    <div>
      <SectionHeader title="Bottles"></SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
