import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainView from './views/MainView';
import SelectView from './views/SelectView';
import StatusView from './views/StatusView';
import ConfigView from './views/ConfigView';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="*" element={<MainView />}></Route>
          <Route path="party" element={<SelectView />}>Party</Route>
          <Route path="status" element={<StatusView />}>Status</Route>
          <Route path="config" element={<ConfigView />}>Config</Route>
      </Routes>
    </div>
  );
}

export default App;
