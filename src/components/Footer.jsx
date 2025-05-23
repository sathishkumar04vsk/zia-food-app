import { Link, List, ListItem } from "@mui/material";
import React from "react";


const Footer = () =>{
    return <div style={{position:"absolute",left:0, width:"100%", bottom:0, borderTop:"1px solid #ccc"}}>
            <div style={{maxWidth:"960px", margin:"10px auto"}}>
                <div style={{display:"flex", gap:"10px"}}>
                    <div><img style={{width:"100px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" alt="Beast Food" /></div>
                    <div>
                        <h5>Company</h5>
                        <List>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>Invertor Relate</ListItem>
                            <ListItem component={Link}>Career</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                        </List>
                    </div>
                     <div>
                        <h5>Contact us</h5>
                        <List>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                        </List>
                    </div>
                     <div>
                        <h5>Available In</h5>
                        <List>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                            <ListItem component={Link}>About Us</ListItem>
                        </List>
                    </div>
                </div>
            </div>
    </div>
}

export default Footer;