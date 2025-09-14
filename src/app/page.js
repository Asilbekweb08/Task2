"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Products } from '@/queries/product'

const Home = () => {
const  {data,isLoading,error}=useQuery({
  queryKey:["products"],
  queryFn:Products
})
console.log(data);


  
  return (
    <div>
      Products
    </div>
  )
}

export default Home