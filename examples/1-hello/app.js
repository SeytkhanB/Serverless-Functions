const greeting = document.querySelector(".greeting");
const msg = document.querySelector(".msg");
const err = document.querySelector(".error");

const url = `/api/1-hello`;

const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    greeting.textContent = data.greeting;
    msg.textContent = data.msg;
  } catch (error) {
    err.textContent = error.response.data;
  }
};

fetchData();
