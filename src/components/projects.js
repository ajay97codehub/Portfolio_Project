import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
const url_link='url(data:image/jpeg;base64,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) center / cover';
const url_link1='url(https://wallpaperaccess.com/full/1614824.jpg)center/cover'
const url_link2='url(https://wallpaperaccess.com/full/1704443.jpg)center/cover'
const url_link3='url(https://prod-discovery.edx-cdn.org/media/course/image/66f81e22-3e81-44a4-8838-dc529a099be5-d3f0f3b8af0a.small.jpg)center/cover'
const url_link4='url(https://reactapp.ir/wp-content/uploads/reactjs.jpg)center/cover'
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }


  toggleCategories() {
    
    if(this.state.activeTab === 0){
      
      return(
    
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:url_link}} >Python Project #1</CardTitle>
            <CardText>
            In this project I have Developed a GUI using Tkinter for better data manupulation and visualization
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: url_link}} >Python Project #2</CardTitle>
            <CardText>
            This project is all about developmemt of Entity Resolusion using Machine Learning and Python 
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:url_link }} >Python Project #3</CardTitle>
            <CardText>
              In this project I had developed a data analytics solution platform for data analytics without coding
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        


      )
    } else if(this.state.activeTab === 1) {
      
      return (
      
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',textAlign:"center", background:url_link1}} >Classification problem</CardTitle>
            <CardText>
            In this project,I have developed a classification model for Loan Default Prediction 
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',textAlign:"center", background:url_link2}} >Regression problem </CardTitle>
            <CardText>
            In this project,predicted the sale of an automobile company using machine learning regression model
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',textAlign:"center", background:url_link3}} >Time series forecast </CardTitle>
            <CardText>
            In this project,sales for a game company have been forcasted for the next 3 month
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
      )
    } else if(this.state.activeTab === 2) {
      
      return (
        
        <div>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',textAlign:"center", background:url_link4}} >React Project #1</CardTitle>
            <CardText>
            This portfolio website is developed by using react
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
      )
    } 
    // else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    // }

  }



  render() {
    
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Python</Tab>
          <Tab>Data Science</Tab>
          <Tab>React</Tab>
          {/* <Tab>MongoDB</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
