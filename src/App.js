import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Create from"./containers/Create";
// import Create from"./containers/Detail";
// import Create from"./containers/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={`/`} element={Index} /> */}
        <Route path={`/create/`} element={<Create />} />
        {/* <Route path={`/detail/`} element={Detail} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
