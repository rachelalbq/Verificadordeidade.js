function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value==0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - fano.value
    var gênero=''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            img.setAttribute ('src', 'babyhomem.jpg')
        } else if (idade <21) {
            img.setAttribute ('src', 'homemjovem.jpg')
        } else if (idade < 60) {
            img.setAttribute ('src', 'homemadulto.jpg')
        } else {
            img.setAttribute ('src', 'homemidoso.jpg')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            img.setAttribute ('src', 'babymulher.jpg')
        } else if (idade <21) {
            img.setAttribute ('src', 'mulherjovem.jpg')
        } else if (idade < 60) {
            img.setAttribute ('src', 'mulheradulta.jpg')
        } else {
            img.setAttribute ('src', 'mulheridosa.jpg')
        }


    }
}

res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
res.appendChild(img)
res.style.textAlign = 'center'




}