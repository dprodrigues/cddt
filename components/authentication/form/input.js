import { forwardRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const Input = forwardRef(function Input(
  { label, error = false, errorMessage, ...props },
  ref
) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <label
        htmlFor={props.id}
        className={`text-sm ${error ? 'text-red-600' : ''}`}
      >
        {label}
      </label>

      <input
        {...props}
        type={showPassword ? 'text' : props.type}
        ref={ref}
        className={`appearance-none relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:border-gray-400 focus:z-10 sm:text-sm ${
          error ? 'border-red-600 focus:border-red-600' : ''
        }`}
      />

      {error && errorMessage && (
        <span className="absolute text-xs text-red-600 right-0 -bottom-4">
          {errorMessage}
        </span>
      )}

      {props.type === 'password' && (
        <button
          className="absolute bottom-3 right-3 z-10 text-gray-500"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  )
})
