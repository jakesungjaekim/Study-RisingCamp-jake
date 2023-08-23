import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
// @types
import { IPropsAuthModal } from '../../@types/IPropsAuthModal'
// @Icons
import { MdClose } from 'react-icons/md' 
import { SiNaver } from 'react-icons/si'
import { AiFillFacebook, AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { CiMail } from 'react-icons/ci'






const AuthModal:React.FC<IPropsAuthModal> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  useEffect(()=>{
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }

  },[])
  
  const innerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const handleUI = () => {
    setIsLogin(!isLogin)
  }

  return ReactDOM.createPortal(
    <div >
      <div onClick={onClose} style={{backgroundColor: 'rgba(34, 34, 34, 0.6)'}}  className='fixed inset-0 flex items-center justify-center'>
        <div onClick={innerClick} className='fixed bg-white min-w-[568px] min-h-[746px] rounded-lg flex flex-col'>
          {/* MODAL - TOP */}
          <div className='w-full h-[63px] px-6 flex items-center justify-between'>
            <MdClose />
            <h1 className='font-bold'>로그인 또는 회원 가입</h1>
            <div className='w-4 h-4'/>
          </div>
          <div className='w-full h-[1px] border-b border-gray-200'/>
          {/* MODAL - MAIN */}
          <div className='p-6'>
            {/* 인사말 */}
            <div className='flex items-center justify-start mt-2 mb-6 text-[22px] h-[26px]'>
              <h3 className='font-AirbnbBlack'>에어비앤비에 오신 것을 환영합니다.</h3>
            </div>

            {
              isLogin 
              ? <SignIn />
              : <SignUp />
            }

            {/* 다른 로그인 버튼 */}
            <div className='space-y-4'>
              <button className='px-6 py-3 flex items-center justify-between w-full h-12 mt-4  text-black bg-white border border-black text-[14px] rounded-lg'>
                <span className='flex items-center justify-center w-5 h-5'>
                  <SiNaver className="text-green-400 text-md"/>
                </span>
                네이버로 로그인하기
                <span></span>
              </button>
              <button className='px-6 py-3 flex items-center justify-between w-full h-12 mt-4  text-black bg-white border border-black text-[14px] rounded-lg'>
                <span className='flex items-center justify-center w-5 h-5'>
                  <AiFillFacebook className="text-2xl text-blue-600"/>
                </span>
                페이스북으로 로그인하기
                <span></span>
              </button>
              <button className='px-6 py-3 flex items-center justify-between w-full h-12 mt-4  text-black bg-white border border-black text-[14px] rounded-lg'>
                <span className='flex items-center justify-center w-5 h-5'>
                  <FcGoogle className="text-lg"/>
                </span>
                구글로 로그인하기
                <span></span>
              </button>
              <button className='px-6 py-3 flex items-center justify-between w-full h-12 mt-4  text-black bg-white border border-black text-[14px] rounded-lg'>
                <span className='flex items-center justify-center w-5 h-5'>
                  <AiFillApple className="text-2xl"/>
                </span>
                애플로 로그인하기
                <span></span>
              </button>
              <button onClick={handleUI} className='px-6 py-3 flex items-center justify-between w-full h-12 mt-4  text-black bg-white border border-black text-[14px] rounded-lg'>
                <span className='flex items-center justify-center w-5 h-5'>
                  <CiMail className="text-lg"/>
                </span>
                이메일로로 로그인하기
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container') as Element
  )
}

export default AuthModal

// md:left-[100px] lg:left-[260px] md:bottom-[230px] xs:bottom-0 
