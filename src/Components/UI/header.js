import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// function take from navbar Material-UI
function ElevationScroll(props) {

    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true, // little delay for effect when user start scrolling and we want to disable it.
      threshold: 0, // Where the effect start, 0 when the user at the top of the page
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}
  
const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: '1.8em'
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '1.3em'
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    Tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '15px',
        marginLeft: '50px',
        marginRight: '25px',
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    logoContainer: {
        padding: '0px',
        "&:hover" : {
            backgroundColor: 'transparent'
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white', 
        borderRadius: '0px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        color: 'white', 
        "&:hover": {
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: '50px',
        width: '50px'
    }, 
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal +1
    }
}));

export default function Header(props) {
    const classes = useStyles(); // for Developer Styles 
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [anchorEl, setAnchorEl] = useState(null); // Control Which tab has the Menu Options
    const [open, setOpen] = useState(false); // Control "Open" and "Closed" status of Menu
    const [openDrawer, setOpenDrawer] = useState(false);

    const handlerDrawerOpen = () => {
        setOpenDrawer(true);
    }

    const handlerDrawerClose = () => {
        setOpenDrawer(false);
    }

    const onChangeHandler = (e, value) => {
        // Each tab in tabs has a value props 
        // On the tabs (tabs contain tab) also have a value props
        // If the value props in tabs equal value props to tab then that tab has the active classStyle 
        props.setIsActive(value);
    }

    const handlerClick = (e) => {
        // anchorEl props contain the menu itself 
        // combine anchorEl + open 
        // TH1: if open is false then anchorEl is equal to null
        // TH2: if open is true then anchorEl will be the menu 
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handlerMenuClick = (e, index) => {
        setAnchorEl(null);
        setOpen(false);
        props.setSelectedIndex(index);
    }

    const handlerClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    const menuOptions = [{name: "Services", link: "/services"}, 
                        {name: "Custome Sofware Development", link: '/customsoftware'},
                        {name: "iOS/Android App Development", link: '/mobileapps'},
                        {name: "Web Development", link: '/websites'}];

    // useEffect is used to control the active class and keep it that way even if you refresh the page
    useEffect(() => {
        if (window.location.pathname === "/" && props.isActive !== 0) {
            props.setIsActive(0); 
        } else if (window.location.pathname === "/services" && props.isActive !== 1) {
            props.setIsActive(1);
        } else if (window.location.pathname === "/revolution" && props.isActive !== 2) {
            props.setIsActive(2);
        } else if (window.location.pathname === "/about" && props.isActive !== 3) {
            props.setIsActive(3);
        } else if (window.location.pathname === "/contact" && props.isActive !== 4) {
            props.setIsActive(4);
        } else if (window.location.pathname === "/estimate" && props.isActive !== 5) {
            props.setIsActive(5);
        } else if (window.location.pathname === "/customsoftware" && props.isActive !== 1) {
            props.setIsActive(1);
            props.setSelectedIndex(1);
        } else if (window.location.pathname === "/mobileapps" && props.isActive !== 1) {
            props.setIsActive(1);
            props.setSelectedIndex(2);
        } else if (window.location.pathname === "/websites" && props.isActive !== 1) {
            props.setIsActive(1);
            props.setSelectedIndex(3);
        } else if (window.location.pathname === "/estimate" && props.isActive !== 5) {
            props.setIsActive(5);
        }  
        // eslint-disable-next-line
    }, [props.isActive, props.selectedIndex]);

    const tabs = (
        <React.Fragment>
                    <Tabs value={props.isActive} onChange={onChangeHandler} indicatorColor="primary" className={classes.tabContainer}>
                        <Tab 
                            className={classes.Tab} 
                            component={Link} 
                            to="/" 
                            label="Home" />
                        <Tab 
                            aria-owns={anchorEl ? "simple-menu" : undefined}
                            aria-haspopup={anchorEl ? "true" : undefined}  
                            onMouseOver={handlerClick}
                            className={classes.Tab}
                            component={Link} 
                            to="/services" 
                            label="Services" />
                        <Tab 
                            className={classes.Tab} 
                            component={Link} 
                            to="/revolution" 
                            label="The Revolution" />
                        <Tab 
                            className={classes.Tab} 
                            component={Link}
                            to="/about" 
                            label="About Us" />
                        <Tab 
                            className={classes.Tab} 
                            component={Link} 
                            to="/contact" 
                            label="Contact Us" />
                    </Tabs>
                    <Button variant="contained" color="secondary" onClick={() => {props.setIsActive(5)}} component={Link} to="/estimate" className={classes.button}>
                        Free Estimate
                    </Button>
                    <Menu 
                    id="simple-menu" 
                    anchorEl={anchorEl} 
                    open={open} 
                    onClose={handlerClose} 
                    classes={{paper: classes.menu}}
                    MenuListProps={{onMouseLeave: handlerClose}}
                    elevation={0}
                    keepMounted
                    style={{zIndex: 1302}}>
                        {menuOptions.map((option, index) => (
                            <MenuItem 
                                key = {`${option}${index}`} 
                                component={Link} 
                                to={option.link}
                                classes={{root: classes.menuItem}}
                                onClick={(event) => {handlerMenuClick(event, index); props.setIsActive(1); handlerClose();}}
                                selected={index === props.selectedIndex && props.isActive === 1}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer} 
                onClose={handlerDrawerClose}
                onOpen={handlerDrawerOpen}
                classes={{paper: classes.drawer}}>
                    <div className={classes.toolbarMargin} />
                    <List disablePadding>
                        <ListItem divider button selected={props.isActive === 0} classes={{selected: classes.drawerItemSelected}} onClick={() => {handlerDrawerClose(); props.setIsActive(0);}} component={Link} to="/">
                            <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
                        </ListItem>
                        <ListItem divider button selected={props.isActive === 1} classes={{selected: classes.drawerItemSelected}} onClick={() => {handlerDrawerClose(); props.setIsActive(1);}} component={Link} to="/services">
                            <ListItemText className={classes.drawerItem} disableTypography>Services</ListItemText>
                        </ListItem>
                        <ListItem divider button selected={props.isActive === 2} classes={{selected: classes.drawerItemSelected}} onClick={() => {handlerDrawerClose(); props.setIsActive(2);}} component={Link} to="/revolution">
                            <ListItemText className={classes.drawerItem} disableTypography>The Revolution</ListItemText>
                        </ListItem>
                        <ListItem divider button selected={props.isActive === 3} classes={{selected: classes.drawerItemSelected}} onClick={() => {handlerDrawerClose(); props.setIsActive(3);}} component={Link} to="/about">
                            <ListItemText className={classes.drawerItem} disableTypography>About Us</ListItemText>
                        </ListItem>
                        <ListItem divider button selected={props.isActive === 4} classes={{selected: classes.drawerItemSelected}} onClick={() => {handlerDrawerClose(); props.setIsActive(4);}} component={Link} to="/contact">
                            <ListItemText className={classes.drawerItem} disableTypography>Contact Us</ListItemText>
                        </ListItem>
                        <ListItem divider button selected={props.isActive === 5} classes={{root: classes.drawerItemSelected, selected: classes.drawerItem}} onClick={() => {handlerDrawerClose(); props.setIsActive(5);}} component={Link} to="/estimate" className={classes.drawerItemEstimate}>
                            <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                        </ListItem>
                    </List>
             </SwipeableDrawer>        
            <IconButton disableRipple className={classes.drawerIconContainer} onClick={handlerDrawerOpen}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
            <AppBar position="fixed"    className={classes.appbar}>
                <Toolbar disableGutters>
                    <Button component={Link} to="/" disableRipple className={classes.logoContainer} onClick={() => props.setIsActive(0)}>
                        <img src={logo} className={classes.logo} alt="Arc Logo"/>
                    </Button>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>   
    );
}