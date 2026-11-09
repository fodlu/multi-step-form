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
	{ title: "arcade", price: 15, annualPrice: 150, img: "images/icon-pro.svg" },
];

const SelectPlan = () => {
	const { plan, setPlan } = UseApp();
	return (
		<div>
			<Header
				title='Select your plan'
				detail='You have the option of monthly or yearly billing.'
			/>

			<div className=''>
				{PLANS.map((item, index) => (
					<div className='' key={index}>
						<img src={item.img} alt={item.name} />
						<div className=''>
							<p className=''>{item.title}</p>
							<p className=''>${item.price}/mo</p>
							{plan === "yearly" && <p className=''>${item.annualPrice}/yr</p>}
							{plan === "yearly" && <p className=''>2 months free</p>}
						</div>
					</div>
				))}

				<div className=''>
					<label htmlFor='monthly' className=''>
						Monthly
					</label>
					<div className=''>
						<input type='radio' name='plan' id='monthly' value='monthly' />
						<input type='radio' name='plan' id='yearly' value='yearly' />
					</div>
					<label htmlFor='yearly' className=''>
						Yearly
					</label>
				</div>
			</div>
		</div>
	);
};

export default SelectPlan;
