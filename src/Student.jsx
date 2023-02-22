import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function Student({ student,deletestudent,editstudent}) {


  return (
    <Card className="card">
      <img className="img" src={student.image} />
      <CardContent>
        <p>NAME : <span className="span">{student.name}</span></p>
        <p>AGE :<span className="span">{student.age}</span> </p>
        <p>REG_NO :<span className="span">{student.regno}</span> </p>
        <p>EMAIL : <span className="span">{student.email}</span></p>
        <p>PH_NO :<span className="span">{student.phone}</span> </p>
        <p>DEGREE : <span className="span">{student.deg}</span></p>
       {deletestudent}{editstudent}
      </CardContent>
    </Card>
  );
}
