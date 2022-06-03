import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Create from"./containers/Create";
import Detail from"./containers/Detail";
import Index from"./containers/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Index />} />
        <Route path={`/create/`} element={<Create />} />
        <Route path={`/detail/:uid1/:uid2`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
