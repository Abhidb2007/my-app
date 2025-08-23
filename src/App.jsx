import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

// 1️⃣ Atom: Shared cart state
const cartState = atom({
  key: "cartState",
  default: [],
});

// 2️⃣ Selector: Compute total price
const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.price, 0);
  },
});

// 3️⃣ Components
function Product({ item }) {
  const [cart, setCart] = useRecoilState(cartState);

  function addToCart() {
    setCart([...cart, item]);
  }

  return (
    <div>
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

function Cart() {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div>
      <h2>Cart Items: {cart.length}</h2>
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
