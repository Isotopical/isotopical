import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonPage } from '@ionic/react';

import IsoMenu from '../components/IsoMenu';

import Layout from '../components/Layout';

import './Document.css'

import { useDocument } from '../hooks/document-service';

interface PageProps extends RouteComponentProps<{
  collection: string;
  name?: string;
}> {}

const Document: React.FC<PageProps> = ({ match }) => {
  const collection: string  = match.params.collection;
  const name: string = match.params.name ?? 'index';
  const id: string = `${ collection }_${ name }`;

  const doc = useDocument(collection, name);

  useEffect(() => {
    const ionContent = window.document.getElementById(id);

    if(doc.attributes?.background) {
        ionContent?.style.setProperty('--background', `url('${ doc.attributes?.background }') no-repeat center/cover fixed`);
    } else {
      ionContent?.style.setProperty('--background', 'none');
    }
  }, [id, doc]);

  return (
    <IonPage>
      <IsoMenu closeButton={ doc.attributes?.close_button } />

      <Layout id={ id } doc={ doc } />
    </IonPage>
  );
};

export default Document;
