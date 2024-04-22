import axios from 'axios';

const url = "https://www.google.com/search"

const userData = "?q=langchain&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgwIBxAjGCcY6gIYiwPSAQkyNTI2ajFqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8"

const handleSubmit = async () => {
  try {
    // const response = await axios.post(url, userData);
    const response = await axios.get(url + userData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

handleSubmit()