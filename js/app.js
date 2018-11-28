(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

console.log('Made with love and full Code! by @EmTv');

var searchBox = document.getElementById('searchBox');

var picture = document.querySelector('.card_avatar > .picture');
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

//Show Modal Window
function getCard() {

    for (var i = 0; i < employee_picture.length; i++) {
        employee_picture[i].addEventListener('click', function (e) {
            /* Act on the event */
            openModal();
            replaceData(e);
        });
    }
}

getCard();

function openModal() {
    get_overlay.classList.add("active");
    get_overlay.classList.remove("hide");
};

function replaceData(e) {

    var get_node = e.target.nodeName;
    var get_parent = e.target.parentNode.parentNode;

    //Current Values
    var current_avatar = e.target.src;
    var current_name = get_parent.querySelector('.card_data .name');
    var current_email = get_parent.querySelector('.card_data .email');
    var current_city = get_parent.querySelector('.card_data .city');

    var current_phone = get_parent.querySelector('.card_data_extend .phone');
    var current_address = get_parent.querySelector('.card_data_extend .address');
    var current_birthday = get_parent.querySelector('.card_data_extend .birthday');

    //Modal Values
    modal_picture.src = current_avatar;
    modal_name.textContent = current_name.textContent;
    modal_email.textContent = current_email.textContent;
    modal_city.textContent = current_city.textContent;

    modal_phone.textContent = current_phone.textContent;
    modal_address.textContent = current_address.textContent;
    modal_birthday.textContent = current_birthday.textContent;
};

//Close Modal Window

if (typeof overlay !== 'undefined') {
    var closeModal = function closeModal() {
        _overlay.classList.add("hide");
        _overlay.classList.remove("active");
    };

    var modal_close = document.getElementById('close');
    var _overlay = document.querySelector('#overlay');

    // the variable is defined
    modal_close.addEventListener('click', function (event) {
        /* Act on the event */
        closeModal();
    });
}

$.ajax({
    url: 'https://randomuser.me/api/?nat=au&results=12',
    dataType: 'json',
    success: function success(data) {
        // console.log(data);
        var dataUser = data.results;
        console.log(dataUser[0].name.first);

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

        for (var i = 0; i < get_card_arrow.length; i++) {

            if (get_card_arrow[i].querySelector('.card_data .name').textContent.indexOf(current_modal_name) >= 0) {

                var _current_card = get_card_arrow[i].parentNode;

                _current_card.setAttribute('id', 'currentCard');

                if (_current_card.nextElementSibling) {
                    _current_card.nextElementSibling.setAttribute('id', 'nextCard');
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

        for (var i = 0; i < get_card_arrow.length; i++) {

            if (get_card_arrow[i].querySelector('.card_data .name').textContent.indexOf(current_modal_name) >= 0) {

                var _current_card2 = get_card_arrow[i].parentNode;

                _current_card2.setAttribute('id', 'currentCard');

                if (_current_card2.previousElementSibling) {
                    _current_card2.previousElementSibling.setAttribute('id', 'prevCard');
                }

                if (_current_card2.nextElementSibling) {
                    _current_card2.nextElementSibling.setAttribute('id', 'nextCard');
                    _current_card2.nextElementSibling.removeAttribute('id', 'nextCard');
                }
            }
        } // End for
    });
    prevData();
});

function clearAttr() {

    var button_close = document.getElementById('close');

    button_close.addEventListener('click', function (event) {
        /* Act on the event */
        var clear_current = document.getElementById('currentCard');
        var clear_next = document.getElementById('nextCard');
        var clear_prev = document.getElementById('prevCard');

        clear_current.removeAttribute('id');

        if (clear_next) {
            clear_next.removeAttribute('id');
        };

        if (clear_prev) {
            clear_prev.removeAttribute('id');
        };
    });
}

clearAttr();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy91bml0LTA4LWVtcGxveWVlLWRpcmVjdG9yeS9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsUUFBUSxHQUFSLENBQVksd0NBQVo7O0FBRUEsSUFBSSxZQUFZLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFoQjs7QUFFQSxJQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLHlCQUF2QixDQUFkO0FBQ0EsSUFBSSxtQkFBbUIsU0FBUyxnQkFBVCxDQUEwQixVQUExQixDQUF2QjtBQUNBLElBQUksZ0JBQWdCLFNBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBcEI7QUFDQSxJQUFJLGlCQUFpQixTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQXJCO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxnQkFBVCxDQUEwQixPQUExQixDQUFwQjs7QUFFQSxJQUFJLGlCQUFpQixTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQXJCO0FBQ0EsSUFBSSxtQkFBbUIsU0FBUyxnQkFBVCxDQUEwQixVQUExQixDQUF2QjtBQUNBLElBQUksb0JBQW9CLFNBQVMsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBeEI7O0FBR0EsSUFBSSxnQkFBZ0IsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUFwQjtBQUNBLElBQUksYUFBYSxTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWpCO0FBQ0EsSUFBSSxjQUFjLFNBQVMsYUFBVCxDQUF1QixvQkFBdkIsQ0FBbEI7QUFDQSxJQUFJLGFBQWEsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUFqQjtBQUNBLElBQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWxCO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxhQUFULENBQXVCLDZCQUF2QixDQUFwQjtBQUNBLElBQUksaUJBQWlCLFNBQVMsYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBckI7QUFD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ZSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbkI7O0FBRUEsaUJBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBd0MsVUFBUyxLQUFULEVBQWdCO0FBQ3BEO0FBQ0EsWUFBSSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsWUFBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBLFlBQUksYUFBYSxTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7O0FBRUEsc0JBQWMsZUFBZCxDQUE4QixJQUE5Qjs7QUFFQSxZQUFJLFVBQUosRUFBZ0I7QUFDWix1QkFBVyxlQUFYLENBQTJCLElBQTNCO0FBQ0g7O0FBRUQsWUFBSSxVQUFKLEVBQWdCO0FBQ1osdUJBQVcsZUFBWCxDQUEyQixJQUEzQjtBQUNIO0FBRUosS0FoQkQ7QUFpQkg7O0FBRUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSBhbmQgZnVsbCBDb2RlISBieSBARW1UdicpO1xyXG5cclxubGV0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCb3gnKTtcclxuXHJcbmxldCBwaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfYXZhdGFyID4gLnBpY3R1cmUnKTtcclxubGV0IGVtcGxveWVlX3BpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGljdHVyZScpO1xyXG5sZXQgZW1wbG95ZWVfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYW1lJyk7XHJcbmxldCBlbXBsb3llZV9lbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbWFpbCcpO1xyXG5sZXQgZW1wbG95ZWVfY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXR5Jyk7XHJcblxyXG5sZXQgZW1wbG95ZWVfcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvbmUnKTtcclxubGV0IGVtcGxveWVlX2FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcycpO1xyXG5sZXQgZW1wbG95ZWVfYmlydGhkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmlydGhkYXknKTtcclxuXHJcblxyXG5sZXQgbW9kYWxfcGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdmF0YXIgaW1nJyk7XHJcbmxldCBtb2RhbF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLm5hbWUnKTtcclxubGV0IG1vZGFsX2VtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLmVtYWlsJyk7XHJcbmxldCBtb2RhbF9jaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLmNpdHknKTtcclxubGV0IG1vZGFsX3Bob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGFfZXh0ZW5kIC5waG9uZScpO1xyXG5sZXQgbW9kYWxfYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhX2V4dGVuZCAuYWRkcmVzcycpO1xyXG5sZXQgbW9kYWxfYmlydGhkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YV9leHRlbmQgLmJpcnRoZGF5Jyk7XHJcbmxldCBnZXRfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XHJcblxyXG5cclxuXHJcbi8vU2hvdyBNb2RhbCBXaW5kb3dcclxuZnVuY3Rpb24gZ2V0Q2FyZCgpIHtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVtcGxveWVlX3BpY3R1cmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBlbXBsb3llZV9waWN0dXJlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xyXG4gICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgcmVwbGFjZURhdGEoZSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZ2V0Q2FyZCgpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICBnZXRfb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZ2V0X292ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZURhdGEoZSkge1xyXG5cclxuICAgIGxldCBnZXRfbm9kZSA9IGUudGFyZ2V0Lm5vZGVOYW1lO1xyXG4gICAgbGV0IGdldF9wYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgLy9DdXJyZW50IFZhbHVlc1xyXG4gICAgbGV0IGN1cnJlbnRfYXZhdGFyID0gZS50YXJnZXQuc3JjO1xyXG4gICAgbGV0IGN1cnJlbnRfbmFtZSA9IGdldF9wYXJlbnQucXVlcnlTZWxlY3RvcignLmNhcmRfZGF0YSAubmFtZScpO1xyXG4gICAgbGV0IGN1cnJlbnRfZW1haWwgPSBnZXRfcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGEgLmVtYWlsJyk7XHJcbiAgICBsZXQgY3VycmVudF9jaXR5ID0gZ2V0X3BhcmVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9kYXRhIC5jaXR5Jyk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRfcGhvbmUgPSBnZXRfcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGFfZXh0ZW5kIC5waG9uZScpO1xyXG4gICAgbGV0IGN1cnJlbnRfYWRkcmVzcyA9IGdldF9wYXJlbnQucXVlcnlTZWxlY3RvcignLmNhcmRfZGF0YV9leHRlbmQgLmFkZHJlc3MnKTtcclxuICAgIGxldCBjdXJyZW50X2JpcnRoZGF5ID0gZ2V0X3BhcmVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9kYXRhX2V4dGVuZCAuYmlydGhkYXknKTtcclxuXHJcbiAgICAvL01vZGFsIFZhbHVlc1xyXG4gICAgbW9kYWxfcGljdHVyZS5zcmMgPSBjdXJyZW50X2F2YXRhcjtcclxuICAgIG1vZGFsX25hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50X25hbWUudGV4dENvbnRlbnQ7XHJcbiAgICBtb2RhbF9lbWFpbC50ZXh0Q29udGVudCA9IGN1cnJlbnRfZW1haWwudGV4dENvbnRlbnQ7XHJcbiAgICBtb2RhbF9jaXR5LnRleHRDb250ZW50ID0gY3VycmVudF9jaXR5LnRleHRDb250ZW50O1xyXG5cclxuICAgIG1vZGFsX3Bob25lLnRleHRDb250ZW50ID0gY3VycmVudF9waG9uZS50ZXh0Q29udGVudDtcclxuICAgIG1vZGFsX2FkZHJlc3MudGV4dENvbnRlbnQgPSBjdXJyZW50X2FkZHJlc3MudGV4dENvbnRlbnQ7XHJcbiAgICBtb2RhbF9iaXJ0aGRheS50ZXh0Q29udGVudCA9IGN1cnJlbnRfYmlydGhkYXkudGV4dENvbnRlbnQ7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG4vL0Nsb3NlIE1vZGFsIFdpbmRvd1xyXG5cclxuaWYgKHR5cGVvZiBvdmVybGF5ICE9PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgIGxldCBtb2RhbF9jbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpO1xyXG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpO1xyXG5cclxuICAgIC8vIHRoZSB2YXJpYWJsZSBpcyBkZWZpbmVkXHJcbiAgICBtb2RhbF9jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICB9KSlcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4kLmFqYXgoe1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8/bmF0PWF1JnJlc3VsdHM9MTInLFxyXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBsZXQgZGF0YVVzZXIgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVVzZXJbMF0ubmFtZS5maXJzdCk7XHJcblxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVtcGxveWVlX25hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZW1wbG95ZWVfbmFtZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBlbXBsb3llZV9waWN0dXJlW2ldLnNyYyA9IGRhdGFVc2VyW2ldLnBpY3R1cmUubGFyZ2U7XHJcbiAgICAgICAgICAgIGVtcGxveWVlX3BpY3R1cmVbaV0uYWx0ID0gZGF0YVVzZXJbaV0ubmFtZS5maXJzdCArICcgJyArIGRhdGFVc2VyW2ldLm5hbWUubGFzdDtcclxuXHJcbiAgICAgICAgICAgIGVtcGxveWVlX25hbWVbaV0udGV4dENvbnRlbnQgPSBkYXRhVXNlcltpXS5uYW1lLmZpcnN0ICsgJyAnICsgZGF0YVVzZXJbaV0ubmFtZS5sYXN0O1xyXG4gICAgICAgICAgICBlbXBsb3llZV9lbWFpbFtpXS50ZXh0Q29udGVudCA9IGRhdGFVc2VyW2ldLmVtYWlsO1xyXG4gICAgICAgICAgICBlbXBsb3llZV9jaXR5W2ldLnRleHRDb250ZW50ID0gZGF0YVVzZXJbaV0ubG9jYXRpb24uY2l0eTtcclxuXHJcbiAgICAgICAgICAgIGVtcGxveWVlX3Bob25lW2ldLnRleHRDb250ZW50ID0gZGF0YVVzZXJbaV0ucGhvbmU7XHJcbiAgICAgICAgICAgIGVtcGxveWVlX2FkZHJlc3NbaV0udGV4dENvbnRlbnQgPSBkYXRhVXNlcltpXS5sb2NhdGlvbi5zdHJlZXQgKyAnLCAnICsgZGF0YVVzZXJbaV0ubG9jYXRpb24uc3RhdGUgKyAnLCAnICsgZGF0YVVzZXJbaV0ubG9jYXRpb24ucG9zdGNvZGU7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgZGF0YV9iaXJ0aGRhdCA9IFxyXG4gICAgICAgICAgICBlbXBsb3llZV9iaXJ0aGRheVtpXS50ZXh0Q29udGVudCA9IGRhdGFVc2VyW2ldLmRvYi5kYXRlLnN1YnN0cmluZygwLCAxMCkucmVwbGFjZSgvLS9nLCAnLycpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGdldF92YWx1ZSA9IHNlYXJjaEJveC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBnZXRfY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hvbGEnKTtcclxuICAgICAgICBsZXQgdmFsX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmFtZScpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdldF9jYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdldF9jYXJkW2ldLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGEgLm5hbWUnKS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIC8vIGdldENhcmQoZ2V0X2NhcmRbaV0sIGFibGVDYXJkKCksIGhpZGVDYXJkKCksIGdldF92YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2V0X2NhcmRbaV0ucXVlcnlTZWxlY3RvcignLmNhcmRfZGF0YSAubmFtZScpLnRleHRDb250ZW50LmluZGV4T2YoZ2V0X3ZhbHVlKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhYmxlQ2FyZChnZXRfY2FyZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXRfY2FyZFtpXS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0X2NhcmRbaV0ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLWhpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlQ2FyZChnZXRfY2FyZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXRfY2FyZFtpXS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0X2NhcmRbaV0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWFibGUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KSlcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFibGVDYXJkKGl0ZW0pIHtcclxuICAgIGl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWFibGUnKTtcclxuICAgIGl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLWhpZGUnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVDYXJkKGl0ZW0pIHtcclxuICAgIGl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWhpZGUnKTtcclxuICAgIGl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWFibGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3VycmVuRGF0YSgpIHtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZXh0RGF0YSgpIHtcclxuICAgIGxldCBnZXRfY3VycmVudF9jYXJkSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENhcmQnKTtcclxuICAgIGxldCBnZXRfbmV4dF9jYXJkSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dENhcmQnKTtcclxuXHJcbiAgICAvLyBORVhUIERBVEFcclxuICAgIGxldCBuZXh0X3BpY3R1cmUgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLnBpY3R1cmUnKS5zcmM7XHJcbiAgICBsZXQgbmV4dF9uYW1lID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgbmV4dF9lbWFpbCA9IGdldF9uZXh0X2NhcmRJZC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBuZXh0X2NpdHkgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLmNpdHknKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBuZXh0X3Bob25lID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5waG9uZScpLnRleHRDb250ZW50O1xyXG4gICAgbGV0IG5leHRfYWRkcmVzcyA9IGdldF9uZXh0X2NhcmRJZC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcycpLnRleHRDb250ZW50O1xyXG4gICAgbGV0IG5leHRfYmlydGhkYXkgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLmJpcnRoZGF5JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgbGV0IG1vZGFsX2N1cl9waWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWF2YXRhciBpbWcnKTtcclxuICAgIGxldCBtb2RhbF9jdXJfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhIC5uYW1lJyk7XHJcbiAgICBsZXQgbW9kYWxfY3VyX2VtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLmVtYWlsJyk7XHJcbiAgICBsZXQgbW9kYWxfY3VyX2NpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YSAuY2l0eScpO1xyXG4gICAgbGV0IG1vZGFsX2N1cl9waG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhX2V4dGVuZCAucGhvbmUnKTtcclxuICAgIGxldCBtb2RhbF9jdXJfYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhX2V4dGVuZCAuYWRkcmVzcycpO1xyXG4gICAgbGV0IG1vZGFsX2N1cl9iaXJ0aGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhX2V4dGVuZCAuYmlydGhkYXknKTtcclxuXHJcbiAgICBtb2RhbF9jdXJfcGljdHVyZS5zcmMgPSBuZXh0X3BpY3R1cmU7XHJcbiAgICBtb2RhbF9jdXJfbmFtZS50ZXh0Q29udGVudCA9IG5leHRfbmFtZTtcclxuICAgIG1vZGFsX2N1cl9lbWFpbC50ZXh0Q29udGVudCA9IG5leHRfZW1haWw7XHJcbiAgICBtb2RhbF9jdXJfY2l0eS50ZXh0Q29udGVudCA9IG5leHRfY2l0eTtcclxuXHJcbiAgICBtb2RhbF9jdXJfcGhvbmUudGV4dENvbnRlbnQgPSBuZXh0X3Bob25lO1xyXG4gICAgbW9kYWxfY3VyX2FkZHJlc3MudGV4dENvbnRlbnQgPSBuZXh0X2FkZHJlc3M7XHJcbiAgICBtb2RhbF9jdXJfYmlydGhkYXkudGV4dENvbnRlbnQgPSBuZXh0X2JpcnRoZGF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmV2RGF0YSgpIHtcclxuICAgIGxldCBnZXRfY3VycmVudF9jYXJkSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENhcmQnKTtcclxuICAgIGxldCBnZXRfbmV4dF9jYXJkSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldkNhcmQnKTtcclxuXHJcbiAgICAvLyBORVhUIERBVEFcclxuICAgIGxldCBuZXh0X3BpY3R1cmUgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLnBpY3R1cmUnKS5zcmM7XHJcbiAgICBsZXQgbmV4dF9uYW1lID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgbmV4dF9lbWFpbCA9IGdldF9uZXh0X2NhcmRJZC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBuZXh0X2NpdHkgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLmNpdHknKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBuZXh0X3Bob25lID0gZ2V0X25leHRfY2FyZElkLnF1ZXJ5U2VsZWN0b3IoJy5waG9uZScpLnRleHRDb250ZW50O1xyXG4gICAgbGV0IG5leHRfYWRkcmVzcyA9IGdldF9uZXh0X2NhcmRJZC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcycpLnRleHRDb250ZW50O1xyXG4gICAgbGV0IG5leHRfYmlydGhkYXkgPSBnZXRfbmV4dF9jYXJkSWQucXVlcnlTZWxlY3RvcignLmJpcnRoZGF5JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgLy9DVVJSRU5UIERBVEFcclxuICAgIGxldCBtb2RhbF9jdXJfcGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdmF0YXIgaW1nJyk7XHJcbiAgICBsZXQgbW9kYWxfY3VyX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YSAubmFtZScpO1xyXG4gICAgbGV0IG1vZGFsX2N1cl9lbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRhIC5lbWFpbCcpO1xyXG4gICAgbGV0IG1vZGFsX2N1cl9jaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRhdGEgLmNpdHknKTtcclxuICAgIGxldCBtb2RhbF9jdXJfcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YV9leHRlbmQgLnBob25lJyk7XHJcbiAgICBsZXQgbW9kYWxfY3VyX2FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YV9leHRlbmQgLmFkZHJlc3MnKTtcclxuICAgIGxldCBtb2RhbF9jdXJfYmlydGhkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YV9leHRlbmQgLmJpcnRoZGF5Jyk7XHJcblxyXG4gICAgbW9kYWxfY3VyX3BpY3R1cmUuc3JjID0gbmV4dF9waWN0dXJlO1xyXG4gICAgbW9kYWxfY3VyX25hbWUudGV4dENvbnRlbnQgPSBuZXh0X25hbWU7XHJcbiAgICBtb2RhbF9jdXJfZW1haWwudGV4dENvbnRlbnQgPSBuZXh0X2VtYWlsO1xyXG4gICAgbW9kYWxfY3VyX2NpdHkudGV4dENvbnRlbnQgPSBuZXh0X2NpdHk7XHJcblxyXG4gICAgbW9kYWxfY3VyX3Bob25lLnRleHRDb250ZW50ID0gbmV4dF9waG9uZTtcclxuICAgIG1vZGFsX2N1cl9hZGRyZXNzLnRleHRDb250ZW50ID0gbmV4dF9hZGRyZXNzO1xyXG4gICAgbW9kYWxfY3VyX2JpcnRoZGF5LnRleHRDb250ZW50ID0gbmV4dF9iaXJ0aGRheTtcclxufVxyXG5cclxuXHJcbi8vQ2hhbmd1ZSBTbGlkZXJcclxuXHJcbmxldCBnZXRfYXJyb3dfbGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd0xlZnQnKTtcclxubGV0IGdldF9hcnJvd19yaWd0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd1JpZ3RoJyk7XHJcblxyXG5nZXRfYXJyb3dfcmlndGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgbGV0IGdldF9jYXJkX2Fycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxuICAgICAgICBsZXQgdmFsX25hbWVfYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmFtZScpO1xyXG4gICAgICAgIGxldCBjdXJyZW50X21vZGFsX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YSAubmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgIGxldCBjdXJyZW50X2NhcmQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnZXRfY2FyZF9hcnJvdy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGdldF9jYXJkX2Fycm93W2ldLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGEgLm5hbWUnKS50ZXh0Q29udGVudC5pbmRleE9mKGN1cnJlbnRfbW9kYWxfbmFtZSkgPj0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2NhcmQgPSBnZXRfY2FyZF9hcnJvd1tpXS5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnRDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50X2NhcmQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHRDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRfY2FyZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2Q2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfY2FyZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAncHJldkNhcmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIEVuZCBmb3JcclxuICAgIH0pO1xyXG4gICAgbmV4dERhdGEoKTtcclxufSkpO1xyXG5cclxuZ2V0X2Fycm93X2xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgbGV0IGdldF9jYXJkX2Fycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxuICAgICAgICBsZXQgdmFsX25hbWVfYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmFtZScpO1xyXG4gICAgICAgIGxldCBjdXJyZW50X21vZGFsX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0YSAubmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgIGxldCBjdXJyZW50X2NhcmQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnZXRfY2FyZF9hcnJvdy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGdldF9jYXJkX2Fycm93W2ldLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2RhdGEgLm5hbWUnKS50ZXh0Q29udGVudC5pbmRleE9mKGN1cnJlbnRfbW9kYWxfbmFtZSkgPj0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2NhcmQgPSBnZXRfY2FyZF9hcnJvd1tpXS5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnRDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50X2NhcmQucHJldmlvdXNFbGVtZW50U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfY2FyZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJldkNhcmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50X2NhcmQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHRDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9jYXJkLm5leHRFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ25leHRDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBFbmQgZm9yXHJcbiAgICB9KTtcclxuICAgIHByZXZEYXRhKCk7XHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyQXR0cigpIHtcclxuXHJcbiAgICBsZXQgYnV0dG9uX2Nsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJyk7XHJcblxyXG4gICAgYnV0dG9uX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xyXG4gICAgICAgIGxldCBjbGVhcl9jdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDYXJkJyk7XHJcbiAgICAgICAgbGV0IGNsZWFyX25leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dENhcmQnKTtcclxuICAgICAgICBsZXQgY2xlYXJfcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Q2FyZCcpO1xyXG5cclxuICAgICAgICBjbGVhcl9jdXJyZW50LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKGNsZWFyX25leHQpIHtcclxuICAgICAgICAgICAgY2xlYXJfbmV4dC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNsZWFyX3ByZXYpIHtcclxuICAgICAgICAgICAgY2xlYXJfcHJldi5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KSlcclxufVxyXG5cclxuY2xlYXJBdHRyKCk7Il19
