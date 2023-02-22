import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export function AddStudent({studentlist,setStudentList}) {
  const navigate=useNavigate()
   const [image,setImage]=useState("")
   const [name,setName]=useState("")
   const [age,setAge]=useState("")
   const [regno,setRegno]=useState("")
   const [email,setEmail]=useState("")
   const [phone,setPhone]=useState("")
   const [deg,setDeg]=useState("")
  return (
    
      <div className="Add">
      <TextField id="outlined-basic" label="image" variant="outlined"  placeholder="image" onChange={(eve) => setImage(eve.target.value)} />
      <TextField id="outlined-basic" label="name" variant="outlined"  placeholder="name" onChange={(eve) => setName(eve.target.value)} />
      <TextField id="outlined-basic" label="age" variant="outlined"  placeholder="age" onChange={(eve) => setAge(eve.target.value)} />
      <TextField id="outlined-basic" label="reg-no" variant="outlined"  placeholder="reg-no" onChange={(eve) => setRegno(eve.target.value)} />
      <TextField id="outlined-basic" label="email" variant="outlined"  placeholder="email" onChange={(eve) => setEmail(eve.target.value)} />
      <TextField id="outlined-basic" label="phone" variant="outlined"  placeholder="phone" onChange={(eve) => setPhone(eve.target.value)} />
      <TextField id="outlined-basic" label="deg" variant="outlined"  placeholder="deg" onChange={(eve) => setDeg(eve.target.value)} />
      <Button color="secondary" variant="contained"  type="submit" onClick={()=>{
        const newstudent={
          image:image,
          name:name,
          age:age,
          regno:regno,
          email:email,
          phone:phone,
          deg:deg,

        };
      
        setStudentList([...studentlist,newstudent])
        console.log(newstudent)
        navigate("/studentlist")
      }}>Add Student</Button>
      </div>
   
  );

}
