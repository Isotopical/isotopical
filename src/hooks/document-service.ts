import { useState, useEffect } from 'react';
import fm from 'front-matter';
import axios from 'axios';
import HttpStatus from 'http-status-codes';

export const useIndex: any = (collection: string) => {
    const [index, setIndex] = useState({});

    useEffect(() => {
        const getIndex = async () => {
            const res = await axios.get(`assets/collections/${ collection }/index.md`);
            if(res.status === HttpStatus.OK) {
                const data = fm<any>(res.data);
                setIndex(data);
            }
        }

        getIndex();
    }, [setIndex, collection]);

    return index;
}

export const useDocument: any = (collection: string, name: string) => {
    const [document, setDocument] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`assets/collections/${ collection }/${ name }.md`);
            if(res.status === HttpStatus.OK) {
                const data = fm<any>(res.data);
                setDocument(data);
            }
        }

        getPost();
    }, [setDocument, collection, name]);

    return document;
}