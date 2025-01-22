import React, { Fragment } from "react";
 import ReactDOM from 'react-dom';
 import data from '../modals/data'; // Import the shared data 
 import ChartComponent from "../components/ChartComponent";
 import PaitentData from "../components/paitentData"; 
 import findMinMax from '../services/dataservice';
 const testMinMax = findMinMax(data, 'Systolic'); 
 const actualMinMax = findMinMax(data, 'Diastolic');

function Index(){
    return (
        <Fragment>
           
             <div className="container-fluid px-0">
        <header className="p-2 whiteroundedbg">
            <div className="row mx-0">
                <div className="col-2">
                    <img src="assets/images/TestLogo.svg" className="img-fluid logoimg" />
                </div>
                <div className="col-7 body-emphasized-14pt topnavigation dflex">
                        <ul>
                            <li>
                                <a href="#"><img src="assets/images/home.svg" className="me-2" />Overview</a>

                            </li>
                            <li>
                                <a href="#"><img src="assets/images/patients.svg"  className="me-2" />Patients</a>

                            </li>
                            <li>
                                <a href="#"><img src="assets/images/calendar.svg"  className="me-2" />Schedule</a>

                            </li>
                            <li>
                                <a href="#"><img src="assets/images/messages.svg" className="me-2" />Message</a>

                            </li>
                            <li>
                                <a href="#"><img src="assets/images/transaction.svg" className="me-2" />Transaction</a>

                            </li>
                        </ul>

                </div>
                <div className="col-3">
                        <div className="profile-section">
                            <div className="profile-pic px-3"><img src="assets/images/profilepic.png" /></div>
                            <div className="pname body-emphasized-14pt px-1">
                                Dr. Jose Simmons<br/>
                                <div className="body-secondary-info-14pt">General Practitioner</div>
                            </div>
                        <div className="settings px-1">
                            <img src="assets/images/settings.svg" className="ms-2" />
                            <img src="assets/images/verticldot.svg" className="ms-3"/>
                        </div>

                </div>
            </div>
</div>
        </header>
        <section>
            <div className="row ">
            <div className="leftbar col-3 px-0 whiteroundedbg">
                <div className="row">
                    <div className="col-12 leftcontent  px-3">
                        <h3 className="inner-card-title-18pt">Patients</h3>
                        <div className="search"><img src="assets/images/search.svg" width="15"/></div>
                    </div>
                    <div className="col-12 leftcontent px-3">
                        <div className="ppicdesc leftcontent">
                            <div className="ppic pe-2"><img src="assets/images/Layer 8.png" /></div>
                            <div className="ptext">
                                <div className="body-emphasized-14pt">Emily Williams</div>
                                <div className="body-secondary-info-14pt"> Female, 18</div>
                            </div>
                        </div>
                        <div className="">
                            <img src="assets/images/horizontalLine.svg" />
                        </div>
                    </div>
                    <div className="col-12 leftcontent  px-3">
                        <div className="ppicdesc leftcontent">
                            <div className="ppic pe-2"><img src="assets/images/tyler.png" /></div>
                            <div className="ptext">
                                <div className="body-emphasized-14pt">Tyler Davis</div>
                                <div className="body-secondary-info-14pt"> Male, 30</div>
                            </div>
                        </div>
                        <div className="">
                            <img src="assets/images/horizontalLine.svg" />
                        </div>
                    </div>

                   <div className="col-12 leftcontent  px-3">
                    <div className="ppicdesc leftcontent">
                        <div className="ppic pe-2"><img src="assets/images/brandon.png" /></div>
                        <div className="ptext">
                            <div className="body-emphasized-14pt">Brandon Mitchell</div>
                            <div className="body-secondary-info-14pt"> male, 36</div>
                        </div>
                    </div>
                    <div className="">
                        <img src="assets/images/horizontalLine.svg" />
                    </div>
                </div>
                <div className="col-12 leftcontent active  px-3">
                    <div className="ppicdesc leftcontent">
                        <div className="ppic pe-2"><img src="assets/images/jessica.png" /></div>
                        <div className="ptext">
                            <div className="body-emphasized-14pt">Jessica Taylor</div>
                            <div className="body-secondary-info-14pt"> Female, 18</div>
                        </div>
                    </div>
                    <div className="">
                        <img src="assets/images/horizontalLine.svg" />
                    </div>
                </div>
                <div className="col-12 leftcontent px-3">
                    <div className="ppicdesc leftcontent">
                        <div className="ppic pe-2"><img src="assets/images/Layer 8.png" /></div>
                        <div className="ptext">
                            <div className="body-emphasized-14pt">Emily Williams</div>
                            <div className="body-secondary-info-14pt"> Female, 18</div>
                        </div>
                    </div>
                    <div className="">
                        <img src="assets/images/horizontalLine.svg" />
                    </div>
                </div>
                <div className="col-12 leftcontent px-3">
                    <div className="ppicdesc leftcontent">
                        <div className="ppic pe-2"><img src="assets/images/tyler.png" /></div>
                        <div className="ptext">
                            <div className="body-emphasized-14pt">Tyler Davis</div>
                            <div className="body-secondary-info-14pt"> Male, 30</div>
                        </div>
                    </div>
                    <div className="">
                        <img src="assets/images/horizontalLine.svg" />
                    </div>
                </div>

               <div className="col-12 leftcontent  px-3">
                <div className="ppicdesc leftcontent">
                    <div className="ppic pe-2"><img src="assets/images/brandon.png" /></div>
                    <div className="ptext">
                        <div className="pname">Brandon Mitchell</div>
                        <div className="body-secondary-info-14pt"> male, 36</div>
                    </div>
                </div>
                <div className="">
                    <img src="assets/images/horizontalLine.svg" />
                </div>
            </div>
            <div className="col-12 leftcontent  px-3">
                <div className="ppicdesc leftcontent">
                    <div className="ppic pe-2"><img src="assets/images/tyler.png" /></div>
                    <div className="ptext">
                        <div className="pname">Tyler Davis</div>
                        <div className="body-secondary-info-14pt"> Male, 30</div>
                    </div>
                </div>
                <div className="">
                    <img src="assets/images/horizontalLine.svg" />
                </div>
            </div>

                <div className="col-12 leftcontent px-3">


                </div>

               </div>
               </div>


            <div className="main col-6 px-4">

                <div className="col-12 px-0 whiteroundedbg h-100 px-3">
                    <h3 className="inner-card-title-18pt">Diagnosis History</h3>

                    <div className="col-12 px-0">
                        <div className="row ">
                        <div className="col-12 px-2 bg-F4F0FE p-3">

                            <div className="row mx-0">
                            <div className="col-8">
                                <h3 className="body-regular-18 pt-0">Blood Pressure</h3>
                                <ChartComponent />
                            </div>
                            <div className="col-4">
                            <span className="chartdisplay">
                                <h5 className="body-regular-16 colorful-dot pinkdot">Systolic</h5>
                                <div className="maxvalue body-regular-30">{testMinMax.max}</div>
                                <img src="assets/images/ArrowUp.svg" className="img-fluid" /><span className="body-secondary-info-14pt ps-1">Higher than Average</span>
                                <div className="divider"></div>
                                <h5 className="body-regular-16 colorful-dot purpledot">Diastolic</h5>
                                <div className="minvalue body-regular-30">{actualMinMax.min}</div>
                                <img src="assets/images/ArrowDown.svg"  className="img-fluid"/><span className="body-secondary-info-14pt ps-1">Lower than Average</span>
                            </span>
                            </div>

                        </div>
                        </div>
                    </div>
                        <div className="row justify-content-between colmid">
                        <div className="col-4 px-4 bg-E0F3FA">
                            <img src="assets/images/respiratory_Rate.svg" className="my-3"/>
                            <h2 className="body-regular-16 mb-0">Resipiratory  Rate</h2>
                            <h3 className="body-regular-30 pt-0">20 bpm</h3>
                            <p className="body-emphasized-14pt"> Normal</p>
                        </div>
                        <div className="col-4 px-4 bg-FFE6E9">
                            <img src="assets/images/temperature.svg" className="my-3" />
                            <h2 className="body-regular-16 mb-0">Temperature</h2>
                            <h3 className="body-regular-30 pt-0">98.6 F</h3>
                            <p className="body-emphasized-14pt"> Normal</p>
                        </div>
                        <div className="col-4 px-4 bg-FFE6F1">
                            <img src="assets/images/HeartBPM.svg" className="my-3" />
                            <h2 className="body-regular-16 mb-0">Heart Rate</h2>
                            <h3 className="body-regular-30 pt-0">78 bpm</h3>
                            <p className="body-emphasized-14pt"><img src="assets/images/ArrowDown.svg" className="pe-2" />Lower than Average </p>
                        </div>
                    </div>

                    </div>


                </div>

            </div>
            <div className="rightBar col-3 whiteroundedbg">
                    <PaitentData />
                    <div className="text-center mb-3">
                    <button className="col-6">Show All Information</button>
                </div>
            </div>
        </div>
       
        </section>
        
    </div>
        </Fragment>
    )
}

export default Index;