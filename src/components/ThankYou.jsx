import React from "react";

const ThankYou = () => {
	return (
		<div className='flex flex-col gap-5 items-center justify-center h-full'>
			<img src='images/icon-thank-you.svg' alt='thank you' className='w-15' />
			<p className='font-Ubuntu-Bold text-lg text-blue-950'>Thank you!</p>
			<p className='text-center text-gray-500 text-sm'>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	);
};

export default ThankYou;
