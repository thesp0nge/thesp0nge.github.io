---
layout: post
title: "E' un duro mestiere quello di prevenire"
date: 2014-04-10 7:51
comments: true
published: true
featured: false
categories: article
tags: application-security appsec rant
image:
  cover:
level:
hn:
rd:
---

La moglie e gli amici non sanno cosa fai. _Aggiusti i computer_, loro pensano.
_Sei un hacker_, dicono i letterati del mondo dei computer. _Sei sempre su
Internet_, dicono i complottisti del fancazzismo fino all'immancabile _tu che
ne capisci di computer, che ne dici di quel modello di scheda video?_

Fare _application security_ può essere equiparato un po' al mestiere
dell'assicuratore e non solo perché tutti ti odiano o perché hai una parcella
salata. Fare il mio mestiere è difficile perché parli di rischi di disastri che
in realtà non sono ancora avvenuti e che forse non accadranno mai.

{% blockquote %}
Prendiamo per esempio ad un database al quale non è stato applicato un fix di security del 2008 che permette di entrare a vedere tutti i dati contenuti.
{% endblockquote %}

Per sfruttare questa falla, è necessario:

* essere nella stessa VLAN di quel database o comunque avere connettività verso
  il servizio
* sapere che dati cercare nel database
* cercare un exploit e scaricarlo
* saperlo compilare

Servono quindi delle doti sia logistiche che tecnologiche che non tutti hanno.
Quindi possiamo dire che la probabilità di accadimento è limitata. Non è zero,
anzi magari senza che tu te ne accorga qualcuno sta già guardando quei dati
indisturbato da anni.

Se un DBA deve valutare l'impatto di installare una patch vecchia di 5 anni che
magari comporta altre installazioni per compatibilità, che comporta dei test e
che comporta un fermo macchina, posso _capire_ qualche perplessità quando
l'assicuratore (cioé io) cerca di vendergli la polizza (ovvero applica la patch
perché potrebbero bucarti).

Non lo giustifico, lo capisco. E' diverso.

Tuttavia, bisogna mettersi anche nei miei panni. Chi si assume il rischio di
una breccia o di un furto di dati? Supponiamo siano i forecast di un nuovo
prodotto che vengono venduti alla nostra concorrenza, magari non in modo
eclatante ma un poco alla volta. Io DBA non me ne accorgo. Io insider non mi
faccio sgamare, centellinando le informazioni e intanto guadagno. Il competitor
può anticipare le mie mosse sul mercato. L'unica che ci smena è la società
datore di lavoro sia dell'assicuratore sia del DBA.

Il mio lavoro è difficile o, meglio, mi mette nella condizione di essere odiato
da tutti perché cerco di vendere loro delle polizze. Nessuno ha ancora venduto
quei dati, però io ti espongo un rischio. Rischio che spesso tu, DBA,
sottovaluti perché la probabilità di accadimento è modesta (ammesso certo tu la
possa calcolare veramente) ed il lavoro per sanare la falla è molto.

Il mio lavoro è difficile perché, non solo vieni denigrato dalle persone alle
quali cerchi di fare _awareness_, ma in caso di falla sei anche il
responsabile.

{% blockquote %}
Clueless Boss: Perché non mi hai fatto niente per evitare che mi bucassero?
Assicuratore: Ma ti avevo spiegato che lasciando admin come password per admin, qualcuno avrebbe potuto fare danni.
Clueless Boss: Non l'avevo capito. Non sei stato in grado di spiegarlo bene, ora fai qualcosa.
{% endblockquote %}

Esiste in rete un bellissimo discorso di Julio Velasco sulla cultura
dell'alibi. Il sunto è, se passiamo il nostro tempo a trovare un alibi ai
nostri errori, continueremo a commetterli. Commettere uno sbaglio è parte del
processo naturale di apprendimento. L'aver superato la pubertà non rende
automatico il non sbagliare più. Questo, ahimé, gente come il clueless boss del
discorso immaginario qui sopra non lo capisce.

Sbagliare di solito ferisce l'ego delle persone incompetenti perché mette a
nudo i loro limiti. Avere qualcuno poi che fa le pulci al proprio lavoro
evidenziando lacune di security è un'onta che va lavata dileggiando il nostro
assicuratore.

## Il brand

Supponiamo di avere un software X, di un grande Vendor. Tu trovi un problema
tale per cui, qualche semplice richiesta fa bloccare questo software X.
L'atteggiamento di un buon leader, che magari per il software X e la sua
integrazione ha speso cifre a 5 zeri, chiamerebbe il _sales_ del grande Vendor
e gli direbbe:

{% blockquote %}
'Scolta "ninin", sveglia i tuoi battaglioni di sviluppatori a Bangalore, che il primo cretinetti che si attesta alla rete è in grado di buttare giù il tuo software da nmila euro.
{% endblockquote %}

Un buon leader che:

* ha fiducia dei propri colleghi
* ha capito il problema
* ha riconosciuto che si è fidato di un grande nome il suoi software sempre da
  uomini è fatto

Ahimé, viene da se che spesso ci si ferma anche alla fiducia, figuriamoci
capire il problema. _Se è un software di Vendor, è impossibile che abbia
problemi. E' sul mercato da anni, ne vuoi sapere più tu di lui?_

A nulla vale farglielo vedere. Se nessuno fa quelle richieste, allora il
problema non c'è. Tu, che ragioni pensando al rischio, abbozzi un _ma..._ e
vieni zittito. Perché mai qualcuno dovrebbe fare quelle richieste?

Il discorso di Velasco, forse l'hanno ascoltato in molti ma l'hanno
metabolizzato veramente in pochi.

## SHA-7 e le pacche sulle spalle

La cosa sconvolgente dell'ICT Security è poi che chiunque si può improvvisare
esperto ed affermare di aver inventato un nuovo algoritmo di cifratura,
partendo da una funzione di hashing, e passare per innovatore.

Se poi tu, che fai questo lavoro da anni, trasecoli e muovi delle obiezioni,
sei solo un criticone invidioso perché non hai inventato nulla, fai una vita
meschina e Babbo Natale non ti porterà niente di quanto hai chiesto. Abbozzi un
_ma..._ e vieni zittito... "lui è un innovatore, si merita pacche sulle spalle
per il suo grande lavoro".

Capisci a questo punto che non solo Matrix esiste, ma sei finito in una zona
della matrice dove l'Architetto un giorno di è svegliato male ed ha chiamato
dei consulenti sottopagati di _metti il nome della big company che preferisci_
a scrivere un po' di junk code.

{% blockquote %}
Il cucchiaio non esiste
{% endblockquote %}

## armoredcode.com spinoff

Avete visto che è un po' che non scrivo su
[armoredcode.com](http://armoredcode.com). Ci sarebbe da parlare di un sacco di
cose ma, effettivamente, scrivere in inglese non mi viene così fluido ed
impiego troppo tempo per scrivere un post. Ci sono poi così tanti blog di
application security in inglese che non so quanto ne valga la pena.

Contando poi che la maggior parte del mio tempo libero, che non uso per la
famiglia o per il taekwon-do, è dedicato a
[Codesake::Dawn](http://dawn.codesake.com), è chiaro che io debba rivedere un
po' le mie priorità come technical blogger.

Quindi, metto in _stand by_ il progetto armoredcode.com. E' giunto il momento
di pensare ad un blog tecnico di sicurezza applicativa in Italiano.

Dove magari posso spiegare a gente che viene a fare il colloquio con me che il
cross site request forgery non è l'iniezione di codice DHTML. 

Dove posso scrivere post tecnici nella mia lingua, impiegando meno tempo e
magari risultando interessante.

Devo solo trovare un bel nome...
