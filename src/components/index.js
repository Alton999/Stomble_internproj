import React from 'react';
import Navbar from './navbar/navbar';
import About from './content/About';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/core/styles';
// import Projects from './projects/projects';

const useStyles = makeStyles({
    particlesCanva: {
      position:'absolute',
      opacity: '0.3'
    }
  })

  
const Home = () => {
    const classes = useStyles();
    return (
       <div>
            <Navbar/>
            <About/>
            {/* Include the required parameters for the particle background */}
            <Particles
            canvasClassName={classes.particlesCanva}
            params={{
                particles: {
                    //Value controls the intensity and number of particles at once
                number:{
                    value: 50,
                    density: {
                    enable: true,
                    value_area: 900
                    }
                },
                // Creates a shadow effect from the lines
                line_linked: {
                    shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 5
                    }
                },
                // Controls the shape of the growing individual particles
                shape: {
                    type: 'circle',
                    stroke: {
                    width: 1,
                    color: '#d35400'
                    }
                },
                //Size of the shape which is currently set to animate
                size: {
                    value: 8,
                    random: true,
                    anim: {
                    enable: true,
                    speed: 5,
                    size_min: 0.1,
                    sync: true
                    }
                },
                //Controls the min and max value of the animated opacity
                opacity: {
                    value: 1,
                    random: true,
                    anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: true
                    }
                }
                }
            }
            }
      /> 
       </div> 
        
    )
}

export default Home;