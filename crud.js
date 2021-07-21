function getUsers() {
    fetch("https://60efffc9f587af00179d3c41.mockapi.io/users", {
      method: "GET"
      
    })
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((users) => loadUsers(users));
  }
  
  function loadUsers(users) {
    const userList = document.createElement("div");
    userList.className = "user-list";
    users.forEach((user) => {
      const userContainer = document.createElement("div");
      userContainer.className = "user-container";
      
      userContainer.innerHTML = `
        <img class="user-image"  src=${user.avatar}> </img>
        <div>
          <h3 class="user-name">${user.name}</h3>
          <p class="user-time" >${new Date(user.createdAt).toDateString()}</p>
          <button  onclick="deleteUser(${user.id})">Delete</button>
          <button   onclick="editUser('${user.id}','${user.name}','${user.avatar}')">Edit</button>
        </div>
        `;
  
      userList.append(userContainer);
    });
  
    document.body.append(userList);
  }
  
  // new comment
  // '<h3>' + user.name + '</h3>' + '\n' +
  
  getUsers();
  
  
  function editUser(UserId,UserName,UserAvatar){
    
    console.log("Editing",UserId,UserName,UserAvatar);
    document.querySelector(".submit-user").innerText="Edit Users"
    document.querySelector(".new-user-name").value=UserName;
    document.querySelector(".new-profile-pic").value=UserAvatar;
    localStorage.setItem("UserId",UserId)
    
  
  
  }
  
  function addUser() {
     
    let type=document.querySelector(".submit-user").innerText==="Edit Users" ? "Edit" : "Add"
  
  
  
    if(type=="Add"){
  
  
  
    const name = document.querySelector(".new-user-name").value;
    const avatar = document.querySelector(".new-profile-pic").value;
    const createdAt = new Date();
    const userDetails = {
      name: name,
      avatar: avatar,
      createdAt: createdAt
    };
  
    // Add User to the mockapi
    fetch("https://60efffc9f587af00179d3c41.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    })
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((users) => refreshUsers());
  
    console.log("Adding User....", userDetails);
  }
  else{
    const UserId=localStorage.getItem("UserId");
    const name = document.querySelector(".new-user-name").value;
    const avatar = document.querySelector(".new-profile-pic").value;
    const createdAt = new Date();
    const userDetails = {
      name: name,
      avatar: avatar,
      createdAt: createdAt
    }
    // Add User to the mockapi
    fetch(`https://60efffc9f587af00179d3c41.mockapi.io/users/${UserId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    })
    .then((users) => refreshUsers());
  }
  }
  
  
  
  function deleteUser(id) {
    fetch(`https://60efffc9f587af00179d3c41.mockapi.io/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => refreshUsers());
  }
  
  
  function refreshUsers() {
    // userList
    document.querySelector(".user-list").remove();
    reset();
    getUsers();
  }
  
  
  function reset(){
    document.querySelector(".submit-user").innerText="Add Users"
    document.querySelector(".new-user-name").value="";
    document.querySelector(".new-profile-pic").value="";
  }
  
  
  
  // function editUser(id) {
  //   let name = prompt("Enter new name");
  //   let avatar = prompt("Enter new image URL");
  
  //   let userDetails = { name, avatar };
  //   fetch(`https://60efffe8f587af00179d3c55.mockapi.io/users/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(userDetails)
  //   }).then(() => refreshUsers());
  // }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // function getUsers() {
  //   fetch("https://60efffc9f587af00179d3c41.mockapi.io/users",{
  //    method: "GET"
  //  })
  //     .then((data) => {
  //       console.log(data);
  //       return data.json();
  //     })
  //     .then((users) => loadUsers(users));
  // }
  
  // function loadUsers(users) {
  //   const userList = document.createElement("div");
  //   users.forEach((user) => {
  //     const userContainer = document.createElement("div");
  //     userContainer.className = "user-container";
  
  //     userContainer.innerHTML = `
  //     <img class="user-image"  src=${user.avatar}> </img>
  //     <div>
  //       <h3 class="user-name">${user.name}</h3>
  //       <p class="user-time" >${new Date(user.createdAt).toDateString()}</p>
  //       <button onclick="deleteuser(${user.id})">Delete </button>
  //       <button onclick="updateuser(${user.id})">Update</button>
  //     </div>
  //     `;
  
  //     userList.append(userContainer);
  //   });
  
  //   document.body.append(userList);
  // }
  
  // getUsers();
  
  
  // function deleteuser(id) {
  //   console.log('deleting..',id)
  //   fetch(`https://60efffc9f587af00179d3c41.mockapi.io/users/${id}`, {
  //     method: "DELETE",
  //     headers:{
  //       "Content-type":"application/json"
  //     }
  // })
    
  //   .then(() => refreshUsers());
  // }
  
  // // new comment
  // // '<h3>' + user.name + '</h3>' + '\n' +
  
  
  
  // function addUser(){
  //   let name=document.querySelector(".new-user-name").value;
  //   let avatar=document.querySelector(".new-profile-pic").value;
  //   let createdAt=new Date()
  //   let userdetails={
  //     name:name,
  //     avatar:avatar,
  //     createdAt:createdAt
  //   }
  
  //   fetch("https://60efffc9f587af00179d3c41.mockapi.io/users",{
  //    method: "POST",
  //    headers:{
  //      "Content-type": "application/json"
  //    },
  //    body: JSON.stringify(userdetails)
  //  })
  //     .then((data) => {
  //       console.log(data);
  //       return data.json();
  //     })
  //     .then(() => refreshUsers());
    
  //     console.log("Adding User....", userdetails);
  //   }
     
  
  //   function updateuser(id){
  //     let name=prompt("Enter new name");
  //     let avatar=prompt("Enter new image url");
  //      let userdetails={name,avatar};
  //   fetch(`https://60efffc9f587af00179d3c41.mockapi.io/users${id}`,{
  //     method:"PUT",  
  //     headers:{
  //         "Content-type":"application/json"
  //     },
  //     body: JSON.stringify(userdetails)
  
  //     })
  //     .then(()=>refreshUsers())
  //     }
    
      
  // function refreshUsers() {
  //   // userList
  //   document.querySelector(".userlist").remove();
  //   getUsers();
  // }
  
    
    
  
  
  
    
  
  
  // let content=document.querySelector(".container")
  
  // const msg=(num)=>
  //   new Promise((resolve,reject)=>{
  //     if(num){
  //       setTimeout(()=>{
  //         content.innerText=num
  //         resolve(num)
  //       },1000)
  //     }
  //     else{
  //       reject(num)
  //     }
  //   })
  
  //   msg(10).then((x)=>msg(--x))
  
  //   .then((x)=>msg(--x))
  //   .then((x)=>msg(--x))
  //   .then((x)=>msg(--x))
  //   .then((x)=>msg(--x))
  //   .then((x)=>msg(--x))
  //   .then((x)=>msg(--x))
  //   .then((x)=>msg(--x))
  //   .then((x)=>msg(--x))
  //   .then((x)=>msg(--x))
  
    
  
  //   .catch((x)=>msg("happy life"))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let ajeeth=new Promise((resolve,reject)=>{
  //   let workdone=true;
  //   if(workdone){
  //     resolve("go and play")
  //   }
  //   else{
  //     reject("go do laundry")
  //   }
  // })
  
  
  // ajeeth
  
  // // .then((msg)=>msg)
  // // .catch((info)=>console.log(info+"enjoy"))
  // .catch((errmsg)=> errmsg)
  // .then((data)=>console.log(data+" and come back"))
  
  
  
  
  
  // let countdown=document.querySelector(".countdown")
  // let count=new Promise((resolve,reject)=>{
  //   let time=10;
  //   countdown.innerText=time
  //   if(time==1)
  //   {
  //     resolve()
  //   }
  // })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const countdown=document.querySelector(".countdown")
  // let time=10
  // countdown.innerText=time;
  
  // setTimeout(()=>{
  //   countdown.innerText=time--;
  //   setTimeout(()=>{
  //     countdown.innerText=time--;
  //     setTimeout(()=>{
  //       countdown.innerText=time--;
  //       setTimeout(()=>{
  //         countdown.innerText=time--;
  //         setTimeout(()=>{
  //           countdown.innerText=time--;
  //           setTimeout(()=>{
  //             countdown.innerText=time--;
  //             setTimeout(()=>{
  //               countdown.innerText=time--;
  //               setTimeout(()=>{
  //                 countdown.innerText=time--;
  //                 setTimeout(()=>{
  //                   countdown.innerText=time--;
  //                   setTimeout(()=>{
  //                     countdown.innerText="Welcome Ajeeth";
                      
  //                   },1000)
                    
  //                 },1000)
                  
  //               },1000)
                
  //             },1000)
              
  //           },1000)
            
  //         },1000)
          
  //       },1000)
        
  //     },1000)
      
  //   },1000)
  // },1000)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //const users = [
  //     {
  //       createdAt: "2021-07-08T16:03:21.350Z",
  //       name: "Dr. Armando Wilkinson",
  //       avatar: "https://cdn.fakercloud.com/avatars/safrankov_128.jpg",
  //       id: "1"
  //     },
  //     {
  //       createdAt: "2021-07-08T08:57:12.518Z",
  //       name: "Stephanie Rogahn",
  //       avatar: "https://cdn.fakercloud.com/avatars/Shriiiiimp_128.jpg",
  //       id: "2"
  //     },
  //     {
  //       createdAt: "2021-07-09T01:12:29.377Z",
  //       name: "Claude Collins",
  //       avatar: "https://cdn.fakercloud.com/avatars/kimcool_128.jpg",
  //       id: "3"
  //     },
  //     {
  //       createdAt: "2021-07-09T00:05:02.016Z",
  //       name: "Lisa Erdman",
  //       avatar: "https://cdn.fakercloud.com/avatars/johncafazza_128.jpg",
  //       id: "4"
  //     },
  //     {
  //       createdAt: "2021-07-08T10:04:17.740Z",
  //       name: "Nellie Gorczany",
  //       avatar: "https://cdn.fakercloud.com/avatars/iduuck_128.jpg",
  //       id: "5"
  //     },
  //     {
  //       createdAt: "2021-07-09T05:17:52.657Z",
  //       name: "Cristina Oberbrunner",
  //       avatar: "https://cdn.fakercloud.com/avatars/vaughanmoffitt_128.jpg",
  //       id: "6"
  //     },
  //     {
  //       createdAt: "2021-07-08T19:05:11.867Z",
  //       name: "Ernest Adams",
  //       avatar: "https://cdn.fakercloud.com/avatars/marcobarbosa_128.jpg",
  //       id: "7"
  //     },
  //     {
  //       createdAt: "2021-07-08T16:50:23.231Z",
  //       name: "Preston Carroll",
  //       avatar: "https://cdn.fakercloud.com/avatars/jnmnrd_128.jpg",
  //       id: "8"
  //     },
  //     {
  //       createdAt: "2021-07-08T18:52:56.658Z",
  //       name: "Roderick Kerluke I",
  //       avatar: "https://cdn.fakercloud.com/avatars/instalox_128.jpg",
  //       id: "9"
  //     },
  //     {
  //       createdAt: "2021-07-08T15:29:47.213Z",
  //       name: "Ernestine Kling",
  //       avatar: "https://cdn.fakercloud.com/avatars/jesseddy_128.jpg",
  //       id: "10"
  //     },
  //     {
  //       createdAt: "2021-07-09T06:08:38.593Z",
  //       name: "Ida Fahey",
  //       avatar: "https://cdn.fakercloud.com/avatars/jarsen_128.jpg",
  //       id: "11"
  //     },
  //     {
  //       createdAt: "2021-07-09T05:23:39.814Z",
  //       name: "Lorene McCullough",
  //       avatar: "https://cdn.fakercloud.com/avatars/dnirmal_128.jpg",
  //       id: "12"
  //     },
  //     {
  //       createdAt: "2021-07-08T21:53:26.640Z",
  //       name: "Mrs. Jacquelyn Weissnat",
  //       avatar: "https://cdn.fakercloud.com/avatars/fotomagin_128.jpg",
  //       id: "13"
  //     }
  //   ];
  
  //   const userlist=document.createElement("div")
  //    users.forEach((users)=>{
  //         const username=document.createElement("div")
          
  //     //    username.innerText=users.name
  
         
  //     //    avatars.src=users.avatar
        
  
  //     //    const time=document.createElement("p")
  //     //    time.innerText=users.createdAt
  
       
  
  //     //    const num=document.createElement("p")
  //     //    num.innerText=users.id
  
  //     //    userlist.append(username,avatars,time,num)
         
  //     username.innerHTML=`<h3>${users.name}</h3>
  //   <img src=${users.avatar}></img>`
      
  //     userlist.append(username)
  
  
  //    })
  //    document.body.append(userlist)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const user=["ajeeth","maria","prabu"]
  
  // const userlist=document.createElement("ol");
  
  // user.forEach((user)=>{
  //     const username=document.createElement("li");
  //     username.innerText=user;
  //     userlist.append(username)
  
  // })
  
  // document.body.append(userlist)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let contentholderdiv=document.getElementById("content-holdar")
  
  // let ptag=document.createElement("h1")
  // ptag.innerText="Ajeeth is a bad boy"
  // ptag.setAttribute=("id","aji")
  // ptag.style.backgroundColor="yellow"
  // ptag.classList.add("gree")
  
  // contentholderdiv.appendChild(ptag)
  
  // contentholderdiv.addEventListener("click",function(){
  //     let a=prompt("Enter name")
  //     if(confirm("Are you a developer")){
  //         alert("welcome"+a+"to the developing")
  //     }
  //     else{
  //         alert("learn programing"+a+"and then come")
  //     }
  // })