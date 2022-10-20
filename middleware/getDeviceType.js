export default function(context) {

    // Check if device is desktop or mobile

    /*
    let userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
    */

    let userAgent = null;

    if(process){

        if(process.server){
            if(context){
                if(context.req){
                    if(context.req.headers){
                        userAgent = context.req.headers['user-agent'];
                    }
                }
            }
        }else{
            if(navigator){
                userAgent = navigator.userAgent;
            }
        }
    }else{
        if(navigator){
            userAgent = navigator.userAgent;
        }
    }


    if(userAgent == null){
        context.isMobile = false;
    }else{
        context.isMobile = /mobile/i.test(userAgent)
    }

}