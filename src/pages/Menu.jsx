import React from 'react'
import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { MdOutlineShoppingCart } from "react-icons/md";


function Menu() {

  useEffect(() => {
    document.title = 'Menu';
  }, []);


  return (
    <div className="container mx-auto">
      <div className="container mx-auto mt-10 flex justify-between px-28">
        <p className='font-semibold text-5xl text-red-700'>เมนูอาหาร</p>
        <div className='mt-1 hover:cursor-pointer'>
          <a href='/' className='font-semibold text-4xl text-red-700'>
          <MdOutlineShoppingCart />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mx-auto p-24">
          <div className='mx-auto'>
              <Card sx={{ maxWidth: 300 }}>
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
              <Card sx={{ maxWidth: 300 }}>
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
              <Card Card sx={{ maxWidth: 300 }}>
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
          <div className='mx-auto'>
              <Card Card sx={{ maxWidth: 300 }}>
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
          <div className='mx-auto'>
              <Card sx={{ maxWidth: 300 }}>
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
              <Card sx={{ maxWidth: 300 }}>
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
              <Card Card sx={{ maxWidth: 300 }}>
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
          <div className='mx-auto'>
              <Card sx={{ maxWidth: 300 }}>
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
              <Card sx={{ maxWidth: 300 }}>
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
        </div>
    </div>

  )
}

export default Menu