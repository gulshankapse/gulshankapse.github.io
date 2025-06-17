import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";

function Contact() {
    const [showTooltip, setShowTooltip] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText("gulshankapse8@gmail.com");
        setShowTooltip(true);
        setTimeout(() => {
            setShowTooltip(false);
        }, 700);
    };

    return (
        <ContactWrapper id="contact">
            <div className="Container">
                <div className="SectionTitle">Get In Touch 📧</div>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="BigCard">
                        <Email>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1.5rem",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                }}
                            >
                                <span>gulshankapse8@gmail.com</span>
                                <Tooltip
                                    PopperProps={{ disablePortal: true }}
                                    open={showTooltip}
                                    onClose={() => setShowTooltip(false)}
                                    title="Copied!"
                                    TransitionComponent={Zoom}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    placement="bottom"
                                >
                                    <IconButton
                                        onClick={copyToClipboard}
                                        aria-label="Copy email to clipboard"
                                    >
                                        <MdContentCopy
                                            size={28}
                                            style={{
                                                cursor: "pointer",
                                                color: "#151418",
                                            }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <a
                                className="btn PrimaryBtn btn-shadow"
                                href="mailto:gulshankapse8@gmail.com"
                            >
                                Send Email
                            </a>
                        </Email>
                    </div>
                </ScrollAnimation>
            </div>
        </ContactWrapper>
    );
}

export default Contact;
