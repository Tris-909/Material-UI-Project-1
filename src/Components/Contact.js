import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonArrow from './original';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import mobileBackground from '../assets/mobileBackground.jpg';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        height: '60em',
        paddingBottom: '10em',
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },    
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
        [theme.breakpoints.down("md")]: {
            marginBottom: '2em'
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            marginRight: '0em',
            marginLeft: '0em'
        }
    },
    Message: {
        border: `2px solid ${theme.palette.common.blue}`,
        
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme(); 

    const [name,setName] = useState('');

    const [email,setEmail] = useState('');
    const [emailHelper,setEmailHelper] = useState("");

    const [phone,setPhone] = useState(''); 
    const [phoneHelper,setPhoneHelper] = useState("");

    const [message, setMessage] = useState('');

    const [open,setOpen] = useState(false);

    const [loading,setLoading] = useState(false);

    const [alert, setAlert] = useState({open: false, message: '', backgroundColor: ''});

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const onChange = event => {
        let valid;

        switch(event.target.id) {
            case'email':
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (!valid) {
                    setEmailHelper("Invalid Email");
                } else {
                    setEmailHelper("");
                }

                break;
            case('phone'): 
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if (!valid) {
                    setPhoneHelper("Invalid PhoneNumber");
                } else {
                    setPhoneHelper('');
                }

                break;
            default: 
                break;
        }
    }

    const onNameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const onMessageChangeHandler = (event) => {
        setMessage(event.target.value);
    }

    const onConfirm = () => {
        setLoading(true);
        axios.get('https://us-central1-arcdev-d9a10.cloudfunctions.net/sendMail',
        {params: {
            name: name,
            email: email,
            phone: phone,
            message: message
        }}
        ).then(res => {
            setLoading(false);
            setOpen(false);
            setName('');
            setEmail('');
            setPhone('');
            setMessage(''); 
            setAlert({
                open: true,
                message: 'message sent successfully',
                backgroundColor: '#4BB543'
            });
            console.log(res);
        }).catch(err => {
            setLoading(false);
            setAlert({
                open: true,
                message: 'Failed to sent message, please try again',
                backgroundColor: '#FF3232'
            });
            console.log(err);
        });
    }

    let content = (
        <React.Fragment>
            Continue
        </React.Fragment>
    );

    return(
        <Grid item container direction="row">
            <Grid 
            item 
            container 
            direction="column" 
            justify="center" 
            alignItems="center" 
            style={{marginBottom: matchesMD ? '5em' : 0, marginTop: matchesMD ? matchesXS ? '3em' : '5em' : 0}}
            lg={3} xl={4}>
                <Grid item>
                    <Grid container direction="column">
                    <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{lineHeight: 1}}>Contact Us</Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: theme.palette.common.blue}}>We're waiting.</Typography>
                </Grid>
                <Grid item container style={{marginTop: '2em'}}>
                    <Grid item>
                        <img src={phoneIcon} alt="phone"style={{marginRight: '0.5em'}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: '1rem'}}>
                            <a href="tel:(+61)04159850410" style={{textDecoration: 'none', color: 'inherit'}}> (+61) 041 59850 410</a> 
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container style={{marginBottom: '2em'}}>
                    <Grid item>
                        <img src={emailIcon} alt="email" style={{marginRight: '0.5em', verticalAlign: "bottom"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: '1rem'}}>
                            <a href="mailto: tranminhtri9090@gmail.com" style={{textDecoration: 'none', color: 'inherit'}}> tranminhtri9090@gmail.com</a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" style={{maxWidth: "20em"}}>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField 
                            label="Name" 
                            fullWidth 
                            id="Name" 
                            value={name} 
                            onChange={(e) => onNameChangeHandler(e)}/>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField 
                            label="Email" 
                            error={emailHelper.length !== 0} 
                            helperText = {emailHelper}
                            fullWidth id="email" 
                            value={email} 
                            onChange={(e) => onChange(e)}/>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField 
                            label="Phone" 
                            error={phoneHelper.length !== 0} 
                            helperText = {phoneHelper}
                            fullWidth id="phone" 
                            value={phone} 
                            onChange={(e) => onChange(e)}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth: "20em"}}>
                    <TextField value={message} multiline rows={10} 
                    id="message" onChange={(e) => onMessageChangeHandler(e)} 
                    className={classes.Message} fullWidth
                    InputProps={{disableUnderline: true}}
                    style={{marginTop: '5em'}}/>
                </Grid>
                <Grid item container  justify="center" style={{marginTop: '2em'}}>
                    <Button 
                    disabled={name.length === 0 || 
                            message.length === 0 || 
                            phoneHelper.length !== 0 || 
                            emailHelper.length !== 0 || 
                            email.length === 0 || 
                            phone.length === 0} 
                    variant="contained" 
                    className={classes.sendButton}
                    onClick={() => setOpen(true)}>
                        Send Message
                        <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}}/>
                    </Button>
                </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)} style={{zIndex: 1302}} 
                PaperProps={{style: {paddingLeft: matchesMD ? undefined  : '5em', paddingRight: matchesMD ? undefined : '5em'}}}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Confirm Message
                            </Typography>
                        </Grid>
                        <Grid item container direction="column" style={{maxWidth: "20em"}}>
                            <Grid item style={{marginBottom: '0.5em'}}>
                                <TextField 
                                label="Name" 
                                fullWidth 
                                id="Name" 
                                value={name} 
                                onChange={(e) => onNameChangeHandler(e)}/>
                            </Grid>
                            <Grid item style={{marginBottom: '0.5em'}}>
                                <TextField 
                                label="Email" 
                                error={emailHelper.length !== 0} 
                                helperText = {emailHelper}
                                fullWidth id="email" 
                                value={email} 
                                onChange={(e) => onChange(e)}/>
                            </Grid>
                            <Grid item style={{marginBottom: '0.5em'}}>
                            <TextField 
                                label="Phone" 
                                error={phoneHelper.length !== 0} 
                                helperText = {phoneHelper}
                                fullWidth id="phone" 
                                value={phone} 
                                onChange={(e) => onChange(e)}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth: matchesSM ? '100%' : "20em"}}>
                            <TextField value={message} multiline rows={10} 
                            id="message" onChange={(e) => onMessageChangeHandler(e)} 
                            className={classes.Message} fullWidth
                            InputProps={{disableUnderline: true}}
                            style={{marginTop: '2em'}}/>
                        </Grid>
                        </Grid>
                    <Grid item container justify="space-between" style={{marginTop: '1em'}}>
                        <Grid item>
                            <Button color="primary" onClick={() => setOpen(false)}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button color="primary" disabled={name.length === 0 || 
                                message.length === 0 || 
                                phoneHelper.length !== 0 || 
                                emailHelper.length !== 0 || 
                                email.length === 0 || 
                                phone.length === 0} 
                                onClick={onConfirm}> {loading ? <CircularProgress size={30} /> : content } </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar 
                open={alert.open} 
                message={alert.message} 
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                onClose={() => setAlert({...alert, open:false})}
                autoHideDuration={4000}
                ContentProps={{style: {backgroundColor: alert.backgroundColor}}} />
            <Grid 
                item 
                container 
                justify={matchesMD ? "center" : undefined} 
                direction={matchesMD ? "column" : "row"} 
                alignItems="center" 
                className={classes.background} 
                lg={9} xl={8}>
            <Grid item style={{marginLeft: matchesMD ? '0em' : '3em', textAlign: matchesMD ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h2">
                            Simple Software.<br /> Revolutionary Results.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="subtitle2" style={{fontSize: '1.5rem'}}>
                            Take advantage of the 21st Century.
                        </Typography>
                        <Grid container justify={matchesMD ? "center" : undefined} item> 
                            <Button variant="outlined" className={classes.learnButtonHero} component={Link} to="/revolution">
                                <span style={{marginRight: 8}}>Learn More</span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button component={Link} to="/estimate" variant="contained" className={classes.estimateButton}>
                    Free Estimate
                </Button>
            </Grid>
            </Grid>
        </Grid>
    );
}
