import ScrollAnimation from "react-animate-on-scroll";
import {
    ContactWrapper,
    SectionTitle,
    SectionSubtitle,
    QualificationContainer,
    QualificationTab,
    QualificationContent,
    QualificationData,
    QualificationTitle,
    QualificationSubtitle,
    QualificationCalendar,
    QualificationRound,
    QualificationLine,
} from "./QualificationElements";

function Qualification() {
    return (
        <ContactWrapper id="qualification">
            <div className="Container">
                <SectionTitle>Qualification 🎓</SectionTitle>
                <SectionSubtitle>My Personal Journey </SectionSubtitle>

                <QualificationContainer>
                    <QualificationTab>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </QualificationTab>

                    <QualificationContent>
                        <ScrollAnimation animateIn="fadeInLeft">
                            <QualificationData>
                                <div>
                                    <QualificationTitle>
                                        Master of Computer Applications (MCA)
                                    </QualificationTitle>
                                    <QualificationSubtitle>
                                        National Institute of Technology
                                        Jamshedpur (NIT Jamshedpur)
                                    </QualificationSubtitle>
                                    <QualificationCalendar>
                                        <i className="uil uil-calendar-alt"></i>{" "}
                                        2023 - Present
                                    </QualificationCalendar>
                                </div>
                                <div>
                                    <QualificationRound />
                                    <QualificationLine />
                                </div>
                            </QualificationData>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInLeft">
                            <QualificationData>
                                <div />
                                <div>
                                    <QualificationRound />
                                    <QualificationLine />
                                </div>
                                <div>
                                    <QualificationTitle>
                                        Bachelor of Science in Computer Science
                                    </QualificationTitle>
                                    <QualificationSubtitle>
                                        Government Holkar Science College Indore
                                    </QualificationSubtitle>
                                    <QualificationCalendar>
                                        <i className="uil uil-calendar-alt"></i>{" "}
                                        2017 - 2020
                                    </QualificationCalendar>
                                </div>
                            </QualificationData>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInLeft">
                            <QualificationData>
                                <div>
                                    <QualificationTitle>
                                        Higher Secondary Education
                                    </QualificationTitle>
                                    <QualificationSubtitle>
                                        School of Excellence Betul (M.P.)
                                    </QualificationSubtitle>
                                    <QualificationCalendar>
                                        <i className="uil uil-calendar-alt"></i>{" "}
                                        2013 - 2017
                                    </QualificationCalendar>
                                </div>
                                <div>
                                    <QualificationRound />
                                    <QualificationLine />
                                </div>
                            </QualificationData>
                        </ScrollAnimation>
                    </QualificationContent>
                </QualificationContainer>
            </div>
        </ContactWrapper>
    );
}

export default Qualification;
