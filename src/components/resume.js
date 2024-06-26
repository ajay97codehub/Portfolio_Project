import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="/img/mypic.jpg"
                alt="mypic"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ajay Kumar Singh</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I’m a student at IIT Kharagpur, pursuing a dual degree (B. Tech + M. Tech) in Engineering. I am a Machine Learning and Data science enthusiast. I am also very interested  in developing applications.</p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>LBS Hall, IIT KHARAGPUR</p>
            <h5>Phone</h5>
            <p>+919800240777</p>
            <h5>Email</h5>
            <p>ajaysingh97.iitkgp@gmail.com</p>
            <h5>Web</h5>
            <a href="https://ajay-singh.herokuapp.com" target='blank'>my website </a> 
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2020}
              schoolName="IIT KHARAGPUR"
              schoolDescription="Dual Degree(B.Tech + M.Tech) from IIT KHARAGPUR "
               />

               <Education
                 
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="World Quant LLC"
              jobDescription="Developed alphas using statistical arbitrage"
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Internship"
                jobDescription="Worked on Identity Resolution "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                      skill="Pyrhon"
                      progress={90}
                      />
                      <Skills
                  skill="HTML/CSS"
                  progress={75}
                  />
              <Skills
                skill="javascript"
                progress={75}
                />
                
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
                      


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
