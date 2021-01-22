//require('dotenv').config();
jQuery(function () {
    $("#f").on('submit', function (e) {
        e.preventDefault();

        $arr = $(this).serializeArray();
        $value = $arr[0].value

        $search = $value;
        $key = process.env.KEY;
        $limit = 10;
        $url = 'https://api.giphy.com/v1/gifs/search?q=' + $search + '&api_key=' + $key + '&limit=' + $limit;
        $.ajax($url, {
                type: 'get'
            })
            .done(function (data) {
                if ($('.list').has('li')) {
                    $('.list').children().remove();
                }
                $data = data.data
                $data.map(function (v) {
                    $('.list').append(
                        $('<li></li>').append(
                            $('<img width="300" high="300"></img>')
                            .attr('src', v.images.downsized.url)
                        )
                    );
                });
            })
        $(".inputName").val('')
    })
    $("body").css('background-color', 'skyblue')
})