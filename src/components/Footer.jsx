import { Box, Link, List, ListItem } from "@mui/material";
import React, { useEffect, useRef } from "react";


const Footer = () =>{
    const listItemClass = "!text-gray-500 hover:!text-gray-700"
    
    
    return <Box >
        <div className="font-mono py-6 border-t left-0 w-full bottom-0">
                <div className="my-2 container mx-auto">
                    <div className="grid  grid-cols-12 my-4">
                        <div className="col-span-4"><img style={{width:"100px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" alt="Beast Food" /></div>
                        <div className="col-span-2 px-4">
                            <h5 className="px-3 text-lg font-bold">Company</h5>
                            <List>
                                <ListItem className={listItemClass} component={Link}>About Us</ListItem>
                                <ListItem className={listItemClass} component={Link}>Invertor Relate</ListItem>
                                <ListItem className={listItemClass} component={Link}>Career</ListItem>
                                <ListItem className={listItemClass} component={Link}>BeastFood One</ListItem>
                                <ListItem className={listItemClass} component={Link}>BeastFood Dineout</ListItem>
                                <ListItem className={listItemClass} component={Link}>BeastFood Genie</ListItem>
                            </List>
                        </div>
                         <div className="col-span-2 px-4">
                            <h5 className="px-3 text-lg font-bold" >Contact us</h5>
                            <List>
                                <ListItem className={listItemClass} component={Link}>Help & Support</ListItem>
                                <ListItem className={listItemClass} component={Link}>Partner with us</ListItem>
                                <ListItem className={listItemClass} component={Link}>Ride with us</ListItem>
                                <h5 className="px-3 text-lg font-bold">Legal</h5>
                                <ListItem className={listItemClass} component={Link}>Terms & Conditions</ListItem>
                                <ListItem className={listItemClass} component={Link}>Cookie Policy</ListItem>
                                <ListItem className={listItemClass} component={Link}>Privacy Policy</ListItem>
                            </List>
                        </div>
                         <div className="col-span-2 px-4">
                            <h5  className="px-3 text-lg font-bold" >Available In</h5>
                            <List>
                                <ListItem className={listItemClass} component={Link}>Bangalore</ListItem>
                                <ListItem className={listItemClass} component={Link}>Gurgaon</ListItem>
                                <ListItem className={listItemClass} component={Link}>Hyderabad</ListItem>
                                <ListItem className={listItemClass} component={Link}>Delhi</ListItem>
                                <ListItem className={listItemClass} component={Link}>Mumbai</ListItem>
                                <ListItem className={listItemClass} component={Link}>Pune</ListItem>
                            </List>
                        </div>
                        <div className="col-span-2">
                            <h5 className="px-3 text-lg font-bold" >Life at Beast Food</h5>
                             <List>
                                <ListItem className={listItemClass} component={Link}>Explore with Beast Food</ListItem>
                                <ListItem className={listItemClass} component={Link}>Beast Food News</ListItem>
                                <ListItem className={listItemClass} component={Link}>Snackables</ListItem>
                               <h5  className="px-3 text-lg font-bold" >Social Links</h5>
                            </List>
                        </div>
                    </div>
                </div>
        </div>
    </Box>
}

export default Footer;