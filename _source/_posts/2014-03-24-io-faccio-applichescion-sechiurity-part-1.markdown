---
layout: post
title: "Io faccio applichescion sechiurity: parte 1"
date: 2014-03-24 08:06
comments: true
published: true
featured: false
categories: article
tags: banfa appsec italia ironia mondo-del-lavoro chiacchieroni self-made-man
image:
  cover:
level:
hn:
rd:
---

## Prologo
Questo è il talk, più o meno visto che avrei parlato a braccio con un paio di
slide con su solo foto, che avrei dovuto tenere lo scorso martedì al [Security
Summit](http://www.securitysummit.it). Purtroppo il solito virus influenzale ha
privato il pubblico di queste chicche.

Utili? Non lo so. Sicuramente qualcuno si poteva sentire toccato nel profondo
ed offendersi. Pazienza, putroppo a causa di queste persone il mercato IT
italiano nel campo della sicurezza è carente di una figura professionale che,
secondo la mia visione, si sta estinguendo come il panda rosso: l'application
security specialist.

## Io faccio applichescion sechiuriti, e tu?

### Chi sono io?
Ciao, io sono [Paolo](http://thesp0nge.com) e sono nel campo della sicurezza
applicativa da una decina d'anni. Prima come consulente, ora come dipendente,
spendo la mia giornata lavorativa nel trovare security issue nelle applicazioni
(web e non) dei miei clienti, farmi odiare da loro perché chiedo di fare dei
fix, scrivere report di security e fare un po' di awareness su come si scrive
del codice sicuro.

Ho un blog in inglese, [armoredcode.com](http://armoredcode.com) dove parlo di
_application security_ unita in modo particolare al mondo del codice scritto in
[ruby](http://www.ruby-lang.org/en)[^1]

Sto scrivendo un [security scanner per codice ruby](http://dawn.codesake.com) e
collaboro con [Owasp](http://www.owasp.org) sempre su temi di application
security e Ruby.

Perché questo talk? Questo talk racconta la mia modesta e personalissima
visione del marketplace italiano sulla professione dell'application security
specialist e di cose divertenti che, purtroppo sono accadute veramente e che mi
fanno dubitare molto di alcuni loschi figuri che si improvvisano maghi del
cross site scripting. Pronti? Cominciamo.

### Ieri ho piantato pomodori ed ho aggiustato uno sciacquone ad incasso
L'altro giorno lo sciacquone del mio bagno non caricava più l'acqua. Non avevo
sotto mano il numero di un idraulico ed ho provato ad aprire la cassetta
incassata per capire se ne veniva fuori qualcosa. Sono arrivato ai pistoncini
dello scarico, quelli che aprono il flusso verso il water. Da lì il vuoto.

C'era una plastica da smontare, ed era abbastanza chiaro il verso. Tuttavia
tirando, la resistenza offerta era molta ed il rischio di rompere ancora di più
era troppo. Ho visto anche un piccolo tubo in metallo che portava l'acqua
dall'impianto verso le plastiche dello sciacquone. Ho picchiettato il rame con
un cacciavite e si è sentito un **TOC**, come fosse caduto qualcosa.

Magicamente il cassone ha iniziato a riempirsi. Un sassolino, probabilmente, o
un pezzo di calcare ostruiva il tubicino in rame impedendo all'acqua di
scendere verso lo sciacquone.

Mistero risolto. Ho risparmiato l'uscita dell'idraulico, con un po' di fortuna.
Ora, posso dire di essere un idraulico? Posso andare in giro casa per casa
dicendo _"hey, ho riparato il mio sciacquone, tranquilli riparo io i vostri
impianti per la metà del compenso di un professionista con anni di
esperienza!!! C'è la crisi, approfittane!!!_?

Proprio ieri ho piantato nel mio giardino un po' di piante. Una pianta di
lamponi, una pianta di mirtilli neri, quattro piantine di fragole, un po' di
insalata e dei pomodori datterino. Fare giardinaggio mi rilassa e coltivare
frutta e verdura che poi mangio mi da un piacevole senso di soddisfazione.

Secondo me il lavoro è anche venuto discretamente bene.

Ora, posso dire di essere un esperto agricoltore? Posso andare in giro per le
cascine di Gessate e d'intorni dicendo _"hey, ho la soluzione hai vostri
problemi agroalimentari. Pianto tutto io, tranquili. Lasciate perdere la vostra
esperienza su lune, infestanti, concimi... ci penso io, mi basta solo una
piccola vanga e delle pianticelle già coltivate comprate al Gigante."_?

Ovviamente, anche se putroppo per alcuni non è così, la risposta ad entrambe le
domande è un roboante **NO**. Io sono un amatore. Ho riparato il mio impianto
per pura fortuna, mentre mi diletto in piccolo giardinaggio e, per inciso, ho
anche sbagliato anti-infestante con il risultato di uccidere mezzo prato del
mio giardino.

Io, nel campo idraulico e agricolo, **non sono un professionista**.

### Stranezze: Ouaspe? Lo ignoro...
Spesso sono stato chiamato nel corso degli anni a fare un po' di colloqui per
collaboratori della mia azienda o semplicemente delle chiacchierate informali
con sedicenti profili senior.

Presentarsi come un senior ed ignorare cosa sia [owasp](http://www.owasp.org),
cosa sia la Testing Guide (che tra poco uscirà nella versione 4), la Top 10, la
Developer Guide, è un po' come fare lo sviluppatore e non conoscere per nulla
il paradigma _model, view, controller_ o fare il meccanico e non sapere cosa
sia un albero a camme.

Un altro figuro mi ha stupito descrivendomi il _cross site request forgery_
come l'iniezione di codice DHTML all'interno di una pagina. Mi ha stupito non
tanto per ignorare completamente il cross site request forgery che, posso
ammetterlo, è abbastanza brigosa da descrivere. Mi ha stupito perché mi ha
tirato in campo una tecnologia, il DHTML, che non sentivo almeno da una decina
d'anni.

Ci sono poi due scuole di pensiero tra i figuri: quelli che farebbero fare al
tool anche il report e quelli duri e puri che il tool non lo usano.

La prima categoria, quelli che si affidano ciecamente al tool, è quella dei
_cucciolotti insicuri_. Il _cucciolotto insicuro_ come prima cosa lancia nmap,
facendo il detect del servizio e prende per oro colato anche il ```?``` quando
nmap non è sicuro del protocollo. Il sistema operativo è _chiaramente_ il primo
della lunga lista quando nmap ti dice JUST GUESSING, senza se e senza ma e se
per puro caso la porta 80 (e la 443) sono chiuse non c'è chance di avere un
test perché "**le applicazioni web sono solo sulla porta 80 o 443**"
(cucciolotto insicuro incrociato da un cliente forse nel 2005).

Il _cucciolotto insicuro_ ti segna nel report tutti e 2000 i cross site
scripting che Appscan ti trova su una pagina, su un singolo parametro HTTP,
ignorando bellamente che la vulnerabilità e l'entry point sono **1** e il
restante **1999** sono varianti che il tool mette per giustificare
l'esorbitante costo della licenza.

Errori nella business logic? URL nascoste in javascript che magari portano a
backend non protetti? Informazioni interessanti per un attacco nascoste nei
commenti HTML? Se l'AppScan della situazione non lo dice, allora non esistono.
No way.

Il _cucciolotto insicuro_ quando non può usare il tool sclera, beve un caffè e
ti scrive nel report che non ci sono vulnerabilità.

La seconda categoria, quella che fa tutto a mano senza tool automatici di
scansione, è quella dell'_appsec macho_.

L'_appsec macho_ pensa di ottenere prestigio nello stato sociale se non usa
strumenti e per questo motivo impiega il triplo del tempo a fare crawling di
applicazioni complesse perdendosi indietro pezzi importanti e spesso trovando
l'1% delle issue.

L'_appsec macho_ ti guarda dall'alto verso il basso quando ti vede fare il
crawling del sito con uno script o con l'Owasp Zap della situazione. Lui non
scrive report, piazza tutto in un file appunti.txt dicendo che ci guarderà
dopo.

L'_appsec macho_ spesso come remediation lascia criptiche frasi come "Sanitizza
l'input" o "Applica la patch", lasciando allo sviluppatore/sistemista il
divertimento di capire cosa significhi sanitizzare e soprattutto quale patch
tra le nmila rilasciate ogni giorno applicare.

C'è anche l'ibrido che il tool lo usa:

* nel contesto sbagliato
* con le opzioni sbagliate
* a caso in loop, come se due esecuzioni successive diano risultati diversi

{% blockquote %}
Ma almeno in questo caso, il figuro ibrido ha colpito nel segno, ovvero che il
tool va usato ed il suo output va preso per quello che è... ovvero l'output di
un tool automatico, serve come punto di partenza, non come punto di arrivo.
{% endblockquote %}

### Stranezze, sono tutti leader e tutti senior

Una cosa veramente strana in questo pazzo mondo dell'IT security italiano è che
sono tutti leader di mercato e sono tutti senior. Non mi metterò a tracciare
l'impietoso paragone tra due figure simili e di come vengono trattate a livello
retributivo in Italia e all'estero. Tuttavia, se molti emigrano ci sarà un
motivo.

Non mi metterò a parlare di budget che non c'è mai e di come la crisi stia
colpendo questo settore... esclusivamente da noi, ovviamente.

Non mi metterò a parlare delle conferenze di security, che qui da noi non hanno
workshop tecnici spinti. Del fatto che anche qui non ci siano budget
sufficienti per invitare grandi speaker internazionali ed organizzare un paio
di giornate di sessioni tecniche di valore.

Sembra che in questo mercato la maggior parte della popolazione sia _pre sales_
o _integrator_. Pochi hacker nel senso vero del termine. Pochi professionisti
veramente in gamba ancora qui in Italia. Questo acme all'incontrario può essere
la spinta per correggere la spinta ed invertire la tendenza.

Nella seconda parte del post, 2 o 3 hint che derivano dalla mia esperienza e
che possono aiutare ad avere in casa un appsec specialist competente e
motivato.

[^1]: Almeno qui, non tenendo il talk live, mi sono risparmiato le tristi battute su Ruby Rubacuori.
