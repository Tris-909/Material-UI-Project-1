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
        marginTop: '5em',
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
    const [phone,setPhone] = useState(''); 
    const [message, setMessage] = useState('');

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const onNameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const onPhoneChangeHandler = (event) => {
        setPhone(event.target.value);
    }

    const onMessageChangeHandler = (event) => {
        setMessage(event.target.value);
    }

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
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: '1rem'}}>(555) 555-5555</Typography>
                    </Grid>
                </Grid>
                <Grid item container style={{marginBottom: '2em'}}>
                    <Grid item>
                        <img src={emailIcon} alt="email" style={{marginRight: '0.5em', verticalAlign: "bottom"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: '1rem'}}>tranminhtri9090@gmail.com</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" style={{maxWidth: "20em"}}>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField label="Name" fullWidth id="Name" value={name} onChange={(e) => onNameChangeHandler(e)}/>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField label="Email" fullWidth id="email" value={email} onChange={(e) => onEmailChangeHandler(e)}/>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField label="Phone" fullWidth id="phone" value={phone} onChange={(e) => onPhoneChangeHandler(e)}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth: "20em"}}>
                    <TextField value={message} multiline rows={10} 
                    id="message" onChange={(e) => onMessageChangeHandler(e)} 
                    className={classes.Message} fullWidth
                    InputProps={{disableUnderline: true}}/>
                </Grid>
                <Grid item container  justify="center" style={{marginTop: '2em'}}>
                    <Button variant="contained" className={classes.sendButton}>
                        Send Message
                        <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}}/>
                    </Button>
                </Grid>
                    </Grid>
                </Grid>
            </Grid>
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
