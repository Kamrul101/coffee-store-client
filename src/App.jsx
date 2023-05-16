import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="m-20">
      <h1 className="text-6xl mb-12 text-center text-rose-400">Popular Products :{coffees.length}</h1>
      <div className="md:grid grid-cols-2 gap-5">
      {
        coffees.map(coffee=> <CoffeeCard
       key={coffee._id}
       coffee={coffee} 
      ></CoffeeCard>)
      }
      </div>
    </div>
  );
}

export default App;
