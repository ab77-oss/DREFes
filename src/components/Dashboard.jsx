import { useRouter } from 'next/navigation'
import React, {useEffect} from 'react'

const Dashboard = () => {



  return (
    <div>
         
         <iframe  width ={1400}  height={800} allowFullScreen="true"      src={process.env.url} />
    </div>
  )
}

export default Dashboard