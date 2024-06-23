import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom'; // Assuming you're using react-router

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Outlet />
      {/* Rest of your app components */}
    </div>
  );
};

export default App;