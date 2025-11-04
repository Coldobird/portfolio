import './content.css';

export default function Content({ selected }) {
  switch (selected) {
    case "home":
      return (
        <content-container>
          <content-container2>
            <p>Hey there! I'm Thomas.</p>
            <p>I'm a front-end developer focused on building web applications. <br /> At work, I specialize in using pure JavaScript, while React fuels my personal projects.</p>
            <p>When I’m not coding, I enjoy camping, balancing my tech life with nature.</p>
            <p>Feel free to contact me at <a>LinkedIn</a>, <a>Email</a> or <a>Smoke Signal</a>.</p>
            <p>Check out my <a>Resumé</a>.</p>
          </content-container2>
        </content-container>
      );
    case "exp:jux":
      return (
        <content-container>
          <content-container2>

            <p className='style-pre'>
              ┌─Front-End Developer & Designer @Jux House─┐<br />
              │ Jan 2020 - Present                        │<br />
              └─JavaScript, HTML, CSS, PlayWright─────────┘<br />
            </p>

            <text-container>
              <p>
                I’ve been part of a small team at Jux House since 2020, building tools that make code easier to see and understand.<br />
                Most of my time goes into BELA, our web app for visualizing code architecture. I design and develop its interface, keeping things simple and clear so users can focus on the logic.<br />
              </p>
              <img-container>
                <img src="/placeholder.png" alt="Screenshot of BELA in action — google maps for your code" style={{ width: '100%', borderRadius: '8px' }} />
                <img-caption>Screenshot of BELA in action</img-caption>
              </img-container>
            </text-container>

            <new-section />

            <p className='style-pre'>
              ┌─Uploading and showing things is hard─┐<br />
              └──────────────────────────────────────┘<br />
            </p>

            <text-container>
              <p>
                One of the hardest pages to build was the Sources page.
                It’s where you can see all the sources you’ve imported and remove them if needed.
                I wanted it to feel simple, but still give enough control when things get messy.
              </p>

              <img-container>
                <img src="/placeholder.png" alt="Screenshot of the Sources page" style={{ width: '100%', borderRadius: '8px' }} />
                <img-caption>The Sources page</img-caption>
              </img-container>

              <p>
                By selecting a source, you can see more details about it.
                That part took a while to get right.
              </p>

              <img-container>
                <img src="/placeholder.png" alt="Screenshot inspecting a source" style={{ width: '100%', borderRadius: '8px' }} />
                <img-caption>Inspecting a source</img-caption>
              </img-container>

              <p>
                I also really like how the upload button turned out.
                Uploads can take a few seconds, so I added a small animation to make that wait feel smoother, like a bit of feedback saying “hey, I’m working on it!”.
                I also learned how to use XHR to track the upload progress, which made it possible to show the exact percentage while the file is being sent.
              </p>

              <img-container>
                <img src="/placeholder.png" alt="Screenshot showing the animated upload button" style={{ width: '100%', borderRadius: '8px' }} />
                <img-caption>⚙️ Animated upload button</img-caption>
              </img-container>

              <p>
                I learned a lot about handling uploads and organizing large amounts of information in a way that still feels simple to use.
                Keeping everything readable while showing a lot of data was a real challenge, but it pushed me to think more about structure and clarity in design.
              </p>
            </text-container>



            <new-section />

            <text-container>
              <p>
                Sometimes, I jump into other projects like landing pages and internal tools, experimenting with ideas and improving small details that make the experience smoother.
              </p>
              <img-container>
                <img src="/placeholder.png" alt="Screenshot of BELA in action — google maps for your code" style={{ width: '100%', borderRadius: '8px' }} />
                <img-caption>Screenshot of BELA in action</img-caption>
              </img-container>
            </text-container>
          </content-container2>
        </content-container>
      );
    case "proj:bela-app":
      return (
        <content-container>
          <content-container2>
            <h2>BELA — Web app for code visualization</h2>
            <p>Short description, stack, links, screenshots, etc.</p>
          </content-container2>
        </content-container>
      );
    case "proj:bela-landing":
      return (
        <content-container>
          <content-container2>
            <h2>BELA — Landing page</h2>
            <p>Notes about the marketing site, animations, lighthouse scores…</p>
          </content-container2>
        </content-container>
      );
    case "proj:scout-check":
      return (
        <content-container>
          <content-container2>
            <h2>Scout Membership Check (Personal)</h2>
            <p>What it does, why you built it, tech used…</p>
          </content-container2>
        </content-container>
      );
    case "skills":
      return (
        <content-container>
          <content-container2>
            <h2>Skills & Tools</h2>
            <p>HTML, CSS, JS, React, Git, Figma, Illustrator, Photoshop…</p>
          </content-container2>
        </content-container>
      );
    default:
      return <content-container />;
  }
}
