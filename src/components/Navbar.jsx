import { AppBar, Button, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const  Navbar = ()=>{
    const listTextStyle = { whiteSpace: 'nowrap', overflow: 'visable', textOverflow: 'ellipsis' }
    const navigate = useNavigate();
    return <AppBar sx={{backgroundColor:"white"}}>
       <div className="container mx-auto">
           <Toolbar>
              <div style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"space-between"}}>
                  <div>
                    <Link to={'/'}>
                    <img  className="hover:cursor-pointer" style={{width:"100px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" alt="Beast Food" />
                    </Link></div>
                  <List sx={{display:"flex", flexWrap:'nowrap', gap:1}}>
                    <ListItem component={Link}>
                        <ListItemText className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold"  primary={"About Beast Food"} />
                        </ListItem>
                    <ListItem  component={Link}>
           
                        <ListItemText className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold" primary="Our Business"/>
                        </ListItem>
                    <ListItem  component={Link}>
           
                        <ListItemText className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold" primary={"Delivery For Everyone"} />
                        </ListItem>
                    <ListItem to={'/create'} component={Link}>
                        <ListItemText  className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold" primary="Create"/>
                    </ListItem>
                    <ListItem component={Link}>
                        <ListItemText className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold" primary="Contact"/>
                    </ListItem>
                  </List>
              </div>
            </Toolbar>
       </div>
    </AppBar>
}


export default Navbar;



// fetch for calling api
// xmlhttp request javascript

// fetch(url,{method, headers, body}).then().catch()

// const promise = new Promise()

