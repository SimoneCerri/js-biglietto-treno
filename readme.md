# !Quest!
Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65 (fortunelli :adulto_anziano:).
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).

# ?Solution?
- Ask kilometers to client
- Ask age to client
- Price = 0.21 * km
- if age < 18 = 20% discount
- if age > 65 = 40% discount
- final_price in human-form (2 max numbers after float point)