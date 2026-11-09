import { Link } from "react-router-dom"
import Header from './Header';

const FinishingUp = () => {
  return (
    <div>
        <Header title="Finishing up" detail="Double-check everything looks OK before confirming." />

        <div className="">
            <div className="">
                <div className="">
                    <p className="">Arcade (Monthly)</p>
                    <Link to="/step1" className="">Change</Link>
                </div>

                <p className="">$9/mo</p>
            </div>

            <div className="">
                <div className="">
                    <p className="">Online service</p>
                    <p className="">+$1/month</p>
                </div>
                <div className="">
                    <p className="">Larger storage</p>
                    <p className="">+$2/month</p>
                </div>
            </div>
        </div>

        <div className="">
            <p className="">Total (per month)</p>
            <p className="">+$12/mo</p>
        </div>
    </div>
  )
}

export default FinishingUp