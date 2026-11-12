import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";
import { UseApp } from "./context/AppContext";

const App = () => {
	const { step, setStep, userInfo, setFormError } = UseApp();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname;
		if (path === "/" || path === "/step1") setStep(1);
		else if (path === "/step2") setStep(2);
		else if (path === "/step3") setStep(3);
		else if (path === "/step4") setStep(4);
		else if (path === "/step5") setStep(5);
	}, [location.pathname, setStep]);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleNext = () => {
		setFormError({});
		if (!userInfo.name) {
			setFormError((prev) => ({ ...prev, name: "This field is required" }));
			return;
		}
		if (!userInfo.email) {
			setFormError((prev) => ({ ...prev, email: "This field is required" }));
			return;
		}
		if (!emailRegex.test(userInfo.email)) {
			setFormError((prev) => ({ ...prev, email: "Email is invalid" }));
			return;
		}
		if (!userInfo.phone) {
			setFormError((prev) => ({ ...prev, phone: "This field is required" }));
			return;
		}
		const nextStep = step + 1;
		setStep(nextStep);
		navigate(`/step${nextStep}`);
	};

	const handleBack = () => {
		const prevStep = step - 1;
		setStep(prevStep);
		// If going back from step 2, go to root "/" or "/step1"
		navigate(prevStep === 1 ? "/" : `/step${prevStep}`);
	};

	return (
		<div className='flex flex-col justify-between min-h-screen bg-blue-50 lg:h-screen'>
			<div className='flex flex-col lg:grid lg:grid-cols-[25%_75%] lg:w-5/7 lg:h-[80%] m-auto lg:bg-white p-5 rounded-xl'>
				<Sidebar />
				<div className='flex flex-col -mt-30 lg:m-0 gap-10'>
					<div className='bg-white mx-5 p-5 rounded-xl shadow-lg h-full'>
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
						<div className='flex justify-between bg-white py-4 px-5'>
							<button
								onClick={handleBack}
								className={`cursor-pointer text-gray-500 font-Ubuntu-Medium ${step === 1 && "hidden"}`}
								type='button'>
								Go Back
							</button>
							<button
								onClick={handleNext}
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
