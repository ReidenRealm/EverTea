// // // import React from 'react'
// // // import './HomePage.css'

// // // import logo from '../../assets/logo.jpg'
// // // import Home from '../../assets/Home.png'
// // // import Bell from '../../assets/Bell.png'
// // // import DataBaseCard from'../../assets/DataBaseCard.png'
// // // import AccountCard from '../../assets/AccountCard.png'
// // // import SosCard from '../../assets/SosCard.png'
// // // import { Link } from 'react-router-dom'


// // // const HomePage = () => {
// // //   return (

// // //     <div className='coloms'>

// // //         <div className='blackBar'>

// // //             <div className='logoAndName'>
// // //                 <div className='logo'><img src={logo} className='logoSize'/></div>
// // //                 <div className='name'>Ever Tea</div>
// // //             </div>

// // //             <div className='category'>
// // //                 <div className='homeLine'>
// // //                     <div className='home'><img src={Home} className='logoall'/></div>
// // //                     <div className='TitleAll'>Home page</div>
// // //                 </div>

// // //                 <div className='notificationLine'>
// // //                     <div className='notification'><img src={Bell} className='logoall'/></div>
// // //                     <div className='TitleAll'>Notification</div>
// // //                 </div>
// // //             </div>

// // //         </div>

// // //         <div className='cardAndTitle'>

// // //             <div  className='TitleAl'>
// // //                 <div className='logo1'><img src={logo} className='logoSize'/></div>
// // //                     <div className='nameAndWelcome'>
// // //                         <div className='welcome'>Welcome back</div>
// // //                         <div className='userName'>SUPUN GIMHANA</div>
// // //                     </div>
// // //             </div>

// // //                 <div className='card'>
// // //                     <Link to="/DataBase">
// // //                     <div className='cardContainer'><img src={DataBaseCard} className='cardHandel'/>
// // //                         <div className='textOverlay'>
// // //                             <div className='headMessage'>DataBase</div>
// // //                             <div className='message'>Handling</div>
// // //                         </div>
// // //                     </div>
// // //                     </Link>

// // //                     <Link to="/Account">
// // //                     <div className='cardContainer'><img src={AccountCard} className='cardHandel'/>
// // //                         <div className='textOverlay'>
// // //                             <div  className='headMessage'>Account Maintenance</div>
// // //                             <div className='message'>Forecasting</div>
// // //                         </div>
// // //                     </div>
// // //                     </Link>

// // //                     {/* <Link to="/Register"><button className='btn2'>Login</button></Link> */}

// // //                     <Link to="/Contact">
// // //                     <div className='cardContainer'><img src={SosCard} className='cardHandel'/>
// // //                         <div className='textOverlay'>
// // //                             <div  className='headMessage'>SOS Message</div>
// // //                             <div className='message'>Tracker</div>
// // //                         </div>
                        
// // //                     </div>
// // //                     </Link>
                    
// // //                 </div>

// // //                 <div className='manage'>

// // //                     <div className='districts'>Districts</div>


// // //                     <div className='progress'></div>
// // //                 </div>

// // //         </div>

// // //     </div>
// // //     )
// // // }

// // // export default HomePage

// // import React, { useState, useEffect } from 'react';
// // import './HomePage.css';
// // import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
// // import axios from 'axios';

// // import logo from '../../assets/logo.jpg';
// // import Home from '../../assets/Home.png';
// // import Bell from '../../assets/Bell.png';
// // import DataBaseCard from'../../assets/DataBaseCard.png';
// // import AccountCard from '../../assets/AccountCard.png';
// // import SosCard from '../../assets/SosCard.png';
// // import { Link } from 'react-router-dom';

// // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

// // const HomePage = () => {
// //   const [districtData, setDistrictData] = useState([]);

// //   useEffect(() => {
// //     const fetchDistrictData = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8081/api/v1/district/get-districts');
// //         // Count occurrences of each district
// //         const districtCounts = response.data.reduce((acc, district) => {
// //           acc[district.districtName] = (acc[district.districtName] || 0) + 1;
// //           return acc;
// //         }, {});
        
// //         // Convert to array format for PieChart
// //         const pieData = Object.keys(districtCounts).map(key => ({
// //           name: key,
// //           value: districtCounts[key]
// //         }));
        
// //         setDistrictData(pieData);
// //       } catch (error) {
// //         console.error('Error fetching district data:', error);
// //       }
// //     };

// //     fetchDistrictData();
// //   }, []);

// //   return (
// //     <div className='coloms'>
// //       <div className='blackBar'>
// //         <div className='logoAndName'>
// //           <div className='logo'><img src={logo} className='logoSize'/></div>
// //           <div className='name'>Ever Tea</div>
// //         </div>

// //         <div className='category'>
// //           <div className='homeLine'>
// //             <div className='home'><img src={Home} className='logoall'/></div>
// //             <div className='TitleAll'>Home page</div>
// //           </div>

// //           <div className='notificationLine'>
// //             <div className='notification'><img src={Bell} className='logoall'/></div>
// //             <div className='TitleAll'>Notification</div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className='cardAndTitle'>
// //         <div className='TitleAl'>
// //           <div className='logo1'><img src={logo} className='logoSize'/></div>
// //           <div className='nameAndWelcome'>
// //             <div className='welcome'>Welcome back</div>
// //             <div className='userName'>SUPUN GIMHANA</div>
// //           </div>
// //         </div>

// //         <div className='card'>
// //           <Link to="/DataBase">
// //             <div className='cardContainer'><img src={DataBaseCard} className='cardHandel'/>
// //               <div className='textOverlay'>
// //                 <div className='headMessage'>DataBase</div>
// //                 <div className='message'>Handling</div>
// //               </div>
// //             </div>
// //           </Link>

// //           <Link to="/Account">
// //             <div className='cardContainer'><img src={AccountCard} className='cardHandel'/>
// //               <div className='textOverlay'>
// //                 <div className='headMessage'>Account Maintenance</div>
// //                 <div className='message'>Forecasting</div>
// //               </div>
// //             </div>
// //           </Link>

// //           <Link to="/Contact">
// //             <div className='cardContainer'><img src={SosCard} className='cardHandel'/>
// //               <div className='textOverlay'>
// //                 <div className='headMessage'>SOS Message</div>
// //                 <div className='message'>Tracker</div>
// //               </div>
// //             </div>
// //           </Link>
// //         </div>

// //         <div className='manage'>
// //           <div className='districts'>Districts</div>
// //           <div className='progress'>
// //             {districtData.length > 0 ? (
// //               <PieChart width={400} height={300}>
// //                 <Pie
// //                   data={districtData}
// //                   cx="50%"
// //                   cy="50%"
// //                   labelLine={false}
// //                   outerRadius={80}
// //                   fill="#8884d8"
// //                   dataKey="value"
// //                   label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// //                 >
// //                   {districtData.map((entry, index) => (
// //                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                   ))}
// //                 </Pie>
// //                 <Tooltip />
// //                 <Legend />
// //               </PieChart>
// //             ) : (
// //               <p>Loading district data...</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HomePage;


// import React, { useState, useEffect } from 'react';
// import './HomePage.css';
// import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
// import axios from 'axios';

// import logo from '../../assets/logo.jpg';
// import Home from '../../assets/Home.png';
// import Bell from '../../assets/Bell.png';
// import DataBaseCard from'../../assets/DataBaseCard.png';
// import AccountCard from '../../assets/AccountCard.png';
// import SosCard from '../../assets/SosCard.png';
// import { Link } from 'react-router-dom';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

// const HomePage = () => {
//   const [districtData, setDistrictData] = useState([]);
//   const [teaTypeData, setTeaTypeData] = useState([]);

//   useEffect(() => {
//     const fetchDistrictData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/api/v1/district/get-districts');
//         // Count occurrences of each district
//         const districtCounts = response.data.reduce((acc, district) => {
//           acc[district.districtName] = (acc[district.districtName] || 0) + 1;
//           return acc;
//         }, {});
        
//         // Convert to array format for PieChart
//         const pieData = Object.keys(districtCounts).map(key => ({
//           name: key,
//           value: districtCounts[key]
//         }));
        
//         setDistrictData(pieData);
//       } catch (error) {
//         console.error('Error fetching district data:', error);
//       }
//     };

//     const fetchTeaTypeData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/api/v1/district/get-teaType');
//         // Count occurrences of each tea type
//         const teaTypeCounts = response.data.reduce((acc, teaType) => {
//           if (teaType.teaName) {
//             acc[teaType.teaName] = (acc[teaType.teaName] || 0) + 1;
//           }
//           return acc;
//         }, {});
        
//         // Convert to array format for PieChart
//         const teaPieData = Object.keys(teaTypeCounts).map(key => ({
//           name: key,
//           value: teaTypeCounts[key]
//         }));
        
//         setTeaTypeData(teaPieData);
//       } catch (error) {
//         console.error('Error fetching tea type data:', error);
//       }
//     };

//     fetchDistrictData();
//     fetchTeaTypeData();
//   }, []);

//   return (
//     <div className='coloms'>
//       <div className='blackBar'>
//         <div className='logoAndName'>
//           <div className='logo'><img src={logo} className='logoSize'/></div>
//           <div className='name'>Ever Tea</div>
//         </div>

//         <div className='category'>
//           <div className='homeLine'>
//             <div className='home'><img src={Home} className='logoall'/></div>
//             <div className='TitleAll'>Home page</div>
//           </div>

//           <div className='notificationLine'>
//             <div className='notification'><img src={Bell} className='logoall'/></div>
//             <div className='TitleAll'>Notification</div>
//           </div>
//         </div>
//       </div>

//       <div className='cardAndTitle'>
//         <div className='TitleAl'>
//           <div className='logo1'><img src={logo} className='logoSize'/></div>
//           <div className='nameAndWelcome'>
//             <div className='welcome'>Welcome back</div>
//             <div className='userName'>SUPUN GIMHANA</div>
//           </div>
//         </div>

//         <div className='card'>
//           <Link to="/DataBase">
//             <div className='cardContainer'><img src={DataBaseCard} className='cardHandel'/>
//               <div className='textOverlay'>
//                 <div className='headMessage'>DataBase</div>
//                 <div className='message'>Handling</div>
//               </div>
//             </div>
//           </Link>

//           <Link to="/Account">
//             <div className='cardContainer'><img src={AccountCard} className='cardHandel'/>
//               <div className='textOverlay'>
//                 <div className='headMessage'>Account Maintenance</div>
//                 <div className='message'>Forecasting</div>
//               </div>
//             </div>
//           </Link>

//           <Link to="/Contact">
//             <div className='cardContainer'><img src={SosCard} className='cardHandel'/>
//               <div className='textOverlay'>
//                 <div className='headMessage'>SOS Message</div>
//                 <div className='message'>Tracker</div>
//               </div>
//             </div>
//           </Link>
//         </div>

//         <div className='manage'>
//           <div className='districts'>Districts</div>
//           <div className='progress'>
//             {districtData.length > 0 ? (
//               <PieChart width={400} height={300}>
//                 <Pie
//                   data={districtData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                 >
//                   {districtData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             ) : (
//               <p>Loading district data...</p>
//             )}
//           </div>
          
//           <div className='teaTypes'>Tea Types</div>
//           <div className='teaTypeChart'>
//             {teaTypeData.length > 0 ? (
//               <PieChart width={400} height={300}>
//                 <Pie
//                   data={teaTypeData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                 >
//                   {teaTypeData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             ) : (
//               <p>Loading tea type data...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import axios from 'axios';

import logo from '../../assets/logo.jpg';
import Home from '../../assets/Home.png';
import Bell from '../../assets/Bell.png';
import DataBaseCard from'../../assets/DataBaseCard.png';
import AccountCard from '../../assets/AccountCard.png';
import SosCard from '../../assets/SosCard.png';
import { Link } from 'react-router-dom';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const HomePage = () => {
  const [districtData, setDistrictData] = useState([]);
  const [teaTypeData, setTeaTypeData] = useState([]);

  useEffect(() => {
    const fetchDistrictData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/district/get-districts');
        const districtCounts = response.data.reduce((acc, district) => {
          acc[district.districtName] = (acc[district.districtName] || 0) + 1;
          return acc;
        }, {});
        
        const pieData = Object.keys(districtCounts).map(key => ({
          name: key,
          value: districtCounts[key]
        }));
        
        setDistrictData(pieData);
      } catch (error) {
        console.error('Error fetching district data:', error);
      }
    };

    const fetchTeaTypeData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/district/get-teaType');
        const teaTypeCounts = response.data.reduce((acc, teaType) => {
          if (teaType.teaName) {
            acc[teaType.teaName] = (acc[teaType.teaName] || 0) + 1;
          }
          return acc;
        }, {});
        
        const teaPieData = Object.keys(teaTypeCounts).map(key => ({
          name: key,
          value: teaTypeCounts[key]
        }));
        
        setTeaTypeData(teaPieData);
      } catch (error) {
        console.error('Error fetching tea type data:', error);
      }
    };

    fetchDistrictData();
    fetchTeaTypeData();
  }, []);

  return (
    <div className='coloms'>
      <div className='blackBar'>
        <div className='logoAndName'>
          <div className='logo'><img src={logo} className='logoSize'/></div>
          <div className='name'>Ever Tea</div>
        </div>

        <div className='category'>
          <div className='homeLine'>
            <div className='home'><img src={Home} className='logoall'/></div>
            <div className='TitleAll'>Home page</div>
          </div>

          <div className='notificationLine'>
            <div className='notification'><img src={Bell} className='logoall'/></div>
            <div className='TitleAll'>Notification</div>
          </div>
        </div>
      </div>

      <div className='cardAndTitle'>
        <div className='TitleAl'>
          <div className='logo1'><img src={logo} className='logoSize'/></div>
          <div className='nameAndWelcome'>
            <div className='welcome'>Welcome back</div>
            <div className='userName'>SUPUN GIMHANA</div>
          </div>
        </div>

        <div className='card'>
          <Link to="/DataBase">
            <div className='cardContainer'><img src={DataBaseCard} className='cardHandel'/>
              <div className='textOverlay'>
                <div className='headMessage'>DataBase</div>
                <div className='message'>Handling</div>
              </div>
            </div>
          </Link>

          <Link to="/Account">
            <div className='cardContainer'><img src={AccountCard} className='cardHandel'/>
              <div className='textOverlay'>
                <div className='headMessage'>Account Maintenance</div>
                <div className='message'>Forecasting</div>
              </div>
            </div>
          </Link>

          <Link to="/Contact">
            <div className='cardContainer'><img src={SosCard} className='cardHandel'/>
              <div className='textOverlay'>
                <div className='headMessage'>Alert Message</div>
                <div className='message'>Tracker</div>
              </div>
            </div>
          </Link>
        </div>

        <div className='chartContainer'>
          <div className='chartBox'>
            <div className='chartTitle'>Districts</div>
            <div className='chartContent'>
              {districtData.length > 0 ? (
                <PieChart width={350} height={250}>
                  <Pie
                    data={districtData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {districtData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              ) : (
                <p>Loading district data...</p>
              )}
            </div>
          </div>

          <div className='chartBox'>
            <div className='chartTitle'>Tea Types</div>
            <div className='chartContent'>
              {teaTypeData.length > 0 ? (
                <PieChart width={350} height={250}>
                  <Pie
                    data={teaTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {teaTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              ) : (
                <p>Loading tea type data...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;