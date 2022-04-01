import react, { useState } from 'react';
import Button, {ButtonProps} from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#25a56a',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#25a56a',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#25a56a',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#25a56a',
      },
    },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#fff'),
    backgroundColor: '#25a56a',
    '&:hover': {
      backgroundColor: '#222227',
    },
}));

interface Event{
    event: {
        idEvent: string;
        nameEvents: string;
        image: string;
        date: string;
        time: string;
        address: string;
        typeTicket: {
            nameTicket: string;
            price: number;
        }[],
        ticket: number;
        description: string;
    }
}

function ButtonDialog({
    event
}: Event) {
    const [open, setOpen] = useState(false);
    const [typeTicket, setTypeTicket] = useState<any>('');
    const [numberTicket, setNumberTicket] = useState<number>(1);

    const handleChange = (event: SelectChangeEvent) => {
        setTypeTicket(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="uec__buy_ticket">
            <Button variant="outlined" className="uec__buy" onClick={handleClickOpen}>
                <span className="uec__icon_ticket">
                    <ConfirmationNumberIcon />
                </span>
                <p>Buy ticket</p>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="uec__paid"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"To buy tickets"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className="uec_display_flex uec__margin_bottom_20" id="alert-dialog-description">
                        <span className="uec__sign_label">Your balance: </span>
                        <span className="uec__sign_value">$9999</span>
                    </DialogContentText>
                    <Box sx={{ minWidth: 340, marginBottom: '20px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type Ticket</InputLabel>
                            <Select
                                value={typeTicket}
                                label="Type Ticket"
                                onChange={handleChange}
                                color="primary"
                            >
                                {
                                    event.typeTicket.map((ticket,index)=>{
                                        return(
                                            <MenuItem value={ticket.price}>{ticket.nameTicket}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', minWidth: 340, marginBottom: '20px' }}>
                        <ConfirmationNumberIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <CssTextField 
                            id="input-number-ticket" 
                            label="Number ticket" 
                            variant="standard" 
                            type="number"
                            defaultValue={numberTicket}
                            InputProps={{ inputProps: { min: 1} }}
                            onChange={(e)=>{setNumberTicket(e.target.value.length === 0 ? -1 : parseInt(e.target.value));}}
                        />
                    </Box>
                    {
                        numberTicket !== -1 ?
                        <DialogContentText className="uec_display_flex uec__margin_bottom_8" id="alert-dialog-description">
                            <span className="uec__sign_label">Amount to be paid: </span>
                            <span className="uec__sign_value">${typeTicket*numberTicket}</span>
                        </DialogContentText>
                        :null
                    }
                </DialogContent>
                <DialogActions>
                    <ColorButton className="button__cancel" onClick={handleClose}>Cancel</ColorButton>
                    <ColorButton onClick={handleClose} autoFocus>Buy</ColorButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ButtonDialog;