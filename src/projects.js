import React from 'react';
import { Image, Reveal, Segment, Header, Icon, Container, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import profile from './profile.jpg';
import Menu_ from './menu.js';
import Footer from './footer.js';


function Projects() {
  return(
    <div className="Projects" id="outer-container">
      <Menu_/>
    <main id="page-wrap">
      <Segment.Group>
        <Segment>
          <Header icon as='h1'>
            <Reveal animated='fade' >
              <Reveal.Content visible>
                <Image circular size='medium' src={profile} />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image circular size='medium' src={profile} />
              </Reveal.Content>
            </Reveal>
            <Header.Content>Erik Pan</Header.Content>
            <Header.Subheader>
              <a href='mailto: zp3@illinois.edu'>Email</a>
              {" | "}
              <a href='https://github.com/ericpzh'>@ericpzh</a>
            </Header.Subheader>
          </Header>
        </Segment>
        <Segment >
        <h2/>

          <Container text textAlign='left' >
            <b> <a href='https://ise.illinois.edu/undergraduate/senior-engineering-program.html' > Cylinder Project Line Simulation for Vertical Integration Part Flow</a>, Caterpillar  </b>
            <List as='ul'>
              <List.Item as='li'>Developed a Pro Model discrete event simulation model for Caterpillar’s 3500 series engine cylinder liner machining line at Mapleton, IL reflecting the latest production process change to the production line.</List.Item>
              <List.Item as='li'>The model captures the part flow of two different engine liners running in the same machining line, and the changeover process between the two type of liners. The model also considers shift changes as well as machine breakdown using the maintenance record.</List.Item>
              <List.Item as='li'>Using the model, the senior design project team makes suggestion on new equipment purchase, new part flow, and new production schedule which could meet the targeted demand while minimizing the cost.</List.Item>
            </List>
            <b> <a  href='https://vtubersfeed.web.app/'> Vtubers feed </a> </b>
            <List as='ul'>
              <List.Item as='li'>An Android & IOS App that integrates news feeds from YouTube, Twitter, and Bilibili of ‘virtual youtubers’ and provide them to the users.</List.Item>
              <List.Item as='li'>The main app was written with React Native and Redux aided by Expo and Native Base, while the backend was implemented by Express JS with Mongo DB, and the official website was implemented using React Hooks and hosted on Firebase. </List.Item>
            </List>
            <b> <a  href='https://longislandwithouticetea.github.io/cs498rk_fp/#/'> WOWS Database </a> </b>
            <List as='ul'>
              <List.Item as='li'>A database website for a game built with React JS as frontend, Express JS as backend and MySQL as database. Users can do basic queries over all in-game vehicle, their in-game statistics and view their performance by graphs created with Plotly.JS. </List.Item>
            </List>
            <b> <a href='https://www.youtube.com/watch?v=NQWfc4mLqfo'> Airliner Boarding Stimulation </a> </b>
            <List as='ul'>
              <List.Item as='li'>Created a discrete event stimulation model of the boarding process of an aircraft with the capability to create an animation visualizing the process with python. </List.Item>
              <List.Item as='li'>Using the model, the team compares the total boarding time of different boarding method to make conclusion.</List.Item>
            </List>
            <b> Financial Engineering Toolbox </b>
            <List as='ul'>
              <List.Item as='li'>A python project with SQLite database and HTML user interface hosted by flask that is able to price options under binomial model and is able to calculate early exercise boundary for American style options, select optimal portfolio under capital asset pricing model with data from quandl API, and do mock trading with real-time data from yahoo finance website.</List.Item>
            </List>
            <b> OR Solver </b>
            <List as='ul'>
              <List.Item as='li'>Using python to build a program that can solve various of introductory operation research problems such as solving linear program with simple method, solving zero-sum game with linear program formulation. </List.Item>
              <List.Item as='li'>Using the program to build an AI based on minimax algorithm for the board game -- breakthrough.</List.Item>
            </List>
            <b> <a href='https://wiki.illinois.edu/wiki/display/ECE110HLSF15/Mouse+Glove' > Mouse Glove </a> </b>
            <List as='ul'>
              <List.Item as='li'>The honor class project team utilized touch sensors, gyroscope, accelerometer, and Arduino broad mounted on a glove to simulate mouse and joystick movement on Windows. </List.Item>
              <List.Item as='li'>The workflow is that the Arduino broad first collects data from the sensors, parses the data into commands, transfers the commands via Bluetooth, and a java program receives the command on Windows and control the mouse movement.</List.Item>
            </List>

            <h1/>

          </Container>
        </Segment>
        </Segment.Group >
        </main>

        <Footer/>
      </div>
    );
  }

  export default Projects;
