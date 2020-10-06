    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBaHbjZ9hZopBzrx2YOMmhUQd8_nywJMJA",
        authDomain: "todolist-app-84fdd.firebaseapp.com",
        databaseURL: "https://todolist-app-84fdd.firebaseio.com",
        projectId: "todolist-app-84fdd",
        storageBucket: "todolist-app-84fdd.appspot.com",
        messagingSenderId: "879380329754",
        appId: "1:879380329754:web:87b0220e2d7ef719fb28a3",
        measurementId: "G-8MW3FKT72Y"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();

    //Add the task here
    function task_add(){
        console.log("Task is done");

        input_box = document.getElementById("input_box");
        input_date = document.getElementById("input_date");

    }

    function create_unfinished_task(){

    }

    //complete the task here
    function task_done(){
        console.log("task_done");
    }

    //edit the task here
    function task_edit(){
        console.log("task_edit");
    }

    //delete the task here
    function task_delete(){
        console.log("task_delete");
    }