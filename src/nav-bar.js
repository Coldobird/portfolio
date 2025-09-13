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
____ ___   __.__  __  __ ____   .___. _.  _. .___
||== |_)) ((   )) ||\\||  ||    ||==  ||\\|| ||  )
||   | \\  \\_//  || \||  ||    ||__. || \|| ||_/
`}
    </pre>
  );
}

function MyInfo() {
  return (
    <my-info>
      <p className="location">Curitiba,Brazil</p>
      <social-buttons>
        <img className="social-button" src={githubIcon}></img>
        <img className="social-button" src={linkedInIcon}></img>
      </social-buttons>
    </my-info>
  )
}

function NavBarList() {
  return (
    <nav-bar-list>
      <nav-bar-list-section>
        <nav-bar-button className='selected'>Home</nav-bar-button>
      </nav-bar-list-section>

      <nav-bar-list-section>
        <nav-bar-title>Experience</nav-bar-title>

        <nav-bar-sublist>
          <nav-bar-button>
            Company - Jux <br />
            Front-End Developer & Designer <br />
            Jan 2020 - Present
          </nav-bar-button>
        </nav-bar-sublist>
      </nav-bar-list-section>

      <nav-bar-list-section>
        <nav-bar-title>Projects</nav-bar-title>
        <nav-bar-sublist>
          <nav-bar-subtitle>Work</nav-bar-subtitle>
          <nav-bar-sublist>
            <nav-bar-button>
              BELA - Web app for code visualization
            </nav-bar-button>
            <nav-bar-button>
              BELA - Landing page
            </nav-bar-button>
          </nav-bar-sublist>
          <nav-bar-subtitle>Personal</nav-bar-subtitle>
          <nav-bar-sublist>
            <nav-bar-button>
              Scout Membership Check- Personal
            </nav-bar-button>
          </nav-bar-sublist>
        </nav-bar-sublist>
      </nav-bar-list-section>

      <nav-bar-list-section>
        <nav-bar-title>Skills - Tools</nav-bar-title>
        <skills-list-container>
          <skills-list>
            <skills-title>Development</skills-title>
            <skills-item>• HTML</skills-item>
            <skills-item>• CSS</skills-item>
            <skills-item>• JavaScript</skills-item>
            <skills-item>• React</skills-item>
            <skills-item>• Git</skills-item>
          </skills-list>
          <skills-list>
            <skills-title>Design</skills-title>
            <skills-item>• Figma</skills-item>
            <skills-item>• Illustrator</skills-item>
            <skills-item>• Photoshop</skills-item>
            <skills-item>• Canva</skills-item>
          </skills-list>
          <skills-list>
            <skills-title>Media</skills-title>
            <skills-item>• After Effects</skills-item>
            <skills-item>• Premier Pro</skills-item>
          </skills-list>
        </skills-list-container>
      </nav-bar-list-section>
    </nav-bar-list>
  )
}

function NavBar() {
  return (
    <nav-bar>
      <TitleTextName />
      <TitleTextSurname />
      <TitleTextTitle />
      <MyInfo />
      <NavBarList />
    </nav-bar>
  );
}

export default NavBar;
