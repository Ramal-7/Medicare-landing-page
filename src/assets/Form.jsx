import './Form.css'
function Form(){
    return(
        <div className="Formbox">
        <h1>Form</h1>
<form >
<input type="text" placeholder="Name" />
<input type="email" placeholder="Email"  />
<input type="text" placeholder='Address'/>
</form>
</div>
    )
}
export default Form;