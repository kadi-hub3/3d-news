import React, { useEffect } from "react";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { StyledNewsLetter } from "./Newsletter.styles";
const Newsletter = () => {
  useEffect(() => {
    const openPopupbox = () => {
      const content = (
        <div>
          <p className="quotes">Work like you don't need the money.</p>
          <p className="quotes">Dance like no one is watching.</p>
          <p className="quotes">And love like you've never been hurt.</p>
          <span className="quotes-from">― Mark Twain</span>
        </div>
      );
      PopupboxManager.open({ content });
    };
    openPopupbox();
  }, []);

  return (
    <div>
      <PopupboxContainer />
    </div>
  );
};

export default Newsletter;
