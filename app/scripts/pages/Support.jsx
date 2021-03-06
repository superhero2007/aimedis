import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import InputBox from 'components/InputBox';

export default class Support extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handle = () => {
    this.setState({ active: true });
    setTimeout(() => {
      this.setState({ active: false });
    }, 3000);
  };

  render() {
    const email = (value) => {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    };

    const { active } = this.state;

    return (
      <div key="Support" className="app__support app__route">
        <div className="container">
          <section className="app__support__section1">
            <div className="app__support__section1__content">
              <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3">
                  <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <p className="app__support__section1__content__title">
                      Support Message
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <p className="app__support__section1__content__description">
                      If you have a question or are experiencing issues with Aimedis, you can send us a Sopprt Message and we will back to you ASAP
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <div className="app__support__section1__content__form">
                      <InputBox label="Name" height={3.5} />
                      <InputBox label="E-mail address" height={3.5} validate={email} validationString="Email is invalid." />
                      <InputBox label="Message" height={11.125} multiline={true} />
                      <button type="button" className="btn btn__primary app__support__section1__content__form__button" onClick={this.handle}>SEND</button>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
          {active && (
            <section className="app__support__section2 d-none d-lg-block">
              <div className="app__support__notification">
                <p className="app__support__notification__context">Support Message was send succesfuly!</p>
                <div className="app__support__notification__icon">
                  <i className="i-check-circle-o" />
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }
}
