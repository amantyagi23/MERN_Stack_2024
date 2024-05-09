
// data structure
const taskList = []


// data type 
// task = {
//     id:value,
//     title:value,
//     desc:value,
//     date:value
// }

function readInput(){
    let id = document.getElementById("id").value
    let title = document.getElementById("title").value
    let desc = document.getElementById("desc").value
    let date =  document.getElementById("date").value
   addTask({
    id:id,
    title:title,
    desc : desc,
    date:date
   })

}

function addTask(task){
    taskList.push(task)
    printTask()
   
}

function printTask(){
    let items = document.getElementById("items")
    items.innerHTML = "" 
    // table()table -> row()tr -> cols(id,title,desc,date)td
console.log(items);
    for (let index = 0; index < taskList.length; index++) {
     
        let tr = document.createElement("tr");
        let task = taskList[index];
        tr.innerHTML = `
        <td>${task.id}</td>
        <td>${task.title}</td>
        <td>${task.desc}</td>
        <td>${task.date}</td>
        <td>
        <button>UpdateTask</button>
        <button onclick="deleteTask(${task.id})" >Delete</button>
        </td>
        `
       
        items.appendChild(tr);
    }


}

function updateTask(){

}

function deleteTask(taskId){
    
    let  taskList.filter((task)=>task.id !==taskId);


}