let selected = 0;
let imageNames = [];
let firstImgId = 0;
let secImgId = 0;
let isRandom=false;
let basePath="";
function randomize(targetArr) {
    let rand = 0
    console.log(targetArr);
    for (let index = 0; index < targetArr.length; index++) {
        rand = Math.floor(Math.random() * targetArr.length)
        let crnt = targetArr[index]
        targetArr[index] = targetArr[rand]

        targetArr[rand] = crnt

    }

    console.log(targetArr);
}

function getSelectedCnt() {
    let cnt = 0;
    for (let index = 0; index < imageNames.length; index++) {
        const element = $("#img"+(index+1));
        if (element.css("opacity") === "0.5") {
            cnt++
        }

    }
    return cnt;
}

let cardBtnEvent=()=>{
    $('img').on("click", function () {
        if ($(this).parent('div').css('opacity') === '1') {
            let cnt = getSelectedCnt();
            console.log("selected object count >>>> ",cnt);
            if (cnt >= 2) return
        }
        // select
        if ($(this).parent('div').css('opacity') === '1') {

            $(this).parent('div').css('opacity', '0.5')

            selected++;

            if (selected === 1) {
                firstImgId = $(this).parent('div').attr('id')
            }
            if (selected === 2) {
                secImgId = $(this).parent('div').attr('id')
            }

        }
        // deselect
        else {
            $(this).parent('div').css('opacity', '1')
            selected--;


        }

        if (selected === 2) {

            $('#chk').removeAttr('disabled')

        }
        else {
            $('#chk').attr('disabled', 'true')
        }
    })
}
let checkBtnEvent=()=>{
    $('#chk').click(function () {
        $('#replay').show();
        $('.resultArea').show();

        $('#chk').remove();

        $('img').off('click');

        if(isRandom)    randomize(imageNames);

        let idCnt = 0;
        for (let index = 0; index < imageNames.length; index++) {
            idCnt++;
            $('#img' + idCnt).find('img').attr("src", basePath+imageNames[index])

        }

        if ($('#img' + firstImgId.slice(firstImgId.length - 1)).find('img').attr('src') === $('#img' + secImgId.slice(secImgId.length - 1)).find('img').attr('src')) {
            $('div.resultArea').text("CONGRATULATIONS YOU WON");
        }
        else {
            $('div.resultArea').text("oops you lost!");
        }
    })
}
let resetGame=()=>{
    $('#replay').click(function () {
        location.reload()
    })
}

let loadJSON=()=>{
    $.getJSON( "game.json", function( data ) {
        console.log(data);
        isRandom=data.isRandom;
        imageNames=data.images;
        basePath=data.imageBasePath;
        initGame();
    });
}
$('document').ready(function () {
    loadJSON()
})

let initGame=()=>{
    $('#replay').hide()
    $('.resultArea').hide()
    cardBtnEvent();
    checkBtnEvent();
    resetGame();
}
