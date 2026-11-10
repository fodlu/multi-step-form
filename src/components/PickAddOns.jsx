import Header from "./Header";
import { UseApp } from "../context/AppContext";

const ADDONS = [
	{
		title: "Online service",
		detail: "Access to multiplayer games.",
		price: 1,
		annualPrice: 10,
	},
	{
		title: "Larger storage",
		detail: "Extra 1TB of cloud save",
		price: 2,
		annualPrice: 20,
	},
	{
		title: "Customizable Profile",
		detail: "Custom theme on your profile.",
		price: 2,
		annualPrice: 20,
	},
];

const PickAddOns = () => {
	const { userInfo, setUserInfo } = UseApp();
	console.log(userInfo.addOns);
	console.log(userInfo);
	return (
		<>
			<Header
				title='Pick add-ons'
				detail='Add-ons help enhance your gaming experience.'
			/>

			<div className='flex flex-col gap-5'>
				{ADDONS.map((item, index) => (
					<div
						className={`border-2 border-blue-100 p-5 rounded-lg flex justify-between items-center ${userInfo.addOns.includes(item.title) && "bg-blue-50 border-purple-600"} hover:border-purple-600 cursor-pointer`}
						key={index}
						onClick={() =>
							userInfo.addOns.includes(item.title) ?
								setUserInfo((prev) => ({
									...prev,
									addOns: prev.addOns.filter((n) => n !== item.title),
								}))
							:	setUserInfo((prev) => ({
									...prev,
									addOns: [...prev.addOns, item.title],
								}))
						}>
						<div className='flex gap-5'>
							<input
								type='checkbox'
								name='check'
								checked={userInfo.addOns.includes(item.title)}
								id='check'
							/>
							<div className=''>
								<p className='font-Ubuntu-Bold text-blue-950'>{item.title}</p>
								<p className='text-gray-500'>{item.detail}</p>
							</div>
						</div>

						<p className=''>
							+$
							{userInfo.duration === "monthly" ? item.price : item.annualPrice}/
							{userInfo.duration === "monthly" ? "mo" : "yr"}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default PickAddOns;
