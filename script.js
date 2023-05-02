  

 document.addEventListener("DOMContentLoaded", function() {
 
 document.querySelector('#submit').addEventListener('click', getdata)


 async function getdata(e){
    e.preventDefault()
    const cls = document.querySelector('.data-list')
    if(cls.innerHTML = " "){
        let found;
        const radios = document.querySelectorAll('input[type="radio"][name="flexRadioDefault"]');
        radios.forEach((radio)=>{
            if(radio.checked === true){
                found = radio.value
                return found
            }
        })
        try{
            let value = await fetch(`https://holidayapi.com/v1/holidays?pretty&key=f46d017d-aebf-458c-815a-2f6d3b02fcfe&country=${found}&year=2022`)
            let nectval = await value.json()
            const table = document.createElement('table')
            table.style.border = '2px solid black';
            table.style.margin = 'auto';
                const thead = document.createElement('thead');
                const trheader = document.createElement('tr');
                trheader.style.border = '2px solid black';
                ['#','Holiday name','Date','Observed','Public','Day'].forEach((str) => {
                    const th = document.createElement('th');
                    th.innerText = str;
                    th.style.border = '2px solid black';
                    trheader.append(th)
                    
                })
                thead.appendChild(trheader)
            table.appendChild(thead)
            let thearr = nectval.holidays;
            thearr.forEach((ele,i) => {
                const trBody = document.createElement('tr')
                trBody.style.border = '2px solid black';
                const td = document.createElement('td');
                td.style.border = '2px solid black';
                td.innerText = i+1;
                td.style.width = "5%"
                const tdName = document.createElement('td')
                tdName.innerText = ele.name
                tdName.style.border = '2px solid black';
                tdName.style.width = "45%"
                const tdDate = document.createElement('td')
                tdDate.innerText = ele.date
                tdDate.style.border = '2px solid black';
                tdDate.style.width = "15%"
                const tdObserved = document.createElement('td')
                tdObserved.innerText = ele.observed
                tdObserved.style.border = '2px solid black';
                tdObserved.style.width = "15%"
                const tdPublic = document.createElement('td')
                tdPublic.innerText = ele.public
                tdPublic.style.border = '2px solid black';
                tdPublic.style.width = "10%"
                const tdDay = document.createElement('td')
                tdDay.innerText = ele.weekday.date.name
                tdDay.style.border = '2px solid black';
                tdDay.style.width = "10%"
                trBody.append(td,tdName,tdDate,tdObserved,tdPublic,tdDay)
                const tbody = document.createElement('tbody');
                tbody.appendChild(trBody)
                table.appendChild(tbody)
            });
            
            const cls = document.querySelector('.data-list')
            console.log()
            cls.append(table)
            document.querySelector('.no-data').style.display= 'none';
            radios.forEach((radio)=>{
                if(radio.checked === true){
                    radio.checked = false;
                }
            })
    
        }catch(err){
            console.log(err)
        }
    }else{
        cls.innerHTML = " ";
        let found;
        const radios = document.querySelectorAll('input[type="radio"][name="flexRadioDefault"]');
        radios.forEach((radio)=>{
            if(radio.checked === true){
                found = radio.value
                return found
            }
        })
        try{
            let value = await fetch(`https://holidayapi.com/v1/holidays?pretty&key=f46d017d-aebf-458c-815a-2f6d3b02fcfe&country=${found}&year=2022`)
            let nectval = await value.json()
            const table = document.createElement('table')
            table.style.border = '2px solid black';
                const thead = document.createElement('thead');
                const trheader = document.createElement('tr');
                trheader.style.border = '2px solid black';
                ['#','Holiday name','Date','Observed','Public','Day'].forEach((str) => {
                    const th = document.createElement('th');
                    th.innerText = str;
                    th.style.border = '2px solid black';
                    trheader.append(th)
                    
                })
                thead.appendChild(trheader)
            table.appendChild(thead)
            let thearr = nectval.holidays;
            thearr.forEach((ele) => {
                const trBody = document.createElement('tr')
                trBody.style.border = '2px solid black';
                const td = document.createElement('td');
                td.style.border = '2px solid black';
                td.innerText = i+1;
                td.style.width = "5%"
                const tdName = document.createElement('td')
                tdName.innerText = ele.name
                tdName.style.border = '2px solid black';
                tdName.style.width = "45%"
                const tdDate = document.createElement('td')
                tdDate.innerText = ele.date
                tdDate.style.border = '2px solid black';
                tdDate.style.width = "15%"
                const tdObserved = document.createElement('td')
                tdObserved.innerText = ele.observed
                tdObserved.style.border = '2px solid black';
                tdObserved.style.width = "15%"
                const tdPublic = document.createElement('td')
                tdPublic.innerText = ele.public
                tdPublic.style.border = '2px solid black';
                tdPublic.style.width = "10%"
                const tdDay = document.createElement('td')
                tdDay.innerText = ele.weekday.date.name
                tdDay.style.border = '2px solid black';
                tdDay.style.width = "10%"
                trBody.append(td,tdName,tdDate,tdObserved,tdPublic,tdDay)
                const tbody = document.createElement('tbody');
                tbody.appendChild(trBody)
                table.appendChild(tbody)
            });
            const cls = document.querySelector('.data-list')
            console.log()
            cls.append(table)
            document.querySelector('.no-data').style.display= 'none';
            radios.forEach((radio)=>{
                if(radio.checked === true){
                    radio.checked = false;
                }
            })
    
        }catch(err){
            console.log(err)
        }
    }   
}
 });