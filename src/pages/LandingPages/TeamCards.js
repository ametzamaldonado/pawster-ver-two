import React from "react";
import "./TeamCard.scss";

function TeamCards() {
  const teamCardInfo = [
    {
      teamName: "Ametzayin Maldonado",
      teamTitle: "Software Engineer / Developer",
      imgLink:
        "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff9e70505-a810-41e9-8c68-dd0877044085%2FAmetzayin_Maldonado.jpg?id=f33006ab-54c5-4cc0-b992-b289d44f96f1&table=block&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=1950&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2",
      info: "Graduate from Pursuit's 8.4 cohort, and aspiring software engineer. Developed, planned and architected the entire revamped pawster site. I'd love to hear any advice/suggestions to make the site more user friendly!",
      email: "ametzayinmaldonado@pursuit.org",
      github: "https://github.com/ametzamaldonado",
      linkedIn: "https://www.linkedin.com/in/ametzayin-maldonado-3528b6124",
      personalProfolio: "https://ametza-maldonado-portfolio.netlify.app/",
    },
    {
      teamName: "Ziqian Pan",
      teamTitle: "Development Consultant",
      imgLink:
        "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F72cf6d22-c8e8-43a9-802b-94da5d383848%2FZiqian_Pan.jpg?table=block&id=20acab6a-b2ac-4f6f-a870-ee09fa004c3d&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2",
      info: "Initial consultant for the pawster drafted site.",
      email: "ziqianpan@pursuit.org",
      github: "",
      linkedIn: "",
      personalProfolio: "",
    },
    {
      teamName: "Victor Lopez",
      teamTitle: "Development Consultant",
      imgLink:
        "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba207bb8-6949-469a-9ebf-f829125e24d9%2FVictor_Lopez.jpg?table=block&id=d404fc8f-d13d-45c0-b86a-b605f69618e4&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2",
      info: "Initial consultant for the pawster drafted site.",
      email: "victorlopez@pursuit.org",
      github: "",
      linkedIn: "",
      personalProfolio: "",
    }
  ];
  return (
    <div className="team-container">
      <h1>Team</h1>
      <div className="team-cards-container">
        {teamCardInfo.map((person, index) => (
          <div className="team-card">
            <div className="team-image">
              <img src={person.imgLink} alt={`teamMember-${index}`} />
            </div>
            <h2>{person.teamName}</h2>
            <h6>{person.teamTitle}</h6>
            <p>{person.info}</p>
            <div className="social-media">
              <a href={`mailto:${person.email}`}>
                <i class="bi bi-envelope"></i>
              </a>
              {person.github ? (
                <>
                  <a
                    href={person.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                  <a
                    href={person.linkedIn}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a
                    href={person.personalProfolio}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="bi bi-link"></i>
                  </a>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCards;
