$(() => {

    console.log('página carregada')
    let certa = $('#certa')
    let errada = $('#errada')
    let play = $('#play')
    let q1 = $('#q1')
    let q2 = $('#q2')
    let q3 = $('#q3')
    let q4 = $('#q4')
    let q5 = $('#q5')
    let q6 = $('#q6')
    let q7 = $('#q7')
    let q8 = $('#q8')
    let q9 = $('#q9')
    let q10 = $('#q10')
    let reload = $('#reload')
    let congrats = $('#congrats')
    let score = $('#score')

    let acertos = 0
    let erros = 0

    score.hide()
    reload.hide()


    certa.hide()
    errada.hide()
    q1.hide()
    q2.hide()
    q3.hide()
    q4.hide()
    q5.hide()
    q6.hide()
    q7.hide()
    q8.hide()
    q9.hide()
    q10.hide()
    congrats.hide()

    play.click(() => {

        q1.show()
        q1.addClass('animate__backInUp')
        play.hide()
    })


    $('#q1_errada1').click(() => {
        erros++

        errada.show()
        q1.addClass('animate__backOutDown')
        setTimeout(() => {

            q1.hide()
            errada.hide()
            q2.show()

        }, 2000);
    })


    $('#q1_errada2').click(() => {
        erros++

        errada.show()
        q1.addClass('animate__backOutDown')
        setTimeout(() => {

            q1.hide()
            errada.hide()
            q2.show()

        }, 2000);
    })


    $('#q1_errada3').click(() => {
        erros++

        errada.show()
        q1.addClass('animate__backOutDown')
        setTimeout(() => {

            q1.hide()
            errada.hide()
            q2.show()

        }, 2000);
    })


    $('#q1_certa').click(() => {
        acertos++

        certa.show()
        q1.addClass('animate__backOutDown')


        setTimeout(() => {

            q1.hide()
            certa.hide()
            q2.show()

        }, 2000);

    })


    //-------------------------------------------------------------------------------------------

    $('#q2_errada1').click(() => {
        erros++

        errada.show()
        q2.addClass('animate__backOutDown')
        setTimeout(() => {

            q2.hide()
            errada.hide()
            q3.show()

        }, 2000);
    })


    $('#q2_errada2').click(() => {
        erros++

        errada.show()
        q2.addClass('animate__backOutDown')
        setTimeout(() => {

            q2.hide()
            errada.hide()
            q3.show()

        }, 2000);
    })


    $('#q2_errada3').click(() => {
        erros++

        errada.show()
        q2.addClass('animate__backOutDown')
        setTimeout(() => {

            q2.hide()
            errada.hide()
            q3.show()

        }, 2000);
    })


    $('#q2_certa').click(() => {
        acertos++


        certa.show()
        q2.addClass('animate__backOutDown')


        setTimeout(() => {

            q2.hide()
            certa.hide()
            q3.show()

        }, 2000);

    })

    //-------------------------------------------------------------------------------------------

    $('#q3_errada1').click(() => {
        erros++

        errada.show()
        q3.addClass('animate__backOutDown')
        setTimeout(() => {

            q3.hide()
            errada.hide()
            q4.show()

        }, 2000);
    })


    $('#q3_errada2').click(() => {
        erros++

        errada.show()
        q3.addClass('animate__backOutDown')
        setTimeout(() => {

            q3.hide()
            errada.hide()
            q4.show()

        }, 2000);
    })


    $('#q3_errada3').click(() => {
        erros++

        errada.show()
        q3.addClass('animate__backOutDown')
        setTimeout(() => {

            q3.hide()
            errada.hide()
            q4.show()

        }, 2000);
    })


    $('#q3_certa').click(() => {
        acertos++

        certa.show()
        q3.addClass('animate__backOutDown')


        setTimeout(() => {

            q3.hide()
            certa.hide()
            q4.show()

        }, 2000);

    })

    //-------------------------------------------------------------------------------------------

    $('#q4_errada1').click(() => {
        erros++

        errada.show()
        q4.addClass('animate__backOutDown')
        setTimeout(() => {

            q4.hide()
            errada.hide()
            q5.show()


        }, 2000);
    })


    $('#q4_errada2').click(() => {
        erros++

        errada.show()
        q4.addClass('animate__backOutDown')
        setTimeout(() => {

            q4.hide()
            errada.hide()
            q5.show()


        }, 2000);
    })


    $('#q4_errada3').click(() => {
        erros++

        errada.show()
        q4.addClass('animate__backOutDown')
        setTimeout(() => {

            q4.hide()
            errada.hide()
            q5.show()


        }, 2000);
    })


    $('#q4_certa').click(() => {
        acertos++

        certa.show()
        q4.addClass('animate__backOutDown')


        setTimeout(() => {

            q4.hide()
            certa.hide()
            q5.show()


        }, 2000);

    })


    //-------------------------------------------------------------------------------------------

    $('#q5_errada1').click(() => {
        erros++

        errada.show()
        q5.addClass('animate__backOutDown')
        setTimeout(() => {

            q5.hide()
            errada.hide()
            q6.show()


        }, 2000);
    })


    $('#q5_errada2').click(() => {
        erros++

        errada.show()
        q5.addClass('animate__backOutDown')
        setTimeout(() => {

            q5.hide()
            errada.hide()
            q6.show()


        }, 2000);
    })


    $('#q5_errada3').click(() => {
        erros++

        errada.show()
        q5.addClass('animate__backOutDown')
        setTimeout(() => {

            q5.hide()
            errada.hide()
            q6.show()


        }, 2000);
    })


    $('#q5_certa').click(() => {
        acertos++

        certa.show()
        q5.addClass('animate__backOutDown')


        setTimeout(() => {

            q5.hide()
            certa.hide()
            q6.show()


        }, 2000);

    })


    //-------------------------------------------------------------------------------------------

    $('#q6_errada1').click(() => {
        erros++

        errada.show()
        q6.addClass('animate__backOutDown')
        setTimeout(() => {

            q6.hide()
            errada.hide()
            q7.show()


        }, 2000);
    })


    $('#q6_errada2').click(() => {
        erros++

        errada.show()
        q6.addClass('animate__backOutDown')
        setTimeout(() => {

            q6.hide()
            errada.hide()
            q7.show()


        }, 2000);
    })


    $('#q6_errada3').click(() => {
        erros++

        errada.show()
        q6.addClass('animate__backOutDown')
        setTimeout(() => {

            q6.hide()
            errada.hide()
            q7.show()


        }, 2000);
    })


    $('#q6_certa').click(() => {
        acertos++

        certa.show()
        q6.addClass('animate__backOutDown')


        setTimeout(() => {

            q6.hide()
            certa.hide()
            q7.show()


        }, 2000);

    })

    //-------------------------------------------------------------------------------------------

    $('#q7_errada1').click(() => {
        erros++

        errada.show()
        q7.addClass('animate__backOutDown')
        setTimeout(() => {

            q7.hide()
            errada.hide()
            q8.show()


        }, 2000);
    })


    $('#q7_errada2').click(() => {
        erros++

        errada.show()
        q7.addClass('animate__backOutDown')
        setTimeout(() => {

            q7.hide()
            errada.hide()
            q8.show()


        }, 2000);
    })


    $('#q7_errada3').click(() => {
        erros++

        errada.show()
        q7.addClass('animate__backOutDown')
        setTimeout(() => {

            q7.hide()
            errada.hide()
            q8.show()


        }, 2000);
    })


    $('#q7_certa').click(() => {
        acertos++

        certa.show()
        q7.addClass('animate__backOutDown')


        setTimeout(() => {

            q7.hide()
            certa.hide()
            q8.show()


        }, 2000);

    })

    //-------------------------------------------------------------------------------------------

    $('#q8_errada1').click(() => {
        erros++

        errada.show()
        q8.addClass('animate__backOutDown')
        setTimeout(() => {

            q8.hide()
            errada.hide()
            q9.show()


        }, 2000);
    })


    $('#q8_errada2').click(() => {
        erros++

        errada.show()
        q8.addClass('animate__backOutDown')
        setTimeout(() => {

            q8.hide()
            errada.hide()
            q9.show()


        }, 2000);
    })


    $('#q8_errada3').click(() => {
        erros++

        errada.show()
        q8.addClass('animate__backOutDown')
        setTimeout(() => {

            q8.hide()
            errada.hide()
            q9.show()


        }, 2000);
    })


    $('#q8_certa').click(() => {
        acertos++

        certa.show()
        q8.addClass('animate__backOutDown')


        setTimeout(() => {

            q8.hide()
            certa.hide()
            q9.show()


        }, 2000);

    })

    //-------------------------------------------------------------------------------------------

    $('#q9_errada1').click(() => {
        erros++

        errada.show()
        q9.addClass('animate__backOutDown')
        setTimeout(() => {

            q9.hide()
            errada.hide()
            q10.show()


        }, 2000);
    })


    $('#q9_errada2').click(() => {
        erros++

        errada.show()
        q9.addClass('animate__backOutDown')
        setTimeout(() => {

            q9.hide()
            errada.hide()
            q10.show()


        }, 2000);
    })


    $('#q9_errada3').click(() => {
        erros++

        errada.show()
        q9.addClass('animate__backOutDown')
        setTimeout(() => {

            q9.hide()
            errada.hide()
            q10.show()


        }, 2000);
    })


    $('#q9_certa').click(() => {
        acertos++

        certa.show()
        q9.addClass('animate__backOutDown')


        setTimeout(() => {

            q9.hide()
            certa.hide()
            q10.show()


        }, 2000);

    })

    //-------------------------------------------------------------------------------------------

    $('#q10_errada1').click(() => {
        reload.show()
        erros++
        $('#numero_acertos').text(acertos)
        $('#numero_erros').text(erros)
        score.show()

        errada.show()
        q10.addClass('animate__backOutDown')
        setTimeout(() => {

            q10.hide()
            errada.hide()



        }, 2000);
    })


    $('#q10_errada2').click(() => {
        reload.show()
        erros++
        $('#numero_acertos').text(acertos)
        $('#numero_erros').text(erros)
        score.show()

        errada.show()
        q10.addClass('animate__backOutDown')
        setTimeout(() => {

            q10.hide()
            errada.hide()



        }, 2000);
    })


    $('#q10_errada3').click(() => {
        reload.show()
        erros++
        $('#numero_acertos').text(acertos)
        $('#numero_erros').text(erros)
        score.show()

        errada.show()
        q10.addClass('animate__backOutDown')
        setTimeout(() => {

            q10.hide()
            errada.hide()



        }, 2000);
    })


    $('#q10_certa').click(() => {

        reload.show()

        $('#numero_acertos').text(acertos)
        $('#numero_erros').text(erros)
        score.show()
        acertos++

        certa.show()
        q10.addClass('animate__backOutDown')


        setTimeout(() => {

            q10.hide()
            certa.hide()



        }, 2000);

        reload.click(() => {

            document.location.reload()
        })

    })



})

