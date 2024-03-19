import SideNav from "./components/SideNav";
import Suggestions from "./components/Suggestions";

function App() {
  return (
    <>
      <div className="grid grid-cols-7 gap-10 px-5 lg:px-0">
        <div className="lg:col-span-2 col-span-7">
          <SideNav />
        </div>
        <div className="lg:col-span-5 col-span-7">
          <Suggestions />
        </div>
      </div>
    </>
  );
}

export default App;
