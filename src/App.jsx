import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";
import { UseApp } from "./context/AppContext";

const App = () => {
	const { step, setStep } = UseApp();
	const navigate = useNavigate();
	return (
		<div className='bg-blue-200 h-screen flex items-center justify-center flex-col font-Ubuntu-Regular'>
			<div className='bg-white p-3 rounded-lg shadow-md grid grid-cols-[30%_70%] h-5/6 w-3/5'>
				<Sidebar />
				<div className='px-17 py-8 min-h-full flex flex-col'>
					<div className=' flex-1 h-full'>
						<Routes>
							<Route path='/' element={<PersonalInfo />} />
							<Route path='/step1' element={<PersonalInfo />} />
							<Route path='/step2' element={<SelectPlan />} />
							<Route path='/step3' element={<PickAddOns />} />
							<Route path='/step4' element={<FinishingUp />} />
							<Route path='/step5' element={<ThankYou />} />
						</Routes>
					</div>

					{step !== 5 && (
						<div className='flex w-full justify-between pt-15'>
							<button
								onClick={() => {
									setStep((prev) => prev - 1);
									navigate(`/step${step - 1}`);
								}}
								className={`cursor-pointer text-gray-500 font-Ubuntu-Medium ${step === 1 && "hidden"} cursor-pointer`}
								type='button'>
								Go Back
							</button>
							<button
								onClick={() => {
									setStep((prev) => prev + 1);
									navigate(`/step${step + 1}`);
								}}
								type='button'
								className='ml-auto bg-blue-950 py-2 px-4 text-blue-50 rounded-lg cursor-pointer'>
								{step === 4 ? "Confirm" : "Next Step"}
							</button>
						</div>
					)}
				</div>
			</div>

			<footer className='attribution'>
				Challenge by{" "}
				<a href='https://www.frontendmentor.io?ref=challenge'>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a href='https://github.com/fodlu'>Fadilulahi Opeyemi Musediq</a>.
			</footer>
		</div>
	);
};

export default App;
