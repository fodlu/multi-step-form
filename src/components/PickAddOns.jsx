import Header from "./Header";
import { UseApp } from "../context/AppContext";

const ADDONS = [
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
    {
        title: "Customizable Profile",
        detail: "Custom theme on your profile.",
        price: 2,
        annualPrice: 20,
    },
];

const PickAddOns = () => {
    const { userInfo, setUserInfo } = UseApp();

    const handleToggleAddOn = (itemTitle) => {
        const isSelected = userInfo.addOns.some((n) => n === itemTitle);

        setUserInfo((prev) => ({
            ...prev,
            addOns: isSelected
                ? prev.addOns.filter((title) => title !== itemTitle)
                : [...prev.addOns, itemTitle],
        }));
    };

    return (
        <>
            <Header
                title='Pick add-ons'
                detail='Add-ons help enhance your gaming experience.'
            />

            <div className='flex flex-col gap-5'>
                {ADDONS.map((item, index) => {
                    const isSelected = userInfo.addOns.some((n) => n.title === item.title);
                    const currentPrice = userInfo.duration === "monthly" ? item.price : item.annualPrice;

                    return (
                        <div
                            key={index}
                            onClick={() => handleToggleAddOn(item)}
                            className={`border-2 border-blue-100 p-5 rounded-lg flex justify-between items-center ${
                                isSelected && "bg-blue-50 border-purple-600"
                            } hover:border-purple-600 cursor-pointer`}>
                            <div className='flex gap-5 items-center'>
                                <input
                                    type='checkbox'
                                    name='check'
                                    id={`addon-${index}`}
                                    checked={isSelected}
                                    // pointer-events-none prevents the input from capturing its own click event
                                    // and conflicting with the parent div's onClick handler
                                    className='pointer-events-none w-4 h-4 accent-purple-600'
                                    onChange={() => {}}
                                />
                                <div className=''>
                                    <p className='font-Ubuntu-Bold text-blue-950'>{item.title}</p>
                                    <p className='text-gray-500 text-sm'>{item.detail}</p>
                                </div>
                            </div>

                            <p className='text-sm font-Ubuntu-Medium text-purple-700'>
                                +${currentPrice}/{userInfo.duration === "monthly" ? "mo" : "yr"}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PickAddOns;