
import '../styles/facebook.css';
import FacebookLogin from 'react-facebook-login';

export const FBLogin = () => {

  const responseFacebook = (response) => {
    document.write("Nombre:  " + response.name + "<br/>Email: " + response.email + "<br/>Foto: " + response.picture.data.url);
  }

  return (
    <div >
      <FacebookLogin
        appId="1497912747302346"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Unirme con Facebook"
        cssClass="btn-c btn-fb"
        // icon="fa-facebook"
      />
    </div>
  );
}