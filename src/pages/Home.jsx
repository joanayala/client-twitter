import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DotWave } from '@uiball/loaders'
import { useForm } from 'react-hook-form'

import { getDataUser, updateUser, getDataUserTwitter } from '../api/api'

const Home = () => {
  const { userId } = useParams()
  const [stateUpdate, setStateUpdate] = useState(false)
  const [dataUser, setDataUser] = useState(null)
  const [dataUserTwitter, setDataUserTwitter] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onClickUpdate = () => {
    setStateUpdate(!stateUpdate)
  }

  const onSubmit = data => {
    updateUser(data, userId).then(res => {
      setStateUpdate(false)
      getDataUser(userId).then(res => {
        setDataUser(res.data.body)
      })
    })
  }

  useEffect(() => {
    getDataUser(userId).then(res => {
      getDataUserTwitter(res.data.body.twitter_user_name).then(rest => {
        setDataUserTwitter(rest.data)
        setDataUser(res.data.body)
      })
    })
  }, [])

  return (
    <>
      {dataUser !== null && dataUserTwitter !== null ? (
        <div className='flex items-start justify-center space-x-10 py-10'>
          {/* SECTION INFO USER */}
          <section className='w-[384px] overflow-hidden bg-white rounded-lg shadow-lg'>
            <img className='object-cover object-center w-full h-56' src={dataUser?.image_url} alt='profile' />

            <div className='flex items-center px-6 py-3 bg-gray-900'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>

              <h1 className='flex-1 mx-3 text-base font-semibold text-white'>My Work Experience</h1>

              <button onClick={() => onClickUpdate()} className='flex items-center text-white rounded-full transition ease-in duration-200 hover:text-red-800 focus:outline-none'>
                {stateUpdate ? (
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' />
                  </svg>
                )}
              </button>
            </div>

            {stateUpdate ? (
              <form className='flex flex-col space-y-4 px-6 py-4' onSubmit={handleSubmit(onSubmit)}>
                {/* <input
                  defaultValue={dataUser?.names}
                  {...register('name', { required: true })}
                  className='py-2 px-4 text-base border appearance-none border-gray-300 bg-white text-gray-700 placeholder-gray-400 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                /> */}
                <h1 className='my-3 text-2xl font-semibold text-gray-800'>{dataUser?.names}</h1>

                <textarea
                  rows='5'
                  defaultValue={dataUser?.experience_summary}
                  {...register('experience', { required: true })}
                  className='py-2 px-4 text-base border appearance-none border-gray-300 bg-white text-gray-700 placeholder-gray-400 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                />

                <button
                  type='submit'
                  className='flex justify-center items-center py-2 px-4 text-center text-base font-semibold bg-red-600 text-white w-full transition ease-in duration-200 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-3' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' />
                  </svg>
                  Actualizar Datos
                </button>
              </form>
            ) : (
              <div className='px-6 py-4'>
                <h1 className='my-3 text-2xl font-semibold text-gray-800'>{dataUser?.names}</h1>

                <p className='py-2 text-gray-700'>{dataUser?.experience_summary}</p>
              </div>
            )}
          </section>

          {/* SECTION TIMELINE TWITTER */}
          <section className='flex flex-col max-w-md h-[600px] pb-10 overflow-auto bg-white rounded-lg shadow-lg'>
            <div className='flex items-center space-x-3 mb-8 border-b py-4 px-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-gray-800'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z'></path>
              </svg>
              <h2 className='text-2xl font-bold text-gray-800'>@{dataUser?.twitter_user_name} Timeline</h2>
            </div>

            <div className='overflow-auto'>
              <ul className='flex flex-col space-y-8'>
                {dataUserTwitter?.map(item => {
                  return (
                    <li key={item.id} className='flex items-center space-x-4 px-5'>
                      <img alt='avatar' src={item.profile_image_url_https} className='mx-auto object-cover rounded-full h-16 w-16' />
                      <div className=''>
                        <h2 className='mb-1 text-xl font-medium text-gray-800'>D. Schrule</h2>
                        <p className='text-gray-700'>{item.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      ) : (
        <div className='flex items-center justify-center py-10'>
          <DotWave size={47} speed={1} color='#075985' />
        </div>
      )}
    </>
  )
}

export { Home }
