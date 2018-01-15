document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me');
    document.body.appendChild(button);
    button.appendChild(btnText);

    button.addEventListener('click', function() {
        alert('I have been clicked!');
    });

    msgBtn = document.getElementById('textBtn');

    msgBtn.addEventListener('click', function() {
        let text = document.getElementById('Text').value;
        alert(text);
    })

    let div = document.getElementById('box')

    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'red';
    })

    div.addEventListener('mouseout', function() {
        div.style.backgroundColor =  'black';
    })

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let paragraph = document.createElement('p');
    let pText = document.createTextNode('Some Text');
    document.body.appendChild(paragraph);
    paragraph.appendChild(pText);

    paragraph.addEventListener('click', function() {
        paragraph.style.color = getRandomColor();
    })

    let button2 = document.createElement('button');
    let btnText2 = document.createTextNode('Create Span');
    document.body.appendChild(button2);
    button2.appendChild(btnText2);

    let div2 = document.createElement('div');
    document.body.appendChild(div2);

    button2.addEventListener('click', function() {
        let span = document.createElement('span');
        let name = document.createTextNode('Peter Sugg');
        div2.appendChild(span);
        span.appendChild(name);

    })

    let friends = ['Hayley', 'Evan', 'Connor', 'Scott', 'Adam', 'Nick', 'Roscoe', 'Nathan', 'Frank', 'Charlie']

    let button3 = document.getElementById('ulBtn');
    let unorder = document.getElementById('unlist');

    button3.addEventListener('click', function() {
        
        for (i = 0; i != 10; i++) {
            let listItem = document.createElement('li');
            let listText = document.createTextNode(friends[i]);

            unorder.appendChild(listItem);
            listItem.appendChild(listText);
        }

    })
    

});