import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='bg-blue-200 h-screen flex items-center justify-center'>
      <div className="bg-white p-3 rounded-lg shadow-md">
        <Sidebar />
      </div>
    </div>
  )
}

export default App