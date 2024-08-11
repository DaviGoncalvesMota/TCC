const fileInput = document.querySelector("#fileInput");

const uploadFile = file => {
  const API_ENDPOINT = "http://localhost:4000/api/uploadimage";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      var response = JSON.parse(request.responseText);
      console.log(response.file);
    }
  };
  formData.append("file", file);
  request.send(formData);
};

fileInput.addEventListener("change", event => {
  const files = event.target.files;
  uploadFile(files[0]);
});