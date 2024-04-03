import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginUser, setErrorStatus } from '../Reducers/user.slice'
import { FaArrowLeft } from "react-icons/fa";

const Authorization = () => {

  const { user, users, errorEmail, errorPassword, errorEmailMessage, errorPasswordMessage } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
  }
  user && navigate('/')

  return (
    <div className='w-full h-screen flex items-center justify-center bg-indigo-00'>
      <NavLink to={"/"} className='absolute top-10 left-10 border border-black rounded-full p-2 hover:bg-black hover:text-white transition-all duration-200'><FaArrowLeft /></NavLink>
      <div className='min-w-[300px] w-[500px] border-2 flex flex-col items-center rounded-2xl shadow-lg p-5 bg-white'>
        <h1 className='text-[28px] font-[800] border-b w-full text-center pb-3'>Platformag'a kiriw</h1>
        <form onSubmit={(e) => (onSubmit(e))} className='flex flex-col w-full gap-5 my-5'>
          <label className='flex w-full justify-between flex-col'>
            <span className='text-[14px] ml-3 mb-1'>Pochta mánzilińiz:</span>
            <input onChange={(e) => (setEmail(e.target.value), dispatch(setErrorStatus()))} required minLength={5} className='border py-3 rounded-full px-5 w-full' type="email" />
            {errorEmail && <p className='text-[12px] text-red-500 pl-5 font-[500]'>{errorEmailMessage}</p>}
          </label>
          <label className='flex w-full justify-between flex-col'>
            <span className='text-[14px] ml-3 mb-1'>Parol:</span>
            <input onChange={(e) => (setPassword(e.target.value), dispatch(setErrorStatus()))} required minLength={5} className='border py-3 rounded-full px-5 w-full' type="password" />
            {errorPassword && <p className='text-[12px] text-red-500 pl-5 font-[500]'>{errorPasswordMessage}</p>}
          </label>
          <button type='submit' className='border py-3 rounded-full px-5 w-full hover:shadow-lg bg-black text-white active:scale-[96%] transition-all duration-300'>Kiriw</button>
        </form>
        <p className='text-[14px] font-sans'>Akkauntıńız joqpa? <NavLink className='text-indigo-600 font-sans' to={'/registration'}>Dizimnen ótiw</NavLink></p>
      </div>
    </div>
  )
}

export default Authorization