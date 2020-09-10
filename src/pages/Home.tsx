import {
  IonContent,
  IonPage,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonAvatar,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  CreateAnimation
} from "@ionic/react";
import React from "react";
import ReactMarkdown from "react-markdown";

import IsoMenu from "../components/IsoMenu";

import { useDocument } from "../hooks/document-service";

import './Home.css';

const Home: React.FC = () => {
  const document = useDocument("site", "home");

  return (
    <IonPage>
      <IsoMenu />

      <IonContent id="home">
        <CreateAnimation
          play={ true }
          duration={ 500 }
          fromTo = {[
            { property: 'opacity', fromValue: '0', toValue: '1' },
            { property: 'transform', fromValue: 'translateY(100px)', toValue: 'translateY(0px)' }
          ]}
        >
        
        <IonGrid>
          <IonRow>
            <IonCol
              sizeXs="12"
              offsetSm="1"
              sizeSm="10"
              offsetMd="2"
              sizeMd="8"
              offsetLg="3"
              sizeLg="6"
              offsetXl="3"
              sizeXl="6"
            >
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{ document.attributes?.title }</IonCardTitle>
                  <IonCardSubtitle>{ document.attributes?.subtitle }</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonAvatar className="home_avatar">
                          <IonImg src={ document.attributes?.thumbnail } />
                        </IonAvatar>
                      </IonCol>
                      <IonCol>
                        { document.attributes?.tag_line }
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                  <ReactMarkdown source={ document.body } escapeHtml={ false } />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        </CreateAnimation>
      </IonContent>
    </IonPage>
  );
};

export default Home;
