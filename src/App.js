import logo from './logo.svg';
import './App.css';

let name="Rohit Coder";
const rohit_object={ name:"rv",work:"engineer"   };

function App() {
  return (
    <>
    <h1>hello rohit this side s</h1>
<nav className="blank"> 
<li>Home </li>
<li>About</li>
<li>Contact</li>
<h1>{rohit_object.name}</h1>
<h1>{5+5}</h1>
<h1>hello this is {name} </h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab nemo quia.</p>

</nav>


    </>
  );
}

export default App;
