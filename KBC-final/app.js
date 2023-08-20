const { initializeApp } = require('firebase/app');
const { getDatabase, ref, onValue } = require('firebase/database');

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6Eloa_glsUPTvr2tqQAP96F5Vnt2PU_U",
    authDomain: "buzzer-app-2787f.firebaseapp.com",
    databaseURL: "https://buzzer-app-2787f-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-2787f",
    storageBucket: "buzzer-app-2787f.appspot.com",
    messagingSenderId: "55908561503",
    appId: "1:55908561503:web:72624aeb2bddb498f4e1ea",
    measurementId: "G-YXMV8TJBVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference to the database
const database = getDatabase(app);

// Reference to a specific path in the database
const question = ref(database, "question");
const option1 = ref(database, "option1");
const option2 = ref(database, "option2");
const option3 = ref(database, "option3");
const option4 = ref(database, "option4");
const time = ref(database, "time");
const groupname = ref(database, "group_name");

// Listen for changes in the data
onValue(question, (snapshot) => {
    const data = snapshot.val();
    displayQuestion(data);
});

// Listen for changes in the data
onValue(option1, (snapshot) => {
    const data = snapshot.val();
    displayOption1(data);
});

// Listen for changes in the data
onValue(option2, (snapshot) => {
    const data = snapshot.val();
    displayOption2(data);
});

// Listen for changes in the data
onValue(option3, (snapshot) => {
    const data = snapshot.val();
    displayOption3(data);
});

// Listen for changes in the data
onValue(option4, (snapshot) => {
    const data = snapshot.val();
    displayOption4(data);
});
// Listen for changes in the data
onValue(time, (snapshot) => {
    const data = snapshot.val();
    displayTime(data);
});
// Listen for changes in the data
onValue(groupname, (snapshot) => {
    const data = snapshot.val();
    displayGroupname(data);
});

// Function to display data
function displayQuestion(data) {
    const dataContainer = document.getElementById("question");
    const formattedData = JSON.stringify(data, null, 2);
    // dataContainer.innerText = formattedData.substring(1);
    // dataContainer.innerText = formattedData.substring(formattedData.length()-1);
    const trimmedData = formattedData.slice(1, -1);
    dataContainer.innerText = trimmedData;
    console.log(data); // You can customize this to display the data in your desired format
}

// Function to display data
function displayOption1(data) {
    const dataContainer = document.getElementById("option1");
    const formattedData = JSON.stringify(data, null, 2);
    // dataContainer.innerText = formattedData.substring(1);
    // dataContainer.innerText = formattedData.substring(formattedData.length()-1);
    const trimmedData = formattedData.slice(1, -1);
    dataContainer.innerText = trimmedData;
    console.log(data); // You can customize this to display the data in your desired format
}

// Function to display data
function displayOption2(data) {
    const dataContainer = document.getElementById("option2");
    const formattedData = JSON.stringify(data, null, 2);
    // dataContainer.innerText = formattedData.substring(1);
    // dataContainer.innerText = formattedData.substring(formattedData.length()-1);
    const trimmedData = formattedData.slice(1, -1);
    dataContainer.innerText = trimmedData;
    console.log(data); // You can customize this to display the data in your desired format
}

// Function to display data
function displayOption3(data) {
    const dataContainer = document.getElementById("option3");
    const formattedData = JSON.stringify(data, null, 2);
    // dataContainer.innerText = formattedData.substring(1);
    // dataContainer.innerText = formattedData.substring(formattedData.length()-1);
    const trimmedData = formattedData.slice(1, -1);
    dataContainer.innerText = trimmedData;
    console.log(data); // You can customize this to display the data in your desired format
}

// Function to display data
function displayOption4(data) {
    const dataContainer = document.getElementById("option4");
    const formattedData = JSON.stringify(data, null, 2);
    // dataContainer.innerText = formattedData.substring(1);
    // dataContainer.innerText = formattedData.substring(formattedData.length()-1);
    const trimmedData = formattedData.slice(1, -1);
    dataContainer.innerText = trimmedData;
    console.log(data); // You can customize this to display the data in your desired format
}
// Function to display data
function displayTime(data) {
    const dataContainer = document.getElementById("time");
    const formattedData = JSON.stringify(data, null, 2);
    // dataContainer.innerText = formattedData.substring(1);
    // dataContainer.innerText = formattedData.substring(formattedData.length()-1);
    const trimmedData = formattedData.slice(1, -1);
    dataContainer.innerText = trimmedData;
    console.log(data); // You can customize this to display the data in your desired format
}

// Function to display data
function displayGroupname(data) {
    const dataContainer = document.getElementById("groupname");
    const formattedData = JSON.stringify(data, null, 2);
    // dataContainer.innerText = formattedData.substring(1);
    // dataContainer.innerText = formattedData.substring(formattedData.length()-1);
    const trimmedData = formattedData.slice(1, -1);
    dataContainer.innerText = trimmedData;
    console.log(data); // You can customize this to display the data in your desired format
}