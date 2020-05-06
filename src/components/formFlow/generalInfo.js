import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

//Actions
import {addData} from '../../actions/resumeFormActions.js'

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Paper,
    Box,
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
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
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

function GeneralInfo(props) {

  const [info, setInfo] = useState({
      email: `${props.resumeData.email}`,
      firstName: `${props.resumeData.firstName}`,
      lastName: `${props.resumeData.lastName}`
  })

  const classes = useStyles();

  const nextPage = event => {
    event.preventDefault();
    props.addData(info)
    props.history.push("/form/education")
  }

  const onChange = event => {
    event.preventDefault();
    setInfo({...info, [event.target.name]: event.target.value})
    console.log(info);
  }

  return(
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
              <form className={classes.form} onSubmit={nextPage}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required={true}
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoFocus
                  onChange={onChange}
                  value = {info.firstName}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  name="lastName"
                  label="Last Name"
                  id="lastName"
                  onChange={onChange}
                  value = {info.lastName}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  id="email"
                  onChange={onChange}
                  value = {info.email}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  
                >
                  Next
                </Button>

                
              </form>
            </div>
          </Grid>
        </Grid>
        <button onClick={() => nextPage()}>Next Page</button>
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
  mapStateToProps,
  {addData}
) (GeneralInfo)