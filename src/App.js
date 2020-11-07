import React from 'react';
import { Image, Reveal, Segment, Header, Icon, Container, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import profile from './profile.jpg';
import profile_hidden from './profile_hidden.jfif';
import Menu_ from './menu.js';
import Footer from './footer.js';


function App() {
  return (
    <div className="App" id="outer-container">
      <Menu_/>
    <main id="page-wrap">
      <Segment.Group >
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

        <Segment>

          <h2/>
          <Container text textAlign='left'>
            <Header as='h3'>
              <Icon name='graduation cap'/>
              <Header.Content>Education</Header.Content>
            </Header>
            <b> <a href='https://ise.illinois.edu/'> Unitveristy of Illinois at Urbana-Champaign, 2021 </a> </b>
            <p>
            Master of Science in Industrial Engineering & Advanced Analytics Concentration , GPA:3.88/4.0
            </p>
            <b> <a href='https://ise.illinois.edu/'> Unitveristy of Illinois at Urbana-Champaign, 2019 </a> </b>
            <p>
            Bachelor of Science in Industrial Engineering & Minor in Computer Science , GPA:3.88/4.0
            </p>

            <b>           Research           </b>
            <List as='ul'>
              <List.Item as='li'>  <a href='https://predictrend-6a51c.web.app/'> Time Series Trend Prediction with Machine Learning. </a> </List.Item>
              <List.Item value='-'> Predict the 2020 US election betting odds, SNP500 time series data using various of time series prediction model including
              Exponential Smoothing, Auto-Regressive Integrated Moving Average (ARIMA) model, Recurrent Neural Networks (RNN)
              such as Long Short Term Memory (LSTM), Gated Recurrent Unit (GRU) and CEEMDAN.

              </List.Item>

              <List.Item as='li'>  <a href="https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings-abstract/IDETC-CIE2020/83952/V006T06A030/1089947"> Switching From Petroleum- to Bio-Based Plastics: Visualization Tools to Screen Sustainable Material Alternatives During the Design Process </a> </List.Item>
              <List.Item value='-'> Co-author as research assistant in data analysis and web developing. </List.Item>
            </List>



            <b>           Coursework           </b>
            <p>
            <List horizontal>
              <List.Item> <a href='https://courses.illinois.edu/schedule/2019/fall/IE/529'> Stats of Big Data & Clustering </a> </List.Item>
              <List.Item> <a href='https://courses.illinois.edu/schedule/2020/spring/IE/531'> Algorithms for Data Analytics </a> </List.Item>
              <List.Item> <a href='https://courses.illinois.edu/schedule/2020/spring/CS/498'> Data Science & Analytics </a> </List.Item>
              <List.Item> <a href='https://courses.illinois.edu/schedule/2020/spring/CS/446'> Machine Learning </a> </List.Item>
            </List>
            <List horizontal>
              <List.Item> <a href='https://courses.illinois.edu/schedule/2018/fall/CS/411'> Database Systems </a> </List.Item>
              <List.Item> <a href='https://courses.illinois.edu/schedule/2020/spring/CS/412'> Introduction to Data Mining </a> </List.Item>
            </List>
            </p>

            <b> Skills </b>
            <p>
            <List horizontal>
              <List.Item> Python </List.Item>
              <List.Item> HTML&CSS </List.Item>
              <List.Item> JavaScript </List.Item>
              <List.Item> Pandas </List.Item>
              <List.Item> React </List.Item>
              <List.Item> VBA </List.Item>
              <List.Item> MongoDB </List.Item>
              <List.Item> SQL </List.Item>
            </List>
            </p>
            <h2/>
          </Container>
        </Segment>

        <Segment>
          <Container text textAlign='left'>
          <h2/>
            <Header as='h3'>
              <Icon name='suitcase' />
              <Header.Content>Experience</Header.Content>
            </Header>
            <b> <a href='https://www.citadel.com/'> Reference Data Internship, Citadel </a>, 2020 </b>
            <List as='ul'>
               <List.Item as='li'>Developed a pdf parser that extract information from convertible bond final term sheets using various of technique including regular expression pattern matching and different classifiers such as Support Vector Machine (SVM) & Neural Networks (Multi-layer Perceptron model and RNN models). Achieved an overall accuracy of 80% ~ 90% depending on attributes of interest. Training data were preprocessed using Word2vec model that turn English words into vectors and tagged using historic data from the reference database. </List.Item>
               <List.Item as='li'>Initiate development of an internal self-service web portal handling requests for the reference database using React / Django /
                SQL Stack. Laid out overall structures for frontend and develop frontend portion of request handling, data health dashboard
                as well as full stack on the pdf parser.
               </List.Item>
            </List>
            <b> <a href='http://esol.ise.illinois.edu'> Research Assistant at Enterprise Systems Optimization Lab, UIUC | John Deere </a> , 2018 - 2020 </b>
            <List as='ul'>
              <List.Item as='li'>Developed and improved an Excel-based program for life-cycle assessment (LCA) and life-cycle costing (LCC) analysis of non-road construction and agricultural machines for John Deere to make better decisions at marketing and manufacturing.</List.Item>
              <List.Item as='li'>The program estimates life cycle environmental impacts based on common matrices such as GWP100a and ReCiPe 2008 and estimates the total cost of ownership of a product. A design engineering can make sensitivity analysis to compare between different design alternatives.</List.Item>
              <List.Item as='li'>Participated in research towards implementing sustainable materials and autonomous solutions for agricultural machines.</List.Item>
              <List.Item as='li'>Developed Sustainable Materials Advisor, a web application that visualizes life-cycle environmental impacts and cost data. It provides filters, graphs, and tables to help design engineers to make better decisions on material selection.</List.Item>
            </List>
            <b> <a href='https://productdesignlab.ise.illinois.edu/'> SE 101 Teaching Assistant, UIUC, </a> 2019 - 2020 </b>
            <List as='ul'>
               <List.Item as='li'>Teaches an introductory course to Engineering Drawing and CAD to freshmen Engineering students.</List.Item>
               <List.Item as='li'>Leads lab sections with 30 students. </List.Item>
            </List>
            <h2/>
          </Container>
        </Segment>

        <Segment >
          <Container text textAlign='left' >
            <h2/>
            <Header as='h3'>
              <Icon name='terminal' />
              <Header.Content>Projects</Header.Content>
            </Header>
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
      </Segment.Group>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
