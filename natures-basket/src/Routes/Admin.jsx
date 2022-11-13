import { Box, Button, Center, Heading, HStack, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const Admin = () => {
    const [veg, setVeg] = useState("")
    const [des , setDes] = useState("")
    const [img , setImg] = useState("")
    const [qua, setQua] = useState("")
    const [pop , setPop] = useState("")
    const [price ,setPrice] = useState("")
    const [title, setTitle] = useState("")
    const [pData,setPData] = useState("")
    const [dummy , setDummy] = useState(0)
    const navigate = useNavigate();


    const handleSubmit=()=>{
        
        alert("your posting data")
        axios.post("http://localhost:8080/Data",{
            brand:veg,
            description:des,
            image:img,
            quantity:qua,
            popUpMess:pop,
            price:price,
            title:title,
        })
        .then(res=>{
            console.log(res.data)
            setPData(res.data)
            setDummy(prev=>prev+1);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const getData=()=>{
        
        axios.get("http://localhost:8080/Data")
        .then(res=>{
            setPData(res.data)
        })
        .catch(err=>err)
    }

    const handleDelete=(id)=>{
        setDummy(prev=>prev+1);
        alert(id)
        axios.delete(`http://localhost:8080/Data/${id}`)
        .then(res=>{
            setDummy(prev=>prev+1);
            getData()
        })
    }

    const handleLogout=()=>{
        navigate("/Signup")
    }
    useEffect(()=>{
        getData()
    },[dummy])
    
    
  return (
    <div>
        <Box textAlign={"right"} >
            <Button bg={"red"} m={20} color="white" onClick={handleLogout}>LOGOUT</Button>
        </Box>
         <Box textAlign={"center"} ><Heading color={"red"}>Admin Panel To Add Products</Heading></Box>

        <Center>
            <br/>
            <br/>
            <Box w="50%" mt={"2%"} border="3px solid teal" p={20} box-shadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
            <Input
            value={veg}
            onChange={(e)=>setVeg(e.target.value)}
            placeholder='Brand of Fruit and Vegetable'
            size='sm'
        /><br/>
        <br/>
        <Input
            value={des}
            onChange={(e)=>setDes(e.target.value)}
            placeholder='description'
            size='sm'
        />
        <br/>
        <br/>
        <Input
            value={img}
            onChange={(e)=>setImg(e.target.value)}
            placeholder='image'
            size='sm'
        />
        <br/>
        <br/>
        <Input
            value={qua}
            onChange={(e)=>setQua(e.target.value)}
            placeholder='quantity'
            size='sm'
        />
        <br/>
        <br/>
        <Input
            value={pop}
            onChange={(e)=>setPop(e.target.value)}
            placeholder='popUpMess'
            size='sm'
        />
        <br/>
        <br/>
        <Input
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            placeholder='price'
            size='sm'
        />
        <br/>
        <br/>
        <Input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='title'
            size='sm'
        />
        <br/>
        <br/>
        <Button onClick={handleSubmit}>Submit</Button>
        <br/>
        <br/>
            </Box>
                
        </Center>
        <div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",width:"80%",margin:"auto",marginTop:"20px"}}>
                    {pData.length>0 && pData.map((item)=>{
                        return <div >
                            <Box  textAlign={"center"} w={"auto"} border="3px dotted green">
                                <img border="2px solid blue" src={item.image} alt={item.description}/>
                                <span>{`Price:-${item.price}Rs`}</span>
                                <br />
                                <br />
                                <Button bg={"red"} color={"white"} onClick={()=>handleDelete(item.id)}>Delete</Button>
                            </Box>
                        </div>
                    })}
                </div>
            </div>
    </div>
  )
}

export default Admin