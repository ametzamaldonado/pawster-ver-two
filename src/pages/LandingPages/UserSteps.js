import React from "react";
import first from "../../img/findPet.png";
import second from "../../img/playPet.png";
import third from "../../img/growPet.png";
import "./UserSteps.scss";

function UserSteps() {
  return (
    <div className="info-container">
      <div className="row">
        <div className="column">
          <div className="span-2">
            <img src={first} alt="findpet" />
          </div>
          <div className="span-3">
            <div className="text">
              <div className="inner-text-border">
                <h1>01</h1>
                <h3>find</h3>
                <p>
                  Shelter animals looking for a foster home or forever home - all in one place. It's
                  like a meeting portal for animals and people, a place for New
                  York City residents and shelter animals to meet. While navigating the
                  Pawster website, it is not only convenient but <span>fun</span> to 
                  look through the photos of pets looking for some companionship. After flipping their cards and learning more about what makes them special, remeber to swipe right on ones you like!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="span-3">
              <div className="text">
                <div className="inner-text-border">
                  <h1>02</h1>
                  <h3>get to know</h3>
                  <p>
                    Much like with "normal" relationships, "happily ever after"
                    does not always happen "at first sight". The decision to
                    foster an animal into your home is a big responsibility. So
                    feel free to go on a few dates, maybe even with a few
                    animals. Only after getting to know each other, will
                    you understand if you are compatiable with each other.
                  </p>
                </div>
              </div>
            </div>
            <div className="span-2">
              <img src={second} alt="playPet" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="span-2">
              <img src={third} alt="playPet" />
            </div>
            <div className="span-3">
              <div className="text">
                <div className="inner-text-border">
                  <h1>03</h1>
                  <h3>Grow</h3>
                  <p>
                  Once you've found your perfect partner, you'll share a common life together in one space. This stage is both joyful and full of new tests and challenges. During the first few weeks of your partnership, an experienced Pawster mentor will be available to assist you in overcoming these challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSteps;
