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
	return (
		<>
			<Header
				title='Select your plan'
				detail='You have the option of monthly or yearly billing.'
			/>

			<div className='flex flex-col gap-10 w-full'>
				<div className='flex gap-5 h-47'>
					{PLANS.map((item, index) => (
						<div
							onClick={() =>
								setUserInfo((prev) => ({ ...prev, plan: item.title, planPrice: item.price, planAnnualPrice: item.annualPrice }))
							}
							className={`flex-1 shadow-sm p-4 rounded-lg flex flex-col justify-between cursor-pointer hover:border-2 hover:border-purple-600 ${userInfo.plan === item.title && "border-2 border-purple-600 bg-blue-50"}`}
							key={index}>
							<img src={item.img} alt={item.name} className='w-10' />
							<div className=''>
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
						</div>
					))}
				</div>

				<div className='p-3 bg-blue-50 flex items-center justify-center gap-2 text-gray-500 rounded-lg'>
					<label
						htmlFor='monthly'
						onClick={() =>
							setUserInfo((prev) => ({ ...prev, duration: "monthly" }))
						}
						className={`${userInfo.duration === "monthly" && "font-Ubuntu-Medium text-blue-950"}`}>
						Monthly
					</label>
					<div className=''>
						<input type='radio' name='plan' id='monthly' value='monthly' />
						<input type='radio' name='plan' id='yearly' value='yearly' />
					</div>
					<label
						htmlFor='yearly'
						onClick={() =>
							setUserInfo((prev) => ({ ...prev, duration: "yearly" }))
						}
						className={`${userInfo.duration === "yearly" && "font-Ubuntu-Medium text-blue-950"}`}>
						Yearly
					</label>
				</div>
			</div>
		</>
	);
};

export default SelectPlan;
