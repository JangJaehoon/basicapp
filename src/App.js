// import logo from "./logo.svg";
import "./App.css";
// import { DiAtom } from "react-icons/di";
// import Hello from "./01/Hello";
// import MyClock from "./02/MyClock";
import MyDiv1 from "./03/MyDiv1";
import { RiHomeHeartFill } from "react-icons/ri";

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header
        className="flex justify-between items-center
              text-xl font-bold h-20 p-10 bg-slate-200"
      >
        <p>React Practice </p>
        <p>
          <RiHomeHeartFill />
        </p>
      </header>
      <main
        className="grow w-full flex justify-center items-start 
       overflow-auto"
      >
        <MyDiv1 />
        <RiHomeHeartFill />
      </main>
      <footer
        className="flex justify-center items-center h-20
       bg-black        text-slate-100"
      >
        Jang Jaehoon
      </footer>
    </div>
  );
}

export default App;
