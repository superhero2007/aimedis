import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import GetEarlyAccess from 'components/GetEarlyAccess';
import VideoMask from 'components/VideoMask';
import Avatar from 'components/Avatar';
import Title from 'components/Title';
import OfferItem from 'components/OfferItem';
import StaticItem from 'components/StaticItem';
import OverviewList from 'components/OverviewList';
import Carousel from 'components/Carousel';
import BlogItem from 'components/BlogItem';
import Notification from 'components/Notification';
import Feature from 'components/Feature';

export default class Home extends React.PureComponent {
  render() {
    const overviewList = [
      {
        id: 1,
        right: 'IMac.png',
        src: 'mobile.png',
        subtitle: 'In every actual browser',
        title: 'Fully responsive',
      },
      {
        id: 2,
        right: 'IMac.png',
        src: 'mobile.png',
        subtitle: 'also fully functional abroad',
        title: 'Multilanguage',
      },
      {
        id: 3,
        right: 'IMac.png',
        src: 'mobile.png',
        subtitle: 'also for unexperienced patients simple & fast',
        title: 'Easy to use',
      },
      {
        id: 4,
        right: 'IMac.png',
        src: 'mobile.png',
        subtitle: 'For optimal security through regular security audits',
        title: 'ISO 21007 certification',
      },
      {
        id: 5,
        right: 'IMac.png',
        src: 'mobile.png',
        subtitle: 'Tested by active physicians and medical IT specialists',
        title: 'Tested by doctors & hospitals',
      },
    ];
    return (
      <div key="Home" className="app__home app__route">
        <div className="container">
          <section className="app__home__section1">
            <div className="app__home__section1__content">
              <div className="row">
                <div className="col-lg-6 col-md-12 p-lg-0">
                  <div className="app__home__section1__content__header">Aimedis is the health platform of the future.
                  </div>
                  <div className="app__home__section1__content__subheader d-none d-lg-block">Aimedis has been developed by
                  doctors for patients, doctors and hospitals - designed to give patients the complete control over
                  their
                  health data and support.
                  </div>
                  <div className="app__home__section1__content__image d-block d-lg-none">
                    <VideoMask />
                  </div>
                  <div className="app__home__section1__content__get__access">
                    <GetEarlyAccess />
                  </div>
                  <div className="app__home__section1__content__terms">By filling my email and clicking on “GET EARLY
                  ACCESS“
                  I agree to the <Link to="#">Conditions Of Use</Link> and the <Link to="#">Data Protection Policy</Link>.
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1 d-none d-lg-block app__home__section1__image">
                  <VideoMask />
                  <div className="app__home__mask__one">
                    <img src={require('assets/media/images/bg.png')} alt="No Asset" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="app__home__section2">
            <div className="app__home__section2__content">
              <div className="row">
                <div className="col-lg-2 col-6 app__home__section2__content__item">
                  <Avatar src="fhir.png" />
                </div>
                <div className="col-lg-2 col-6 app__home__section2__content__item">
                  <Avatar src="fhir.png" />
                </div>
                <div className="col-lg-2 col-6 app__home__section2__content__item">
                  <Avatar src="fhir.png" />
                </div>
                <div className="col-lg-2 col-6 app__home__section2__content__item">
                  <Avatar src="fhir.png" />
                </div>
                <div className="col-lg-2 col-6 app__home__section2__content__item">
                  <Avatar src="fhir.png" />
                </div>
                <div className="col-lg-2 col-6 app__home__section2__content__item">
                  <Avatar src="fhir.png" />
                </div>
              </div>
            </div>
          </section>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <section className="app__home__section3">
              <div className="app__home__section3__title text-center">
                <Title title="What Aimedis offers" subtitle="Platform features" />
              </div>
              <div className="app__home__section3__content">
                <div className="row">
                  <div className="col-lg-3 col-6 app__home__section3__content__item">
                    <OfferItem title="Your health data in one place" icon="your-health-data-in-one-place" src="" />
                  </div>
                  <div className="col-lg-3 col-6 app__home__section3__content__item">
                    <OfferItem title="Videochat with doctors" icon="your-health-data-in-one-place" src="" />
                  </div>
                  <div className="col-lg-3 col-6 app__home__section3__content__item">
                    <OfferItem title="Doctors appointments" icon="your-health-data-in-one-place" src="" />
                  </div>
                  <div className="col-lg-3 col-6 offset-lg-3 app__home__section3__content__item">
                    <OfferItem title="Independent Second Opinion" icon="your-health-data-in-one-place" src="" />
                  </div>
                  <div className="col-lg-3 col-6 app__home__section3__content__item">
                    <OfferItem title="Connect fitness trackers" icon="your-health-data-in-one-place" src="" />
                  </div>
                  <div className="col-lg-3 col-6 app__home__section3__content__item">
                    <OfferItem title="Care for your family" icon="your-health-data-in-one-place" src="" />
                  </div>
                  <div className="col-lg-3 col-6 offset-lg-3 app__home__section3__content__item">
                    <OfferItem title="Prescription online" icon="your-health-data-in-one-place" src="" />
                  </div>
                  <div className="col-lg-3 col-6 app__home__section3__content__item">
                    <OfferItem title="Medical tourism" icon="your-health-data-in-one-place" src="" />
                  </div>
                  <div className="col-lg-3 col-6 app__home__section3__content__item">
                    <OfferItem title="Your health data in one place" icon="your-health-data-in-one-place" src="" last={true} />
                  </div>
                </div>
              </div>
            </section>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <section className="app__home__section4">
              <div className="app__home__section4__content">
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                      <div className="text-center text-lg-left mx-auto ml-lg-0">
                        <Title title="The Technology" subtitle="forward thinking" />
                      </div>
                      <p className="app__home__section4__content__subtitle">Blockchain smart contracts smart graphs artificial
                      intelligence highest security standards payments cryptocurrencies ICD ATC HL7 FHIR HIPPA IHE
                      DICOM.
                      </p>
                      <p className="app__home__section4__content__subtitle">Soon Aimedis will offer much more including
                      AIMSocial
                      - the
                      interactive patient platform that is secured and supported by a blockchain and help patients to
                      support each other on a new level.
                      </p>
                      <button
                        className="app__home__section4__content__download body btn btn__secondary ml-0"
                        type="button"
                      >DOWNLOAD
                      TECH SPEC (3.4 MB)
                      </button>
                    </ScrollAnimation>
                  </div>
                  <div className="col-lg-7 d-none d-lg-block">
                    <div className="row">
                      <div className="col-lg-6 app__home__section4__content__item">
                        <StaticItem title="Optimal Security" icon="your-health-data-in-one-place" />
                      </div>
                      <div className="col-lg-6 app__home__section4__content__item">
                        <StaticItem title="Blockchain & Smart contracts" icon="your-health-data-in-one-place" />
                      </div>
                      <div className="col-lg-6 app__home__section4__content__item">
                        <StaticItem title="Smart graphs & AI" icon="your-health-data-in-one-place" />
                      </div>
                      <div className="col-lg-6 app__home__section4__content__item">
                        <StaticItem title="Payment & cryptocurrencies" icon="your-health-data-in-one-place" />
                      </div>
                      <div className="col-lg-6 app__home__section4__content__item">
                        <StaticItem title="AIMSafe drug safety" icon="your-health-data-in-one-place" />
                      </div>
                      <div className="col-lg-6 app__home__section4__content__item">
                        <StaticItem title="ICD 10" icon="your-health-data-in-one-place" />
                      </div>
                      <div className="col-lg-6 app__home__section4__content__item">
                        <StaticItem title="HL7, FHIR, DICOM, HIPAA, IHE" icon="your-health-data-in-one-place" />
                      </div>
                      <div className="col-lg-6 app__home__section4__content__item">
                        <StaticItem title="ATC" icon="your-health-data-in-one-place" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <section className="app__home__section5">
              <div className="app__home__section5__title text-center">
                <Title title="Aimedis Ecosystem" subtitle="Platform Overview" />
              </div>
              <div className="app__home__section5__content">
                <OverviewList list={overviewList} />
              </div>
            </section>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <section className="app__home__section6">
              <div className="app__home__section6__title text-center">
                <Title title="Testimonials" subtitle="what users say" />
              </div>
              <div className="app__home__section6__content">
                <Carousel />
              </div>
            </section>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <section className="app__home__section7 d-none d-lg-block">
              <div className="app__home__section7__title">
                <Title title="Aimedis is mobile" subtitle="information on the go" />
              </div>
              <div className="app__home__section7__content">
                <div className="app__home__section7__content__mobile app__home__section7__content__iphone">
                  <div className="app__home__section7__content__mobile__img app__home__section7__content__iphone__img mx-auto">
                    <img src={require('assets/media/icons/icon_apple.png')} alt="No Asset" />
                  </div>
                  <p className="app__home__section7__content__mobile__title app__home__section7__content__iphone__title">
                    on iPhone and iPad from iOS 9
                  </p>
                  <button
                    className="btn btn__secondary app__home__section7__content__mobile__button app__home__section7__content__iphone__button"
                    type="button"
                  >
                    GO TO App Store
                  </button>
                </div>
                <div className="app__home__section7__content__mobile app__home__section7__content__android">
                  <div className="app__home__section7__content__mobile__img app__home__section7__content__android__img mx-auto">
                    <img src={require('assets/media/icons/icon_android.png')} alt="No Asset" />
                  </div>
                  <p className="app__home__section7__content__mobile__title app__home__section7__content__android__title">
                    on Android smartphones and tablet from Android 4
                  </p>
                  <button
                    className="app__home__section7__content__mobile__button btn btn__primary app__home__section7__content__android__button"
                    type="button"
                  >
                    GO TO GOOGLE PLAY
                  </button>
                  <div className="app__home__section7__content__mobile__soon">
                    soon
                  </div>
                </div>
                <div className="app__home__section7__content__img ml-auto">
                  <img src={require('assets/media/images/iPhoneX-01.png')} alt="No Asset" />
                </div>
              </div>
            </section>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <section className="app__home__section8">
              <div className="app__home__section8__title text-center">
                <Title title="Aimedis Blog" subtitle="Learn what’s new" />
              </div>
              <div className="app__home__section8__content app__home_section8__content">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <BlogItem
                      item={{
                        id: 1,
                        title: 'Why Japan, the Tech giant, still needs to improve Health Tech',
                        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
                        src: 'blog1.png',
                      }}
                    />
                  </div>
                  <div className="col-12 col-lg-4">
                    <BlogItem
                      item={{
                        id: 2,
                        title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
                        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
                        src: 'blog2.png',
                      }}
                    />
                  </div>
                  <div className="col-12 col-lg-4">
                    <BlogItem
                      item={{
                        id: 3,
                        title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
                        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
                        src: 'blog3.png',
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </ScrollAnimation>
          <section className="app__home__section9">
            <Feature />
          </section>
          <section className="app__home__mask d-none d-lg-block">
            <div className="app__home__mask__two">
              <img src={require('assets/media/images/Group 8.png')} alt="No Asset" />
            </div>
            <div className="app__home__mask__three">
              <img src={require('assets/media/images/Path 2 Copy 3.png')} alt="No Asset" />
            </div>
            <div className="app__home__mask__five">
              <img src={require('assets/media/images/Group 2.png')} alt="No Asset" />
            </div>
            <div className="app__home__mask__notification">
              <Notification icon="flash.png">
                <div className="app__home__mask__notification__content">
                  <div className="app__home__mask__notification__content__title">
                    <Link to="#">Token sale</Link> is currently live!
                  </div>
                  <div className="app__home__mask__notification__content__description">
                  Ending in <span>12d 15h 3m 44s</span>
                  </div>
                </div>
              </Notification>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
