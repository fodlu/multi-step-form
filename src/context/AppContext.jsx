import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [step, setStep] = useState(1);
	const [plan, setPlan] = useState("monthly")

	const value = {
		step,
		setStep,
		plan, setPlan
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const UseApp = () => useContext(AppContext);
