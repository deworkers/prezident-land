/* user scripts */

$(document).ready(function() {
    

    $('.landing-block__video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false
    });

    $('.kanal-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false
    });

    $('.landing-descr-one h2').on('click', function() {
        $(this).next().slideToggle();
    });

    $('input[name="phone"]').mask("+7(999) 999-99-99",{placeholder:"_"});

    $('#landing').validate({ 
        rules:{
            name:{
                required: true,
            },
            phone:{
                required: true,
            }
       },

       messages:{
            name:{
                required: "Введите ваше имя",
            },
            phone:{
                required: "Введите ваш телефон",
            }
       },
       submitHandler: function() {

            $('#landing').hide();
            $('.after-submit').fadeIn();
        }
    });

    $("#landing").submit(function() { //устанавливаем событие отправки для формы с id=form
        var formData = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "/template/send.php", //путь до php фаила отправителя
            data: formData
        });
    });
});