import githubIcon from './midia/githubIcon.svg';
import linkedInIcon from './midia/linkedInIcon.svg';

function TitleTextName() {
  return (
    <pre>
      {String.raw`
 _____ _                                
|_   _| |__   ___  _ __ ___    __ _ ___ 
  | | | '_ \ / _ \| '_ ' _ \ / _ ' / __|
  | | | | | | (_) | | | | | | (_|  \__ \
  |_| |_| |_|\___/|_| |_| |_|\__,_|____/
`}
    </pre>
  );
}

function TitleTextSurname() {
  return (
    <pre className='surname'>
      {String.raw`
__        __               _        __      _     _ 
\ \      / /   _  ___  ___| |_ ___ / _| ___| | __| |
 \ \ /\ / / | | |/ _ \/ __| __/ _ \ |_ / _ \ |/ _  |
  \ V  V /| |_| |  __/\__ \ ||  __/  _|  __/ | (_| |
   \_/\_/  \__,_|\___||___/\__\___|_|  \___|_|\__,_|
`}
    </pre>
  );
}

function TitleTextTitle() {
  return (
    <pre className='title'>
      {String.raw`
____  __.__  __  __ ____  .___. _.  _. .___
||== ((   )) ||\\||  ||   ||==  ||\\|| ||  )
||    \\_//  || \||  ||   ||__. || \|| ||_/                                                  
`}
    </pre>
  );
}

function MyInfo() {
  return (
  <my-info>
    <p className="location">Curitiba,brazil</p>
    <social-buttons>
      <img className="social-button" src={githubIcon}></img>
      <img className="social-button" src={linkedInIcon}></img>
    </social-buttons>
  </my-info>
)
}

function NavBar() {
  return (
    <nav-bar>
      <TitleTextName />
      <TitleTextSurname />
      <TitleTextTitle />
      <MyInfo />
    </nav-bar>
  );
}

export default NavBar;
