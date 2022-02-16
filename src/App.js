
import './App.css';


function funcName(name) {
  return name.fName + ' ' + name.lName;
}
const name = {
  fName: 'Venkat',
  lName: 'Chala'
};
const hello = <h1>Hello {funcName(name)}</h1>;
function App() {
  return (
    <div>
      {hello}
    </div>

  );
}

export default App;
