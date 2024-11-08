import ActionArea from "./components/ActionArea";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { Provider } from "./context/SongContext";

function App() {
  return (
    <div className="flex flex-row h-auto w-auto min-w-screen min-h-screen overflow-y-hidden">
      <Provider>
        <Sidebar />
        <Main />
        <ActionArea />
      </Provider>
    </div>
  );
}

export default App;
