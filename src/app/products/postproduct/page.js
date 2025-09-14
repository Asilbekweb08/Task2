import { usePostProduct } from '@/queries/product'
import React from 'react'

const PostProduct = () => {
    const Product= usePostProduct({
            onSuccess:(data)=>{
                console.log("ok");
                
            }
    })
    const handleChange =(e)=>{

    }
  return (
    <div>
        <form>
            <input type="text" placeholder='name'  />
            <input type="text" name="des"  />
            <input type="number" name='price' />
            <input type="text" name="category" />
        </form>
    </div>
  )
}

export default PostProduct