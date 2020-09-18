import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import facegenieLogo from '../../assets/images/Facegenie_logo.jpg';
import { TabContent, TabPane, Nav, NavItem, NavLink, Form, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/shaikh-ahmed-reza-3a2b4787/" target="_blank">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const goBack = ()=>{
    window.history.back();
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        overflow: 'hidden'
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1488818138649-d2734488e6d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Login() {
    const classes = useStyles();

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img src={facegenieLogo} alt="facegenie_logo" className="logo_style"></img>

                    <Typography component="h6" variant="h6">
                        Attendance Management System
                     </Typography>

                    <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative', right: '30%', marginTop: '20px' }}>
                        <Link href="#" onClick={goBack}><ArrowBackIcon style={{ color: 'red', fontSize: '20px' }}></ArrowBackIcon></Link>
                        Go Back
                     </div>

                    <Typography component="h5" variant="h5" className="mt-3 mb-3">
                        Enter your details to Log in
                     </Typography>

                    <Nav tabs style={{ width: '400px' }}>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Management
                             </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Admin
                             </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} style={{ border: '1px solid #eee', width: '400px', padding: '10px' }}>
                        <TabPane tabId="1">
                            <Typography component="h6" variant="h6" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '10px' }}>
                                Management Login
                     </Typography>
                            <Form>
                                <FormGroup>
                                    <Input type="email" name="email" placeholder="Enter Management Email Address" autoComplete="none"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" placeholder="Enter Password" autoComplete="none"/>
                                </FormGroup>
                                <FormGroup>
                                    <Link href="#" style={{ float: 'right', fontWeight: 'bold' }}>Forgot password?</Link>
                                </FormGroup>
                                <FormGroup>
                                    <button className="btn btn-danger form-control mt-3 mb-2">Login</button>
                                </FormGroup>
                            </Form>
                            <Label>Don't have an account? <Link href="/register" className="text-danger">Click here</Link> to Sign up</Label>
                        </TabPane>
                        <TabPane tabId="2">
                            <Typography component="h6" variant="h6" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '10px' }}>
                                Admin Login
                     </Typography>
                            <Form>
                                <FormGroup>
                                    <Input type="email" name="email" placeholder="Enter Admin Email Address" autoComplete="none"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" placeholder="Enter Password" autoComplete="none"/>
                                </FormGroup>
                                <FormGroup>
                                    <Link href="#" style={{ float: 'right', fontWeight: 'bold' }}>Forgot password?</Link>
                                </FormGroup>
                                <FormGroup>
                                    <button className="btn btn-danger form-control mt-3 mb-2">Login</button>
                                </FormGroup>
                            </Form>
                            <Label>Don't have an account? <Link href="/register" className="text-danger">Click here</Link> to Sign up</Label>
                        </TabPane>
                    </TabContent>
                </div>
                <Copyright/>
            </Grid>
        </Grid>
    );
}