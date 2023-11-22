import React from 'react';

function Login() {
  return (
    <div>
      <div>
  <div className="header">
    <div className="mt30 text-center">
      <a href="https://www.mariages.net" title="Mariage">
        <img src="https://www.mariages.net/assets/img/logos/gen_logoHeader.svg" alt="www.mariages.net" height={30} />
      </a>
    </div>
  </div>
  <div className="wrapper-auth">
    <div className="pure-g mb10 border-light template-auth">
      <div className="pure-u-2-5 layout-auth-cover" style={{ backgroundImage: "url(https://cdn1.mariages.net/assets/img/layer-alta/default_fr-FR.jpg)"}} />
      <div id="app-signup-layer-content" className="pure-u-3-5 white">
        <div className="layout-auth-container">
          <p className="layout-auth-title">Accédez à votre compte</p>
          <p className="layout-auth-action">Vous n'avez pas de compte ? <a className="app-ua-track-event" href="/users-signup.php?redirect=https%3A%2F%2Fwww.mariages.net%2Fusers-update.php" data-track-c="SignUpTracking" data-track-a="a-step1" data-track-l="d-desktop+s-site_login" data-track-s data-track-v={0} data-track-ni={0}>Inscription</a>
          </p>
          <div className="app-social-login-buttons  pt15 pb30 text-center">
            <button className="socialButtons--facebook btnOutline btnOutline--grey app-facebook-button mb10 mr15 btnOutline--full                 " type="button">
              <i className="svgIcon svgIcon__facebook svgIcon--medium fleft"><svg width={12} height={24} viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.81 3.985H12.001V0.169C11.623 0.117 10.323 0 8.809 0C5.65 0 3.486 1.987 3.486 5.639V9H0V13.266H3.486V24H7.76V13.267H11.105L11.636 9.001H7.759V6.062C7.76 4.829 8.092 3.985 9.81 3.985V3.985Z" fill="#335795" />
                </svg>
              </i> <b>Poursuivre avec Facebook</b>
            </button>
            <div className="socialButtons--googleWrapper mb10">
              <span className="socialButtons--googleTopButton socialButtons--google btnOutline btnOutline--grey btnOutline--full">
                <i className="svgIcon svgIcon__google svgIcon--medium fleft"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6875 10C4.6875 9.00913 4.96051 8.08088 5.4348 7.28608V3.91467H2.0634C0.725313 5.65249 0 7.77042 0 10C0 12.2296 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.9909 4.6875 10V10Z" fill="#FBBD00" />
                    <path d="M10 15.3126L7.65625 17.6563L10 20.0001C12.2296 20.0001 14.3475 19.2747 16.0854 17.9367V14.5688H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126V15.3126Z" fill="#0F9D58" />
                    <path d="M5.43488 12.714L2.06348 16.0854C2.3284 16.4295 2.61688 16.759 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2688 5.43488 12.714Z" fill="#31AA52" />
                    <path d="M20 10C20 9.39164 19.9449 8.78211 19.8363 8.18844L19.7483 7.70801H10V12.3955H14.7442C14.2835 13.312 13.5752 14.0596 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10V10Z" fill="#3C79E6" />
                    <path d="M13.7565 6.24348L14.1708 6.65777L17.4854 3.34324L17.0711 2.92895C15.1823 1.0402 12.6711 0 10 0L7.65625 2.34375L10 4.6875C11.419 4.6875 12.7531 5.24008 13.7565 6.24348Z" fill="#CF2D48" />
                    <path d="M10.0001 4.6875V0C7.32902 0 4.81781 1.0402 2.92902 2.92891C2.61688 3.24105 2.3284 3.57055 2.06348 3.91465L5.43488 7.28605C6.36273 5.73125 8.06168 4.6875 10.0001 4.6875V4.6875Z" fill="#EB4132" />
                  </svg>
                </i> <b>Poursuivre avec Google</b>
              </span>
              <div className="app-google-login-button socialButtons--googleHidden btnOutline--full app-google-login                ">
              </div>
            </div>
            <button className="socialButtons--apple btnOutline btnOutline--grey mb10 btnOutline--full app-apple-login        " type="button">
              <i className="svgIcon svgIcon__apple svgIcon--medium fleft"><svg viewBox="0 0 1792 1792">
                  <path d="M1585 1215q-39 125-123 250-129 196-257 196-49 0-140-32-86-32-151-32-61 0-142 33-81 34-132 34-152 0-301-259-147-261-147-503 0-228 113-374 113-144 284-144 72 0 177 30 104 30 138 30 45 0 143-34 102-34 173-34 119 0 213 65 52 36 104 100-79 67-114 118-65 94-65 207 0 124 69 223t158 126zM1209 42q0 61-29 136-30 75-93 138-54 54-108 72-37 11-104 17 3-149 78-257 74-107 250-148 1 3 2.5 11t2.5 11q0 4 .5 10t.5 10z" />
                </svg></i> <b>Poursuivre avec Apple</b>
            </button>
          </div>
          <iframe name="frameCapaLogin" id="frameCapaLogin" style={{"display":"none"}} />
          <p className="layout-auth-subtitle mb25">
            Ou connectez-vous avec votre email </p>
          <div id="error_email" className="pure-u-1 mb5 alert alert-error" style={{"display":"none"}}>
            <span>Votre adresse mail ou mot de passe est incorrect.</span>
          </div>
          <div className="mb20">
          </div>
          <form name="frmLogin" className="form-line" action="/com-Login.php" method="post">
            <input type="hidden" id="urlR" name="urlR" defaultValue="https://www.mariages.net/users-update.php" />
            <input type="hidden" name="isJsArchitectureEnabled" defaultValue="true" />
            <div className="form-content-inputs">
              <input id="Mail" name="Mail" className="pure-u-1" type="email" placeholder="Votre email" data-testid="user-login-email-input" />
              <input id="Password" name="Password" className="pure-u-1" type="password" placeholder="Mot de passe" autoComplete="off" data-testid="user-login-password-input" />
              <a href="/users-recover-password.php" className="forgotten-password">Mot de passe oublié ?</a>
              <div className="text-center mb30 mt40">
                <button className="btn-flat btn-flat--big red btn-full app-ua-track-event" type="submit" data-track-c="LoginTracking" data-track-a="a-step1" data-track-l="d-desktop+s-user_login" data-track-s data-track-v={0} data-track-ni={0} data-testid="user-login-submit-button">Accédez</button>
              </div>
              <p className="layout-auth-action">Vous êtes un professionnel ?</p>
              <a className="app-ua-track-event strong" href="https://www.mariages.net/emp-Acceso.php" data-track-c="SignUpTracking" data-track-a="a-step1" data-track-l="d-desktop+s-site_login" data-track-s data-track-v={0} data-track-ni={0}>Accès entreprises</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Login;
