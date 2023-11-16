'use client'

import '@styles/diary.css'
import { useEffect, useState} from 'react'
import axios from 'axios'

export default function Diary() {

    const [diary, setDiary] = useState([])
    const [isi_diary, setIsiDiary] = useState([])
    const[isAda, setAda] = useState(false)
    
    const endpointAPI = 'https://6555c14e84b36e3a431e405e.mockapi.io/diaryku'
    // async function getAPI () {
    //     try{
    //         const res = await fetch(endpointAPI)
    //         const diary = await res.json()
    //         console.log(diary)
    //     }
    //     catch(error) {
    //         console.log("error fetching data: ${error}")
    //     }
    // }

    async function getAPI () {
        try{
            const res = await axios.get(endpointAPI)
            const res_isi_data = res.data
            const diary = res_isi_data.map((dataDiary)=>(dataDiary.name))
            setDiary(diary)
            const isi_diary = res_isi_data.map((dataDiary)=>(dataDiary.isi_diary))
            setIsiDiary(isi_diary)
            // console.log(diary)
            // console.log(isi_diary)
            console.log(diary, isi_diary)
        }
        catch(error) {
            console.log("error fetching data: ${error}")
        }
    }
    
    useEffect(() => {
        getAPI();
    }, [])


    console.log(isAda)

    return(
        <div>
            {diary.length > 0 ? (
                <ul>
                    {diary.map((item, idx)=>(
                        <li>
                            <div className='diary-container'>
                                <h1>
                                    {diary[idx]}
                                </h1>
                                <p className='p-diary'>
                                    {isi_diary[idx]}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : ('API not loading')}
        </div>
    )
}