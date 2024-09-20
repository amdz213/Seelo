import axios from "axios";

  // Function to generate a random token
  const generateRandomToken = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
  };
  
  function paginateArray(array, pageSize, pageNumber) {
    --pageNumber; // Adjust the page number to 0-based index    
    var startIndex = pageNumber * pageSize;
    var endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  }
  // Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getPlanScopes(userCurrentPlan){
    let scope = [];
    let feature = userCurrentPlan?.features;
    if(feature?.length>0){
      feature.map((val)=>{
        let sarray = val?.feature?.scopes;
        if(sarray?.length>0){
          sarray.map((sval)=>{
            scope.push(sval)
          })
        }
      })
    }
    return scope;
  }
  
  
  const checkItemExistence = (array,item) => {
    if(array?.length > 0){
      return array.includes(item);
    }else{
      return false;
    }
    
  };

  async function getBlogsData() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://selo.cs24ryk.com/api/blogs',
      headers: { }
    };
  
    try {
      const response = await axios.request(config);
      console.log(response.data?.data);
      return response.data?.data;
    } catch (error) {
      console.error(error);
      return null; // return null or handle error data as needed
    }
  }
  

  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  }
  export {formatDate,checkItemExistence,generateRandomToken,paginateArray,getRandomNumber,getPlanScopes,shuffleArray,getBlogsData}