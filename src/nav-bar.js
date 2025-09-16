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

function NavButton({ id, selected, onSelect, children }) {
  return (
    <nav-bar-button
      className={selected ? 'selected' : ''}
      onClick={() => onSelect(id)}
      role="button" tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(id)}
    >
      {children}
    </nav-bar-button>
  );
}

function NavBarList({ selected, onSelect }) {
  return (
    <nav-bar-list>
      <nav-bar-list-section>
        <NavButton id="home" selected={selected === 'home'} onSelect={onSelect}>
          Home
        </NavButton>
      </nav-bar-list-section>

      <nav-bar-list-section>
        <nav-bar-title>Experience</nav-bar-title>
        <nav-bar-sublist>
          <NavButton
            id="exp:jux"
            selected={selected === 'exp:jux'}
            onSelect={onSelect}
          >
            Company - Jux <br />
            Front-End Developer & Designer <br />
            Jan 2020 - Present
          </NavButton>
        </nav-bar-sublist>
      </nav-bar-list-section>

      <nav-bar-list-section>
        <nav-bar-title>Projects</nav-bar-title>
        <nav-bar-sublist>
          <nav-bar-subtitle>Work</nav-bar-subtitle>
          <nav-bar-sublist>
            <NavButton
              id="proj:bela-app"
              selected={selected === 'proj:bela-app'}
              onSelect={onSelect}
            >
              BELA - Web app for code visualization
            </NavButton>

            <NavButton
              id="proj:bela-landing"
              selected={selected === 'proj:bela-landing'}
              onSelect={onSelect}
            >
              BELA - Landing page
            </NavButton>
          </nav-bar-sublist>

          <nav-bar-subtitle>Personal</nav-bar-subtitle>
          <nav-bar-sublist>
            <NavButton
              id="proj:scout-check"
              selected={selected === 'proj:scout-check'}
              onSelect={onSelect}
            >
              Scout Membership Check- Personal
            </NavButton>
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
  );
}

export default function NavBar({ selected, onSelect }) {
  return (
    <nav-bar>
      <TitleTextName />
      <TitleTextSurname />
      <TitleTextTitle />
      <MyInfo />
      <NavBarList selected={selected} onSelect={onSelect} />
    </nav-bar>
  );
}
