import { Link } from "react-router-dom";
import Header from "./Header";
import { UseApp } from "../context/AppContext";

// Define addon prices directly here or import from a shared constants file
const ADDONS_PRICING = {
    "Online service": { price: 1, annualPrice: 10 },
    "Larger storage": { price: 2, annualPrice: 20 },
    "Customizable Profile": { price: 2, annualPrice: 20 },
};

const FinishingUp = () => {
    const { userInfo, setStep, planPrice } = UseApp();

    const evaluatedAddOns = userInfo.addOns.map((item) => {
        const pricing = ADDONS_PRICING[item.title] || { price: item.price || 0, annualPrice: (item.price || 0) * 10 };
        const currentPrice = userInfo.duration === "monthly" ? pricing.price : pricing.annualPrice;
        return { title: item.title, price: currentPrice };
    });

    const addOnsTotal = evaluatedAddOns.reduce((acc, cur) => acc + cur.price, 0);
    const totalPrice = planPrice + addOnsTotal;

    return (
        <>
            <Header
                title='Finishing up'
                detail='Double-check everything looks OK before confirming.'
            />

            <div className='bg-blue-50 p-4 rounded-lg'>
                <div className='flex items-center justify-between pb-5 border-b border-blue-200'>
                    <div>
                        <p className='font-Ubuntu-Bold text-blue-950 capitalize'>
                            {userInfo.planTitle || "Selected Plan"} ({userInfo.duration})
                        </p>
                        <Link
                            to='/step2'
                            onClick={() => setStep(2)}
                            className='text-gray-500 underline text-sm hover:text-blue-700'>
                            Change
                        </Link>
                    </div>

                    <p className='text-blue-950 font-Ubuntu-Bold'>
                        ${planPrice}/{userInfo.duration === "monthly" ? "mo" : "yr"}
                    </p>
                </div>

                <div className='pt-3 flex flex-col gap-2'>
                    {evaluatedAddOns.length > 0 ? (
                        evaluatedAddOns.map((item, index) => (
                            <div className='flex justify-between' key={index}>
                                <p className='text-gray-500'>{item.title}</p>
                                <p className='text-blue-950 text-sm'>
                                    +${item.price}/{userInfo.duration === "monthly" ? "mo" : "yr"}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-400 text-sm italic'>No add-ons selected</p>
                    )}
                </div>
            </div>

            <div className='flex justify-between pt-5 items-center px-2'>
                <p className='text-gray-500'>
                    Total (per {userInfo.duration === "monthly" ? "month" : "year"})
                </p>
                <p className='text-blue-700 font-Ubuntu-Bold text-lg'>
                    +${totalPrice}/{userInfo.duration === "monthly" ? "mo" : "yr"}
                </p>
            </div>
        </>
    );
};

export default FinishingUp;