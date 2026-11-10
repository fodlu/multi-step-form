import { Link } from "react-router-dom"
import Header from './Header';
import { UseApp } from "../context/AppContext";

const FinishingUp = () => {
    const {userInfo} = UseApp()
  return (
    <>
        <Header title="Finishing up" detail="Double-check everything looks OK before confirming." />

        <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between pb-5 border-b border-blue-200">
                <div className="">
                    <p className="font-Ubuntu-Bold text-blue-950 capitalize">{userInfo.plan} ({userInfo.duration})</p>
                    <Link to="/step2" className="text-gray-500 underline">Change</Link>
                </div>

                <p className="text-blue-950 font-Ubuntu-Bold">${userInfo.duration === "monthly" ? userInfo.planPrice : userInfo.planAnnualPrice}/{userInfo.duration === "monthly" ? "mo" : "yr"}</p>
            </div>

            <div className="pt-3 flex flex-col gap-2">
                {userInfo.addOns.map((item, index) => (
                    <div className="flex justify-between" key={index}>
                    <p className="text-gray-500">{item}</p>
                    <p className="text-blue-950 text-sm">+$1/{userInfo.duration === "monthly" ? "mo" : "yr"}</p>
                </div>
                ))}
            </div>
        </div>

        <div className=" flex justify-between pt-5 items-center">
            <p className="text-gray-500">Total (per month)</p>
            <p className="text-blue-700 font-Ubuntu-Bold text-lg">+$12/mo</p>
        </div>
    </>
  )
}

export default FinishingUp