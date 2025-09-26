import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

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
  // original 'd' is whatever is already in the path; we’ll morph to a new 'd'
  // IMPORTANT: the new 'd' must have the same sequence of path commands as the original.

  const pathRef2 = useRef(null);
  const linkedinOriginaPath = "2.93 22 4.4 22 4.4 17.6 4.4 8.8 4.4 7.33 4.4 4.4 7.33 4.4 7.33 7.33 4.4 7.33 4.4 8.8 7.33 8.8 7.33 17.6 8.8 17.6 8.8 8.8 11.73 8.8 11.73 10.27 13.2 10.27 13.2 8.8 16.13 8.8 16.13 10.27 17.6 10.27 17.6 17.6 14.67 17.6 14.67 11.73 11.73 11.73 11.73 17.6 8.8 17.6 7.33 17.6 4.4 17.6 4.4 22 19.07 22 19.07 20.53 20.53 20.53 20.53 19.07 22 19.07 22 2.93 20.53 2.93 20.53 1.47 19.07 1.47 19.07 0 2.93 0 2.93 1.47 1.47 1.47 1.47 2.93 0 2.93 0 19.07 1.47 19.07 1.47 20.53 2.93 20.53 2.93 22";
  const linkedinHoverPath = "2.93 22 4.4 22 4.4 18.83 4.4 10.03 4.84 5.22 4.84 3.18 6.89 3.18 6.89 5.22 4.84 5.22 4.4 10.03 7.33 10.03 7.33 18.83 8.8 18.83 8.8 10.03 11.73 10.03 11.73 11.49 13.2 11.49 13.2 10.03 16.13 10.03 16.13 11.49 17.6 11.49 17.6 18.83 14.67 18.83 14.67 12.96 11.73 12.96 11.73 18.83 8.8 18.83 7.33 18.83 4.4 18.83 4.4 22 19.07 22 19.07 20.53 20.53 20.53 20.53 19.07 22 19.07 22 2.93 20.53 2.93 20.53 1.47 19.07 1.47 19.07 0 2.93 0 2.93 1.47 1.47 1.47 1.47 2.93 0 2.93 0 19.07 1.47 19.07 1.47 20.53 2.93 20.53 2.93 22";

  const githubPathRef = useRef(null);
  const githubOriginaPath = "5.87 22 8.8 22 8.8 19.07 7.43 19.07 5.87 19.07 5.87 17.6 4.4 17.6 4.4 16.13 5.87 16.13 5.87 17.6 7.46 17.6 10.27 17.6 10.27 16.13 7.33 16.15 7.33 14.67 5.87 14.67 5.87 13.2 4.4 13.2 4.4 8.8 5.87 8.8 5.87 7.33 4.4 7.33 4.4 5.87 5.92 5.87 7.33 5.87 7.33 7.33 8.8 7.33 8.8 5.87 13.2 5.87 13.2 7.33 14.67 7.33 14.67 5.87 16.14 5.87 17.6 5.87 17.6 7.33 16.13 7.33 16.13 8.8 17.6 8.8 17.6 13.2 16.13 13.2 16.13 14.67 14.67 14.67 14.67 16.13 11.73 16.13 11.73 17.6 13.2 17.6 13.2 22 16.13 22 16.13 20.53 17.6 20.53 17.6 19.07 19.07 19.07 19.07 17.6 20.53 17.6 20.53 16.13 22 16.13 22 7.33 20.53 7.33 20.53 4.4 17.6 4.4 17.6 1.47 14.67 1.47 14.67 0 7.33 0 7.33 1.47 4.4 1.47 4.4 2.93 2.93 2.93 2.93 4.4 1.47 4.4 1.47 7.33 0 7.33 0 16.13 1.47 16.13 1.47 17.6 2.93 17.6 2.93 19.07 4.4 19.07 4.4 20.53 5.87 20.53 5.87 22";
  const githubHoverPath = "5.87 22 8.8 22 8.8 19.07 7.43 19.07 5.87 19.07 5.86 20.45 4.4 20.45 4.4 18.98 5.87 18.98 5.87 17.6 7.46 17.6 10.27 17.6 10.25 15.69 7.37 15.15 7.66 13.69 6.22 13.41 6.5 11.97 5.06 11.69 5.9 7.38 7.34 7.66 7.62 6.22 6.18 5.94 6.46 4.5 7.95 4.79 9.33 5.06 9.05 6.5 10.49 6.78 10.77 5.34 15.09 6.18 14.81 7.62 16.25 7.9 16.53 6.46 17.98 6.74 19.41 7.02 19.13 8.46 17.69 8.18 17.41 9.61 18.85 9.89 18.01 14.21 16.57 13.93 16.29 15.37 14.85 15.09 14.57 16.53 11.69 15.97 11.73 17.6 13.2 17.6 13.2 22 16.13 22 16.13 20.53 17.6 20.53 17.6 19.07 19.07 19.07 19.07 17.6 20.53 17.6 20.53 16.13 22 16.13 22 7.33 20.53 7.33 20.53 4.4 17.6 4.4 17.6 1.47 14.67 1.47 14.67 0 7.33 0 7.33 1.47 4.4 1.47 4.4 2.93 2.93 2.93 2.93 4.4 1.47 4.4 1.47 7.33 0 7.33 0 16.13 1.47 16.13 1.47 17.6 2.93 17.6 2.93 19.07 4.4 19.07 4.4 20.53 5.87 20.53 5.87 22"

  const isHoveringRef = useRef({ github: false, linkedin: false });
  const tweenRef = useRef(null);
  const handleEnter = (hoverPath, pathRef, key) => {
    isHoveringRef.current[key] = true;
    tweenRef.current = gsap.to(pathRef.current, {
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      attr: { points: hoverPath },
      ease: "power2.inOut"
    });
  };

  const handleLeave = (originalPath, pathRef, key) => {
    isHoveringRef.current[key] = false;
    if (tweenRef.current) tweenRef.current.kill();

    gsap.to(pathRef.current, {
      duration: 0.6,
      repeat: 0,
      yoyo: false,
      attr: { points: originalPath },
      ease: "power2.inOut"
    });
  };

  useEffect(() => {
    let timeoutId;
    const playRandom = () => {
      const pick = Math.random() < 0.5 ? "github" : "linkedin";
      if (!isHoveringRef.current[pick]) {
        const el = pick === "github" ? githubPathRef.current : pathRef2.current;
        const to = pick === "github" ? githubHoverPath : linkedinHoverPath;
        const ease = "power2.inOut";
        gsap.to(el, { duration: 1, attr: { points: to }, yoyo: true, repeatDelay: 0.3, repeat: 1, ease });
      }
      const nextIn = 4000 + Math.random() * 4000; // 2–6 seconds
      timeoutId = setTimeout(playRandom, nextIn);
    };
    playRandom();
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <my-info>
      <p className="location">Curitiba,Brazil</p>
      <social-buttons>
        <a href='https://www.linkedin.com/in/twuestefeld/' target='_blank'>
          <svg onMouseEnter={() => handleEnter(githubHoverPath, githubPathRef, 'linkedin')} onMouseLeave={() => handleLeave(githubOriginaPath, githubPathRef, 'linkedin')}
            width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon ref={githubPathRef} points={githubOriginaPath} fill="hsl(120, 73%, 54%)" />
          </svg>
        </a>
        <a href='https://github.com/Coldobird' target='_blank'>
          <svg onMouseEnter={() => handleEnter(linkedinHoverPath, pathRef2, 'linkedin')} onMouseLeave={() => handleLeave(linkedinOriginaPath, pathRef2, 'linkedin')}
            width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon ref={pathRef2} points={linkedinOriginaPath} fill="hsl(120, 73%, 54%)" />
          </svg>
        </a>
      </social-buttons>
    </my-info>
  )
}

function NavButton({ id, selected, onSelect, children }) {
  return (
    <nav-bar-button
      className={selected ? 'selected' : ''}
      id={id}
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
