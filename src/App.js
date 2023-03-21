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
                <Header.Content>潘中昊</Header.Content>
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
                  <Header.Content>教育经历</Header.Content>
                </Header>
                <b> <a href='https://ise.illinois.edu/'> 伊利诺伊大学香槟分校, 2021 </a> </b>
                <p>
                工业工程学硕士，数据分析方向 , GPA:3.96/4.0
                </p>
                <b> <a href='https://ise.illinois.edu/'> 伊利诺伊大学香槟分校, 2019 </a> </b>
                <p>
                工业工程学学士，辅修计算机科学 , GPA:3.88/4.0
                </p>

                <b> 相关研究 </b>
                <List as='ul'>
                  <List.Item as='li'>  <a href='https://predictrend-6a51c.web.app/'> 时间序列数据的预测与分析 </a> </List.Item>
                  <List.Item value='-'> 使用机器学习模型进行时间序列（2020美国大选赔率，标普500）的趋势分析。模型包括：指数平滑法，ARIMA，LSTM，GRU，CEEMDAN。

                  </List.Item>

                  <List.Item as='li'>  <a href="https://www.tandfonline.com/doi/full/10.1080/19397038.2021.1919785"> Comparative life cycle assessment and costing of an autonomous lawn mowing system with human-operated alternatives: implication for sustainable design improvements </a> </List.Item>
                  <List.Item value='-'> 二作，研究助理。 </List.Item>

                  <List.Item as='li'>  <a href="https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings-abstract/IDETC-CIE2020/83952/V006T06A030/1089947"> Switching From Petroleum- to Bio-Based Plastics: Visualization Tools to Screen Sustainable Material Alternatives During the Design Process </a> </List.Item>
                  <List.Item value='-'> 二作，研究助理。 </List.Item>

                </List>



                <b> 相关课程 </b>
                <p>
                <List horizontal>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2019/fall/IE/529'> 大数据统计与聚类分析 </a> </List.Item>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2020/spring/IE/531'> 数据分析算法 </a> </List.Item>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2020/spring/CS/498'> 数据科学与分析 </a> </List.Item>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2020/spring/CS/446'> 机器学习 </a> </List.Item>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2020/fall/IE/532'> 网络数据分析 </a> </List.Item>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2021/spring/CS/547'> 深度学习 </a> </List.Item>
                </List>
                <List horizontal>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2018/fall/CS/411'> 数据库 </a> </List.Item>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2020/spring/CS/412'> 数据挖掘初步 </a> </List.Item>
                </List>
                </p>

                <b> 相关技能 </b>
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
                  <Header.Content>工作经历</Header.Content>
                </Header>
                <b> <a href='https://www.citadel.com/'> 参考数据库实习, Citadel </a>, 2020 </b>
                <List as='ul'>
                   <List.Item as='li'> 开发PDF内容提取算法，从可换股债券条款表中提取信息。由正则表达式，各种机器学习分类模型（包括：决策树，支持向量机，全连接神经网络），Word2Vec模型共同实现。各项信息的提取准确率在60%~97%之间。 </List.Item>
                   <List.Item as='li'> 使用React/Django领导开发了一个团队内部门户网站。负责表格处理与数据质量报告的前端开发，以及PDF内容提取与Jira项目管理报告的全栈开发。 </List.Item>
                </List>
                <b> <a href='http://esol.ise.illinois.edu'> 研究助理, Enterprise Systems Optimization Lab, UIUC | John Deere </a> , 2018 - 2020 </b>
                <List as='ul'>
                  <List.Item as='li'>改良与开发了基于Excel 宏的用于对John Deere农用设备进行生命周期评估（LCA）的程序。该程序通过估算生命周期内设备产生的环境影响为设备设计提供改进建议。</List.Item>
                  <List.Item as='li'>开发了基于Excel 宏的对于农业系统进行生命周期评估的程序。用于计算所有设备与消耗品在作物生长周期内的环境影响。透过数据透视表对各类型生产习惯，设备配备情景进行比较并提供改进建议。</List.Item>
                  <List.Item as='li'>利用React JS开发了向设计师建议环保材料的网页程序。通过Plotly JS数据可视化向用户提供不同材料的环境影响以及价格的对比。</List.Item>
                </List>
                <b> <a href='https://productdesignlab.ise.illinois.edu/'> 本科课程助教, UIUC, </a> 2019 - 2021 </b>
                <List as='ul'>
                   <List.Item as='li'>负责教导工程制图与CAD课程，带领学生完成每周作图与建模实践。</List.Item>
                </List>
                <h2/>
              </Container>
            </Segment>

            <Segment >
              <Container text textAlign='left' >
                <h2/>
                <Header as='h3'>
                  <Icon name='terminal' />
                  <Header.Content>项目经历</Header.Content>
                </Header>
                <b> <a href='https://ise.illinois.edu/undergraduate/senior-engineering-program.html' > 毕业设计，Cylinder Project Line Simulation for Vertical Integration Part Flow</a>, Caterpillar  </b>
                <List as='ul'>
                  <List.Item as='li'>为Caterpillar的引擎汽缸打磨生产线开发Pro Model 生产流程模型，以反映最新的生产线改造后的流程。</List.Item>
                  <List.Item as='li'>模型考虑了两种不同种类的汽缸在同一生产线上的物料流，同一机器在生产不同汽缸时的转换过程，以及机器维修保养，员工换班造成的生产停滞。通过运用模型，向公司提供了购买额外设备以及员工排班的建议。</List.Item>
                </List>
                <b> <a  href='https://vtubersfeed.web.app/'> Vtubers feed </a> </b>
                <List as='ul'>
                  <List.Item as='li'>一款基于React Native的安卓以及IOS的App。对YouTube，Twitter和“vtuber”相关消息Bilibili进行推送。</List.Item>
                  <List.Item as='li'>基于React Native与Redux，Expo，Native Base。后端使用Express JS，Mongo DB，React Hooks和Firebase。 </List.Item>
                </List>
                <b> 新冠传播关键县分析 </b>
                <List as='ul'>
                  <List.Item as='li'>对新冠疫情在美国东部的传播路径使用网络进行分析。找到传播的“关键县”。</List.Item>
                </List>
                <b> <a  href='https://longislandwithouticetea.github.io/cs498rk_fp/#/'> 战舰世界数据库 </a> </b>
                <List as='ul'>
                  <List.Item as='li'>一个游戏数据库网站基于React JS，Express JS与MySQL。用户可以查看游戏内的载具和用户的表现。</List.Item>
                </List>
                <b> <a href='https://www.youtube.com/watch?v=NQWfc4mLqfo'> 登机模型 </a> </b>
                <List as='ul'>
                  <List.Item as='li'>用python建立的登机模型与可视化。对不同登机方式进行分析以找出最优解。</List.Item>
                </List>
                <b> 金融工程工具盒 </b>
                <List as='ul'>
                  <List.Item as='li'>基于python，HTML，flask的网页。可以对美式期权进行估值，用CAPM模型选取最佳股票，以及paper trade。</List.Item>
                </List>
                <b> 运筹学计算器 </b>
                <List as='ul'>
                  <List.Item as='li'>用python实现运筹学中各种算法，例如simplex解法的线性规划问题。 </List.Item>
                  <List.Item as='li'>用minimax以及线性规划实现对breakthrough游戏的简单AI。</List.Item>
                </List>
                <b> <a href='https://wiki.illinois.edu/wiki/display/ECE110HLSF15/Mouse+Glove' > 鼠标手套 </a> </b>
                <List as='ul'>
                  <List.Item as='li'>用触觉感受器，陀螺仪，加速器与Arduino装在手套上实现了windows上的鼠标功能。</List.Item>
                </List>

                <h1/>

              </Container>
            </Segment>
          </Segment.Group>
          </main>
      )
      break;
    default: //EN
      main = (
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
                <Header.Content>Zhonghao Pan</Header.Content>
                <Header.Subheader>
                  <a href='mailto: ericpzhpuma@gmail.com'>Email</a>
                  {" | "}
                  <a href='https://github.com/ericpzh'>@ericpzh</a>
                </Header.Subheader>
              </Header>
            </Segment>

            <Segment>
              <Container text textAlign='left'>
              <h2/>
                <Header as='h3'>
                  <Icon name='suitcase' />
                  <Header.Content>Experience</Header.Content>
                </Header>
                <b> <a href='https://aws.amazon.com/redshift/'> Software Engineer,  Amazon Web Services | Redshift </a>, Present </b>
                <List as='ul'>
                   <List.Item as='li'>
                   Part of Query Processing (QP) team in AWS Redshift -- a data warehouse based on Postgres SQL. QP team is responsible for transforming a SQL statement into results through stages like parser, rewriter, and code generator.
                   </List.Item>
                   <List.Item as='li'>
                   Contribute to Redshift’s Precompiled Executor project, which achieves 90% shorter overall query execution time for query that is predicted to be short. Redshift is built on the code-generation, compilation model. This project removes the need for compilation for a query, thus greatly improving performance for short-running query. Customer like Cornell University greatly benefits from this feature, as their use case relies on short response time.
                   </List.Item>
                   <List.Item as='li'>
                   Delivered support for case-sensitive unquoted identifier that allows the use case sensitive names without quotation mark in SQL query. This feature allows Redshift customers like JP Morgan to query the SUPER data type in Redshift in a case-sensitive manner without using quotes, allowing customers to query Redshift more freely.
                   </List.Item>
	                 <List.Item as='li'>
                   Improved Redshift code base through bug fixing and performance enhancements. Deliver code changes like predicate pushdown for remote API that result in response time reduction from median 228ms to 3ms.
                   </List.Item>
                </List>
                <b> <a href='https://www.petuum.com/'> Software Engineer, Petuum Inc. </a>, 2021 - 2022 </b>
                <List as='ul'>
                   <List.Item as='li'>
                   Participate in the development of an Advanced Process Control (APC) application deployed in an oil refinery in Texas. The application employed machine learning prediction model and evolutionary multi-objective optimization model to control multiple valves to satisfy constraints posted by multiple sensors while optimizing for production goals. The prediction model (designed with sequence-to-sequence model with LSTM cells) uses past control variables and disturbance variables to make predictions on the constraint variables, and the optimization model (using genetic algorithm) prescribes optimal control variables using the predictions generated by the prediction model real-time in high frequency.
                   </List.Item>
                   <List.Item as='li'>
                   Developed an inferential application to fill the gaps between low-frequency lab measurements for use in the high-frequency APC application. The application uses real-time sensor values to make predictions with different regularized linear regressors and ensembled decision-tree-based regressors.
                   </List.Item>
                   <List.Item as='li'>
                   Optimized computation efficiency during real-time production by batching model inferences and vectorization of model computations. Improved and optimized the machine learning model's training pipeline for parallel training of different models using different machines, reducing the time required to train individual models, and enabling continuous model training after the product’s initial deployment.
                   </List.Item>
                </List>
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
                  <List.Item as='li'>The program estimates life cycle environmental impacts based on common matrices such as GWP100a and ReCiPe 2008 and estimates the total cost of ownership of a product. A design engineer can make sensitivity analysis to compare between different design alternatives.</List.Item>
                  <List.Item as='li'>Participated in research towards implementing sustainable materials and autonomous solutions for agricultural machines.</List.Item>
                  <List.Item as='li'>Developed Sustainable Materials Advisor, a web application that visualizes life-cycle environmental impacts and cost data. It provides filters, graphs, and tables to help design engineers to make better decisions on material selection.</List.Item>
                </List>
                <b> <a href='https://productdesignlab.ise.illinois.edu/'> SE 101 Teaching Assistant, UIUC, </a> 2019 - 2021 </b>
                <List as='ul'>
                   <List.Item as='li'>Teaches an Engineering Drawing and CAD class to freshmen Engineering students.</List.Item>
                   <List.Item as='li'>Leads lab sections with 30 students with assignments and projects. </List.Item>
                </List>
                <h2/>
              </Container>
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
                Master of Science in Industrial Engineering & Advanced Analytics Concentration , GPA:3.96/4.0
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

                  <List.Item as='li'>  <a href="https://www.tandfonline.com/doi/full/10.1080/19397038.2021.1919785"> Comparative life cycle assessment and costing of an autonomous lawn mowing system with human-operated alternatives: implication for sustainable design improvements </a> </List.Item>
                  <List.Item value='-'> Co-author as research assistant in conducting part of the case study. </List.Item>

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
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2020/fall/IE/532'> Analysis of Network Data </a> </List.Item>
                  <List.Item> <a href='https://courses.illinois.edu/schedule/2021/spring/CS/547'> Deep Learning </a> </List.Item>
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
                <b> COVID19 Transmission Key Points  </b>
                <List as='ul'>
                  <List.Item as='li'>Analysis of the COVID19 transmission trend and identifying key US counties in COVID19 transmission path with network analysis.</List.Item>
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
