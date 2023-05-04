import "./scss/about.scss";

import Arrow from "../images/arrow-down.svg";
import ContainerLabelled from "../components/container-labelled/container-labelled";
import Image1 from "../components/about-page/image-1";
import Image2 from "../components/about-page/image-2";
import Layout from "../components/layout";
import LongDashText from "../components/long-dash-text/long-dash-text";
import PageHeading from "../components/page-heading/page-heading";
import PromoImage from "../components/about-page/promo";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";

export default ({ data }) => {
    const members = data.allContentfulTeamMember.nodes;

    return (
        <Layout className="about-page-layout">
            <SEO title="About Seventa Events" description="We are a mighty team, specialising in events"/>
            <PageHeading
                pageName="We are Seventa"
                pageTitle="A highly skilled team, specialising in all things events, hospitality and experience led."
                description="Founded in 2011, we are built on a love and enthusiasm for the industry, the desire to create a talented group of individuals that create, deliver and excite for our clients.
                Like a number of success stories, we started out of a garden shed. We now have hubs in London and Bournemouth with amazing clients across the UK, and a small portfolio of our own successful brands and events."
            />
            <ContainerLabelled label={<Arrow />} className="about-page-promo" innerClassName="about-page-promo__inner" labelClassName="about-page-promo__label">
                <PromoImage />
            </ContainerLabelled>
            <ContainerLabelled className="about-page-text about-page-text--blue">
                <h3>About us</h3>
                <LongDashText className="first-dash">
                    <p>Fast forward to today and here we are, known for our personality, experience and creativity, designing events and experiences that we know will leave a lasting impression.</p>
                </LongDashText>
            </ContainerLabelled>
            <div className="about-page-images">
                <div className="about-page-images__item">
                    <Image1 />
                </div>
                <div className="about-page-images__item">
                    <Image2 />
                </div>
            </div>
            <ContainerLabelled className="about-page-text about-page-text--grey" innerClassName="light-bg">
                <p className="light-text">Think BIG</p>
                <h2>Creative individuals bringing ideas to life…</h2>
                <LongDashText>
                    <p>With our Head Office in Bournemouth based out of a 20,000 sq ft industrial warehouse space, we pull together our collective ideas, skills, experiences and we make things happen.

                    Creative ideas backed up with organised minds. We have been on both sides of the fence, we run our own events across the UK, and we also create them for others. We are able to think like a client, a customer, and a guest.</p>
                    <p>We are extremely proud of the clients we have, our brands that we have built, and the events & experiences we produce. </p>
                </LongDashText>
            </ContainerLabelled>
            {
                members && members.length
                ?   <div className="team-members-section">
            <ContainerLabelled className="about-page-text about-page-text--grey" innerClassName="">
                <h2>Our sister brands</h2>
                <LongDashText>
                    <p>Whilst we were founded as an Events agency, we have grown over the years into a collective group of creative brands and businesses operating at all levels across the event & hospitality industry.</p>
                    <p>• Seventa Events - <a href="https://seventa.co.uk/">www.seventa.co.uk</a></p>
                    <p>• Innovative Hire - <a href="https://innovativehire.co.uk/">www.innovativehire.co.uk</a></p>
                    <p>• Alpine Christmas Markets - <a href="https://alpinechristmasmarkets.co.uk ">www.alpinechristmasmarkets.co.uk </a></p>
                    <p>• Bournemouth Christmas Market - <a href="https://christmasinbournemouth.co.uk">www.christmasinbournemouth.co.uk</a></p>

                </LongDashText>
            </ContainerLabelled>

   {/*
                        <SectionHeading
                            sectionName=""
                            sectionTitle="Our sister brands"
                            />
                        <ContainerLabelled label={<span className="team-members-section__label"></span>}>
                        <p>Whilst we were founded as an Events agency, we have grown over the years into a collective group of creative brands and businesses operating at all levels across the event & hospitality industry.</p>
                            <div className="team-members-list">
                                {
                                    members.map((member, index) => (
                                        <div className="team-members-list__item" key={index}>
                                            <TeamMember
                                                name={member.name}
                                                position={member.position}
                                                photo={member.photo.fluid}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </ContainerLabelled> */}
                    </div>
                : null
            }
        </Layout>
    );
}

export const query = graphql`
    query Members {
        allContentfulTeamMember {
            nodes {
                name
                photo {
                    title
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyContentfulFluid_withWebp_noBase64
                    }
                }
                position
            }
        }
    }
`;
