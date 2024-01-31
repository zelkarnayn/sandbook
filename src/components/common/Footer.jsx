import React from 'react'
import FooterStyle from '../../styles/footer.module.scss'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'
function Footer() {
  const styles = {
    // textDecoration:"none",
    color: '#2b2b2b'
  
  }
  return (
   
  <AppBar position='static'>
  <Toolbar sx={{color:"#2b2b2b"}}  className={FooterStyle.toolbar}>
  <Typography>SandBook © 2023 <br/>
   366523, Грозный, <br/>
   улица Трошева 7, этаж 3.</Typography>
 
  <Typography ><Link style={styles} to={'/aboutCreators'}>О нас</Link> <br/>
  <Link style={styles} to={'/contactUs'}>Свяжитесь с нами </Link>
  </Typography>

    </Toolbar>
    </AppBar>
   
  )
}

export default Footer