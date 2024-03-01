import { v4 as uuid } from 'uuid';
import { db } from '../index';

async function getDocument(collection, id) {
  return db.collection(collection).doc(id);
}

async function getDocumentData(collection, id) {
  let document = await getDocument(collection, id);
  document = await document.get();

  return document.data();
}

async function createCollection(collection, data) {
  const id = uuid();

  const document = await getDocument(collection, id);
  await document.set({ ...data, id });

  return { id };
}

export { getDocument, getDocumentData, createCollection };
