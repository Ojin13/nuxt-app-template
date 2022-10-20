import axios from 'axios'
import {coreFunctions} from "./coreFunctions"

const apiClient = axios.create({
  baseURL: `https://xxx.com/api`,
})


export default {

  // Firebase callable cloud function example
  getSomething(firebase, data = {getAll: false}) {
    const getSomethingFunction = firebase.functions.httpsCallable('cloudFunctionName');
    return getSomethingFunction(coreFunctions.appendAuthKeys(data))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
        return 0;
    });
  },

  // Axios call example
  uploadNewPhoto(formData, config){
    apiClient.post('/image_upload.php', formData, config);
  }
}
