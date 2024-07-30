
const Button = ({label,iconURL}) => {
  return (
    <button className = "flex justify-center items-center  gap-2 px-7 py-4 border leading-none font-montserrat text-lg bg-coral-red text-white rounded-full" >
        {label}
        <img src={iconURL} alt="arrow icon"
         className="ml-2 rounded-full
         w-5 h-5" />
    </button>
  )
}

export default Button