function ejecutaAlerta() {   
    var w = window.open('','','width=500,height=300')
    w.document.write('Pagina lista en tres meses!\n\n')
    w.document.write('\nTemas en desarrollo....!')
    w.focus()
    setTimeout(function() {w.close();}, 6000)
    }