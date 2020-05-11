const url = 'https://acme-users-api-rev.herokuapp.com/api/users';
const app = document.querySelector('app');


// const firstDiv = document.querySelector('.first ul');
// const firstDiv = document.querySelector('.first ul');



// const hashChange = (val) => {
//  window.addEventListener('hashchange', function(val) {
//     render();
//     fetch();
// }) 
// }

// const search = (input) => {
//     document.querySelector('input');
//     for( let val in users) {
//         for (let i = 0; i < val.length; i++) {
//             for (let j = 0; i < input.length; j++) {
//                 if (i = j) {
//                     renderUsers()
//                 }
//             }
//         }
//     }
}
const renderUsers = () => {
    const render = (users) => {
    let html = users.map( user => {
        return `
        <tr>
        <td><img src='${ user.avatar }'/></td>    
        <td>${ user.firstName }</td>
        <td>${ user.lastName }</td>
        <td>${ user.email }</td>
        <td>${ user.title}</td>
            
        </tr>
        `;
    }).join('');
    html = `
    <thead>
        <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Title</th>
        </tr>
    </thead>
    <tbody>
        ${ html }
    </tbody>
            `;
    document.querySelector('table').innerHTML = html;
}

fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
   render(data.users);
});
}


// const firstName = (arg) => {
//     const firstDiv = document.querySelector('.first ul');
//     const html = arg.map((index) => {
//         const splitName = index.fullName.split(' ');
//         const firstName = splitName[0];
//         return `<li>${index.firstName}</li>`
//     }).join('');
//     firstDiv.innerHTML = html;
// }

// const lastName = (arg) => {
//     const lastDiv = document.querySelector('.last ul');
//     const html = arg.map((index) => {
//         const splitName = index.fullName.split(' ');
//         const lastName = splitName[1];
//         return `<li>${index.lastName}</li>`
//     }).join('');
//     lastDiv.innerHTML = html;
// }

// const email = (arg) => {
//     const emailDiv = document.querySelector('.email ul');
//     const html = arg.map((index) => {
//         const emailAddress = index.email;
//         return `<li>${emailAddress}</li>`
//     }).join('');
//     emailDiv.innerHTML = html;
// }

// const title = (arg) => {
//     const titleDiv = document.querySelector('.title ul');
//     const html = arg.map((index) => {
//         const title = index.title;
//         return `<li>${title}</li>`
//     }).join('');
//     titleDiv.innerHTML = html;
// }

// const render = () => {
//     app.innerHTML = '';
//     fetch();
// }