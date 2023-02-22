import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export function EditTeacher({teacherlist}) {
  const {id}=useParams();
const tea=teacherlist[id]
console.log(tea)


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
      <TextField id="outlined-basic" label="image" variant="outlined"  placeholder="image" value={tea.image} onChange={(eve) => setImage(eve.target.value)} />
      <TextField id="outlined-basic" label="name" variant="outlined"  placeholder="name" value={tea.name} onChange={(eve) => setName(eve.target.value)} />
      <TextField id="outlined-basic" label="age" variant="outlined"  placeholder="age" value={tea.age} onChange={(eve) => setAge(eve.target.value)} />
      <TextField id="outlined-basic" label="reg-no" variant="outlined"  placeholder="reg-no" value={tea.regno} onChange={(eve) => setRegno(eve.target.value)} />
      <TextField id="outlined-basic" label="email" variant="outlined"  placeholder="email" value={tea.email} onChange={(eve) => setEmail(eve.target.value)} />
      <TextField id="outlined-basic" label="phone" variant="outlined"  placeholder="phone" value={tea.phone} onChange={(eve) => setPhone(eve.target.value)} />
      <TextField id="outlined-basic" label="deg" variant="outlined"  placeholder="deg" value={tea.deg} onChange={(eve) => setDeg(eve.target.value)} />
      <Button color="success" variant="contained" type="submit" onClick={()=>{
        const newteacher={
          image:image,
          name:name,
          age:age,
          regno:regno,
          email:email,
          phone:phone,
          deg:deg,

        };

        // setStudentList([...studentlist,newstudent])
        console.log(newteacher)
        navigate("/teacherlist")
      }}>Edit teacher</Button>
      </div>
   
  );

}
