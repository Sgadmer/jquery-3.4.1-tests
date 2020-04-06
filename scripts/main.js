$(document).ready(function () {

    // СЕЛЕКТОРЫ 
    // $('h1').addClass('selected');

    // $('#top-header').addClass('selected');

    // $('.green').addClass('selected');
    // $('ul .green').addClass('selected');

    // $('h2 ~ p').addClass('selected'); ////(Все соседние элементы 'p' с 'h2' после него)
    // $('h2 + p').addClass('selected'); ////(Первый соседний элемент 'p' с 'h2' после него)

    // $('p:first').addClass('selected'); //// Первый 'p'
    // $('p:last').addClass('selected'); //// Последний 'p'
    // $('p:even').addClass('selected'); //// Четные 'p'
    // $('p:odd').addClass('selected'); //// Четные 'p'

    // $('h3:has(span)').addClass('selected'); ////(Блок 'h3' со 'span' внутри)
    // $('.block:parent').addClass('selected'); ////(Блок с классом '.block' непустой)
    // $('.block:empty').addClass('selected'); ////(Блок с классом '.block' пустой)

    // $('a[href="http://google.ru"]').addClass('selected');
    // $('a[href!="http://google.ru"]').addClass('selected');
    // $('a[href^="http"]').addClass('selected'); ////начинается с http
    // $('a[href$="ru"]').addClass('selected'); //// заканчивается на ru


    // //Рекомендуется начинать поиск тегов по ID : 
    // // $('#contacts span:.green')


    // Методы выбора элементов
    // $('.inner').parent().addClass('selected'); ////Найти родителя;
    // $('.inner').parents().addClass('selected'); ////Найти всех родителей (всплытие)
    // $('.block').children().addClass('selected'); //// Найти всех детей;
    // $('#second-list-item').closest('ul').addClass('selected'); Найти ближайщий элемент 'ul' к элементу 'second-list-item' (может вернуть сам себя)
    // $('.block').find('h4').addClass('selected'); /////Внутри ('.block') найти ('h4')
    // $('.block').prev().addClass('selected'); //// Предыдущий тег перед !всеми! тэгами ('.block')
    // $('.block').next().addClass('selected'); //// следующий тег после ('.block')
    // $('p').prev('h3').addClass('selected'); ///все тэги 'h3' перед 'p'
    // $('p').siblings('.green').addClass('selected'); ////Все соседи внутри текущего контейнера


    // События в jQuery

    // $('.button1').on('click', function () {
    //     $('#top-header').toggleClass('blueColor');
    // });


    // $('.test_area').on('mouseenter', function(){
    //     $(this).toggleClass('newBg');
    // })

    // $('.test_area').on('mouseleave', function(){
    //     $(this).toggleClass('newBg');
    // })

    // $('#inputName').on('focus', function(){
    //     $(this).toggleClass('focus');
    // })

    // $('#inputName').on('blur', function(){
    //     $(this).removeClass('focus');
    // })

    // $('#inputName').on('change', function(){
    //     $('#textHolder').text($(this).val());
    // })

    // $('#inputName').on('keyup', function(){
    //     $('#textHolder').text($(this).val());
    // })

    // $('#inputName').on('keyup', function(e){
    //     if (e.which == 27){
    //         $('#textHolder').text('');
    //     }
    // })


    // Анимация 

    // .animate({'css props : value'}, duration in ms);
    // .hide(duration in ms);
    // .show(duration in ms);
    // .delay(duration in ms);
    // .fade[In, Out, Toggle] (duration in ms);
    // .slide[Up, Down, Toggle] (duration in ms);

    // Атрибуты

    // .attr('name') ////Получить внутренность аттрибута с именем name
    // .attr('name', 'value') ////Установить аттрибут с именем name и значением value


    // $name = $(jquery object); ////Имена с объектами jquery лучше начинать со знака $


    // Работа с разметкой

    // .text('text')       ///// передает только текст 
    // .html('html text') ///// Можно передавать html разметку

    // $newContent = $(
    //     '<h4> Заголовок </h4>' +
    //     '<p> Абзац</p>' +
    //     '...' +
    //     '...'
    // ); ////Можно применять методы jquery


    // .prepend('');  ////Добавить что-то в начало (внутри элемента)
    // .append('');  ////Добавить в конец (внутри элемента)
    // .before(''); //// Добавить перед элементом (снаружи)
    // .after(''); /////Добавить после элемента (снаружи)

    // .wrap('ОБЁРТКА HTML'); //// Добавит обертку элементу
    // .unwrap();            //// Удалит обертку элементаж
    // .unwrap('.someClass')//// Удалит обертку элемента, если она имеет селектор класса (ID) .someClass
    //                     //// Работает только на 1 уровне, не выше

    // .empty(); ////Очищает содержимое контейнера, сохраняя его;
    // .remove(); ////Удалет весь блок с содержимым 

    // .clone(); ////Клонирует элемент

    //.toFixed(Количество знаков после запятой); //// Позволяет убрать цифры после запятой в числе
});