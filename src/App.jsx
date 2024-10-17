import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
function App() {
  function handleClick() {
    alert('button-clicked');
  }
  const handleClick2 = () => {
    alert('button-2 cliked');
  };
  const addToFIve = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React core concepts2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => { alert('Number 3 button'); } }>Click me3</button>
      <button onClick={() => addToFIve(5)}>Add Five</button>
    </>
  );
};

export default App
