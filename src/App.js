import React, { useState } from 'react';
import { Image, Reveal, Segment, Header, Icon, Container, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import profile from './profile.jpg';
import profile_hidden from './profile_hidden.jfif';
import Menu_ from './menu.js';
import Footer from './footer.js';

function ExpandableList({ items }) {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggle = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // collapse
        : [...prev, index] // expand without closing others
    );
  };

  return (
    <List divided relaxed>
      {items.map((item, index) => (
        <List.Item
          key={index}
          onClick={(e) => {
            if (e.target.closest("a")) return; // Don't toggle when link clicked
            toggle(index);
          }}
          style={{ cursor: "pointer" }}
          id={item.id}
        >
          <List.Content>
            <div style={{ fontWeight: "normal", marginTop: "1em", marginButtom: "1em" }}>
              <Icon
                name={expandedIndices.includes(index) ? "angle up" : "angle down"}
              />
              {item.title}{" "}
            </div>
            {expandedIndices.includes(index) && (
              <List.Description style={{ marginTop: "1em", fontSize: "smaller"}}>
                {item.details}
              </List.Description>
            )}
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}

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
                <Header as="h2">
                  <Icon name="suitcase" />
                  <Header.Content>Experience</Header.Content>
                </Header>

                <Header as="h3"> <a href="https://aws.amazon.com/redshift/">Software Engineer, Amazon Web Services | Redshift</a>, Present </Header>
                <ExpandableList
                  items={[
                    {
                      title: <>Contributed to features in Parser-Analyzer, Governance, and Data Sharing areas as part of Redshift's query processing team.</>,
                      details: <>
                      <List.Item as="li"> • <b> <a href="#parser"> Parser/Analyzer </a> Area Contributions </b> </List.Item>
                      <List.Item as="li"> • <b> <a href="#governance"> Governance </a> Area Contributions: </b> </List.Item>
                      <List.Item as="li"> ◦ <a href="#rlsor"> OR Conjunction Row-Level Security </a> </List.Item>
                      <List.Item as="li"> • <b> Data Sharing Area Contributions: </b> </List.Item>
                      <List.Item as="li"> ◦ <a href="#lagoon"> Glue Data Catalog Views</a> </List.Item>
                      <List.Item as="li"> ◦ <a href="#s3tables"> S3 Table Bucket </a> </List.Item>
                      <List.Item as="li"> ◦ Block querying AWS Lake Formation managed Redshift data shared tables when remote tables have column names that differ only by case (e.g., "COL" vs. "col") to prevent conflicts; Fixed a day-one bug where external column names were always downcased in cross-database or data sharing queries, regardless of the enable_case_sensitive_identifier configuration setting. </List.Item>
                      <List.Item as="li"> ◦ Fixed a day-one bug where external column names were always downcased in cross-database or data sharing queries, regardless of the <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_enable_case_sensitive_identifier.html"> enable_case_sensitive_identifier </a> configuration setting. </List.Item>
                      </>
                    },
                    {
                      id: "s3tables",
                      title: <>Designed and implemented Redshift's integration with <a href="https://aws.amazon.com/blogs/aws/amazon-s3-tables-integration-with-amazon-sagemaker-lakehouse-is-now-generally-available/">S3 Table Bucket</a>. Launched GA on PI Day 2025; averaged <b>6K+</b> daily queries.</>,
                      details: <>
                      <List.Item as="li"> • Coordinated query integration across <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-integrating-redshift.html"> S3 Table Buckets </a>, AWS Lake Formation, and Amazon Redshift. </List.Item>
                      <List.Item as="li"> • Extended RedLake (Redshift’s cross-cluster data sharing via the Lake Formation catalog) auto-mounter to mount S3 tables from the Lake Formation catalog, ensuring Redshift's native databases are created and deleted in sync with the Lake Formation catalog. </List.Item>
                      <List.Item as="li"> • Implemented query processing changes to handle Lake Formation’s nested catalog structure and convert it into Iceberg tables. </List.Item>
                      <List.Item as="li"> • Designed and executed a systematic functional test matrix covering all query paths—database connections, external schemas, databases, etc. —for various user types, including FAS, IAM roles, and IDC users connections. </List.Item>
                      </>
                    },
                    {
                      id: "lagoon",
                      title: <>Led Redshift's integration with <a href="https://aws.amazon.com/about-aws/whats-new/2023/11/aws-glue-data-catalog-multi-engine-views-analytics-engines/">Glue Data Catalog Views</a>. Previewed at re:Invent 2023; GA in 2024. As of July 2025: <b>500K+</b> daily queries across <b>1K+</b> clusters.</>,
                      details: <>
                      <List.Item as="li"> • Developed <a href="https://docs.aws.amazon.com/redshift/latest/dg/data-catalog-views-overview.html"> Glue Data Catalog Views </a> multi-dialect view (supported in AWS Redshift, AWS Athena, and AWS EMR Spark) managed by AWS Lake Formation catalog, featuring Protected access via RLS-secured scanning borders and Definer-based permissions, where only the creator can access the view definition, based on their permissions on the underlying relation. </List.Item>
                      <List.Item as="li"> • Enabled CREATE, ALTER, and DROP SQL support mapped to Glue’s APIs (CreateTable, UpdateTable, DeleteTable), and SHOW VIEW SQL support mapped to Glue’s GetTables API. </List.Item>
                      <List.Item as="li"> • Implemented query execution using a session based auth token to obtain Lake Formation permissions as the view definer, with strict schema validation (errors when definer permissions change) and RLS border enforcement (no explain plans, limited predicate pushdown to individual table scans). </List.Item>
                      <List.Item as="li"> • Designed and executed a systematic functional test matrix covering all query methods—database connections, external schemas, databases, … —for multiple user types, including FAS, IAM roles, and IDC users connections. </List.Item>
                      </>
                    },
                    {
                      id: "rlsor",
                      title: <>Led development of <a href="https://aws.amazon.com/about-aws/whats-new/2023/11/amazon-redshift-row-level-security-enhancements/">OR Conjunction Row-Level Security</a>, enabling multiple RLS policies with OR logic. The feature is used by <b>~10%</b> of all RLS-protected relations.</>,
                      details: <>
                      <List.Item as="li"> • <a href='https://docs.aws.amazon.com/redshift/latest/dg/t_rls_combine_policies.html'> RLS conjunction </a>mode are defined at the relation level, with an optional OR conjunction mode to combine multiple policies using logical OR, equivalent to PostgreSQL’s PERMISSIVE keyword. </List.Item>
                      <List.Item as="li"> • Developed SQL DDL surfaces that enable users to modify the conjunction mode for individual relations, including tables, views, materialized views, and late-binding views. </List.Item>
                      </>
                    },
                    {
                      id: "parser",
                      title: <> Contributed to multiple Parser-Analyzer enhancements, including support for <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_enable_case_sensitive_super_attribute.html"> case-sensitive identifier parsing </a>, improved syntax error messages, flattening of long qualification lists to prevent stack exhaustion, and qualification pushdown for system table queries—reducing median response time by <b>98%</b> (from 228ms to 3ms) on a customer's workload. </>,
                      details: <>
                      <List.Item as="li"> • Designed and delivered a new configuration option <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_enable_case_sensitive_super_attribute.html"> enable_case_sensitive_super_attribute </a>, allowing users to reference SUPER attributes case-sensitively without requiring quotes. </List.Item>
                      <List.Item as="li"> • Designed and delivered a more detailed syntax error message that displays the line number and surrounding context at the point of error. </List.Item>
                      <List.Item as="li"> • Changed behavior when converting a scalar INT array into a scalar VARCHAR array for joins where the LHS column is VARCHAR. Previously, this generated an OR list in the plan; now it matches the behavior of an INT LHS with a VARCHAR RHS array. This prevents stack exhaustion (SIGSEGV) from excessive recursion depth.</List.Item>
                      <List.Item as="li"> • Added a safeguard to prevent dropping the last column of a table during transaction commit. Deferred actual column deletion and column count catalog updates till commit end which also means the columns are now batched dropped to avoid O(N²) loops over columns and ensures catalog indexes are updated correctly.</List.Item>
                      <List.Item as="li"> • Added an error for cases where a Boolean config is set to an empty string (SET config TO '') will be set to True instead of throwing an error. </List.Item>
                      <List.Item as="li"> • Flattened long AND/OR and large IN lists early in the parser analyzer to avoid planner stack exhaustion caused by deep left-nested trees. </List.Item>
                      <List.Item as="li"> • Improved handling of large predicate lists in Redshift's query rewriter. Previously, large flattened AND/OR lists caused multiple O(N²) traversals. Now we will skip rewriter once the predicate list is getting too large. </List.Item>
                      <List.Item as="li"> • Fixed potential SQL code injection vulnerabilities when table columns with special characters are printed into Redshift's generated C++ code during query processing. </List.Item>
                      <List.Item as="li"> • Fixed incorrect datetime conversion results caused by integer overflow during date/time conversions. </List.Item>
                      </>
                    },
                    {
                      title: <>Delivered a proof of concept using machine learning to recommend Spark SQL configurations, achieving 15–50% performance improvement over Spark EMR defaults on benchmark workloads. The model uses a CNN-based regressor that takes Spark SQL’s logical plan, table statistics, and configuration parameters as input to predict query runtime. A subsequent optimization module applies gradient descent to recommend improved configuration settings.</>,
                      details: <>
                      <List.Item as="li"> • Built a two-phased model structure to achieve zero Time-To-Tune prediction. </List.Item>
                      <List.Item as="li"> • In the first phase, trained a CNN model using Spark’s optimized logical query plan, Spark configuration, and table statistics to predict query execution time based on fleet telemetry data via the Spark Telemetry query plan redactor. </List.Item>
                      <List.Item as="li"> • In the second phase, used a gradient descent optimizer to recommend optimal Spark configurations (e.g., partition counts, join thresholds) within safe boundaries defined by fleet-wide minimum and maximum values for each configuration parameter. </List.Item>
                      <List.Item as="li"> • Validated the approach on TPC-DS benchmarks and real customer workloads from clients such as Netflix and Sanofi, provided by Solution Architects. </List.Item>
                      </>
                    },
                    {
                      id: "governance",
                      title: <>Participated in multiple governance projects, including <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_ddm.html"> Dynamic Data Masking </a> (DDM) , Data Sharing Fine-Grained Access Control (FGAC), Secured Logging, and Service Log Redactor, addressing key operational challenges.</>,
                      details: <>
                      <List.Item as="li"> • Provided code reviews for DDM’s <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_ddm-super.html"> Attribute-Level Protection </a> (ALP), which allows customers to apply DDM policies to individual SUPER attributes. </List.Item>
                      <List.Item as="li"> • Helped design and implement Secured Logging — a feature based on DDM that applies to Definer views at query time, masking all system table entries from consumer related to those views. </List.Item>
                      <List.Item as="li"> • Fixed an issue where RLS/DDM policy behavior changed based on session-level configuration when two identifiers of the same type differed only by case (e.g., col and COL) were included in the policy. </List.Item>
                      <List.Item as="li"> • Designed Data Sharing Fine-Grained Access Control (DS FGAC) which provides FGAC policy DDL and application in Redshift's cross cluster datasharing environment. Designed SQL surfaces for cross-cluster Column Level Protection (CLP), Row Level Security (RLS), and Dynamic Data Masking (DDM) policy creation and attachment. Implemented a unit test framework to mock data sharing reads by redirecting outbound server calls to a local client. </List.Item>
                      <List.Item as="li"> • Provided code review for the Service Log Redactor — leveraging concepts from DDM and Secured Logging to redact customer data from Redshift’s internal logs and monitoring system tables in-place using the native parser during log creation, enabling secure debugging inside customer clusters. </List.Item>
                      </>
                    }
                  ]}
                />

                <Header as="h3"> <a href="https://opro.ai/">Software Engineer, Petuum Inc.</a>, 2021–2022 </Header>
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

                <Header as="h3"> <a href="https://www.citadel.com/">Reference Data Internship, Citadel</a>, 2020 </Header>
                <List as="ul">
                  <List.Item as="li">
                    Created PDF parser for convertible bond term sheets using regex, SVM, MLP, and Word2Vec. Achieved 70–90% accuracy.
                  </List.Item>
                  <List.Item as="li">
                    Built full-stack self-service portal (React/Django) with data dashboard, PDF parser, and Jira integration.
                  </List.Item>
                </List>

                <Header as="h3"> <a href="http://esol.ise.illinois.edu">Research Assistant, UIUC | John Deere</a>, 2018–2020 </Header>
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

                <Header as="h3"> <a href="https://productdesignlab.ise.illinois.edu/">SE 101 Teaching Assistant, UIUC</a>, 2019–2021 </Header>
                <List as="ul">
                  <List.Item as="li">Taught engineering drawing and CAD to freshmen.</List.Item>
                  <List.Item as="li">Led lab sections of 30+ students; managed assignments and projects.</List.Item>
                </List>
              </Container>
            </Segment>

            {/* Education & Research */}
            <Segment>
              <Container text textAlign="left">
                <Header as="h2">
                  <Icon name="graduation cap" />
                  <Header.Content>Education</Header.Content>
                </Header>
                <Header as="h3"> <a href="https://ise.illinois.edu/">University of Illinois at Urbana-Champaign, 2021</a> </Header>
                <p>MS in Industrial Engineering, Advanced Analytics Concentration, GPA: 3.96/4.0</p>
                <Header as="h3"> <a href="https://ise.illinois.edu/">University of Illinois at Urbana-Champaign, 2019</a> </Header>
                <p>BS in Industrial Engineering, Minor in Computer Science, GPA: 3.88/4.0</p>

                <Header as="h3"> Research </Header>
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

                <Header as="h3"> Coursework </Header>
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

                <Header as="h3"> Skills </Header>
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
                <Header as="h2">
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
