import React from 'react'
import Banner from "../assets/banner-food.png"
import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Home() {

   useEffect(() => {
        document.title = 'Home';
   }, []);

  return (
    <div className="">
        <div className="bg-gradient-to-r from-red-950 to-red-600">
            <div className="container mx-auto items-center">
                <div className='p-24'>
                    <div className=' text-6xl font-semibold'>
                        <h1 className='text-white '>ดีลวันอังคาร <br /> ลดราคาอาหารเฉพาะ <br /> ลูกค้ารับที่ร้าน </h1>
                    </div>
                    <div className='w-24 bg-red-700 p-2 px-3 mt-9 font-semibold rounded-full text-center hover:cursor-pointer'>
                        <a href="/menu" className='text-white'>สั่งเลย</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="container mx-auto items-center">
                <div className='p-20'>
                    <div className=' text-5xl font-semibold text-center mb-10'>
                        <h1 className='text-red-700 '>เมนูแนะนำ</h1>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className='mx-auto'>
                            <Card sx={{ maxWidth: 355 }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="140" image="https://via.placeholder.com/350x300" alt="rice" />
                                    <CardContent>
                                    <h1 className='text-2xl font-semibold'>ข้าวผัดทะเล</h1>
                                    <p className='text-md'>ราคา 60-80 บาท <br/>- กุ้ง <br/>- ปลาหมึก <br/>- ปลากระพง</p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <a href='/' className='bg-red-600 font-bold text-white px-5 py-2 rounded-full hover:p-4 '>Buy now</a>
                                </CardActions>
                            </Card>
                        </div>
                        <div className='mx-auto'>
                        <Card sx={{ maxWidth: 355 }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="140" image="https://via.placeholder.com/350x300" alt="rice" />
                                    <CardContent>
                                    <h1 className='text-2xl font-semibold'>ข้าวหมูกรอบ</h1>
                                    <p className='text-md'>ราคา 60 บาท <br/>- พิเศษ +10 บาท<br/>- ใส่เครื่องแกง <br/>- พิเศษหมูกรอบ </p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <a href='/' className='bg-red-600 font-bold text-white px-5 py-2 rounded-full hover:p-4 '>Buy now</a>
                                </CardActions>
                            </Card>
                        </div>
                        <div className='mx-auto'>
                        <Card sx={{ maxWidth: 355 }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="140" image="https://via.placeholder.com/350x300" alt="rice" />
                                    <CardContent>
                                    <h1 className='text-2xl font-semibold'>ก๋วยเตี๋ยวน้ำตก</h1>
                                    <p className='text-md'>ราคา 60-70 บาท <br/>- หมู , ไก่ <br/>- กุ้ง <br/>- รวม</p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <a href='/' className='bg-red-600 font-bold text-white px-5 py-2 rounded-full hover:p-4 '>Buy now</a>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                    
                    <div className='mx-auto text-3xl font-semibold flex mt-20 justify-center'>
                        <a href='/menu' className='text-black hover:text-4xl hover:text-red-700'> ดูเพิ่มเติม</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home