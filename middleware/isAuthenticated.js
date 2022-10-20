export default function ({ store, redirect }) {
    if (store.getters['auth/getUID'] == undefined) {
      console.log("you are not logged in");
      return redirect('/login');
    }else{
      console.log("you are logged in");
    }
  }