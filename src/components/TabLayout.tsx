import { IonContent, IonToolbar, IonButtons, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonSlide, IonSlides } from '@ionic/react';
import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import { IsoImage, IsoLink } from './IsoMarkdown';

const TabLayout: React.FC<{ id?: string, doc: any }> = ({ id, doc }) => {
    const [selected, setSelected] = useState(0);
    const slides = useRef(document.createElement('ion-slides'));

    const sections = doc.body.split(/---/g);

    const handleSlidesSelect = () => {
        slides.current.getActiveIndex().then((index) => {
            setSelected(index);
        });
    }

    return (
        <>
            <IonContent id={ id }>
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
                            <IonSlides onIonSlideWillChange={ handleSlidesSelect } ref={ slides }>
                                {
                                    sections.map((section: string, index: number) => {
                                        return (
                                            <IonSlide key={ index }>
                                                <IonCard>
                                                    <IonCardContent className="tab_content">
                                                        <ReactMarkdown
                                                            source={ section }
                                                            escapeHtml={ false }
                                                            renderers={{ image: IsoImage, link: IsoLink }}
                                                        />
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonSlide>
                                        )
                                    })
                                }
                            </IonSlides>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonButtons className="menu_scroll" slot="start">
                        {
                            doc.attributes?.tabs.map((tab: string, index: number) => {
                                return (
                                    <IonButton className={ selected === index ? 'tab_selected' : 'tab_unselected' } key={ index } onClick={() => { slides.current.slideTo(index) }}>
                                        { tab }
                                    </IonButton>
                                )
                            })
                        }
                    </IonButtons>
                </IonToolbar>
            </IonFooter>
        </>
    );
};

export default TabLayout;