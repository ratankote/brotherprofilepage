import React, {useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 import '../family/family.css'
// Import Swiper styles
import 'swiper/css';
// import './members.css';
import 'swiper/css/effect-coverflow';
import "swiper/css/effect-cube";
import 'swiper/css/pagination';
import { Link } from "react-scroll";
// import required modules

import { EffectCoverflow,EffectCube, Pagination } from 'swiper';
import { Alldata } from './data';

export default function Members() {
  const familyData = Alldata;
  console.log(familyData, '66');
  const [aboutData, setAboutData] = useState({});
  const [isCLicked, setIsClicked] = useState(false);
  const [Photos,setPhotos] = useState()
  const aboutCLick = (data) => {
    if (data.Id !== 5 ) {
      setAboutData(data);
      setIsClicked(true);
    } else {
      setIsClicked(false);

    }
  };
  return isCLicked ? (
    <>
      <button
        type="button"
        className=" btr"
        onClick={() => {
          setIsClicked(false)
          setPhotos()}}
      >
        Back
      </button>
      <h1>{aboutData.name} Family Details </h1>
      {
        <div className="card mb-3 clr" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src= {aboutData.Family[0].photo[0]} className="img-fluid rounded-start ptnr" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-text">
                <em>  Relation : </em>{aboutData.Family[0].name === 'Surekha Angad kote'
                    ? 'Wife'
                    : 'Husband'}
                </h6>
                <h4 className="card-title">{aboutData.Family[0].name}</h4>
                <p className="card-text"><em>Work :</em> {aboutData.Family[0].Work}</p>
                <p className="card-text"><em>Address :</em> {aboutData.Address}</p>
              </div>
            </div>

            <div className="accordion accordion-flush acordion " id="accordionFlushExample">
            <div className="accordion-item clr">
    <h2 className="accordion-header " id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Memories
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
        <Swiper
effect={"cube"}
grabCursor={true}
cubeEffect={{
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
}}
pagination={true}
modules={[EffectCube, Pagination]}
className="mySwiper myss"
>
{aboutData.Family[0].photo.map((val,ind)=>{
  return(
    <>
    <SwiperSlide key={ind}>
  <img src={val}alt='' />
</SwiperSlide>
    </>
  )
})}
</Swiper>
      </div>
    </div>
  </div>
              <div className="accordion-item clr">
                <h2 className="accordion-header " id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Children's
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  {Photos ?(
                    <>
                     <button
        type="button"
        className="btn-close" 
        onClick={() => setPhotos()}
      >
      
      </button>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {Photos.photo.map((imgs,ind)=>{
            return(
              <>
              <SwiperSlide key={ind}>
            <img src={imgs} />
          </SwiperSlide>
              </>
            )
          })}
        </Swiper>
      </>
                  ):( 
                  <div className="table-responsive">
                  <table className="table fnt">
                      <thead>
                        <tr>
                          <th scope="col">FullName</th>
                          <th scope="col">Worak</th>
                          <th scope="col">Preview</th>
                        </tr>
                      </thead>
                      <tbody>
                        {aboutData.Family.map((val, idx) => {
                          return (
                            <>
                              {idx !== 0 &&(
                                <tr key={idx}>
                                  <td>{val.name}</td>
                                  <td>{val.work}</td>
                                  <td>
                                    <button type="button" className="btn btn-outline-secondary" onClick={()=>{setPhotos(val)}}>
                                      Photos
                                    </button>
                                  </td>
                                </tr>
                              )}
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  ) : (
    <>
      <div>
        {familyData.map((val,ind) => {
          return (
            <div className="card mb-3 clr" key={ind} >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src= {val.image}
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{    width:' inherit'}}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <h6 className="card-title"> <em>Relation :</em> {val.Relation}</h6>
                    <h5 className="card-title"><em>Name :</em> {val.name}</h5>
                    <p className="card-text"><em>Address :</em> {val.Address}</p>    
                    <Link to="services" spy={true} smooth={true}>
              
             
                 {val.Id !== 6 && <div>  {val.website?(<a href={val.website} target='_blank'>viste my website!</a>):(<button
                       type="button"
                       className=" btr"
                      onClick={() => aboutCLick(val)}
                    >
                      {val.button}
                    </button>)} 
                    </div>}
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
     
    </>
  );
}
