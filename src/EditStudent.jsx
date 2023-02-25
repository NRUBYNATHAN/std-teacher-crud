import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export function EditStudent({studentlist}) {
  const {id}=useParams();
const stu=studentlist[id]
console.log(stu)


  const navigate=useNavigate()
   const [image,setImage]=useState("")
   const [name,setName]=useState("")
   const [age,setAge]=useState("")
   const [regno,setRegno]=useState("")
   const [email,setEmail]=useState("")
   const [phone,setPhone]=useState("")
   const [deg,setDeg]=useState("")
  return (
    
      <div  className="Add">
      <TextField name="image" id="outlined-basic" label="image" variant="outlined"  placeholder="image" value={stu.image} onChange={(eve) => setImage(eve.target.value)} />
      <TextField name="name" id="outlined-basic" label="name" variant="outlined"  placeholder="name" value={stu.name} onChange={(eve) => setName(eve.target.value)} />
      <TextField name="age" id="outlined-basic" label="age" variant="outlined"  placeholder="age" value={stu.age} onChange={(eve) => setAge(eve.target.value)} />
      <TextField name="regno" id="outlined-basic" label="reg-no" variant="outlined"  placeholder="reg-no" value={stu.regno} onChange={(eve) => setRegno(eve.target.value)} />
      <TextField name="email" id="outlined-basic" label="email" variant="outlined"  placeholder="email" value={stu.email} onChange={(eve) => setEmail(eve.target.value)} />
      <TextField name="phone" id="outlined-basic" label="phone" variant="outlined"  placeholder="phone" value={stu.phone} onChange={(eve) => setPhone(eve.target.value)} />
      <TextField name="deg" id="outlined-basic" label="deg" variant="outlined"  placeholder="deg" value={stu.deg} onChange={(eve) => setDeg(eve.target.value)} />
      <Button variant="contained"onClick={()=>{
        const newstudent={
          image:image,
          name:name,
          age:age,
          regno:regno,
          email:email,
          phone:phone,
          deg:deg,

        };

        // setStudentList([...studentlist,newstudent])
        console.log(newstudent)
        navigate("/studentlist")
      }}>Edit Student</Button>
      </div>
   
  );

}
