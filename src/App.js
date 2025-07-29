import React from 'react';
import { Image, Reveal, Segment, Header, Icon, Container, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import profile from './profile.jpg';
import profile_hidden from './profile_hidden.jfif';
import Menu_ from './menu.js';
import Footer from './footer.js';


function App() {
  const [lang, toggleLang] = React.useState(false);
  let main;

  switch (lang) {
    case true: //CN
      main = (
        <main id="page-wrap">
        </main>
      )
      break;
    default: //EN
      main = (
        <main id="page-wrap">
          <Segment.Group>
            {/* Profile Section */}
            <Segment>
              <Header icon as="h1">
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <Image circular size="medium" src={profile} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image circular size="medium" src={profile} />
                  </Reveal.Content>
                </Reveal>
                <Header.Content>Zhonghao Pan</Header.Content>
                <Header.Subheader>
                  <a href="mailto:ericpzhpuma@gmail.com">Email</a> | <a href="https://github.com/ericpzh">@ericpzh</a>
                </Header.Subheader>
              </Header>
            </Segment>

            {/* Experience Section */}
            <Segment>
              <Container text textAlign="left">
                <Header as="h3">
                  <Icon name="suitcase" />
                  <Header.Content>Experience</Header.Content>
                </Header>

                <b><a href="https://aws.amazon.com/redshift/">Software Engineer, Amazon Web Services | Redshift</a>, Present</b>
                <List as="ul">
                  <List.Item as="li">
                    Contributed to features in Parser-Analyzer, Governance, and Data Sharing areas as part of Redshift's query processing team.
                  </List.Item>
                  <List.Item as="li">
                    Designed and implemented Redshift's integration with <a href="https://aws.amazon.com/blogs/aws/amazon-s3-tables-integration-with-amazon-sagemaker-lakehouse-is-now-generally-available/">S3 Table Bucket</a>. Launched GA on PI Day 2025; averaged 1K+ daily queries across 30+ clusters and 20+ customers within 3 months.
                  </List.Item>
                  <List.Item as="li">
                    Led Redshift's integration with <a href="https://aws.amazon.com/about-aws/whats-new/2023/11/aws-glue-data-catalog-multi-engine-views-analytics-engines/">Glue Data Catalog Views</a>. Previewed at re:Invent 2023; GA in 2024. As of July 2025: 300K+ daily queries across 1K+ clusters.
                  </List.Item>
                  <List.Item as="li">
                    Led development of <a href="https://aws.amazon.com/about-aws/whats-new/2023/11/amazon-redshift-row-level-security-enhancements/">OR Conjunction Row-Level Security</a>, enabling multiple RLS policies with OR logic.
                  </List.Item>
                  <List.Item as="li">
                    Contributed to enhancements including <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_enable_case_sensitive_super_attribute.html">case-sensitive parsing</a>, syntax error messages, IN list casting, and system table query optimizations (median response reduced from 228ms to 3ms).
                  </List.Item>
                  <List.Item as="li">
                    Delivered a proof of concept using machine learning to recommend Spark SQL configurations, achieving 15–50% performance improvement over Spark EMR defaults on benchmark workloads. The model uses a CNN-based regressor that takes Spark SQL’s logical plan, table statistics, and configuration parameters as input to predict query runtime. A subsequent optimization module applies gradient descent to recommend improved configuration settings.
                  </List.Item>
                  <List.Item as="li">
                    Participated in the Service Log Redactor and Pre-compiled Executor projects, addressing key operational challenges.
                  </List.Item>
                </List>

                <b><a href="https://www.petuum.com/">Software Engineer, Petuum Inc.</a>, 2021–2022</b>
                <List as="ul">
                  <List.Item as="li">
                    Built an Advanced Process Control app for Phillips 66 using LSTM and genetic algorithms for real-time multi-objective optimization.
                  </List.Item>
                  <List.Item as="li">
                    Developed inferential models to estimate high-frequency sensor values from low-frequency lab data.
                  </List.Item>
                  <List.Item as="li">
                    Improved inference latency via batching/vectorization; accelerated training pipelines via parallelization.
                  </List.Item>
                </List>

                <b><a href="https://www.citadel.com/">Reference Data Internship, Citadel</a>, 2020</b>
                <List as="ul">
                  <List.Item as="li">
                    Created PDF parser for convertible bond term sheets using regex, SVM, MLP, and Word2Vec. Achieved 70–90% accuracy.
                  </List.Item>
                  <List.Item as="li">
                    Built full-stack self-service portal (React/Django) with data dashboard, PDF parser, and Jira integration.
                  </List.Item>
                </List>

                <b><a href="http://esol.ise.illinois.edu">Research Assistant, UIUC | John Deere</a>, 2018–2020</b>
                <List as="ul">
                  <List.Item as="li">
                    Built Excel-based tools for LCA and LCC of construction/agricultural machines using GWP100a and ReCiPe metrics.
                  </List.Item>
                  <List.Item as="li">
                    Supported sensitivity analysis and comparison between design alternatives.
                  </List.Item>
                  <List.Item as="li">
                    Developed web app to visualize LCA/cost for material selection (Sustainable Materials Advisor).
                  </List.Item>
                  <List.Item as="li">
                    Participated in sustainable materials and autonomy research.
                  </List.Item>
                </List>

                <b><a href="https://productdesignlab.ise.illinois.edu/">SE 101 Teaching Assistant, UIUC</a>, 2019–2021</b>
                <List as="ul">
                  <List.Item as="li">Taught engineering drawing and CAD to freshmen.</List.Item>
                  <List.Item as="li">Led lab sections of 30+ students; managed assignments and projects.</List.Item>
                </List>
              </Container>
            </Segment>

            {/* Education & Research */}
            <Segment>
              <Container text textAlign="left">
                <Header as="h3">
                  <Icon name="graduation cap" />
                  <Header.Content>Education</Header.Content>
                </Header>
                <b><a href="https://ise.illinois.edu/">University of Illinois at Urbana-Champaign, 2021</a></b>
                <p>MS in Industrial Engineering, Advanced Analytics Concentration, GPA: 3.96/4.0</p>
                <b><a href="https://ise.illinois.edu/">University of Illinois at Urbana-Champaign, 2019</a></b>
                <p>BS in Industrial Engineering, Minor in Computer Science, GPA: 3.88/4.0</p>

                <b>Research</b>
                <List as="ul">
                  <List.Item as="li">
                    <a href="https://predictrend-6a51c.web.app/">Time Series Trend Prediction</a>: Predicted 2020 US election odds and S&P500 using ARIMA, LSTM, GRU, and CEEMDAN.
                  </List.Item>
                  <List.Item as="li">
                    <a href="https://www.tandfonline.com/doi/full/10.1080/19397038.2021.1919785">Autonomous Lawn Mowing LCA Study</a>: Co-author on case study and modeling.
                  </List.Item>
                  <List.Item as="li">
                    <a href="https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings-abstract/IDETC-CIE2020/83952/V006T06A030/1089947">Sustainable Material Visualization Tool</a>: Co-author on data analysis and web development.
                  </List.Item>
                </List>

                <b>Coursework</b>
                <List horizontal>
                  <List.Item><a href="https://courses.illinois.edu/schedule/2019/fall/IE/529">Big Data Stats & Clustering</a></List.Item>
                  <List.Item><a href="https://courses.illinois.edu/schedule/2020/spring/IE/531">Data Analytics Algorithms</a></List.Item>
                  <List.Item><a href="https://courses.illinois.edu/schedule/2020/spring/CS/498">Data Science & Analytics</a></List.Item>
                  <List.Item><a href="https://courses.illinois.edu/schedule/2020/spring/CS/446">Machine Learning</a></List.Item>
                </List>
                <List horizontal>
                  <List.Item><a href="https://courses.illinois.edu/schedule/2020/fall/IE/532">Network Data Analysis</a></List.Item>
                  <List.Item><a href="https://courses.illinois.edu/schedule/2021/spring/CS/547">Deep Learning</a></List.Item>
                  <List.Item><a href="https://courses.illinois.edu/schedule/2018/fall/CS/411">Database Systems</a></List.Item>
                  <List.Item><a href="https://courses.illinois.edu/schedule/2020/spring/CS/412">Data Mining</a></List.Item>
                </List>

                <b>Skills</b>
                <List horizontal>
                  <List.Item>Python</List.Item>
                  <List.Item>C++</List.Item>
                  <List.Item>HTML/CSS</List.Item>
                  <List.Item>JavaScript</List.Item>
                  <List.Item>Scala</List.Item>
                  <List.Item>Java</List.Item>
                  <List.Item>PostgreSQL</List.Item>
                  <List.Item>Pandas</List.Item>
                  <List.Item>React</List.Item>
                  <List.Item>VBA</List.Item>
                  <List.Item>MongoDB</List.Item>
                </List>
              </Container>
            </Segment>

            <br/>
            {/* Projects Section */}
            <Segment>
              <Container text textAlign="left">
                <Header as="h3">
                  <Icon name="terminal" />
                  <Header.Content>Projects</Header.Content>
                </Header>

                {/* Example Project Entry */}
                <b><a href="https://store.steampowered.com/app/2289650/Mini_Airways__ATC_simulator/">Mini Airways Game Mods</a></b>
                <List as="ul">
                  <List.Item>Developed different game Mods for Mini Airways using C# and Unity, including: 
                    <List.Item>- <a href="https://github.com/ericpzh/MiniRealisticAirways"> MiniRealisticAirways</a> </List.Item>
                    <List.Item>- <a href="https://github.com/ericpzh/AirwaysCEO"> AirwaysCEO </a> </List.Item>
                    <List.Item>- <a href="https://github.com/ericpzh/MiniCenterControl"> MiniCenterControl </a> </List.Item>
                    <List.Item>- <a href="https://github.com/ericpzh/MiniFighters"> MiniFighters </a> </List.Item>
                    <List.Item>- <a href="https://github.com/ericpzh/MiniAirwaysILS"> MiniAirwaysILS </a> </List.Item>
                    <List.Item>- <a href="https://github.com/ericpzh/MiniTower"> MiniTower </a> </List.Item>
                  </List.Item>
                </List>

                <b><a href="https://ise.illinois.edu/undergraduate/senior-engineering-program.html">Cylinder Line Simulation – Caterpillar</a></b>
                <List as="ul">
                  <List.Item>Built ProModel simulation for engine liner machining line with maintenance, shift change, and part flow logic.</List.Item>
                  <List.Item>Recommended scheduling/equipment changes to meet demand at lower cost.</List.Item>
                </List>

                <b><a href="https://vtubersfeed.web.app/">Vtubers Feed App</a></b>
                <List as="ul">
                  <List.Item>Cross-platform news aggregator built with React Native, Redux, Express, and MongoDB.</List.Item>
                </List>

                <b>COVID-19 Network Analysis</b>
                <List as="ul">
                  <List.Item>Identified key US counties in COVID-19 transmission using network metrics.</List.Item>
                </List>

                <b><a href="https://longislandwithouticetea.github.io/cs498rk_fp/#/">WOWS Database</a></b>
                <List as="ul">
                  <List.Item>Game stat site with React, Express, MySQL, and Plotly.JS.</List.Item>
                </List>

                <b><a href="https://www.youtube.com/watch?v=NQWfc4mLqfo">Airliner Boarding Simulation</a></b>
                <List as="ul">
                  <List.Item>Python event simulation and animation comparing boarding strategies.</List.Item>
                </List>

                <b>Financial Engineering Toolbox</b>
                <List as="ul">
                  <List.Item>Flask-based app for option pricing, portfolio optimization, and mock trading with live data.</List.Item>
                </List>

                <b>OR Solver</b>
                <List as="ul">
                  <List.Item>Python app solving LPs, game theory problems, and AI for board game "Breakthrough."</List.Item>
                </List>

                <b><a href="https://wiki.illinois.edu/wiki/display/ECE110HLSF15/Mouse+Glove">Mouse Glove</a></b>
                <List as="ul">
                  <List.Item>Arduino glove mimicking mouse/joystick using sensor data and Bluetooth to Java receiver.</List.Item>
                </List>
              </Container>
            </Segment>
          </Segment.Group>
        </main>
      )
  }
  return (
    <div className="App" id="outer-container">
      <Menu_ lang={lang} toggleLang={toggleLang} />
      { main }
      <Footer/>
    </div>
  );
}

export default App;
