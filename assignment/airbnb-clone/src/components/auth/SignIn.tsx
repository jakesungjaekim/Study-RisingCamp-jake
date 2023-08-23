const SignIn = () => {
  return (
    <div>
        <select className="w-full border-gray-200 h-14 hover:border-black focus:outline-none select hover:border-2 ">
          <option disabled selected>Select your Country</option>
          <option>폴란드(+48)</option>
          <option>프랑스(+33)</option>
          <option>피지(+679)</option>
          <option>핀란드(+358)</option>
          <option>필리핀(+83)</option>
          <option>핏캐니언 섬(+64)</option>
          <option>한국(+82)</option>
          <option>헝가리(+36)</option>
        </select>
        <input 
          type="text" 
          placeholder="전화번호" 
          className="w-full h-14 input input-bordered hover:border-black focus:outline-none hover:border-2" 
        />
        <div className='w-full text-[12px] h-[32px] mt-2 tracking-tight leading-4'>
          전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. <span className='font-semibold underline'>개인정보 <br /> 처리방침</span>
        </div>
        {/* 버튼 */}
        <button className='w-full h-12 mt-4 mb-6 rounded-lg bg-[#FF385C] text-white '>계속</button>
        {/* 절취선 */}
        <div className='flex items-center justify-between w-full'>
          <div className='w-[233px] h-[1px] border-b border-b-gray-200'></div>
          <div className='flex items-center justify-center w-[41.5px] h-[16px] text-[12px] text-gray-00'> 또는 </div>
          <div className='w-[233px] h-[1px] border-b border-b-gray-200'></div>
        </div>
    </div>
  )
}

export default SignIn