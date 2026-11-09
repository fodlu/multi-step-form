import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";

const App = () => {
	return (
		<div className='bg-blue-200 h-screen flex items-center justify-center'>
			<div className='bg-white p-3 rounded-lg shadow-md flex'>
				<Sidebar />
				<div className='px-10 py-2'>
					<Routes>
						<Route path='/' element={<PersonalInfo />} />
						<Route path='/step2' element={<SelectPlan />} />
					</Routes>

          <div className="">
            <button type="button">Go Back</button>
            <button type="button">Next Step</button>
          </div>
				</div>
			</div>
		</div>
	);
};

export default App;
