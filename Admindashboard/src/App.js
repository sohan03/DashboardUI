import { Outlet } from 'react-router-dom';
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="">
      <div className="flex overflow-scroll backgorund-color:gray">
        <div className="basis-[100%] border overflow-scroll h-[100vh]">
          <Dashboardview />
          <div>
            <Outlet></Outlet>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
