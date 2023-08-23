import React, { useState, useEffect} from 'react'
import useHandleInput from '../../hooks/use-handleInput'

const SignUp = () => {
  const [isSignupDisabled, setIsSignupDisabled] = useState(true);
  const [inputValues, handleInput, clearInputValues] = useHandleInput({
    email: '',
    password: ''
  })

  const { email, password } = inputValues;

  const emailVaild  = email.includes('@')
  const emailCheck = ( email.length === 0 || email.includes('@') ) ? null : <p className='text-sm text-red-500'>이메일 형식이 올바르지 않습니다.</p>

  const passwordValid = password.length > 8
  const paswwordCheck = ( password.length === 0 || password.length >= 8) ? null : <p className='text-sm text-red-500'>비밀번호는 8자 이상이어야 합니다.</p>
  
  const isValid = emailVaild && passwordValid

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(isValid) {
      //...
    }
  }

  useEffect(()=>{
    setIsSignupDisabled(!(emailVaild&&passwordValid) )
  },[emailVaild, passwordValid])

  return (
    <div>
      <form onSubmit={handleSubmit} className='space-y-2'>
        <input 
          type="email"
          name='email'
          value={email}
          onChange={handleInput}
          placeholder="이메일" 
          className="w-full h-14 input input-bordered hover:border-black focus:outline-none hover:border-2" 
        />
        {emailCheck}
        <input 
          type="password"
          name='password'
          value={password}
          onChange={handleInput} 
          placeholder="비밀번호" 
          className="w-full h-14 input input-bordered hover:border-black focus:outline-none hover:border-2" 
        />
        {paswwordCheck}
        {/* 버튼 */}
        <button 
          type='submit'
          disabled={isSignupDisabled}
          className={`w-full h-12 mt-4 mb-6 rounded-lg ${ isSignupDisabled ? 'bg-[#FF385C]' : 'bg-cyan-700'} text-white`}>계속</button>
      </form>
        {/* 절취선 */}
        <div className='flex items-center justify-between w-full my-2'>
          <div className='w-[233px] h-[1px] border-b border-b-gray-200'></div>
          <div className='flex items-center justify-center w-[41.5px] h-[16px] text-[12px] text-gray-00'> 또는 </div>
          <div className='w-[233px] h-[1px] border-b border-b-gray-200'></div>
        </div>
    </div>
  )
}

export default SignUp