import {
  IonContent,
  IonPage,
  IonImg,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import React from "react";

import IsoMenu from "../components/IsoMenu";

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IsoMenu />

      <IonContent id="home">
        <IonGrid>
          <IonRow>
            <IonCol
              sizeXs="12"
              sizeSm="4"
              offsetSm="2"
              sizeXl="3"
              offsetXl="3"
              className="home_txt"
            >
              Isotopical is all about you and your content. No need to worry about comment moderation or how to get your site updated.
              In fact, there isn't even a database for your to concern yourself with or much in terms of configuration. You use your
              existing development workflow to publish content to your website powered by Isotopical. Use your favorite developer's code
              edit, such as VS Code, and commit the content to GitHub. It couldn't be easier!
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeSm="4"
              sizeXl="3"
            >
              <IonImg src="/assets/img/site/home/isodesktop.png" className="home_img" />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol
              sizeXs="12"
              sizeSm="4"
              offsetSm="2"
              sizeXl="3"
              offsetXl="3"
            >
              <IonImg src="/assets/img/site/home/isocontent.png" className="home_img" />
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeSm="4"
              sizeXl="3"
              className="home_txt"
            >
              With Isotopical, you write your content in Markdown syntax; a similar syntax to what you would use for GitHub README content.
              Markdown documents are organized in collections that represent common content. For example, you might use Isotopic for your
              personal blog. You can keep your blog in a blog, or posts, collection. When you are ready to publish a post, the build process
              will automatically build your blog index to add the new post. Isotopic uses the power of Ionic Framework and ReactJS to render
              your content for mobile and desktop browsers.
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol
              sizeXs="12"
              sizeSm="4"
              offsetSm="2"
              sizeXl="3"
              offsetXl="3"
              className="home_txt"
            >
              There are an increasing number of people who prefer to view content from their mobile devices. With this in mind, Isotopical
              takes a mobile first approach to content management. There are screens of many shapes and sizes. Using Ionic's reach component
              library, you never need to concern yourself with that. They have already taken care of it for you! Using a mobile first
              approach, Isotopical's use of Ionic and ReactJS means your content will render appropriate for your audience's screen size,
              browser, and operating system. Budget or premium phone, iOS or Android, Windows or Mac, your site will just work.
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeSm="4"
              sizeXl="3"
            >
              <IonImg src="/assets/img/site/home/isomobile.png" className="home_img" />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol
              sizeXs="12"
              sizeSm="4"
              offsetSm="2"
              sizeXl="3"
              offsetXl="3"
            >
              <IonImg src="/assets/img/site/home/isocloud.png" className="home_img" />
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeSm="4"
              sizeXl="3"
              className="home_txt"
            >
              Isotopical uses GitHub to store the source of your site. GitHub Actions does the work of building and publishing your
              content. Currently, GitHub and Azure Static Web Apps is supported. In the future, many other code repositories and
              cloud providers will be supported.
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
