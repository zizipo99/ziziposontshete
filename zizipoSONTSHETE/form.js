var firebaseConfig = {
    apiKey: "AIzaSyB2X4z3L2jz4eDqcDzmpiN_FnxlWd-qS8M",
    authDomain: "contact-form-742cd.firebaseapp.com",
    databaseURL: "https://contact-form-742cd.firebaseio.com",
    projectId: "contact-form-742cd",
    storageBucket: "contact-form-742cd.appspot.com",
    messagingSenderId: "216625699859",
    appId: "1:216625699859:web:3922e4f82816b2d9c5f3e6",
    measurementId: "G-M55636WLNG"
  };

  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact.form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var comments = getInputVal('comments');
  
    // Save message
    saveMessage(name, email, phone, comments);
  
    // Clear form
    document.getElementById('contact.form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, comments){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      comments:comments
    });
  }