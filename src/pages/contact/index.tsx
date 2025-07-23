import React from 'react'
import { useForm } from 'react-hook-form'

interface ContactFormInputs {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>()

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data)
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-19">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Contact Us</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
          <div className="flex space-x-2">
            <input
              {...register('firstName', { required: 'First name is required' })}
              placeholder="First Name"
              className="w-1/2 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 text-accent-foreground" 
            />
            <input
              {...register('lastName', { required: 'Last name is required' })}
              placeholder="Last Name"
              className="w-1/2 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 text-accent-foreground"
            />
          </div>
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">E-mail</label>
          <input
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            placeholder="example@example.com"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 text-accent-foreground"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Your message"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 text-accent-foreground"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default ContactPage
