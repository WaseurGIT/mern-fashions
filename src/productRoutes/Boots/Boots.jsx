import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Boot from "./Boot";

const Boots = () => {
  const [boots, setBoots] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const bootItems = data.filter((item) => item.category === "Boots");
        setBoots(bootItems);
      });
  }, []);

  return (
    <div>
      <SectionHeader title="Boots"></SectionHeader>
      <div className="grid grid-cols-4 gap-1">
        {boots.map((boot) => (
          <Boot key={boot.id} boot={boot}></Boot>
        ))}
      </div>
    </div>
  );
};

export default Boots;
