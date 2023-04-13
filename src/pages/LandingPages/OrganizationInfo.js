import React from "react";
import "./OrganizationInfo.scss";

function OrganizationInfo() {
  const cardInfo = [
    {
      title: "Pawster Mentors",
      text: "Experience shows that when a pet arrives in a new home, a transition phase is often necessary. Both the pet and its foster parent need to find the rules of mutual communication and get to know each other's needs. Challenges may arise at this stage, and a person with experience in this field can gladly help solve them. We offer the help of such people - mentors who can take care of the relationship between the you and your Pawster pet in the first weeks.",
    },
    {
      title: "Animal administration platform",
      text: "We have created a specialized platform for shelters, where it is extremely easy to create a profile for pets to look for a new foster home, and information about it is automatically transferred to the Pawster website. On this platform, you can conveniently see the list of animals in your shelter, and monitor the 'matches' for each pet's profile!",
    },
    {
      title: "Foster parents platform",
      text: "Raising an animal is an important and joyful stage of life. However, finding the chosen one takes a lot of time, various questions arise, and the process is complicated by the abundance of channels and lack of information. Pawster helps people find animals up for adoption in one place, get concise, accurate and positive information about them. This makes the selection process quick, easy and enjoyable.",
    },
  ];
  return (
    <>
      <div className="organization-section-container">
        <div className="section-info">
          <div className="section-min">
            <div className="section-title">
              <h3>Pawster benefits animal welfare organizations</h3>
            </div>
            <div className="section-text">
              The goal of the Pawster developers is to create a modern, independent
              and unified platform for shelters to showcase their animals waiting to be adopted.
              We want to ensure all animals are seen by willing New Yorkers, who want to lend a helping hand to give these animals all the love they deserve.
            </div>
          </div>
        </div>
        <div className="card-section">
          {cardInfo.map((card) => (
            <div className="card">
              <div className="title">
                <h4>{card.title}</h4>
                <div className="text">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OrganizationInfo;
