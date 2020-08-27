import React from 'react';
import { IonCardTitle, IonCardSubtitle, IonButton, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github';

export const IsoLink: React.FC<{ href: string, children: string }> = ({ href, children }) => {
    if(href.startsWith('http')) {
        return (
            <a href={ href } target="_blank" rel="noopener noreferrer">{ children }</a>
        )
    }
    return (
        <a href={ href }>{ children }</a>
    );
};

export const IsoHeading: React.FC<{ level: number, children: string }> = ({ level, children }) => {
    if(level === 1) {
        return (
            <IonCardTitle>
                { children }
            </IonCardTitle>
        );
    } else if(level === 2) {
        return (
            <IonCardSubtitle>
                { children }
            </IonCardSubtitle>
        );
    } else {
        const Header = `h${ level }` as keyof JSX.IntrinsicElements;
        
        return (
            <Header>
                { children }
            </Header>
        );
    }
};

export const IsoMenuButton: React.FC<{ href: string, children: string }> = ({ href, children }) => {
    return (
        <IonButton href={ href }>
            { children }
        </IonButton>
    );
};

export const IsoSectionHeading: React.FC<{ level: number, children: string }> = ({ level, children }) => {
    if(level === 1) {
        return (
            <IonCardTitle>
                { children }
            </IonCardTitle>
        );
    } else {
        const Header = `h${ level }` as keyof JSX.IntrinsicElements;
        
        return (
            <Header>
                { children }
            </Header>
        );
    }
};

export const IsoImage: React.FC<{ src: string }> = ({ src }) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol push="1" size="10">
                    <IonImg src={ src } />
                </IonCol>
            </IonRow>
        </IonGrid>
    )
};

export const IsoCodeBlock: React.FC<{ value: string, language?: string }> = ({ value, language }) => {
    return (
        <SyntaxHighlighter language={ language } style={ github }>
            { value }
        </SyntaxHighlighter>
    )
};