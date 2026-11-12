import { UseApp } from "../context/AppContext";
import Header from "./Header";

const PLANS = [
	{ title: "arcade", price: 9, annualPrice: 90, img: "images/icon-arcade.svg" },
	{
		title: "advanced",
		price: 12,
		annualPrice: 120,
		img: "images/icon-advanced.svg",
	},
	{ title: "pro", price: 15, annualPrice: 150, img: "images/icon-pro.svg" },
];

const SelectPlan = () => {
	const { userInfo, setUserInfo } = UseApp();

	const calculatePrice = (title, duration) => {
		const plan = PLANS.find((n) => n.title === title) || PLANS[0];
		return duration === "monthly" ? plan.price : plan.annualPrice;
	};

	const handleSelectPlan = (itemTitle) => {
		setUserInfo((prev) => ({
			...prev,
			planTitle: itemTitle,
			planPrice: calculatePrice(itemTitle, prev.duration),
		}));
	};

	const handleDurationChange = (newDuration) => {
		setUserInfo((prev) => ({
			...prev,
			duration: newDuration,
			planPrice: calculatePrice(prev.planTitle, newDuration),
		}));
	};

	return (
		<>
			<Header
				title='Select your plan'
				detail='You have the option of monthly or yearly billing.'
			/>

			<div className='flex flex-col gap-5'>
				<div className='flex flex-col lg:flex-row gap-5'>
					{PLANS.map((item, index) => (
						<button
							type='button'
							onClick={() => handleSelectPlan(item.title)}
							className={`flex-1 border-2 border-blue-50 shadow-sm p-4 rounded-lg flex lg:flex-col gap-5 lg:justify-between cursor-pointer hover:border-2 hover:border-purple-600 ${
								userInfo.planTitle === item.title &&
								"border-2 border-purple-600 bg-blue-50"
							}`}
							key={index}>
							<img src={item.img} alt={item.title} className='w-10' />
							<div className='text-left'>
								<p className='capitalize font-Ubuntu-Bold text-blue-950'>
									{item.title}
								</p>
								{userInfo.duration === "monthly" ?
									<p className='text-gray-500 font-Ubuntu-Medium'>
										${item.price}/mo
									</p>
								:	<p className='text-gray-500 font-Ubuntu-Medium'>
										${item.annualPrice}/yr
									</p>
								}
								{userInfo.duration === "yearly" && (
									<p className='text-blue-950'>2 months free</p>
								)}
							</div>
						</button>
					))}
				</div>
				<div className='p-3 bg-blue-50 flex items-center justify-center gap-2 text-gray-500 rounded-lg text-lg'>
					<span
						onClick={() => handleDurationChange("monthly")}
						className={`${
							userInfo.duration === "monthly" &&
							"font-Ubuntu-Bold text-blue-950"
						} cursor-pointer`}>
						Monthly
					</span>
					<div className='flex gap-2'>
						<input
							type='radio'
							name='plan'
							id='monthly'
							checked={userInfo.duration === "monthly"}
							onChange={() => handleDurationChange("monthly")}
						/>
						<input
							type='radio'
							name='plan'
							id='yearly'
							checked={userInfo.duration === "yearly"}
							onChange={() => handleDurationChange("yearly")}
						/>
					</div>
					<span
						onClick={() => handleDurationChange("yearly")}
						className={`${
							userInfo.duration === "yearly" && "font-Ubuntu-Bold text-blue-950"
						} cursor-pointer`}>
						Yearly
					</span>
				</div>
			</div>
		</>
	);
};

export default SelectPlan;
