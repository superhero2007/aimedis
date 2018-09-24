import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Title from 'components/Title';
import Overview from 'components/Overview';
import InstitutionsItem from 'components/InstitutionsItem';
import Feature from 'components/Feature';
import { Link } from 'react-router-dom';

export default class Institutions extends React.PureComponent {
  render() {
    return (
      <div key="Institutions" className="app__institutions app__route">
        <div className="container">
          <section className="app__institutions__section1">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="app__institutions__section1__title">
                <Title title="Who gets the most out of Aimedis" subtitle="institutions" />
              </div>
              <div className="app__institutions__section1__content">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <Link to="#item1">
                      <Overview
                        order={1} title="Insurance companies"
                        subtitle="Excepteur sint accaecut cupidatat n every actual browser"
                        src="institutions-mobile.png" link="assets/media/images/institutions-web.png"
                      />
                    </Link>
                    <Link to="#item2">
                      <Overview
                        order={2} title="Hospitals"
                        subtitle="Excepteur sint accaecut cupidatat n every actual browser"
                        src="institutions-mobile.png" link="assets/media/images/institutions-web.png"
                      />
                    </Link>
                    <Link to="#item3">
                      <Overview
                        order={3} title="Pharma Companies"
                        subtitle="Excepteur sint accaecut cupidatat n every actual browser"
                        src="institutions-mobile.png" link="assets/media/images/institutions-web.png"
                      />
                    </Link>
                  </div>
                  <div className="col-lg-7 d-none d-lg-block app__institutions__section1__content__image">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} initiallyVisible={true}>
                      <img src={require('assets/media/images/institutions-web.png')} alt="No Asset" />
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </section>
          <section className="app__institutions__section2 d-none d-lg-block">
            <InstitutionsItem
              title="Dois aute irure dolor" subtitle="INSURANCE COMPANIES"
              description="Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help."
              src="institutions-bg2.png"
              align="left"
            />
            <InstitutionsItem
              title="Dois aute irure dolor" subtitle="Hospitals"
              description="Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help."
              src="institutions-bg1.png"
              align="right"
            />
            <InstitutionsItem
              title="Dois aute irure dolor" subtitle="Pharma Companies"
              description="Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help."
              src="institutions-bg2.png"
              align="left"
            />
          </section>
          <section className="app__institutions__section3">
            <Feature />
          </section>
        </div>
      </div>
    );
  }
}
