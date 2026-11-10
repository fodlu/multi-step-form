const Header = ({title, detail}) => {
  return (
    <div className="flex gap-2 flex-col mb-10">
        <p className="text-blue-950 text-2xl font-bold">{title}</p>
        <p className="text-gray-500">{detail}</p>
    </div>
  )
}

export default Header