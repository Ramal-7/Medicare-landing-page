import React from "react";
function Header(props){
    const sty={
        header:
        {
        background:"#333", color: "white" , padding: " 10px 15px"
        }
    }
    return(
        <Header style={sty.header}>
            <h1> {props.title}</h1>
        </Header>
    );
}
export default Header;