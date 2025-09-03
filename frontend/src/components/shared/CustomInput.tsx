import { TextField } from '@mui/material';

type Props = {
    name: string
    type: string
    label: string
}
function CustomInput(props: Props) {
    return (
        <TextField
            InputLabelProps={{ 
                style: {
                     color: "white" 
                }
            }}
            className="textField-root"
            name={props.name}
            label={props.label}
            type={props.type}
            InputProps={{
                style: {
                    width: "400px",
                    borderRadius: 10,
                    fontSize: 20,
                    color: "white"
                }
            }}
            margin='normal'>

        </TextField>
    )
}

export default CustomInput