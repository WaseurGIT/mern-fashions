import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // POST to backend and update state with returned insertedId
  const addToCart = async (item) => {
    try {
      const response = await axios.post("http://localhost:5000/carts", item);
      // insertOne result: { acknowledged: true, insertedId: ... }
      const insertedId = response?.data?.insertedId;
      if (insertedId) {
        // keep shape consistent with items fetched from DB (have _id)
        const itemWithId = { ...item, _id: insertedId };
        setCartItems((prev) => [...prev, itemWithId]);
        return itemWithId;
      } else {
        // fallback: push item as-is (no _id)
        setCartItems((prev) => [...prev, item]);
        return item;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };

  // GET from backend; backend filters by "email" query param
  const fetchCartItems = async (email) => {
    try {
      if (!email) {
        setCartItems([]);
        return;
      }
      const response = await axios.get("http://localhost:5000/carts", {
        params: { email },
      });
      // response.data should be array of documents from DB (each has _id)
      setCartItems(response.data || []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // Remove from local state. If you want to remove from DB, add a DELETE endpoint on server and call it here.
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => String(item._id) !== String(id)));
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        fetchCartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
