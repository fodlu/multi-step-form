import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [step, setStep] = useState(1);
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		phone: "",
		plan: "arcade",
		duration: "monthly",
		addOns: ["Online service", "Larger storage"]
	})

	const value = {
		step,
		setStep,
		userInfo, setUserInfo
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const UseApp = () => useContext(AppContext);
