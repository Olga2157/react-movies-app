import * as React from "react";
import { Button } from "reactstrap";

const AddMoviePopup: React.FC<{}> = (props) => {

  const popupClass = "popup-container invisible";
  const popupId = "add-movie-popup";

  const closePopup = function () {
    let addMoviePopup = document.getElementById(
      popupId
    ) as HTMLButtonElement;
    addMoviePopup.classList.add("invisible");
  };

  return (
    <div className={popupClass} id={popupId}>
      <div>
        <Button close onClick={closePopup} />
      </div>
      {/* <p className="text-black-50">to be added smt...</p> */}
    </div>
  );
};

export default AddMoviePopup;
