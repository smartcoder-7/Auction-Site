import React, { PureComponent } from 'react'
import { Col, Row } from 'reactstrap'

import AppContainerLayout from 'layouts/AppContainerLayout'
import AppLayout1 from 'layouts/AppLayout1'
import IconListItem from 'components/IconListItem'
import Section from 'components/Section'
// import SectionTitle from 'components/SectionTitle'
import DonateSubscribeBar from 'components/DonateSubscribeBar'

import missionImg from 'images/mission.jpg'
import iconMisson1 from 'images/icon-mission1.svg'
import iconMisson2 from 'images/icon-mission2.svg'
import iconMisson3 from 'images/icon-mission3.svg'

// import logoBusiness from 'images/logos/logo-business.png'
// import logoCnn from 'images/logos/logo-cnn.png'
// import logoForbes from 'images/logos/logo-forbes.png'
// import logoMashable from 'images/logos/logo-mashable.png'
// import logoProducthunt from 'images/logos/logo-producthunt.png'
// import logoTechcrunch from 'images/logos/logo-techcrunch.png'
// import logoTnw from 'images/logos/logo-tnw.png'
// import logoYahoo from 'images/logos/logo-yahoo.png'

// const ImageItem = ({ image }) => (
//   <Col xs={12} sm={6} md={3} className="pt-40 pt-md-60 text-center">
//     <img src={image} alt="" />
//   </Col>
// )

class Mission extends PureComponent {
  render() {
    return (
      <AppLayout1>
        <AppContainerLayout>
          <Row>
            <Col xs={12} md={7}>
              <Section title="Mission" mbResponsive>
                <p>
                  We believe everyone has it in them to want to do good, but sometimes it’s hard
                  to figure out how. That’s why we’ve made it our mission to do more good in the
                  world by helping others with easy, meaningful giving. We’ve created a unique
                  auction space full of interesting and valuable goods. Each day, we help people
                  place them on auction for buyers around the world, with some of the proceeds
                  going to various causes.
                </p>
                <p>
                  <img src={missionImg} alt="Mission" className="w-100" />
                </p>
                <p>
                  We’re here to help you turn your things into support for the causes you believe
                  in. Being a do-gooder has never been easier.
                </p>
              </Section>
            </Col>
            <Col xs={12} md={5}>
              <Section title="Our Values" className="pl-md-4">
                <IconListItem image={iconMisson1}>
                  Improving the lives of people around the world.
                </IconListItem>
                <IconListItem image={iconMisson2}>
                  Making giving interesting and easy
                </IconListItem>
                <IconListItem image={iconMisson3}>
                  Building a community that leverages the power of internet to transform lives.
                </IconListItem>
              </Section>
            </Col>
          </Row>
        </AppContainerLayout>
        <DonateSubscribeBar />
        {/* <AppContainerLayout>
          <Section>
            <SectionTitle className="text-center">Mentioned In</SectionTitle>
            <Row className="align-items-center">
              <ImageItem image={logoYahoo} />
              <ImageItem image={logoBusiness} />
              <ImageItem image={logoTechcrunch} />
              <ImageItem image={logoForbes} />
              <ImageItem image={logoProducthunt} />
              <ImageItem image={logoTnw} />
              <ImageItem image={logoMashable} />
              <ImageItem image={logoCnn} />
            </Row>
          </Section>
        </AppContainerLayout> */}
      </AppLayout1>
    )
  }
}

export default Mission
