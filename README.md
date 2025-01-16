# cultural-cuisine
- [Link] (https://github.com/Selina-Mutz/cultural-cuisine) GitHub Repository.
- [Link](https://docs.google.com/document/d/1XKtVvjKM9jpOuef7wFVSK_b8g2kQpW-vZQC78JlXPw0/edit?pli=1&tab=t.0#heading=h.249yeeusaif8) Google Doc mit den Notizen zum Projekt.

#### Gruppenmitglieder:
- Norma Katrin Wilcken
- Tim Hebestreit
- Sandy Rodrigues
- Selina Mutzbauer


### Website-Features:
- Interaktive Weltkarte mit kulinarischer Übersicht über Teigtaschen.
- Detaillierte Rezepte mit Zutaten, Anleitung, Bildern, und weiteren Infos wie Dauer, Schwierigkeit, Tipps und kultureller Bedeutung.
- ”Gefällt mir” und “Gekocht” Buttons.
- Feedback Button zur Erfassung von Feedback, Rezeptwünschen, etc.
- Architektur: Node.js, React, Leaflet, sowie JavaScript, HTML, CSS.


### Arbeitsteilung / Rezepteverteilung:
- Grundlage der Webseite wurde gemeinsam erarbeitet.
- Jede Person hat 3 Rezepte gekocht, das Rezept sowie die Bilder für die Webseite vorbereitet und in die Website eingepflegt.
- Gemeinsame Arbeit an der Webseite:
  - Projekt und Server Erstellung
	- Rezepte und Fotos einpflegen
	- Funktionalitäten einbauen
	- Seite hübsch machen


Bis Datum  | Katrin | Sandy | Tim | Selina
------------- | ------------- | ------------- | ------------- | ------------- 
Rezept 1 bis 30.11.2024 | argentinische Empanadas | Gyoza  | Momos | Luqaimat  
Rezept 2 bis 31.12.2024 | Gözleme | Siopao  | Maultaschen | Pierogi  
Rezept 3 bis 31.12.2024 | Pizzataschen | Golden Syrup Dumplings | Sambusas | Manti


### Starten der Website:

Zunächst das GitHub-Repository lokal auf eurem PC klonen [Link](https://github.com/Selina-Mutz/cultural-cuisine), der aktuellste Stand befindet sich (Stand 16.01.2025) auf dem staging-branch.

Für das Starten des Development-Servers wird node.js benötigt: [Link](https://nodejs.org/en/download).

Nach der Installation in einem Terminal (z.B. Windows Eingabeaufforderung) zum Verzeichnis navigieren, wo das Projekt geklont wurde. Dort dann folgenden Befehl im Terminal ausführen, um die Projekt-Dependencies zu installieren:

npm install

Wurde alles korrekt installiert kann mit folgendem Befehl der Development-Server gestartet werden:

npm start

Nun öffnet sich in eurem Browser automatisch die Seite, alternativ ist die Seite unter http://localhost:3000 erreichbar. 

Klappt einer der beiden Schritte nicht, überprüft eure Version von node.js mit:

node -v

Ist diese älter als Version 20.0.0, kann es helfen eine neuere Version zu installieren mit:

nvm install 20.0.0

Anschließend muss die neue Version noch ausgewählt werden mit:

nvm use 20.0.0

Anmerkung: Dafür müsst ihr das Terminal eventuell als Administrator ausführen.

Bleibt der Fehler bestehen, findet ihr in der Dokumentation zu nvm (node version manager) [Link] (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) weitere Hilfe, alternativ hilft auch der KI-Assistent eurer Wahl.