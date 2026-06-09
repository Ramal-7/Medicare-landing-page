function New(){
    const name="john";
    const isNameShowing =true;
    return(
<h2> hi, i am {isNameShowing ? name: 'someone'}! </h2>
    );
}
export default New;