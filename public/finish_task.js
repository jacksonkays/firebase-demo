  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBaHbjZ9hZopBzrx2YOMmhUQd8_nywJMJA",
    authDomain: "todolist-app-84fdd.firebaseapp.com",
    databaseURL: "https://todolist-app-84fdd.firebaseio.com",
    projectId: "todolist-app-84fdd",
    storageBucket: "todolist-app-84fdd.appspot.com",
    messagingSenderId: "879380329754",
    appId: "1:879380329754:web:cfcd28a0740e52b9fb28a3",
    measurementId: "G-H054TYVV79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  if(input_box.value.length != 0 && input_date.value.length != 0){
    //all boxes have data and we take database
    var key = firebase.database().ref().child("unfinished_task").push().key;
    var task = {
        title: input_box.value,
        date: input_date.value,
        key: key
    };

    var updates = {};
    updates["/unfinished_task/" + key] = task;
    firebase.database().ref().update(updates);
    //create_unfinished_task();
    }

//Add the task here
function task_add(){
    console.log("Task is done");

    input_box = document.getElementById("input_box");
    input_date = document.getElementById("input_date");
}

function create_unfinished_task(){
    unfinished_task_container = document.getElementsByClassName("container")[0];
    unfinished_task_container.innerHTML = "";

    task_array = [];
    firebase.database().ref("unfinished_task").once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot) { //use the snapshot area here
            var childKey = childSnapshot.key; //obtain the childKey
            var childData = childSnapshot.val(); //obtain the childSnapshot
            task_array.push(Object.values(childData)); //converting an object to an array
        });
    
        for(var i, i = 0; i < task_array.length; i++ ){
            task_date = task_array[i][0];
            task_key = task_array[i][1];
            task_title = task_array[i][2];

        
            task_container = document.createElement("div");
            task_container.setAttribute("class", "task_container");
            task_container.setAttribute("data-key", task_key);

            // TASK DATA
            task_data = document.createElement('div');
            task_data.setAttribute('id', 'task_data');

            
            title = document.createElement('p');
            title.setAttribute('id', 'task_title');
            title.setAttribute('contenteditable', false);
            title.innerHTML = task_title;

            date = document.createElement('p');
            date.setAttribute('id', 'task_date');
            date.setAttribute('contenteditable', false);
            date.innerHTML = task_date;

            // TASK TOOLS
            task_tool = document.createElement('div');
            task_tool.setAttribute('id', 'task_tool');
            
            task_done_button = document.createElement('button');
            task_done_button.setAttribute('id', 'task_done_button');
            task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this.parentElement)");
            fa_done = document.createElement('i');
            fa_done.setAttribute('class', 'fa fa-check');

            task_edit_button = document.createElement('button');
            task_edit_button.setAttribute('id', 'task_edit_button');
            task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
            fa_edit = document.createElement('i');
            fa_edit.setAttribute('class', 'fa fa-pencil');

            task_delete_button = document.createElement('button');
            task_delete_button.setAttribute('id', 'task_delete_button');
            task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
            fa_delete = document.createElement('i');
            fa_delete.setAttribute('class', 'fa fa-trash');


            unfinished_task_container.append(task_container);
            task_container.append(task_data);
            task_data.append(title);
            task_data.append(date);

            task_container.append(task_tool);
            task_tool.append(task_done_button);
            task_done_button.append(fa_done);
            task_tool.append(task_edit_button);
            task_edit_button.append(fa_edit);
            task_tool.append(task_delete_button);
            task_delete_button.append(fa_delete);
          }

        });
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