import React from 'react'

const LocalHistoryItems = ({shortUrl,originalUrl,clicks,createdAt,status}) => {
  return (
    
      <div className='hidden md:grid grid-cols-7 md:items-center text-center gap-1 bg-[#181e2938] backdrop-blur-[28px] md:h-[55px] text-[15px] font-bold text-[#C9CED6] md:mt-2 shadow-2xl shadow-[##0000001a] px-2'>
         <div className="w-full col-span-2 overflow-hidden">
            <p>{shortUrl}</p>
          </div>
          <div className="w-full col-span-2 text-start overflow-hidden">
            <p>{originalUrl}</p>
          </div>
          <div className="w-full">
            <p>{clicks}</p>
          </div>
          <div className="w-full">
            <p>{status}</p>
          </div>
          <div className="w-full">
            <p>{new Date(createdAt).toLocaleString()}</p>
          </div>
      </div>
  )
}

export default LocalHistoryItems