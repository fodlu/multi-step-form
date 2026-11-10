import Header from "./Header";

const PersonalInfo = () => {
	return (
		<>
			<Header
				title='Personal Info'
				detail='Please provide your name, email address, and phone number.'
			/>

			<form className='flex flex-col gap-4 form h-full'>
				<div className=''>
					<label htmlFor='name' className=''>
						Name
					</label>
					<input
						type='text'
						id='name'
						className=''
						placeholder='e.g. Stephen King'
					/>
				</div>
				<div className=''>
					<label htmlFor='name' className=''>
						email address
					</label>
					<input
						type='email'
						id='name'
						className=''
						placeholder='e.g. stephenking@lorem.com'
					/>
				</div>
				<div className=''>
					<label htmlFor='name' className=''>
						Phone Number
					</label>
					<input
						type='text'
						id='name'
						className=''
						placeholder='e.g. +1 234 567 890'
					/>
				</div>
			</form>
		</>
	);
};

export default PersonalInfo;
