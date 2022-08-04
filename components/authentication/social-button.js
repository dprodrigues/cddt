export const SocialButton = ({ children, onClick }) => (
  <div className="w-full group">
    <button
      onClick={onClick}
      className="w-full inline-flex items-center justify-center text-rose-800 group-hover:text-rose-700 font-medium leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-gray-100 transform-gpu group-hover:-translate-y-0.5 transition-all duration-150"
    >
      {children}
    </button>
  </div>
)
