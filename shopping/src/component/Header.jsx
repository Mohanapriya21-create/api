import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../App.css"

const Header = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    console.log("all", data)

    const getdata = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            // console.log(response.data)
            setData(response?.data?.products)
        }
        catch (error
        ) {
            console.log("fetching error:", error)
        }
    }
    useEffect(() => {
        getdata();
    }, []);

    return (
        <section>
            <div className='row'>
                <div className='bg-amber-700'>
                    Shopping
                </div>
                <div className='col-6'>home</div>

                <div className='desgin'>
                    {data?.map((item) => {

                        return (
                            <>
                                <div className='bg-gray-700 '>
                                    <div className='bg-white'>
                                       < img src={item.thumbnail} />
                                    <div className=' text-center'><div>{item.title}</div>
                                        <div>{item.price}</div></div>
                                    </div>

                                </div>
                            </>)

                    })}
                </div>
            </div>
        </section>
    )
}

export default Header
