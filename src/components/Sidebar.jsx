import { UseApp } from "../context/AppContext";

const STEPS = ["Your info", "select plan", "add-ons", "summary"];

const Sidebar = () => {
	const { step } = UseApp();

	return (
		<div className='bg-blue-600 h-70 lg:p-5 bg-[url("images/bg-sidebar-mobile.svg")] lg:bg-[url("images/bg-sidebar-desktop.svg")] bg-cover lg:bg-cover bg-center bg-no-repeat lg:rounded-md flex justify-center lg:justify-start lg:h-full'>
			<nav className='flex lg:flex-col gap-7 py-4 px-3' >
				{STEPS.map((item, index) => (
					<div key={index} className='flex pt-15 lg:pt-0 lg:items-center gap-3'>
						<div
							className={`border-2 border-white text-white w-13 h-13 lg:w-9 lg:h-9 flex items-center justify-center rounded-full ${step === index + 1 && "bg-blue-200"}`}>
							<span
								className={`font-bold text-blue-200 text-xl lg:text-lg ${step === index + 1 && "text-blue-950"}`}>
								{index + 1}
							</span>
						</div>

						<div className='uppercase hidden lg:block'>
							<p className='text-blue-200 text-xs'>step {index + 1}</p>
							<p className='font-bold text-blue-100 lg:text-xs'>{item}</p>
						</div>
					</div>
				))}
			</nav>
		</div>
	);
};

export default Sidebar;
