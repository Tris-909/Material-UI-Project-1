import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
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
        textTransform: 'none',
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
        }  else if (window.location.pathname === "/customsoftware" && props.isActive !== 1) {
            props.setIsActive(1);
            props.setSelectedIndex(1);
        } else if (window.location.pathname === "/mobileapps" && props.isActive !== 1) {
            props.setIsActive(1);
            props.setSelectedIndex(2);
        } else if (window.location.pathname === "/websites" && props.isActive !== 1) {
            props.setIsActive(1);
            props.setSelectedIndex(3);
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
                    <Button variant="contained" color="secondary" component={Link} to="/estimate" className={classes.button}>
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
                        <ListItem divider button classes={{root: classes.drawerItemSelected, selected: classes.drawerItem}} onClick={() => {handlerDrawerClose()}} component={Link} to="/estimate" className={classes.drawerItemEstimate}>
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
                    <Button component={Link} to="/" style={{textDecoration: 'none'}} disableRipple className={classes.logoContainer} onClick={() => props.setIsActive(0)}>
                        <svg className={classes.logo} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139">
                        <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300; }.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                        <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z"/><path className="st0" d="M-1 139h479.92v.01H-1z"/><text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text><text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text><path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"/><path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9"/><path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z"/><g id="Group_186" transform="translate(30.153 11.413)"><g id="Group_185"><g id="Words"><path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"/></g></g></g><path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"/></svg>
                    </Button>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>   
    );
}