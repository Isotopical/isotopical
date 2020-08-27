import React from 'react';
import { IonToolbar, IonButtons, IonHeader, IonButton, IonIcon } from '@ionic/react';
import ReactMarkdown from 'react-markdown';
import { IsoMenuButton } from './IsoMarkdown';
import { useDocument } from '../hooks/document-service';
import { closeOutline } from 'ionicons/icons';

const IsoMenu: React.FC<{ closeButton?: string }> = ({ closeButton }) => {
    const menu = useDocument('site', 'menu');

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="end">
                    { !closeButton &&
                        <ReactMarkdown source={ menu.body } renderers={{ link: IsoMenuButton }} />
                    }
                    { closeButton &&
                        <IonButton  href={ closeButton }>
                            <IonIcon src={ closeOutline }></IonIcon>
                        </IonButton>
                    }
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default IsoMenu;