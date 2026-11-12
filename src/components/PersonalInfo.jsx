import { UseApp } from "../context/AppContext";
import Header from "./Header";

const PersonalInfo = () => {
	const { formError, userInfo, setUserInfo } = UseApp();

	return (
		<>
			<Header
				title='Personal Info'
				detail='Please provide your name, email address, and phone number.'
			/>

			<form className='flex flex-col gap-4 form h-full'>
				<div className='relative'>
					<label htmlFor='name' className=''>
						Name
					</label>
					<input
						type='text'
						required
						id='name'
						value={userInfo.name}
						aria-describedby='nameError'
						onChange={(e) =>
							setUserInfo((prev) => ({ ...prev, name: e.target.value }))
						}
						className={`border-2 border-blue-200 p-2 rounded-lg cursor-pointer text-blue-950 font-Ubuntu-Bold ${formError.name && !userInfo.name.length && "border-red-500"}`}
						placeholder='e.g. Stephen King'
					/>
					{formError.name && !userInfo.name.length && (
						<p
							id='nameError'
							role='alert'
							className='text-red-500 font-Ubuntu-Bold absolute right-0 text-xs top-2'>
							{formError.name}
						</p>
					)}
				</div>
				<div className='relative'>
					<label htmlFor='name' className=''>
						email address
					</label>
					<input
						type='email'
						required
						id='email'
						value={userInfo.email}
						aria-describedby='emailError'
						onChange={(e) =>
							setUserInfo((prev) => ({ ...prev, email: e.target.value }))
						}
						className={`border-2 border-blue-200 p-2 rounded-lg cursor-pointer text-blue-950 font-Ubuntu-Bold ${formError.email && "border-red-500"}`}
						placeholder='e.g. stephenking@lorem.com'
					/>
					{formError.email && (
						<p
							id='emailError'
							role='alert'
							className='text-red-500 font-Ubuntu-Bold absolute right-0 text-xs top-2'>
							{formError.email}
						</p>
					)}
				</div>
				<div className='relative'>
					<label htmlFor='name' className=''>
						Phone Number
					</label>
					<input
						type='tel'
						id='tel'
						aria-describedby='phoneError'
						className={`border-2 border-blue-200 p-2 rounded-lg cursor-pointer text-blue-950 font-Ubuntu-Bold ${formError.phone && !userInfo.phone.length && "border-red-500"}`}
						required
						value={userInfo.phone}
						onChange={(e) =>
							setUserInfo((prev) => ({ ...prev, phone: e.target.value }))
						}
						placeholder='e.g. +1 234 567 890'
					/>
					{formError.phone && !userInfo.phone.length && (
						<p
							id='phoneError'
							role='alert'
							className='text-red-500 font-Ubuntu-Bold absolute right-0 text-xs top-2'>
							{formError.phone}
						</p>
					)}
				</div>
			</form>
		</>
	);
};

export default PersonalInfo;
