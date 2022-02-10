import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainView from './views/MainView';
import SelectView from './views/SelectView';
import StatusView from './views/StatusView';
import ConfigView from './views/ConfigView';

function App() {
  // Have to use Redux because party state is different across Main, Select and Status screens
  // along with color state(s) in Config and (eventually) window style(s)
  // BLAHHHHH LOL

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
