import Header from "./Header";

const PersonalInfo = () => {
	return (
		<div>
            <Header title="Personal Info" detail="Please provide your name, email address, and phone number." />

			<form className=''>
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
						email
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
		</div>
	);
};

export default PersonalInfo;
