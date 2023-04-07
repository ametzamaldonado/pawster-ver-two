import React from "react";
import first from "../../img/findPet.png";
import second from "../../img/playPet.png";
import third from "../../img/growPet.png";

function StepsNavBody() {
  return (
    <div className="info-container">
      <div className="row">
        <div className="column">
          <div className="span-2">
            <img src={first} alt="findpet" />
          </div>
          <div className="span-3">
            <div className="text">
              <h1>01</h1>
              <h5>find</h5>
              <p>
                Homeless animals looking for a home - all in one place. It's
                like a meeting portal for animals and people, a place for New
                York City residents and homeless animals to meet. In the Pawster
                app and on the website, it is convenient to quickly look through
                the photos of pets looking for a home, choose the ones you like,
                and after opening the profile of the animal, you can learn more
                about each one and in contact with their respective shelters.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="span-3">
              <div className="text">
                <h1>02</h1>
                <h5>get to know</h5>
                <p>
                  Both with people and animals - love "happily ever after" does
                  not always happen "at first sight". The decision to adopt an
                  animal into your home is a big responsibility. So feel free to
                  go on a few dates, maybe even with a few animals. Only after
                  getting to know each other better will you understand if you
                  are really suitable for each other.
                </p>
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
                <h1>03</h1>
                <h5>Grow</h5>
                <p>
                  After you find, get to know and feel in your heart that you
                  have met your soul mate - a common life awaits you together in
                  one space. This stage is both joyful and full of new tests and
                  challenges. An experienced GetPet mentor will help you
                  overcome them - this is a person who will help you for free in
                  the first weeks of life with your new pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsNavBody;
