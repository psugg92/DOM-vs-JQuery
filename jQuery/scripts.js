$(document).ready(function() {
    let body = $("body");
    let button = $("<button>Alert Message</button>");
    button.appendTo(body);

    $(button).click(function() {
        alert("I have been clicked!")
    })

    let textBtn = $('<button>Written Message</button>');
    textBtn.appendTo(body);

    textBtn.click(function() {
        let msgTxt = $('#Text').val();
        alert(msgTxt);
    })

    let boxDiv = $('#box')

    function randColor() {
        var rand = '#'+Math.floor(Math.random() * 16777215).toString(16);
        return rand;
    };

    boxDiv.mouseover(function () {
        $('#box').css('background', randColor());
    })

    boxDiv.mouseout(function() {
        $('#box').css('background', 'black');
    })

    let paragraph = $('<p>This is some Text!</p>');
    paragraph.appendTo(body);

    paragraph.click(function() {
        $('p').css('color', randColor());
    })

    let btnDiv = $("<div></div>");
    btnDiv.appendTo(body);
    let nameBtn = $("<button>Name Button</button>");
    nameBtn.appendTo(btnDiv);

    nameBtn.click(function() {
        let spanName = $('<span> Peter Sugg </span>');
        spanName.appendTo(btnDiv);
    })

    let friends = ['Hayley', 'Evan', 'Connor', 'Scott', 'Adam', 'Nick', 'Roscoe', 'Nathan', 'Frank', 'Charlie']

    let button3 = $('#ulBtn');
    let unorder = $('#unorder');



    button3.click(function() {
        
        for (i = 0; i != 10; i++) {
            let listItem = $(`<li>${friends[i]}</li>`);

            listItem.appendTo(unorder);
        }

    })
    

})