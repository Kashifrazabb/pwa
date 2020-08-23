export const ServiceWorker = () =>
    'serviceWorker' in navigator &&
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`)
    .then(res=>console.log('Successfully Registered',res))
