import React, { memo } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ImageFileInput from "./components/image_file_input/image_file_input";
import AuthService from "./service/auth_service";
import CardRepository from "./service/card_repository";
import ImageUploader from "./service/image_uploader";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();

//확장성을 위해서 props을 같이 전달함
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>
);
