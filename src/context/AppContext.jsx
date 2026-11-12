import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const PLANS = [
	{ title: "arcade", price: 9, annualPrice: 90 },
	{ title: "advanced", price: 12, annualPrice: 120 },
	{ title: "pro", price: 15, annualPrice: 150 },
];

export const AppProvider = ({ children }) => {
	const [step, setStep] = useState(1);
	const [formError, setFormError] = useState({});
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		phone: "",
		planTitle: "arcade",
		planPrice: 9,
		duration: "monthly",
		addOns: [
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
		],
	});

	console.log(userInfo);

	const getCurrentPlanPrice = () => {
		const plan = PLANS.find((p) => p.title === userInfo.planTitle) || PLANS[0];
		return userInfo.duration === "monthly" ? plan.price : plan.annualPrice;
	};

	const value = {
		step,
		setStep,
		userInfo,
		setUserInfo,
		planPrice: getCurrentPlanPrice(),
		formError,
		setFormError,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const UseApp = () => useContext(AppContext);
