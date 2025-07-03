import { AppBar, Button, FormControlLabel, List, ListItem, ListItemText, styled, Switch, Toolbar } from "@mui/material";
import React, { useCallback, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APPContext } from "../App";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

const  Navbar = ()=>{
    const listTextStyle = { whiteSpace: 'nowrap', overflow: 'visable', textOverflow: 'ellipsis' }
    const navigate = useNavigate();
    const {mode, setMode} = useContext(APPContext);
    const itemColor = {color:mode==='light'?'#374151':''};
    return <AppBar sx={{backgroundColor:mode==="light"?"white":''}}>
       <div className="container mx-auto">
           <Toolbar>
              <div style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"space-between"}}>
                  <div>
                    <Link to={'/'}>
                    <img  className="hover:cursor-pointer" style={{width:"100px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" alt="Beast Food" />
                    </Link></div>
                  <List sx={{display:"flex", flexWrap:'nowrap', gap:1}}>
                    <ListItem component={Link}>
                        <ListItemText sx={itemColor} className="overflow-visible whitespace-nowrap overflow-ellipsis hover:!text-red-700 !font-bold"  primary={"About Beast Food"} />
                        </ListItem>
                    <ListItem  component={Link}>
                        <ListItemText to={'/count'} component={Link} sx={itemColor} className="overflow-visible whitespace-nowrap overflow-ellipsis hover:!text-red-700 !font-bold" primary="Counter"/>
                        </ListItem>
                    <ListItem to={'/my-todo'} component={Link}>
           
                        <ListItemText sx={itemColor} className="overflow-visible whitespace-nowrap overflow-ellipsis hover:!text-red-700 !font-bold" primary={"Todo"} />
                        </ListItem>
                    <ListItem to={'/create'} component={Link}>
                        <ListItemText sx={itemColor} className="overflow-visible whitespace-nowrap overflow-ellipsis hover:!text-red-700 !font-bold" primary="Create"/>
                    </ListItem>
                    <ListItem component={Link}>
                        <ListItemText sx={itemColor} className="overflow-visible whitespace-nowrap overflow-ellipsis hover:!text-red-700 !font-bold" primary="Contact"/>
                    </ListItem>
                    <FormControlLabel value={mode} onClick={()=>setMode(prev=>prev==='light'?"dark":"light")} control={<MaterialUISwitch sx={{ m: 1 }} />} />
                    
                   
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

