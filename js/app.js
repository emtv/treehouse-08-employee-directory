(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

console.log('Made with love and full Code! by @EmTv');

var searchBox = document.getElementById('searchBox');

var picture = document.querySelector('.card_avatar > .picture');
var employee_card = document.querySelectorAll('.card');
var employee_picture = document.querySelectorAll('.picture');
var employee_name = document.querySelectorAll('.name');
var employee_email = document.querySelectorAll('.email');
var employee_city = document.querySelectorAll('.city');

var employee_phone = document.querySelectorAll('.phone');
var employee_address = document.querySelectorAll('.address');
var employee_birthday = document.querySelectorAll('.birthday');

var modal_picture = document.querySelector('.modal-avatar img');
var modal_name = document.querySelector('.modal-data .name');
var modal_email = document.querySelector('.modal-data .email');
var modal_city = document.querySelector('.modal-data .city');
var modal_phone = document.querySelector('.modal-data_extend .phone');
var modal_address = document.querySelector('.modal-data_extend .address');
var modal_birthday = document.querySelector('.modal-data_extend .birthday');
var get_overlay = document.querySelector('#overlay');

var arrowLeft = document.getElementById('arrowLeft');
var arrowRigth = document.getElementById('arrowRigth');

//Show Modal Window
function getCard() {

    for (var i = 0; i < employee_card.length; i++) {
        employee_card[i].addEventListener('click', function (e) {
            /* Act on the event */
            openModal();
            // console.log(this.parentNode.querySelector('.card_data .name'));
            replaceData(this);
        });
    }
}

getCard();

function openModal() {
    get_overlay.classList.add("active");
    get_overlay.classList.remove("hide");
};

function replaceData(e) {

    // let get_node = e.target.nodeName;
    var get_parent = e.parentNode;

    // get_parent.style.border = "solid";

    //Current Values
    var current_avatar = e.querySelector('.card_avatar img');
    var current_name = get_parent.querySelector('.card_data .name');
    var current_email = get_parent.querySelector('.card_data .email');
    var current_city = get_parent.querySelector('.card_data .city');

    var current_phone = get_parent.querySelector('.card_data_extend .phone');
    var current_address = get_parent.querySelector('.card_data_extend .address');
    var current_birthday = get_parent.querySelector('.card_data_extend .birthday');

    //Modal Values
    modal_picture.src = current_avatar.src;
    modal_name.textContent = current_name.textContent;
    modal_email.textContent = current_email.textContent;
    modal_city.textContent = current_city.textContent;

    modal_phone.textContent = current_phone.textContent;
    modal_address.textContent = current_address.textContent;
    modal_birthday.textContent = current_birthday.textContent;
};

//Close Modal Window

if (typeof overlay !== 'undefined') {

    var modal_close = document.getElementById('close');
    var _overlay = document.querySelector('#overlay');

    // the variable is defined

    [modal_close].forEach(function (element) {
        element.addEventListener('click', function (event) {
            /* Act on the event */
            closeModal(_overlay);
        });

        // window.onclick = function(event) {
        // if (event.target == overlay) {
        //     // modal.style.display = "none";
        //     closeModal();
        //  }
        // }
    });

    // modal_close.addEventListener('click', (function(event) {
    //     /* Act on the event */
    //     closeModal();
    // }))

    // overlay.addEventListener('click', (function(event) {
    //     /* Act on the event */
    //     closeModal();
    // }))    
}

function closeModal(element) {
    element.classList.add("hide");
    element.classList.remove("active");
}

$.ajax({
    url: 'https://randomuser.me/api/?nat=au&results=12',
    dataType: 'json',
    success: function success(data) {
        // console.log(data);
        var dataUser = data.results;
        // console.log(dataUser[0].name.first);


        for (var i = 0; i < employee_name.length; i++) {
            // console.log(employee_name.length);
            employee_picture[i].src = dataUser[i].picture.large;
            employee_picture[i].alt = dataUser[i].name.first + ' ' + dataUser[i].name.last;

            employee_name[i].textContent = dataUser[i].name.first + ' ' + dataUser[i].name.last;
            employee_email[i].textContent = dataUser[i].email;
            employee_city[i].textContent = dataUser[i].location.city;

            employee_phone[i].textContent = dataUser[i].phone;
            employee_address[i].textContent = dataUser[i].location.street + ', ' + dataUser[i].location.state + ', ' + dataUser[i].location.postcode;

            // let data_birthdat = 
            employee_birthday[i].textContent = dataUser[i].dob.date.substring(0, 10).replace(/-/g, '/');
        }
    }
});

searchBox.addEventListener('keyup', function (event) {
    /* Act on the event */

    Array.prototype.filter.call(document.querySelectorAll('.card'), function () {
        var get_value = searchBox.value.toLowerCase();
        var get_card = document.querySelectorAll('.card');
        // console.log('hola');
        var val_name = document.querySelectorAll('.name');

        for (var i = 0; i < get_card.length; i++) {
            // console.log(get_card[i].querySelector('.card_data .name').textContent);
            // getCard(get_card[i], ableCard(), hideCard(), get_value);

            if (get_card[i].querySelector('.card_data .name').textContent.indexOf(get_value) >= 0) {
                ableCard(get_card[i]);
                // get_card[i].parentNode.classList.add('card-able');
                // get_card[i].parentNode.classList.remove('card-hide');
            } else {
                hideCard(get_card[i]);
                // get_card[i].parentNode.classList.add('card-hide');
                // get_card[i].parentNode.classList.add('card-able');
            }
        }
    });
});

function ableCard(item) {
    item.parentNode.classList.add('card-able');
    item.parentNode.classList.remove('card-hide');
}

function hideCard(item) {
    item.parentNode.classList.add('card-hide');
    item.parentNode.classList.add('card-able');
}

function currenData() {}

function nextData() {
    var get_current_cardId = document.getElementById('currentCard');
    var get_next_cardId = document.getElementById('nextCard');

    // NEXT DATA
    var next_picture = get_next_cardId.querySelector('.picture').src;
    var next_name = get_next_cardId.querySelector('.name').textContent;
    var next_email = get_next_cardId.querySelector('.email').textContent;
    var next_city = get_next_cardId.querySelector('.city').textContent;
    var next_phone = get_next_cardId.querySelector('.phone').textContent;
    var next_address = get_next_cardId.querySelector('.address').textContent;
    var next_birthday = get_next_cardId.querySelector('.birthday').textContent;

    var modal_cur_picture = document.querySelector('.modal-avatar img');
    var modal_cur_name = document.querySelector('.modal-data .name');
    var modal_cur_email = document.querySelector('.modal-data .email');
    var modal_cur_city = document.querySelector('.modal-data .city');
    var modal_cur_phone = document.querySelector('.modal-data_extend .phone');
    var modal_cur_address = document.querySelector('.modal-data_extend .address');
    var modal_cur_birthday = document.querySelector('.modal-data_extend .birthday');

    modal_cur_picture.src = next_picture;
    modal_cur_name.textContent = next_name;
    modal_cur_email.textContent = next_email;
    modal_cur_city.textContent = next_city;

    modal_cur_phone.textContent = next_phone;
    modal_cur_address.textContent = next_address;
    modal_cur_birthday.textContent = next_birthday;
}

function prevData() {
    var get_current_cardId = document.getElementById('currentCard');
    var get_next_cardId = document.getElementById('prevCard');

    // NEXT DATA
    var next_picture = get_next_cardId.querySelector('.picture').src;
    var next_name = get_next_cardId.querySelector('.name').textContent;
    var next_email = get_next_cardId.querySelector('.email').textContent;
    var next_city = get_next_cardId.querySelector('.city').textContent;
    var next_phone = get_next_cardId.querySelector('.phone').textContent;
    var next_address = get_next_cardId.querySelector('.address').textContent;
    var next_birthday = get_next_cardId.querySelector('.birthday').textContent;

    //CURRENT DATA
    var modal_cur_picture = document.querySelector('.modal-avatar img');
    var modal_cur_name = document.querySelector('.modal-data .name');
    var modal_cur_email = document.querySelector('.modal-data .email');
    var modal_cur_city = document.querySelector('.modal-data .city');
    var modal_cur_phone = document.querySelector('.modal-data_extend .phone');
    var modal_cur_address = document.querySelector('.modal-data_extend .address');
    var modal_cur_birthday = document.querySelector('.modal-data_extend .birthday');

    modal_cur_picture.src = next_picture;
    modal_cur_name.textContent = next_name;
    modal_cur_email.textContent = next_email;
    modal_cur_city.textContent = next_city;

    modal_cur_phone.textContent = next_phone;
    modal_cur_address.textContent = next_address;
    modal_cur_birthday.textContent = next_birthday;
}

//Changue Slider

var get_arrow_left = document.getElementById('arrowLeft');
var get_arrow_rigth = document.getElementById('arrowRigth');

get_arrow_rigth.addEventListener('click', function (event) {
    /* Act on the event */
    Array.prototype.filter.call(document.querySelectorAll('.card'), function () {

        var get_card_arrow = document.querySelectorAll('.card');
        var val_name_arrow = document.querySelectorAll('.name');
        var current_modal_name = document.querySelector('.modal-data .name').textContent;
        var current_card = '';

        checkHideArrows(arrowLeft, 'visible', 1);

        for (var i = 0; i < get_card_arrow.length; i++) {

            if (get_card_arrow[i].querySelector('.card_data .name').textContent.indexOf(current_modal_name) >= 0) {

                var _current_card = get_card_arrow[i].parentNode;

                _current_card.setAttribute('id', 'currentCard');

                if (_current_card.nextElementSibling) {
                    _current_card.nextElementSibling.setAttribute('id', 'nextCard');
                }

                //check first arrow
                var checkArrowLeft = _current_card.nextElementSibling;
                var checkLasttArrow = checkArrowLeft.nextElementSibling;

                if (checkLasttArrow === null || checkLasttArrow === 'undefined') {
                    // get_arrow_rigth.style.visibility = 'hidden';
                    // get_arrow_rigth.style.zIndex = -999;
                    checkHideArrows(get_arrow_rigth, 'hidden', -999);
                }

                if (_current_card.previousElementSibling) {
                    _current_card.previousElementSibling.setAttribute('id', 'prevCard');
                    _current_card.previousElementSibling.removeAttribute('id', 'prevCard');
                }
            }
        } // End for
    });
    nextData();
});

get_arrow_left.addEventListener('click', function (event) {
    /* Act on the event */
    Array.prototype.filter.call(document.querySelectorAll('.card'), function () {

        var get_card_arrow = document.querySelectorAll('.card');
        var val_name_arrow = document.querySelectorAll('.name');
        var current_modal_name = document.querySelector('.modal-data .name').textContent;
        var current_card = '';

        checkHideArrows(arrowRigth, 'visible', 1);

        for (var i = 0; i < get_card_arrow.length; i++) {

            if (get_card_arrow[i].querySelector('.card_data .name').textContent.indexOf(current_modal_name) >= 0) {

                var _current_card2 = get_card_arrow[i].parentNode;

                _current_card2.setAttribute('id', 'currentCard');

                if (_current_card2.previousElementSibling) {
                    _current_card2.previousElementSibling.setAttribute('id', 'prevCard');
                }

                //check first arrow
                var checkArrowLeft = _current_card2.previousElementSibling;
                var checkFirstArrow = checkArrowLeft.previousElementSibling;

                if (checkFirstArrow === null || checkFirstArrow === 'undefined') {
                    // get_arrow_left.style.visibility = 'hidden';
                    // get_arrow_left.style.zIndex = -999;
                    checkHideArrows(get_arrow_left, 'hidden', -999);
                }

                // else {
                //     get_arrow_left.style.visibility = 'visibile';
                //     get_arrow_left.style.zIndex = 1;
                // }


                if (_current_card2.nextElementSibling) {
                    _current_card2.nextElementSibling.setAttribute('id', 'nextCard');
                    _current_card2.nextElementSibling.removeAttribute('id', 'nextCard');
                }
            }
        } // End for
    });
    prevData();
});

function checkHideArrows(element, hidden, zIndex) {

    element.style.visibility = hidden;
    element.style.zIndex = zIndex;
}

function checkFirstLastCards() {

    var getAllCards = document.querySelectorAll('.employee-card-container');

    /* Act on the event */

    var _loop = function _loop() {

        var firstPosition = 0;
        var lastPosition = getAllCards.length - 1;

        var firstCard = getAllCards[0];
        var lastCard = getAllCards[lastPosition];

        var arrowLeft = document.getElementById('arrowLeft');
        var arrowRigth = document.getElementById('arrowRigth');

        [firstCard, lastCard].forEach(function (element) {

            element.addEventListener('click', function (event) {

                // this.style.border = "solid";
                // checkHideArrows(element, 'hidden', -999);
                if (this == firstCard) {
                    checkHideArrows(arrowLeft, 'hidden', -999);
                }

                if (this == lastCard) {
                    checkHideArrows(arrowRigth, 'hidden', -999);
                }

                // [arrowLeft, arrowRigth].forEach(function(element){
                //     checkHideArrows(element, 'hidden', -999)
                // });
            });
        });
    };

    for (var i = 0; i < getAllCards.length; i++) {
        _loop();
    }
}

checkFirstLastCards();

function clearAttr() {

    var button_close = document.getElementById('close');
    var close_overlay = document.querySelector('#overlay');

    [button_close].forEach(function (element) {
        element.addEventListener('click', function (event) {
            /* Act on the event */
            var clear_current = document.getElementById('currentCard');
            var clear_next = document.getElementById('nextCard');
            var clear_prev = document.getElementById('prevCard');

            if (clear_current) {
                clear_current.removeAttribute('id');
            }
            if (clear_next) {
                clear_next.removeAttribute('id');
            };

            if (clear_prev) {
                clear_prev.removeAttribute('id');
            };
        });
    });

    window.onclick = function (event) {
        var arrowLeft = document.getElementById('arrowLeft');
        var arrowRigth = document.getElementById('arrowRigth');

        if (event.target == close_overlay) {
            // modal.style.display = "none";
            var clear_current = document.getElementById('currentCard');
            var clear_next = document.getElementById('nextCard');
            var clear_prev = document.getElementById('prevCard');

            if (clear_current) {
                clear_current.removeAttribute('id');
            }
            if (clear_next) {
                clear_next.removeAttribute('id');
            };

            if (clear_prev) {
                clear_prev.removeAttribute('id');
            };

            [arrowLeft, arrowRigth].forEach(function (element) {
                checkHideArrows(element, 'visible', 1);
            });

            closeModal(close_overlay);
        }
    };
}

clearAttr();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy91bml0LTA4LWVtcGxveWVlLWRpcmVjdG9yeS9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsUUFBUSxHQUFSLENBQVksd0NBQVo7O0FBRUEsSUFBSSxZQUFZLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFoQjs7QUFFQSxJQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLHlCQUF2QixDQUFkO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxnQkFBVCxDQUEwQixPQUExQixDQUFwQjtBQUNBLElBQUksbUJBQW1CLFNBQVMsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBdkI7QUFDQSxJQUFJLGdCQUFnQixTQUFTLGdCQUFULENBQTBCLE9BQTFCLENBQXBCO0FBQ0EsSUFBSSxpQkFBaUIsU0FBUyxnQkFBVCxDQUEwQixRQUExQixDQUFyQjtBQUNBLElBQUksZ0JBQWdCLFNBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBcEI7O0FBRUEsSUFBSSxpQkFBaUIsU0FBUyxnQkFBVCxDQUEwQixRQUExQixDQUFyQjtBQUNBLElBQUksbUJBQW1CLFNBQVMsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBdkI7QUFDQSxJQUFJLG9CQUFvQixTQUFTLGdCQUFULENBQTBCLFdBQTFCLENBQXhCOztBQUdBLElBQUksZ0JBQWdCLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBcEI7QUFDQSxJQUFJLGFBQWEsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUFqQjtBQUNBLElBQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCO0FBQ0EsSUFBSSxhQUFhLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBakI7QUFDQSxJQUFJLGNBQWMsU0FBUyxhQUFULENBQXVCLDJCQUF2QixDQUFsQjtBQUNBLElBQUksZ0JBQWdCLFNBQVMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBcEI7QUFD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ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJjb25zb2xlLmxvZygnTWFkZSB3aXRoIGxvdmUgYW5kIGZ1bGwgQ29kZSEgYnkgQEVtVHYnKTtcclxuXHJcbmxldCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQm94Jyk7XHJcblxyXG5sZXQgcGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2F2YXRhciA+IC5waWN0dXJlJyk7XHJcbmxldCBlbXBsb3llZV9jYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxubGV0IGVtcGxveWVlX3BpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGljdHVyZScpO1xyXG5sZXQgZW1wbG95ZWVfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYW1lJyk7XHJcbmxldCBlbXBsb3llZV9lbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbWFpbCcpO1xyXG5sZXQgZW1wbG95ZWVfY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXR5Jyk7XHJcblxyXG5sZXQgZW1wbG95ZWVfcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvbmUnKTtcclxubGV0IGVtcGxveWVlX2FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcycpO1xyXG5sZXQgZW1wbG95ZWVfYmlydGhkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmlydGhkYXknKTtcclxuXHJcblxyXG5sZXQgbW9kYWxfcGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdmF0YXIgaW1nJyk7XHJcbmxldCBtb2RhbF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLm5hbWUnKTtcclxubGV0IG1vZGFsX2VtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLmVtYWlsJyk7XHJcbmxldCBtb2RhbF9jaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLmNpdHknKTtcclxubGV0IG1vZGFsX3Bob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGFfZXh0ZW5kIC5waG9uZScpO1xyXG5sZXQgbW9kYWxfYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhX2V4dGVuZCAuYWRkcmVzcycpO1xyXG5sZXQgbW9kYWxfYmlydGhkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YV9leHRlbmQgLmJpcnRoZGF5Jyk7XHJcbmxldCBnZXRfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XHJcblxyXG5cclxubGV0IGFycm93TGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd0xlZnQnKTtcclxubGV0IGFycm93UmlndGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dSaWd0aCcpO1xyXG5cclxuXHJcbi8vU2hvdyBNb2RhbCBXaW5kb3dcclxuZnVuY3Rpb24gZ2V0Q2FyZCgpIHtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVtcGxveWVlX2NhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBlbXBsb3llZV9jYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xyXG4gICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGEgLm5hbWUnKSk7XHJcbiAgICAgICAgICAgIHJlcGxhY2VEYXRhKHRoaXMpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmdldENhcmQoKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gICAgZ2V0X292ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGdldF9vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VEYXRhKGUpIHtcclxuXHJcbiAgICAvLyBsZXQgZ2V0X25vZGUgPSBlLnRhcmdldC5ub2RlTmFtZTtcclxuICAgIGxldCBnZXRfcGFyZW50ID0gZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIC8vIGdldF9wYXJlbnQuc3R5bGUuYm9yZGVyID0gXCJzb2xpZFwiO1xyXG5cclxuICAgIC8vQ3VycmVudCBWYWx1ZXNcclxuICAgIGxldCBjdXJyZW50X2F2YXRhciA9IGUucXVlcnlTZWxlY3RvcignLmNhcmRfYXZhdGFyIGltZycpO1xyXG4gICAgbGV0IGN1cnJlbnRfbmFtZSA9IGdldF9wYXJlbnQucXVlcnlTZWxlY3RvcignLmNhcmRfZGF0YSAubmFtZScpO1xyXG4gICAgbGV0IGN1cnJlbnRfZW1haWwgPSBnZXRfcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGEgLmVtYWlsJyk7XHJcbiAgICBsZXQgY3VycmVudF9jaXR5ID0gZ2V0X3BhcmVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9kYXRhIC5jaXR5Jyk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRfcGhvbmUgPSBnZXRfcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGFfZXh0ZW5kIC5waG9uZScpO1xyXG4gICAgbGV0IGN1cnJlbnRfYWRkcmVzcyA9IGdldF9wYXJlbnQucXVlcnlTZWxlY3RvcignLmNhcmRfZGF0YV9leHRlbmQgLmFkZHJlc3MnKTtcclxuICAgIGxldCBjdXJyZW50X2JpcnRoZGF5ID0gZ2V0X3BhcmVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9kYXRhX2V4dGVuZCAuYmlydGhkYXknKTtcclxuXHJcbiAgICAvL01vZGFsIFZhbHVlc1xyXG4gICAgbW9kYWxfcGljdHVyZS5zcmMgPSBjdXJyZW50X2F2YXRhci5zcmM7XHJcbiAgICBtb2RhbF9uYW1lLnRleHRDb250ZW50ID0gY3VycmVudF9uYW1lLnRleHRDb250ZW50O1xyXG4gICAgbW9kYWxfZW1haWwudGV4dENvbnRlbnQgPSBjdXJyZW50X2VtYWlsLnRleHRDb250ZW50O1xyXG4gICAgbW9kYWxfY2l0eS50ZXh0Q29udGVudCA9IGN1cnJlbnRfY2l0eS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBtb2RhbF9waG9uZS50ZXh0Q29udGVudCA9IGN1cnJlbnRfcGhvbmUudGV4dENvbnRlbnQ7XHJcbiAgICBtb2RhbF9hZGRyZXNzLnRleHRDb250ZW50ID0gY3VycmVudF9hZGRyZXNzLnRleHRDb250ZW50O1xyXG4gICAgbW9kYWxfYmlydGhkYXkudGV4dENvbnRlbnQgPSBjdXJyZW50X2JpcnRoZGF5LnRleHRDb250ZW50O1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuLy9DbG9zZSBNb2RhbCBXaW5kb3dcclxuXHJcbmlmICh0eXBlb2Ygb3ZlcmxheSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICBsZXQgbW9kYWxfY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKTtcclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcclxuXHJcbiAgICAvLyB0aGUgdmFyaWFibGUgaXMgZGVmaW5lZFxyXG5cclxuW21vZGFsX2Nsb3NlXS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuICAgICAgICBjbG9zZU1vZGFsKG92ZXJsYXkpO1xyXG4gICAgfSkpXHJcblxyXG4gICAgLy8gd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgLy8gaWYgKGV2ZW50LnRhcmdldCA9PSBvdmVybGF5KSB7XHJcbiAgICAvLyAgICAgLy8gbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgLy8gICAgIGNsb3NlTW9kYWwoKTtcclxuICAgIC8vICB9XHJcbiAgICAvLyB9XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG4gICAgLy8gbW9kYWxfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcbiAgICAvLyAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgLy8gfSkpXHJcblxyXG4gICAgLy8gb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG4gICAgLy8gICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuICAgIC8vICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAvLyB9KSkgICAgXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbChlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cclxufVxyXG5cclxuJC5hamF4KHtcclxuICAgIHVybDogJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvP25hdD1hdSZyZXN1bHRzPTEyJyxcclxuICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgbGV0IGRhdGFVc2VyID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFVc2VyWzBdLm5hbWUuZmlyc3QpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbXBsb3llZV9uYW1lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVtcGxveWVlX25hbWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgZW1wbG95ZWVfcGljdHVyZVtpXS5zcmMgPSBkYXRhVXNlcltpXS5waWN0dXJlLmxhcmdlO1xyXG4gICAgICAgICAgICBlbXBsb3llZV9waWN0dXJlW2ldLmFsdCA9IGRhdGFVc2VyW2ldLm5hbWUuZmlyc3QgKyAnICcgKyBkYXRhVXNlcltpXS5uYW1lLmxhc3Q7XHJcblxyXG4gICAgICAgICAgICBlbXBsb3llZV9uYW1lW2ldLnRleHRDb250ZW50ID0gZGF0YVVzZXJbaV0ubmFtZS5maXJzdCArICcgJyArIGRhdGFVc2VyW2ldLm5hbWUubGFzdDtcclxuICAgICAgICAgICAgZW1wbG95ZWVfZW1haWxbaV0udGV4dENvbnRlbnQgPSBkYXRhVXNlcltpXS5lbWFpbDtcclxuICAgICAgICAgICAgZW1wbG95ZWVfY2l0eVtpXS50ZXh0Q29udGVudCA9IGRhdGFVc2VyW2ldLmxvY2F0aW9uLmNpdHk7XHJcblxyXG4gICAgICAgICAgICBlbXBsb3llZV9waG9uZVtpXS50ZXh0Q29udGVudCA9IGRhdGFVc2VyW2ldLnBob25lO1xyXG4gICAgICAgICAgICBlbXBsb3llZV9hZGRyZXNzW2ldLnRleHRDb250ZW50ID0gZGF0YVVzZXJbaV0ubG9jYXRpb24uc3RyZWV0ICsgJywgJyArIGRhdGFVc2VyW2ldLmxvY2F0aW9uLnN0YXRlICsgJywgJyArIGRhdGFVc2VyW2ldLmxvY2F0aW9uLnBvc3Rjb2RlO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IGRhdGFfYmlydGhkYXQgPSBcclxuICAgICAgICAgICAgZW1wbG95ZWVfYmlydGhkYXlbaV0udGV4dENvbnRlbnQgPSBkYXRhVXNlcltpXS5kb2IuZGF0ZS5zdWJzdHJpbmcoMCwgMTApLnJlcGxhY2UoLy0vZywgJy8nKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcblxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyksIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBnZXRfdmFsdWUgPSBzZWFyY2hCb3gudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBsZXQgZ2V0X2NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdob2xhJyk7XHJcbiAgICAgICAgbGV0IHZhbF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hbWUnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnZXRfY2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRfY2FyZFtpXS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9kYXRhIC5uYW1lJykudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAvLyBnZXRDYXJkKGdldF9jYXJkW2ldLCBhYmxlQ2FyZCgpLCBoaWRlQ2FyZCgpLCBnZXRfdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdldF9jYXJkW2ldLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGEgLm5hbWUnKS50ZXh0Q29udGVudC5pbmRleE9mKGdldF92YWx1ZSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWJsZUNhcmQoZ2V0X2NhcmRbaV0pO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0X2NhcmRbaV0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWFibGUnKTtcclxuICAgICAgICAgICAgICAgIC8vIGdldF9jYXJkW2ldLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC1oaWRlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGlkZUNhcmQoZ2V0X2NhcmRbaV0pO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0X2NhcmRbaV0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWhpZGUnKTtcclxuICAgICAgICAgICAgICAgIC8vIGdldF9jYXJkW2ldLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1hYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSkpXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhYmxlQ2FyZChpdGVtKSB7XHJcbiAgICBpdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1hYmxlJyk7XHJcbiAgICBpdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC1oaWRlJyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoaWRlQ2FyZChpdGVtKSB7XHJcbiAgICBpdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1oaWRlJyk7XHJcbiAgICBpdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1hYmxlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN1cnJlbkRhdGEoKSB7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmV4dERhdGEoKSB7XHJcbiAgICBsZXQgZ2V0X2N1cnJlbnRfY2FyZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDYXJkJyk7XHJcbiAgICBsZXQgZ2V0X25leHRfY2FyZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRDYXJkJyk7XHJcblxyXG4gICAgLy8gTkVYVCBEQVRBXHJcbiAgICBsZXQgbmV4dF9waWN0dXJlID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5waWN0dXJlJykuc3JjO1xyXG4gICAgbGV0IG5leHRfbmFtZSA9IGdldF9uZXh0X2NhcmRJZC5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgbGV0IG5leHRfZW1haWwgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLmVtYWlsJykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgbmV4dF9jaXR5ID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgbmV4dF9waG9uZSA9IGdldF9uZXh0X2NhcmRJZC5xdWVyeVNlbGVjdG9yKCcucGhvbmUnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBuZXh0X2FkZHJlc3MgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBuZXh0X2JpcnRoZGF5ID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5iaXJ0aGRheScpLnRleHRDb250ZW50O1xyXG5cclxuICAgIGxldCBtb2RhbF9jdXJfcGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdmF0YXIgaW1nJyk7XHJcbiAgICBsZXQgbW9kYWxfY3VyX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YSAubmFtZScpO1xyXG4gICAgbGV0IG1vZGFsX2N1cl9lbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhIC5lbWFpbCcpO1xyXG4gICAgbGV0IG1vZGFsX2N1cl9jaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLmNpdHknKTtcclxuICAgIGxldCBtb2RhbF9jdXJfcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YV9leHRlbmQgLnBob25lJyk7XHJcbiAgICBsZXQgbW9kYWxfY3VyX2FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YV9leHRlbmQgLmFkZHJlc3MnKTtcclxuICAgIGxldCBtb2RhbF9jdXJfYmlydGhkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YV9leHRlbmQgLmJpcnRoZGF5Jyk7XHJcblxyXG4gICAgbW9kYWxfY3VyX3BpY3R1cmUuc3JjID0gbmV4dF9waWN0dXJlO1xyXG4gICAgbW9kYWxfY3VyX25hbWUudGV4dENvbnRlbnQgPSBuZXh0X25hbWU7XHJcbiAgICBtb2RhbF9jdXJfZW1haWwudGV4dENvbnRlbnQgPSBuZXh0X2VtYWlsO1xyXG4gICAgbW9kYWxfY3VyX2NpdHkudGV4dENvbnRlbnQgPSBuZXh0X2NpdHk7XHJcblxyXG4gICAgbW9kYWxfY3VyX3Bob25lLnRleHRDb250ZW50ID0gbmV4dF9waG9uZTtcclxuICAgIG1vZGFsX2N1cl9hZGRyZXNzLnRleHRDb250ZW50ID0gbmV4dF9hZGRyZXNzO1xyXG4gICAgbW9kYWxfY3VyX2JpcnRoZGF5LnRleHRDb250ZW50ID0gbmV4dF9iaXJ0aGRheTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJldkRhdGEoKSB7XHJcbiAgICBsZXQgZ2V0X2N1cnJlbnRfY2FyZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDYXJkJyk7XHJcbiAgICBsZXQgZ2V0X25leHRfY2FyZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZDYXJkJyk7XHJcblxyXG4gICAgLy8gTkVYVCBEQVRBXHJcbiAgICBsZXQgbmV4dF9waWN0dXJlID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5waWN0dXJlJykuc3JjO1xyXG4gICAgbGV0IG5leHRfbmFtZSA9IGdldF9uZXh0X2NhcmRJZC5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgbGV0IG5leHRfZW1haWwgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLmVtYWlsJykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgbmV4dF9jaXR5ID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgbmV4dF9waG9uZSA9IGdldF9uZXh0X2NhcmRJZC5xdWVyeVNlbGVjdG9yKCcucGhvbmUnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBuZXh0X2FkZHJlc3MgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBuZXh0X2JpcnRoZGF5ID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5iaXJ0aGRheScpLnRleHRDb250ZW50O1xyXG5cclxuICAgIC8vQ1VSUkVOVCBEQVRBXHJcbiAgICBsZXQgbW9kYWxfY3VyX3BpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXZhdGFyIGltZycpO1xyXG4gICAgbGV0IG1vZGFsX2N1cl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLm5hbWUnKTtcclxuICAgIGxldCBtb2RhbF9jdXJfZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YSAuZW1haWwnKTtcclxuICAgIGxldCBtb2RhbF9jdXJfY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhIC5jaXR5Jyk7XHJcbiAgICBsZXQgbW9kYWxfY3VyX3Bob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGFfZXh0ZW5kIC5waG9uZScpO1xyXG4gICAgbGV0IG1vZGFsX2N1cl9hZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGFfZXh0ZW5kIC5hZGRyZXNzJyk7XHJcbiAgICBsZXQgbW9kYWxfY3VyX2JpcnRoZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGFfZXh0ZW5kIC5iaXJ0aGRheScpO1xyXG5cclxuICAgIG1vZGFsX2N1cl9waWN0dXJlLnNyYyA9IG5leHRfcGljdHVyZTtcclxuICAgIG1vZGFsX2N1cl9uYW1lLnRleHRDb250ZW50ID0gbmV4dF9uYW1lO1xyXG4gICAgbW9kYWxfY3VyX2VtYWlsLnRleHRDb250ZW50ID0gbmV4dF9lbWFpbDtcclxuICAgIG1vZGFsX2N1cl9jaXR5LnRleHRDb250ZW50ID0gbmV4dF9jaXR5O1xyXG5cclxuICAgIG1vZGFsX2N1cl9waG9uZS50ZXh0Q29udGVudCA9IG5leHRfcGhvbmU7XHJcbiAgICBtb2RhbF9jdXJfYWRkcmVzcy50ZXh0Q29udGVudCA9IG5leHRfYWRkcmVzcztcclxuICAgIG1vZGFsX2N1cl9iaXJ0aGRheS50ZXh0Q29udGVudCA9IG5leHRfYmlydGhkYXk7XHJcbn1cclxuXHJcblxyXG4vL0NoYW5ndWUgU2xpZGVyXHJcblxyXG5sZXQgZ2V0X2Fycm93X2xlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dMZWZ0Jyk7XHJcbmxldCBnZXRfYXJyb3dfcmlndGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dSaWd0aCcpO1xyXG5cclxuZ2V0X2Fycm93X3JpZ3RoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKSwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGxldCBnZXRfY2FyZF9hcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XHJcbiAgICAgICAgbGV0IHZhbF9uYW1lX2Fycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hbWUnKTtcclxuICAgICAgICBsZXQgY3VycmVudF9tb2RhbF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLm5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICBsZXQgY3VycmVudF9jYXJkID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hlY2tIaWRlQXJyb3dzKGFycm93TGVmdCwgJ3Zpc2libGUnLCAxKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdldF9jYXJkX2Fycm93Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2V0X2NhcmRfYXJyb3dbaV0ucXVlcnlTZWxlY3RvcignLmNhcmRfZGF0YSAubmFtZScpLnRleHRDb250ZW50LmluZGV4T2YoY3VycmVudF9tb2RhbF9uYW1lKSA+PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfY2FyZCA9IGdldF9jYXJkX2Fycm93W2ldLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3VycmVudENhcmQnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRfY2FyZC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2NhcmQubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dENhcmQnKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBmaXJzdCBhcnJvd1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrQXJyb3dMZWZ0ID0gY3VycmVudF9jYXJkLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja0xhc3R0QXJyb3cgPSBjaGVja0Fycm93TGVmdC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTGFzdHRBcnJvdyA9PT0gbnVsbCB8fCBjaGVja0xhc3R0QXJyb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0X2Fycm93X3JpZ3RoLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBnZXRfYXJyb3dfcmlndGguc3R5bGUuekluZGV4ID0gLTk5OTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0hpZGVBcnJvd3MoZ2V0X2Fycm93X3JpZ3RoLCAnaGlkZGVuJywgLTk5OSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRfY2FyZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2Q2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfY2FyZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAncHJldkNhcmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIEVuZCBmb3JcclxuICAgIH0pO1xyXG4gICAgbmV4dERhdGEoKTtcclxufSkpO1xyXG5cclxuZ2V0X2Fycm93X2xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgbGV0IGdldF9jYXJkX2Fycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxuICAgICAgICBsZXQgdmFsX25hbWVfYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmFtZScpO1xyXG4gICAgICAgIGxldCBjdXJyZW50X21vZGFsX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YSAubmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgIGxldCBjdXJyZW50X2NhcmQgPSAnJztcclxuXHJcbiAgICAgICAgY2hlY2tIaWRlQXJyb3dzKGFycm93UmlndGgsICd2aXNpYmxlJywgMSk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2V0X2NhcmRfYXJyb3cubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChnZXRfY2FyZF9hcnJvd1tpXS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9kYXRhIC5uYW1lJykudGV4dENvbnRlbnQuaW5kZXhPZihjdXJyZW50X21vZGFsX25hbWUpID49IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9jYXJkID0gZ2V0X2NhcmRfYXJyb3dbaV0ucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X2NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdjdXJyZW50Q2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRfY2FyZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2Q2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGZpcnN0IGFycm93XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tBcnJvd0xlZnQgPSBjdXJyZW50X2NhcmQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja0ZpcnN0QXJyb3cgPSBjaGVja0Fycm93TGVmdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0ZpcnN0QXJyb3cgPT09IG51bGwgfHwgY2hlY2tGaXJzdEFycm93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGdldF9hcnJvd19sZWZ0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBnZXRfYXJyb3dfbGVmdC5zdHlsZS56SW5kZXggPSAtOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrSGlkZUFycm93cyhnZXRfYXJyb3dfbGVmdCwgJ2hpZGRlbicsIC05OTkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGdldF9hcnJvd19sZWZ0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJpbGUnO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGdldF9hcnJvd19sZWZ0LnN0eWxlLnpJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50X2NhcmQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHRDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLm5leHRFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ25leHRDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBFbmQgZm9yXHJcbiAgICB9KTtcclxuICAgIHByZXZEYXRhKCk7XHJcbn0pKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0hpZGVBcnJvd3MgKGVsZW1lbnQsIGhpZGRlbiwgekluZGV4KSB7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gaGlkZGVuO1xyXG4gICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSB6SW5kZXg7ICAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRmlyc3RMYXN0Q2FyZHMgKCkge1xyXG5cclxuICAgIGxldCBnZXRBbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbXBsb3llZS1jYXJkLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnZXRBbGxDYXJkcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGZpcnN0UG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGFzdFBvc2l0aW9uID0gZ2V0QWxsQ2FyZHMubGVuZ3RoIC0xO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZpcnN0Q2FyZCA9IGdldEFsbENhcmRzWzBdO1xyXG4gICAgICAgICAgICBsZXQgbGFzdENhcmQgPSBnZXRBbGxDYXJkc1tsYXN0UG9zaXRpb25dO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFycm93TGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd0xlZnQnKTtcclxuICAgICAgICAgICAgbGV0IGFycm93UmlndGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dSaWd0aCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBbZmlyc3RDYXJkLCBsYXN0Q2FyZF0uZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3R5bGUuYm9yZGVyID0gXCJzb2xpZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrSGlkZUFycm93cyhlbGVtZW50LCAnaGlkZGVuJywgLTk5OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMgPT0gZmlyc3RDYXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrSGlkZUFycm93cyhhcnJvd0xlZnQsICdoaWRkZW4nLCAtOTk5KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMgPT0gbGFzdENhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tIaWRlQXJyb3dzKGFycm93UmlndGgsICdoaWRkZW4nLCAtOTk5KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBbYXJyb3dMZWZ0LCBhcnJvd1JpZ3RoXS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGVja0hpZGVBcnJvd3MoZWxlbWVudCwgJ2hpZGRlbicsIC05OTkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSkpICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxufVxyXG5cclxuY2hlY2tGaXJzdExhc3RDYXJkcygpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQXR0cigpIHtcclxuXHJcbiAgICBsZXQgYnV0dG9uX2Nsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJyk7XHJcbiAgICBsZXQgY2xvc2Vfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XHJcblxyXG4gICAgW2J1dHRvbl9jbG9zZV0uZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuICAgICAgICAgICAgbGV0IGNsZWFyX2N1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENhcmQnKTtcclxuICAgICAgICAgICAgbGV0IGNsZWFyX25leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dENhcmQnKTtcclxuICAgICAgICAgICAgbGV0IGNsZWFyX3ByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldkNhcmQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjbGVhcl9jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhcl9jdXJyZW50LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2xlYXJfbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJfbmV4dC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xlYXJfcHJldikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJfcHJldi5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSkpXHJcbiAgICB9KVxyXG5cclxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBsZXQgYXJyb3dMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93TGVmdCcpO1xyXG4gICAgICAgIGxldCBhcnJvd1JpZ3RoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93UmlndGgnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGNsb3NlX292ZXJsYXkpIHtcclxuICAgICAgICAvLyBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGxldCBjbGVhcl9jdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDYXJkJyk7XHJcbiAgICAgICAgICAgIGxldCBjbGVhcl9uZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRDYXJkJyk7XHJcbiAgICAgICAgICAgIGxldCBjbGVhcl9wcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZDYXJkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xlYXJfY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJfY3VycmVudC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNsZWFyX25leHQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyX25leHQucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGNsZWFyX3ByZXYpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyX3ByZXYucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgW2Fycm93TGVmdCwgYXJyb3dSaWd0aF0uZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIGNoZWNrSGlkZUFycm93cyhlbGVtZW50LCAndmlzaWJsZScsIDEpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2xvc2VNb2RhbChjbG9zZV9vdmVybGF5KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGVhckF0dHIoKTsiXX0=
