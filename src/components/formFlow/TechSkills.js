import React, {useState} from 'react'
import { connect } from 'react-redux';

//Actions
import {addTechSkill} from '../../actions/resumeFormActions.js'


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
    Chip
} from '@material-ui/core'

import DescriptionIcon from '@material-ui/icons/Description'
// import { blue } from '@material-ui/core/colors';

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
        marginBottom: '100px'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    chipContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(1.2),
    },
}));

function TechSkills(props) {

  const [info, setInfo] = useState({
    id: Date.now(),
    skill: ""
  })

  const classes = useStyles();

  const nextPage = event => {
    event.preventDefault();
    props.addTechSkill(info);
    props.history.push("/form/work")
  }

  const anotherSkill = event => {
    event.preventDefault();
    props.addTechSkill(info)
    setInfo({
        id: Date.now(),
        skill: ""
    })
  }
  const onChange = event => {
    event.preventDefault();
    setInfo({...info, [event.target.name]: event.target.value})
    console.log(info);
  }

  const handleDelete = (skillToDelete) => () => {
    setInfo((skillInfo) => skillInfo.filter((skill) => skill.id !== skillToDelete.id));
    console.log(info)
  };

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
                <Typography component="h1" variant="h5">
                    Tell us about some of the technical skills that you possess!
                </Typography>
                <Typography color="grey" component="h5" variant="h7">
                    (CSS, HTML, JS, React, Redux, JAVA, NodeJS, GraphQL, Express, Postgres, SQLite, Knex,etc)
                </Typography>  
                <form className={classes.form} onSubmit={nextPage}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="skill"
                    label="Tech Skill"
                    id="skill"
                    onChange={onChange}
                    value = {info.skill}
                    />

                    <Paper component="ul" square= "true" className={classes.chipContainer}>
                        <Chip
                            label="Your Skills:"
                            className={classes.chip}
                            color="primary"
                        />
                        {props.resumeData.techSkills.map((data) => {

                            return (
                            <li key={data.id}>
                                <Chip
                                label={data.skill}
                                onDelete={handleDelete(data)}
                                className={classes.chip}
                                />
                            </li>
                            );
                        })}
                    </Paper>

                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={anotherSkill}
                    >
                    Add Another Skill
                    </Button>

                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    Next Form
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
  {addTechSkill}
) (TechSkills)