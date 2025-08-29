import { atom, useRecoilState } from "recoil";

const countState = atom({
  key: "countState", 
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
