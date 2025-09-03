import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '/src/index.css';

const Logo = () => {
    return (
        <div style={
            {
                display: "flex",
                marginRight: "auto",
                alignItems: "center",
                gap: "10px"
            }
        }>
            <Link to={"/"}>
                <img
                    src="vartalaap.png"
                    alt="vartalaap"
                    width={"30px"}
                    height={"30px"} />
            </Link>
            <Typography sx={{
                display: { md: "block", sm: "none", xs: "none" },
                mr: "auto",
                fontWeight: "8000",
                textShadow: "2px 2px 20px #000"
            }}>
                <span className='text-xl'>VARTALAAP</span>
            </Typography> 
        </div>
    );
}

export default Logo;