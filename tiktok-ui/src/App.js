import "./components/GlobalStyle.scss";
import {Routes, Route} from 'react-router-dom'
import { PublicRouter } from "./pages/routes/routes";
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";

function App() {
    return (
        <div className="App">
          <Routes>
            {PublicRouter.map((route)=>{
              const Page = route.defaultElement || route.element;
              const Children = route.defaultElement ? route.element : <></>;
              return <Route path={route.path} element={<DefaultLayout><Page><Children></Children></Page></DefaultLayout>}></Route>
            })}
          </Routes>
        </div>
    );
}

export default App;
