import api from "./api";

 const getAll = () => {

   return fetch(api.posts)
   .then(res => res.json())
   .catch(error => console.log(error));
}

export default {
   getAll,
   
}

