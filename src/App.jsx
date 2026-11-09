import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";

const App = () => {
	return (
		<div className='bg-blue-200 h-screen flex items-center justify-center'>
			<div className='bg-white p-3 rounded-lg shadow-md flex'>
				<Sidebar />
				<div className='px-10 py-2'>
					<Routes>
						<Route path='/' element={<PersonalInfo />} />
						<Route path='/step2' element={<SelectPlan />} />
						<Route path='/step3' element={<PickAddOns />} />
						<Route path='/step4' element={<FinishingUp />} />
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
