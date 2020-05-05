import React from 'react'
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Paper,
    Grid,
    Typography,
    makeStyles,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Card,
    CardContent,
    CardActions
} from '@material-ui/core'

import DescriptionIcon from '@material-ui/icons/Description'
import { AutoComplete } from 'material-ui';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      width: "100%"
    },
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(9, 109, 217, 0.671)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

    },
    startText:{
        display:"flex",
        flexDirection:"column",
        marginTop: "1rem"
    },
    tips:{
        backgroundColor:"white",
        width:"70%",
        height: "20rem",
        marginLeft:"15%"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    textField:{
      textAlign:'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      alignSelf:"center"
    },
    form: {
      width: '100%', // Fix IE 11 issue.
    //   marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  
    },
    selectorForm: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    selectorText: {
        display:"flex",
        flexDirection:"column",
        marginLeft: "1rem",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    resume_paper: {
        marginLeft: "15px",
        marginRight: "15px",
        width: "auto"
    }
}));

function EndFormReview(props) {

    const classes = useStyles();

    return (
        <div>
            <Grid container componet ="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={3} className={classes.image}>
                    <Grid item className={classes.startText}>
                    <Avatar className={classes.avatar}>
                        <DescriptionIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Start Making Your Resume
                    </Typography>    
                    </Grid>
                    <Grid item className={classes.tips}>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Paper >
                    <Card>
                        <CardContent>
                            <h2>General Info</h2>
                            <p>Your Name is {props.resumeData.firstName} {props.resumeData.lastName}</p>
                            <p>Email Address: {props.resumeData.email}</p>
                        </CardContent>
                        <CardActions>
                            <button >Edit</button>
                        </CardActions>
                    </Card>
                    <Card>
                        <h2>Education</h2>
                        {props.resumeData.education.map(
                            education => {
                                return(
                                    <div key={education.education_added}>
                                        <CardContent>
                                            <p>Type of Education: {education.type}</p>
                                            <p>Name of School: {education.schoolName}</p>
                                            <p>Starting Date: {education.yearIn}</p>
                                            <p>End Date: {education.yearOut}</p>
                                            <p>Type of Certificate/ Name: {education.certificateName}</p>
                                        </CardContent>
                                    </div>
                                )
                            }
                        )}
                    </Card>
                    <Card>
                        <h1>Your Job History</h1>
                        {props.resumeData.jobs.map(
                            
                            job => {
                                return(
                                    <div key={job.job_added}>
                                        <CardContent>
                                            <p>Company Name: {job.companyName} </p>
                                            <p>Job Title: {job.jobTitle}</p>
                                            <p>Starting Date: {job.startYear}</p>
                                            <p>End Date: {job.endYear}</p>
                                            <p>Job Description: {job.jobDescription}</p>
                                        </CardContent>
                                        <CardActions>
                                            <button >Edit</button>  
                                        </CardActions>
                                    </div>

                                )
                            }
                        )}
                    </Card>
                    </Paper>
                    </div>
                </Grid>
            </Grid>
            </div>
            
    )
}

const mapStateToProps = state => {
    return {
        resumeData: state.resumeFormReducer.resumeData,
        resumeError: state.resumeFormReducer.error,
        resumeLoading: state.resumeFormReducer.loading,
    }
  }
  
  export default connect(
    mapStateToProps
  ) (EndFormReview)