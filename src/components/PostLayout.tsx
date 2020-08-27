import { IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { FormattedDate } from 'react-intl';

import ReactMarkdown from 'react-markdown/with-html';

import { IsoLink, IsoImage, IsoCodeBlock } from './IsoMarkdown';

const PostLayout: React.FC<{ id?: string, doc: any }> = ({ id, doc }) => {
    return (
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
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>
                                    { doc.attributes?.title }
                                </IonCardTitle>
                                <IonCardSubtitle>
                                    { doc.attributes?.author } <FormattedDate value={ doc.attributes?.date } />
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonImg src={ doc.attributes?.cover_image } />
                                <ReactMarkdown
                                    source={ doc.body }
                                    escapeHtml={ false }
                                    renderers={{ link: IsoLink, image: IsoImage, code: IsoCodeBlock }}
                                />
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default PostLayout;