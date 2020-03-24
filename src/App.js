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
              <List.Item> Pandas </List.Item>
              <List.Item> VBA </List.Item>
              <List.Item> JavaScript </List.Item>
              <List.Item> MongoDB </List.Item>
              <List.Item> MySQL </List.Item>
              <List.Item> HTML&CSS </List.Item>
              <List.Item> React </List.Item>
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
            <b> <a href='https://www.citadel.com/'> Reference Data Operations Interns, Citadel </a>, 2019 </b>
            <List as='ul'>
               <List.Item as='li'>Design and implement automatic verifier for Citadel's reference database.</List.Item>
            </List>
            <b> <a href='http://esol.ise.illinois.edu'> Research Assistant at Enterprise Systems Optimization Lab, UIUC | John Deere </a> , 2018 - 2021 </b>
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
