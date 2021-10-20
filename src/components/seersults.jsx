import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-spring-3d-carousel';

const SliderOneItem = (props) => (
  <div
    id="addActive"
    className={`agency index1 ${props.active ? 'active' : 'deactive'}`}
  >
    <p>
      <h2>
        <b>{props.result_name}</b>
      </h2>
      <span className="result-job-title">{props.result_name_job_title}</span>
    </p>
  </div>
);

const SliderTwoItem = (props) => (
  <p className="parter-content slider1">
    {props.slider_description}
    <span
      id="extra_content"
      className="extra_content parter-content slider1"
    ></span>
  </p>
);

const SliderThreeItem = (props) => (
  <div
    className={`slick-slider slick-initialized ${
      props.active ? 'descactive' : 'descdeactive'
    }`}
    dir="ltr"
  >
    <div className="slick-list">
      <div className="slick-track">
        <div className="slick-slide slick-active slick-current">
          <div className="row wssliderdetails">
            <div className="col-md-6 col-sm-3  col-xs-3 col-3">
              <div className="leads">
                <div className="leads-inner">
                  <p>{props.source_name_0}</p>
                  <h1>
                    {props.percentage_value_0}
                    <span> </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-3  col-xs-3 col-3">
              <div className="leads">
                <div className="leads-inner">
                  <p>{props.source_name_1}</p>
                  <h1>
                    {props.percentage_value_1}
                    <span> </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-3  col-xs-3 col-3">
              <div className="leads">
                <div className="leads-inner">
                  <p>{props.source_name_2}</p>
                  <h1>
                    {props.percentage_value_2}
                    <span> </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-3  col-xs-3 col-3">
              <div className="leads">
                <div className="leads-inner">
                  <p>{props.source_name_3}</p>
                  <h1>
                    {props.percentage_value_3}
                    {props.source_name_3 === 'AVG. COST PER LEAD' ? (
                      <span className="down-arrow"> </span>
                    ) : (
                      <span></span>
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SeeResult = () => {
  const [resultData, setResultData] = useState({});
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = () => {
    axios
      .get('https://dev-drupal.ameexdigital.com/api/homepage/1/section/6')
      .then(({ data }) => {
        if (Array.isArray(data) && data.length) {
          setResultData(data[0] || {});
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="result">
      <div className="container-fluid">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="service-tool">
                <h2 className="heading">{resultData?.field_top_title}</h2>
                <p className="sub-tool">{resultData?.field_title}</p>
                <div className="experienced-slider">
                  <div className="experienced-slider-two">
                    <div
                      id="sld1"
                      className={`test1`}
                      style={{
                        width: '50%',
                        height: '80px',
                        margin: '100px auto',
                      }}
                    >
                      <Carousel
                        goToSlide={activeSlide}
                        slides={(
                          resultData.field_result_slider_export || []
                        ).map((item, i) => {
                          return {
                            key: uuidv4(),
                            onClick: () => {
                              setActiveSlide(i);
                            },
                            content: (
                              <SliderOneItem
                                {...item}
                                active={i === activeSlide}
                              />
                            ),
                          };
                        })}
                      />
                    </div>
                    <div className="slidedots">
                      <Carousel
                        goToSlide={activeSlide}
                        slides={(
                          resultData.field_result_slider_export || []
                        ).map((item, i) => {
                          return {
                            key: uuidv4(),
                            content: (
                              <div id="dots" className={`agency index1`}></div>
                            ),
                            onClick: () => setActiveSlide(i),
                          };
                        })}
                      />
                    </div>
                    <br></br>
                  </div>
                </div>
                <div id="desc">
                  <SliderTwoItem
                    {...(resultData.field_result_slider_export?.[activeSlide] ||
                      [])}
                    active
                  />
                  {/* <Carousel
                      goToSlide={activeSlide}
                      slides={(resultData.field_result_slider_export || []).map((item, i) => {
                        return {
                          key: uuidv4(),
                          content: <SliderTwoItem {...item} active={i === activeSlide} />
                        };
                      })}
                    /> */}
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 qualified-wrap">
              <div className="qualified" id="qual">
                <SliderThreeItem
                  {...(resultData.field_result_slider_export?.[activeSlide] ||
                    [])}
                  active
                />
                {/* <Carousel
                    goToSlide={activeSlide}
                    slides={(resultData.field_result_slider_export || []).map((item, i) => {
                      return {
                        key: uuidv4(),
                        content: <SliderThreeItem {...item} active={i === activeSlide} />
                      };
                    })}
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeResult;
