const parseData = JSON.parse(data);
console.log(parseData);
const divEl = document.querySelector('.content');
parseData.forEach(item => {
    divEl.insertAdjacentHTML('beforeend', `
        <div class="content_box">    
        <h2>${item.firstname} ${item.lastname}</h2>
            <p>Phone: <b>${item.phone}</b></p>
            <p>Email: <b>${item.email}</b></p>
            <p>Address: <b>${item.address.street}</b></p>
            <span>Company: ${item.company.name}</span>,
            <span>${item.company.bs}</span>
            </div>
        `)
});