import './GlobalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import DefaultLayout from './Layout/DefaultLayout';


function App() {
  return (
    <BrowserRouter>
      <div className="App wrapper">
        <Routes>
          {publicRoutes.map((route, index) => {
            return (
                <Route
                  key={index}
                  path={route.path}
                  element={<DefaultLayout><route.component></route.component></DefaultLayout>}
                >
                </Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
