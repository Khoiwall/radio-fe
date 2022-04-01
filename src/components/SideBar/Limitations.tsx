import React,{useState} from 'react';
import {Link} from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import '../../asset/css/SideBar.css'
import tag from '../../util/tab'

function Limitations(){
    const [imgHover, setImgHover] = useState(-1);
    const [pathname, setPathname] = useState(window.location.pathname);
    return(
        <MenuList>
            {
                tag.map((_tag,index)=>{
                    return(
                        <Link to={_tag.url} key={index}>
                            <MenuItem className="sb__nav__text sb__nav_hover"
                                onMouseOver={()=>{setImgHover(index)}} 
                                onMouseOut={()=>{setImgHover(-1)}}
                                onClick={()=>{setPathname(_tag.url)}}
                            >
                                {
                                    pathname === _tag.url 
                                    ?
                                    <img className="sb__icon_tag" src={_tag.imgHover} alt={_tag.name}/>
                                    :
                                    <img className="sb__icon_tag" src={imgHover === index ? _tag.imgHover : _tag.img} alt={_tag.name}/>
                                }
                                <Typography variant="inherit">{_tag.name}</Typography>
                            </MenuItem>
                        </Link>
                    )
                })
            }
        </MenuList>
    )
}

export default Limitations;