import { FaLock } from 'react-icons/fa'

export const SubmitButton = ({ text }) => (
  <button
    type="submit"
    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-800 hover:bg-rose-700 active:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
  >
    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
      <FaLock className="text-white" aria-hidden="true" />
    </span>
    {text}
  </button>
)
