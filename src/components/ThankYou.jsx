import { useNavigate } from "react-router-dom";
import { UseApp } from "../context/AppContext";

const ThankYou = () => {
	const navigate = useNavigate();
	const { setUserInfo } = UseApp();
	return (
		<div className='flex flex-col gap-5 items-center justify-center h-full'>
			<img src='images/icon-thank-you.svg' alt='thank you' className='w-15' />
			<p className='font-Ubuntu-Bold text-lg text-blue-950'>Thank you!</p>
			<p className='text-center text-gray-500 text-sm'>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
			<button
				type='button'
				onClick={() => {
					setUserInfo({
						name: "",
						email: "",
						phone: "",
						planTitle: "arcade",
						planPrice: 9,
						duration: "monthly",
						addOns: [],
					});
					navigate("/");
				}}
				className='bg-blue-950 text-blue-50 p-2 px-5 rounded-lg cursor-pointer font-bold'>
				Go back
			</button>
		</div>
	);
};

export default ThankYou;
