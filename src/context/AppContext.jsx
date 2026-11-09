import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [step, setStep] = useState(1);

	const value = {
		step,
		setStep,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const UseApp = () => useContext(AppContext);

// export const UseApp = () => {
// 	const context = useContext(AppContext);

// 	if (!context) {
// 		return new Error("Context must be used with the UseContext");
// 	}
// };
