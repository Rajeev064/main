var firebaseConfig = {
  apiKey: "AIzaSyC4PI_7hMDA-ek0LWabI6JOKECrMoEpf1Y",
  authDomain: "company-274007.firebaseapp.com",
  databaseURL: "https://company-274007.firebaseio.com",
  projectId: "company-274007",
  storageBucket: "company-274007.appspot.com",
  messagingSenderId: "194228086996",
  appId: "1:194228086996:web:d0bd687b24273a06e7b341",
  measurementId: "G-16DXEPQ7N0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var text = getInputVal('text');
    var phone = getInputVal('phone');
  
    // Save message
    saveMessage(name, text, phone);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }


  
  // Save message to firebase
  function saveMessage(name, text, phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      text:text,
      phone:phone,
    });
  }