import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export var currentUser = pb.authStore.model;

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    currentUser = pb.authStore.model;
});