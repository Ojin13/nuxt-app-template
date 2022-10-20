export default class CoreFunctions{

  appendAuthKeys(data){
      data.keyForDataKey = this.getCookie("keyForDataKey");
      data.doubleEncryptedDataKey = this.getCookie("doubleEncryptedDataKey");
      return data;
  }


  unAppendAuthKeys(data){
      delete data.keyForDataKey;
      delete data.doubleEncryptedDataKey;
      return data;
  }
  
  
  getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
          c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
          }
      }
      return "";
  }
}

export const coreFunctions = new CoreFunctions();
