import Config from "./config";
const SendReq = (method, formData = null, uri) => {
    var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      
      if (formData !== null) {
        console.log('yes')
        var requestOptions = {
          method: method,
          headers: myHeaders,
          body: formData,
          redirect: 'follow'
        };
      } else {
        var requestOptions = {
          method: method,
          headers: myHeaders,
          redirect: 'follow'
        };
      }
      
    return  fetch(""+Config.uri+""+uri+"", requestOptions)
        
}
export default SendReq;