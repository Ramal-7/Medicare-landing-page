import'./Student.css'
import reactLogo from './react.svg';
function Student(){
const people=[
{   
    id:12,
    name:'Mushahid',
    number: 78,
    image: reactLogo
},
{   id: 9,
    name: 'Ramal',
    number:80,
    image: reactLogo
}
];
return(
    <div>
    <table>
    <thead>
        <tr> 
        <th> <h4>ID</h4></th>
        <th><h4>Language</h4></th>
        <th><h4>Name</h4></th>
        <th><h4>Number</h4></th>
        </tr>
    </thead>
    <tbody>
{ people.map((person)=>(
<tr key={person.id}>    
   <td><h4>{person.id}</h4></td>
   <td><img src={person.image}></img></td>
   <td><h4>{person.name}</h4></td> 
   <td> <h4>{person.number}</h4></td>
   </tr>
   ))}
   </tbody>
   </table>
</div>
);
}
export default Student;