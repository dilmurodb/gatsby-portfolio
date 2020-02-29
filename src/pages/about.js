import React from "react";
import Layout from "../components/layout";
import ImageAbout from "../components/imageAbout";
const AboutPage = () => (
  <Layout>
    <div>
      <h1>About Page</h1>
      <p>
        Hello, my name is Dilmurod Bukharov, I moved to the United States in the
        Summer of 2018 and since then I fell in love with this beautiful country
        and great people. I graduated Moscow State University of Steel and
        Alloys in Moscow, Russia and have both Bachelor’s and Master’s degree in
        metallurgical engineering. I am intellectually curious and love spending
        my spare time surfing the Internet and learning new things. I was always
        fascinated by web technologies and how it works but never really had a
        chance to learn it thoroughly. After I moved to the United States, I
        decided to change my career path and learn Software Development. I knew
        that changing my career would be challenging but I also was sure that it
        would be extremely rewarding. Finally, when I found out about General
        Assembly, I decided to enroll to one of their Software Engineering
        Immersive cohorts. So far, my journey into web development has been
        great, I gained so much experience by working on real client projects
        and my own individual work.
      </p>
      <p>I am so excited to build something great.</p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ImageAbout />
    </div>
  </Layout>
);
export default AboutPage;
