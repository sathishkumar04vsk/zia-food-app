import { Link, List, ListItem } from "@mui/material";
import React from "react";


const Footer = () =>{
    return <div style={{position:"absolute",left:0, width:"100%", bottom:0, borderTop:"1px solid #ccc"}}>
            <div className="my-2 mx-auto w-4/6">
                <div className="grid  grid-cols-12 my-4">
                    <div className="col-span-4"><img style={{width:"100px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" alt="Beast Food" /></div>
                    <div className="col-span-2">
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
                     <div className="col-span-2">
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
                     <div className="col-span-2">
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
                    <div className="col-span-2">
                        <h5>Life at Beast Food</h5>
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