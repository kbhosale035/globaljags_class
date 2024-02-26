const {Firestore} = require('@google-cloud/firestore');

// Entry point Function
async function writeToFS() {
    const firestore = new Firestore({
        projectId: "sp24-41200-kbhosale-globaljags",
        // databaseId: "whatever"
    });

    // Create a dummy object for demo purposes
    let dataObject = {};

    // Add some key:value pairs
    dataObject.thumbURL = "https://storage.cloud.google.com/sp24-41200-kbhosale-gj-thumbnails/thumb%4064_1708817379813345.jpg";
    dataObject.finalURL = "https://storage.cloud.google.com/sp24-41200-kbhosale-gj-final/1708817379813345.jpg";
    dataObject.latitude = 39.90568611111111;
    dataObject.longitude = 116.39314166666668;

    console.log(`The dataobject: `);
    console.log(dataObject);

    // Write the object into Firestore
    let collectionRef = firestore.collection('photos');
    let documentRef = await collectionRef.add(dataObject);
    console.log(`Document created: ${documentRef.id}`);
}

// Call the entry point function (not needed in GCF)
writeToFS();