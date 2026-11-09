import { UseApp } from '../context/AppContext';

const STEPS = ["Your info", "select plan", "add-ons", "summary"]

const Sidebar = () => {
    const {step} = UseApp()

  return (
    <div className='bg-blue-600 p-8 pr-15 bg-[url("images/bg-sidebar-desktop.svg")] bg-cover bg-center bg-no-repeat rounded-md'>
        <nav className='flex flex-col gap-7'>
            {STEPS.map((item, index) => (
                <div className="flex items-center gap-3">
                    <div className={`border-2 border-white text-white w-9 h-9 flex items-center justify-center rounded-full ${step > index && "bg-blue-100"}`}>
                        <span className={`font-bold ${step > index && "text-blue-950"}`}>{index + 1}</span>
                    </div>

                    <div className="uppercase">
                        <p className="text-blue-200 text-xs">step {index + 1}</p>
                        <p className="font-bold text-white">{item}</p>
                    </div>
                </div>
            ))}
        </nav>
    </div>
  )
}

export default Sidebar