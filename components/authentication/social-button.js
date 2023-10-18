export const SocialButton = ({ label, icon, provider, onLogin }) => {
  return (
    <div className="w-full group">
      <button
        onClick={onLogin(provider)}
        className="w-full inline-flex items-center justify-center text-rose-800 group-hover:text-rose-700 font-medium leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-4 px-5 border border-gray-100 transform-gpu group-hover:-translate-y-0.5 transition-all duration-150"
      >
        {icon}

        <p className="w-full mt-1 text text-center text-sm font-medium text-gray-900">
          {label}
        </p>
      </button>
    </div>
  )
}
