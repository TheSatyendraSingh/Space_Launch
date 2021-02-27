import React ,{useState,useEffect}from 'react';
import { FcCheckmark } from "react-icons/fc";

export const Space = () => {

    const [User,setUser]=useState([]);
    const getUsers=async()=>{
        const response= await  fetch('https://api.spacexdata.com/v3/launches?limit=100');
        setUser(await response.json());   

    }
    useEffect(() => {
        getUsers();  
        },[]);
    
    return (
        <>
        <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">SpaceX Launch Program</a>
  <div className="Launch_year">
  <a href="" class="navbar-brand">Launch Year</a>
  <a href="" class="navbar-brand">2006</a >
  <a href="" class="navbar-brand">2007</a>
  <a href="" class="navbar-brand">2008</a>
  <a href="" class="navbar-brand">2009</a>
  <a href="" class="navbar-brand">2010</a>
  </div>
</nav>
       
    
        <div className="container-fluid mt-3">
            <div className="row text-center">

{
    User.map((curElem)=>{
        return(
            <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                    <div className="card p-2">
                        <div className="d-flex align-items-center">
                        <div className="image"> <img src={curElem.links.mission_patch_small} className="rounded" width="155" /> </div>
                        <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{curElem.flight_number} - {curElem.mission_name}<FcCheckmark /></h4>
                                             <span className="text-left">{curElem.launch_date_local}</span>
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Missonid</span> <span className="number1"></span>{curElem.mission_id} </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">LaunchYear</span> <span className="number2"></span> {curElem.launch_year}</div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Landing</span> <span className="number3"></span> {curElem.is_tentative}</div>
                                        </div>
                        </div>

                        </div>

                    </div>

                </div>

        )

    })
}

                

            </div>

        </div>
        <h2>Developed By Satyendra Singh</h2>
        </>
    )
}
 export default Space