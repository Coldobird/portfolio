import './content.css';

export default function Content({ selected }) {
  switch (selected) {
    case "home":
      return (
        <content>
          <p>Hey there! I'm Thomas.</p>
          <p>I'm a front-end developer focused on building web applications. <br /> At work, I specialize in using pure JavaScript, while React fuels my personal projects.</p>
          <p>When I’m not coding, I enjoy camping, balancing my tech life with nature.</p>
          <p>Feel free to contact me at <a>LinkedIn</a>, <a>Email</a> or <a>Smoke Signal</a>.</p>
          <p>Check out my <a>Resumé</a>.</p>
        </content>
                  );
            case "exp:jux":
      return (
        <content>
          <h2>Front-End Developer & Designer @ Jux</h2>
          <p>
            I work in a small team… build UIs for web apps… produce media…
          </p>
        </content>
      );
    case "proj:bela-app":
      return (
        <content>
          <h2>BELA — Web app for code visualization</h2>
          <p>Short description, stack, links, screenshots, etc.</p>
        </content>
      );
    case "proj:bela-landing":
      return (
        <content>
          <h2>BELA — Landing page</h2>
          <p>Notes about the marketing site, animations, lighthouse scores…</p>
        </content>
      );
    case "proj:scout-check":
      return (
        <content>
          <h2>Scout Membership Check (Personal)</h2>
          <p>What it does, why you built it, tech used…</p>
        </content>
      );
    case "skills":
      return (
        <content>
          <h2>Skills & Tools</h2>
          <p>HTML, CSS, JS, React, Git, Figma, Illustrator, Photoshop…</p>
        </content>
      );
    default:
      return <content />;
  }
}
