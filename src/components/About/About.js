import React from "react";
import { stackList } from "../../data/ProjectData";
import {
    ContactWrapper,
    SectionTitle,
    SectionSubtitle,
    AboutContainer,
    AboutContent,
    AboutDescription,
    AboutImage,
    Technologies,
    Tech,
    TechImg,
    TechName,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
    return (
        <ContactWrapper id="about">
            <div className="Container">
                <SectionTitle>About Me 🧑🏻</SectionTitle>
                <SectionSubtitle>Let me introduce myself</SectionSubtitle>
                <AboutContainer>
                    <ScrollAnimation animateIn="fadeInLeft">
                        <AboutImage
                            src="/man-svgrepo-com.svg"
                            alt="Profile Illustration"
                        />
                    </ScrollAnimation>
                    <AboutContent>
                        <ScrollAnimation animateIn="fadeInLeft">
                            <AboutDescription>
                                Hello! I'm <strong>Gulshan Kapse</strong>, a
                                passionate full-stack developer specializing in
                                the MERN stack. I love building scalable and
                                efficient web applications from scratch. As a
                                dedicated problem solver, I enjoy tackling
                                complex DSA challenges to sharpen my algorithmic
                                thinking and coding skills. I'm also an
                                enthusiastic learner in machine learning,
                                exploring how AI can solve real-world problems
                                and enhance software capabilities.
                            </AboutDescription>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInLeft">
                            <SectionSubtitle>
                                Here are some technologies I work with:
                            </SectionSubtitle>
                        </ScrollAnimation>

                        <Technologies>
                            {stackList.map((stack, index) => (
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    key={index}
                                >
                                    <Tech>
                                        <TechImg
                                            src={stack.img}
                                            alt={stack.name}
                                        />
                                        <TechName>{stack.name}</TechName>
                                    </Tech>
                                </ScrollAnimation>
                            ))}
                        </Technologies>
                    </AboutContent>
                </AboutContainer>
            </div>
        </ContactWrapper>
    );
}

export default About;
