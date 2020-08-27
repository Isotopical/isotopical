import {
    IonCardContent,
    IonCard,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    CreateAnimation } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';

import { IsoLink, IsoImage } from './IsoMarkdown';

interface Card {
    header?: string;
    body?: string;
}

const CardListLayout: React.FC<{ id?: string, doc: any }> = ({ id, doc }) => {
    const [cards, setCards] = useState<string[]>([]);
    
    useEffect(() => {
        const processDoc = async () => {
            const rawCards = doc.body.split(/\n\n(-|\*|_)\1{2,}\n\n/g);

            console.log(rawCards);

            let cards: string[] = [];

            rawCards?.forEach((card: string) => {
                if (card.search(/(-|\*|_)/)) {
                    cards.push(card);
                }
            });

            setCards(cards);
        }

        processDoc();
    }, [doc, setCards]);

    return (
        <IonContent id={ id }>
            <IonGrid>
                <IonRow>
                        { cards.map((card, index) => {
                            return (
                                <IonCol
                                    sizeXs="12"
                                    sizeSm="12"
                                    sizeMd="6"
                                    sizeLg="4"
                                    sizeXl="3"
                                    key={index}
                                >
                                    <CreateAnimation
                                        play={ true }
                                        delay={ index * 200 }
                                        duration={ 500 }
                                        fromTo = {[
                                        { property: 'opacity', fromValue: '0', toValue: '1' },
                                        { property: 'transform', fromValue: 'translateY(100px)', toValue: 'translateY(0px)' }
                                        ]}
                                    >
                                        <IonCard>
                                            <IonCardContent>
                                                <ReactMarkdown source={ card } renderers={  { link: IsoLink, image: IsoImage }  }/>
                                            </IonCardContent>
                                        </IonCard>
                                    </CreateAnimation>
                                </IonCol>
                            )
                        })}
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CardListLayout;