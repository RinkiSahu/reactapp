import React, { Fragment, useEffect, useState } from 'react';
import { fetchData } from '../services/apiService';

const PatientData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(responseData => {
        const jessicaTaylorData = responseData.find(item => item.name === 'Jessica Taylor');
        setData(jessicaTaylorData);
      })    
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (

    <Fragment>
        <div className="col-12 text-center mt-4">
                        <img src={data.profile_picture} className="img-fluid w-50" alt={`${data.name}'s profile`}  />
                      
                        <div className="inner-card-title-18pt py-3">{data.name}</div>
                    </div>
                    <div className="mainprofile">
                    <div className="profilepic">
                        <img src="assets/images/schedule.svg" className="img-fluid" />
                    </div>
                        <div className="profiledesc body-emphasized-14pt">
                            <div className="body-secondary-info-14pt">Date of Birth</div>
                            {data.date_of_birth}
                        </div>
                    </div>
                    <div className="mainprofile">
                        <div className="profilepic">
                            <img src="assets/images/FemaleIcon.svg" className="img-fluid" />
                        </div>
                            <div className="profiledesc body-emphasized-14pt">
                                <span className="body-secondary-info-14pt">Gender</span><br/>
                                {data.gender}
                            </div>
                        </div>
                        <div className="mainprofile">
                            <div className="profilepic">
                                <img src="assets/images/PhoneIcon.svg" className="img-fluid" />
                            </div>
                                <div className="profiledesc body-emphasized-14pt">
                                    <div className="body-secondary-info-14pt">Contact Info</div>
                                    {data.phone_number}
                                </div>
                            </div>
                            <div className="mainprofile">
                                <div className="profilepic">
                                    <img src="assets/images//PhoneIcon.svg" className="img-fluid" />
                                </div>
                                    <div className="profiledesc body-emphasized-14pt">
                                        <div className="body-secondary-info-14pt">Emergency Contacts</div>
                                        {data.emergency_contact}
                                    </div>
                                </div>
                                <div className="mainprofile">
                                    <div className="profilepic">
                                        <img src="assets/images/InsuranceIcon.svg" className="img-fluid" />
                                    </div>
                                        <div className="profiledesc body-emphasized-14pt">
                                            <span className="body-secondary-info-14pt">Insurance Provider</span><br/>
                                            {data.insurance_type}
                                        </div>
                                    </div>
    </Fragment>
  );
};

export default PatientData;
