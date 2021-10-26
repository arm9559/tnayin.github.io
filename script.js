    function spanDate(){
        let day = new Date()
        let month = new Date()
        let fullYear = new Date()
        const spanDate = document.querySelector('.date').innerHTML = day.getDate() + ' ' + 0 + month.getMonth() + ' ' + fullYear.getFullYear()
    } 

    spanDate()

let modalOnFunc = document.querySelector('#modalOn').addEventListener('click',()=>{
    let modalContainer = document.querySelector('.modal-container')
    modalContainer.style.display = "block"   
    
    let newUsersContainer = document.querySelector(".newUsers-container")
    let usersAddFunc = document.querySelector('#addUser').addEventListener('click',(x) =>{
        let createUl = document.createElement("ul")
        createUl.setAttribute("class","users-lists")
        newUsersContainer.append(createUl)

        //Create Li

        let createLiOne = document.createElement("li")
        createLiOne.setAttribute("class" , "users-li-li-one")
        let nameSurname = document.querySelector("#name").value
        createUl.appendChild(createLiOne)
        createLiOne.innerHTML = nameSurname


        let createLiTwo = document.createElement("li")
        createLiTwo.setAttribute("class" , "users-li-li-two")
        let personId = document.querySelector("#id").value
        createUl.append(createLiTwo)
        createLiTwo.innerHTML = personId

        let createLiTree = document.createElement("li")
        createLiTree.setAttribute("class" , "users-li-li-tree")
        let phone = document.querySelector("#phone").value
        createUl.append(createLiTree)
        createLiTree.innerHTML = phone

        let createLiFour = document.createElement("li")
        createLiFour.setAttribute("class" , "users-li-li-four")
        let day = new Date()
        let month = new Date()
        let fullYear = new Date()
        createUl.append(createLiFour)
        createLiFour.innerHTML = day.getDate() + ' ' + 0 + month.getMonth() + ' ' + fullYear.getFullYear()



        let createButton = document.createElement("button")
        createButton.setAttribute("class","users-li-li-button btn btn-danger")
        createButton.innerHTML = "Remove"
        createUl.append(createButton)
        
        createButton.addEventListener('click', () =>{
            let rem = document.querySelector('.users-lists')
            rem.remove()
        })
    })
})

    function modalcontainerremove(){
        let modalContainer = document.querySelector('.modal-container').style.display = "none"
    }
