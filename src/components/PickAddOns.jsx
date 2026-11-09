import React from "react";
import Header from "./Header";
import { UseApp } from "../context/AppContext";

const ADDONS = [
	{
		title: "Online service",
		detail: "Add-ons help enhance your gaming experience.",
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
	const { plan } = UseApp();
	return (
		<div>
			<Header
				title='Pick add-ons'
				detail='Add-ons help enhance your gaming experience.'
			/>

			<div className=''>
				{ADDONS.map((item, index) => (
					<div className='' key={index}>
						<div className=''>
							<input type='checkbox' name='check' id='check' />
							<div className=''>
								<p className=''>{item.title}</p>
								<p className=''>{item.detail}</p>
							</div>

							<p className=''>
								+${plan === "monthly" ? item.price : item.annualPrice}/
								{plan === "monthly" ? "mo" : "yr"}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PickAddOns;
