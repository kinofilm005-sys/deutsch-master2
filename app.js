// DEUTSCH MASTER - COMPLETE APP

window.App = {
    DEFAULT_AVATARS: ['😀', '😎', '🤓', '😍', '🥸', '👨‍💻', '👩‍💻', '🧑‍🎓', '👨‍🏫', '👩‍🏫'],
    
    DICTIONARY: [
        { article: 'der', de: 'Hallo', transcription: 'HAH-lo', ru: 'привет', level: 'A1', example: 'Hallo, wie geht es dir?' },
        { article: 'die', de: 'Schule', transcription: 'SHOO-luh', ru: 'школа', level: 'A1', example: 'Ich gehe zur Schule.' },
        { article: 'das', de: 'Buch', transcription: 'BOOK', ru: 'книга', level: 'A1', example: 'Das ist ein gutes Buch.' },
        { article: 'der', de: 'Mann', transcription: 'MAHN', ru: 'мужчина', level: 'A1', example: 'Der Mann ist groß.' },
        { article: 'die', de: 'Frau', transcription: 'FROW', ru: 'женщина', level: 'A1', example: 'Die Frau arbeitet hier.' },
        { article: 'das', de: 'Kind', transcription: 'KINT', ru: 'ребенок', level: 'A1', example: 'Das Kind ist klein.' },
        { article: 'der', de: 'Tag', transcription: 'TAHK', ru: 'день', level: 'A1', example: 'Ein schöner Tag heute.' },
        { article: 'die', de: 'Nacht', transcription: 'NAHKT', ru: 'ночь', level: 'A1', example: 'In der Nacht schlafen wir.' },
        { article: 'das', de: 'Jahr', transcription: 'YAHR', ru: 'год', level: 'A1', example: 'Das Jahr hat 12 Monate.' },
        { article: 'der', de: 'Monat', transcription: 'MOH-naht', ru: 'месяц', level: 'A1', example: 'Januar ist der erste Monat.' },
        { article: 'die', de: 'Woche', transcription: 'VO-khuh', ru: 'неделя', level: 'A1', example: 'Eine Woche hat sieben Tage.' },
        { article: 'das', de: 'Haus', transcription: 'HOWS', ru: 'дом', level: 'A1', example: 'Das ist mein Haus.' },
        { article: 'die', de: 'Stadt', transcription: 'SHTAHT', ru: 'город', level: 'A1', example: 'Berlin ist eine große Stadt.' },
        { article: 'das', de: 'Wasser', transcription: 'VAHS-ser', ru: 'вода', level: 'A1', example: 'Bitte, ein Glas Wasser.' },
        { article: 'der', de: 'Baum', transcription: 'BOWM', ru: 'дерево', level: 'A1', example: 'Der Baum ist sehr alt.' },
        { article: 'die', de: 'Blume', transcription: 'BLOO-muh', ru: 'цветок', level: 'A1', example: 'Die Blume ist schön.' },
        { article: 'das', de: 'Auge', transcription: 'OW-guh', ru: 'глаз', level: 'A1', example: 'Das Auge ist blau.' },
        { article: 'die', de: 'Nase', transcription: 'NAH-zuh', ru: 'нос', level: 'A1', example: 'Die Nase ist spitz.' },
        { article: 'das', de: 'Ohr', transcription: 'OHR', ru: 'ухо', level: 'A1', example: 'Das Ohr hört Musik.' },
        { article: 'die', de: 'Hand', transcription: 'HAHNT', ru: 'рука', level: 'A1', example: 'Die Hand ist warm.' },
        { article: 'der', de: 'Fuß', transcription: 'FOOS', ru: 'нога (стопа)', level: 'A2', example: 'Der Fuß tut weh.' },
        { article: 'der', de: 'Kopf', transcription: 'KOPF', ru: 'голова', level: 'A2', example: 'Der Kopf schmerzt.' },
        { article: 'das', de: 'Herz', transcription: 'HERTS', ru: 'сердце', level: 'A2', example: 'Das Hertz schlägt schnell.' },
        { article: 'die', de: 'Liebe', transcription: 'LEE-buh', ru: 'любовь', level: 'A2', example: 'Liebe ist ein Gefühl.' },
        { article: 'der', de: 'Freund', transcription: 'FROWNT', ru: 'друг', level: 'A2', example: 'Er ist mein bester Freund.' },
        { article: 'die', de: 'Familie', transcription: 'fah-MEE-lee-uh', ru: 'семья', level: 'A2', example: 'Meine Familie ist groß.' },
        { article: 'das', de: 'Essen', transcription: 'ES-sen', ru: 'еда/пища', level: 'A2', example: 'Das Essen schmeckt gut.' },
        { article: 'das', de: 'Getränk', transcription: 'guh-TRENGK', ru: 'напиток', level: 'A2', example: 'Was für ein Getränk magst du?' },
        { article: 'der', de: 'Kaffee', transcription: 'kah-FAY', ru: 'кофе', level: 'A2', example: 'Der Kaffee ist heiß.' },
        { article: 'das', de: 'Bier', transcription: 'BEER', ru: 'пиво', level: 'A2', example: 'Ein Bier, bitte.' },
        { article: 'das', de: 'Brot', transcription: 'BROHT', ru: 'хлеб', level: 'A2', example: 'Das Brot ist frisch.' },
        { article: 'der', de: 'Käse', transcription: 'KAY-zuh', ru: 'сыр', level: 'A2', example: 'Der Käse ist lecker.' },
        { article: 'das', de: 'Fleisch', transcription: 'FLYSSH', ru: 'мясо', level: 'A2', example: 'Das Fleisch ist zart.' },
        { article: 'die', de: 'Arbeit', transcription: 'AHR-bite', ru: 'работа', level: 'B1', example: 'Die Arbeit ist interessant.' },
        { article: 'der', de: 'Beruf', transcription: 'buh-ROOF', ru: 'профессия', level: 'B1', example: 'Mein Beruf ist Lehrer.' },
        { article: 'die', de: 'Schule', transcription: 'SHOO-luh', ru: 'школа', level: 'B1', example: 'Die Schule ist ein Ort des Lernens.' },
        { article: 'das', de: 'Klassenzimmer', transcription: 'KLAS-sen-tsim-er', ru: 'классная комната', level: 'B1', example: 'Das Klassenzimmer ist hell.' },
        { article: 'der', de: 'Lehrer', transcription: 'LAY-rer', ru: 'учитель', level: 'B1', example: 'Der Lehrer erklärt die Lektion.' },
        { article: 'die', de: 'Schülerin', transcription: 'SHOO-ler-in', ru: 'ученица', level: 'B1', example: 'Die Schülerin ist fleißig.' },
        { article: 'die', de: 'Prüfung', transcription: 'PROO-foong', ru: 'экзамен', level: 'B1', example: 'Die Prüfung war schwierig.' },
        { article: 'das', de: 'Wort', transcription: 'VORT', ru: 'слово', level: 'B1', example: 'Das Wort ist schwer zu verstehen.' },
        { article: 'die', de: 'Sprache', transcription: 'SHPRAH-khuh', ru: 'язык', level: 'B1', example: 'Die deutsche Sprache ist schön.' },
        { article: 'der', de: 'Satz', transcription: 'ZAHTS', ru: 'предложение', level: 'B1', example: 'Der Satz ist grammatikalisch korrekt.' },
        { article: 'die', de: 'Kultur', transcription: 'kool-TOOR', ru: 'культура', level: 'B2', example: 'Die Kultur ist sehr vielfältig.' },
        { article: 'die', de: 'Wissenschaft', transcription: 'VIS-sen-shahft', ru: 'наука', level: 'B2', example: 'Die Wissenschaft hat viele Bereiche.' },
        { article: 'die', de: 'Philosophie', transcription: 'fi-lo-zo-FEE', ru: 'философия', level: 'C1', example: 'Die Philosophie beschäftigt sich mit Fragen des Lebens.' },
        { article: 'die', de: 'Technologie', transcription: 'tek-no-lo-GEE', ru: 'технология', level: 'B2', example: 'Die Technologie verändert die Welt.' },
        { article: 'der', de: 'Umstand', transcription: 'OOM-shtahnt', ru: 'обстоятельство', level: 'C1', example: 'Unter diesen Umständen ist es unmöglich.' },
        { article: 'die', de: 'Gelegenheit', transcription: 'guh-LAY-gen-hite', ru: 'возможность', level: 'B2', example: 'Die Gelegenheit kam unerwartet.' },
        { article: 'das', de: 'Verständnis', transcription: 'fer-SHTENT-nis', ru: 'понимание', level: 'B2', example: 'Das Verständnis ist wichtig.' },
        { article: 'die', de: 'Katze', transcription: 'KAH-tsuh', ru: 'кошка', level: 'A1', example: 'Die Katze ist schwarz.' },
        { article: 'der', de: 'Hund', transcription: 'HOONT', ru: 'собака', level: 'A1', example: 'Der Hund ist freundlich.' },
        { article: 'das', de: 'Pferd', transcription: 'PFERT', ru: 'лошадь', level: 'A1', example: 'Das Pferd ist schnell.' },
        { article: 'die', de: 'Vogel', transcription: 'FOH-gel', ru: 'птица', level: 'A1', example: 'Der Vogel singt schön.' },
        { article: 'der', de: 'Fisch', transcription: 'FISH', ru: 'рыба', level: 'A1', example: 'Der Fisch schwimmt im Wasser.' },
        { article: 'die', de: 'Farbe', transcription: 'FAR-buh', ru: 'цвет', level: 'A1', example: 'Welche Farbe magst du?' },
        { article: 'das', de: 'Rot', transcription: 'ROHT', ru: 'красный', level: 'A1', example: 'Das Feuer ist rot.' },
        { article: 'das', de: 'Blau', transcription: 'BLAU', ru: 'синий', level: 'A1', example: 'Der Himmel ist blau.' },
        { article: 'das', de: 'Grün', transcription: 'GRUEN', ru: 'зелёный', level: 'A1', example: 'Das Gras ist grün.' },
        { article: 'das', de: 'Gelb', transcription: 'GELP', ru: 'жёлтый', level: 'A1', example: 'Die Sonne ist gelb.' },
        { article: 'die', de: 'Zahl', transcription: 'TSAHL', ru: 'число', level: 'A1', example: 'Die Zahl eins ist klein.' },
        { article: 'die', de: 'Eins', transcription: 'AYNS', ru: 'один', level: 'A1', example: 'Eins und zwei ist drei.' },
        { article: 'die', de: 'Zwei', transcription: 'TSVAY', ru: 'два', level: 'A1', example: 'Ich habe zwei Hände.' },
        { article: 'die', de: 'Drei', transcription: 'DRY', ru: 'три', level: 'A1', example: 'Ein Dreieck hat drei Ecken.' },
        { article: 'die', de: 'Vier', transcription: 'FEER', ru: 'четыре', level: 'A1', example: 'Ein Stuhl hat vier Beine.' },
        { article: 'die', de: 'Fünf', transcription: 'FUENF', ru: 'пять', level: 'A1', example: 'Ich habe fünf Finger.' },
        { article: 'der', de: 'Apfel', transcription: 'AHP-fel', ru: 'яблоко', level: 'A1', example: 'Der Apfel ist süß.' },
        { article: 'die', de: 'Orange', transcription: 'o-RAHNG-uh', ru: 'апельсин', level: 'A1', example: 'Die Orange ist saftig.' },
        { article: 'die', de: 'Banane', transcription: 'bah-NAH-nuh', ru: 'банан', level: 'A1', example: 'Die Banane ist gelb.' },
        { article: 'der', de: 'Salat', transcription: 'zah-LAHT', ru: 'салат', level: 'A2', example: 'Der Salat ist gesund.' },
        { article: 'das', de: 'Gemüse', transcription: 'guh-MEW-zuh', ru: 'овощи', level: 'A2', example: 'Das Gemüse ist frisch.' },
        { article: 'die', de: 'Tomate', transcription: 'to-MAH-tuh', ru: 'помидор', level: 'A1', example: 'Die Tomate ist rot.' },
        { article: 'die', de: 'Kartoffel', transcription: 'kar-TAW-fel', ru: 'картофель', level: 'A2', example: 'Die Kartoffel ist lecker.' },
        { article: 'die', de: 'Milch', transcription: 'MILKH', ru: 'молоко', level: 'A1', example: 'Die Milch ist weiß.' },
        { article: 'der', de: 'Zucker', transcription: 'TSOO-ker', ru: 'сахар', level: 'A1', example: 'Der Zucker schmeckt süß.' },
        { article: 'das', de: 'Salz', transcription: 'ZAHLTS', ru: 'соль', level: 'A1', example: 'Das Salz ist wichtig zum Kochen.' },
        { article: 'die', de: 'Küche', transcription: 'KE-khuh', ru: 'кухня', level: 'A1', example: 'Die Küche ist sauber.' },
        { article: 'der', de: 'Tisch', transcription: 'TISH', ru: 'стол', level: 'A1', example: 'Der Tisch ist aus Holz.' },
        { article: 'der', de: 'Stuhl', transcription: 'SHOOL', ru: 'стул', level: 'A1', example: 'Der Stuhl ist rot.' },
        { article: 'die', de: 'Tür', transcription: 'TUER', ru: 'дверь', level: 'A1', example: 'Die Tür ist offen.' },
        { article: 'das', de: 'Fenster', transcription: 'FEN-ster', ru: 'окно', level: 'A1', example: 'Das Fenster ist groß.' },
        { article: 'das', de: 'Bett', transcription: 'BET', ru: 'кровать', level: 'A1', example: 'Das Bett ist bequem.' },
        { article: 'das', de: 'Licht', transcription: 'LIKHT', ru: 'свет', level: 'A1', example: 'Das Licht ist hell.' },
        { article: 'die', de: 'Sonne', transcription: 'ZO-nuh', ru: 'солнце', level: 'A1', example: 'Die Sonne scheint.' },
        { article: 'der', de: 'Mond', transcription: 'MOHNT', ru: 'луна', level: 'A1', example: 'Der Mond ist hell.' },
        { article: 'die', de: 'Stern', transcription: 'SHTAIRN', ru: 'звезда', level: 'A1', example: 'Die Sterne sind schön.' },
        { article: 'die', de: 'Wolke', transcription: 'VOLE-kuh', ru: 'облако', level: 'A1', example: 'Die Wolke ist weiß.' },
        { article: 'der', de: 'Regen', transcription: 'RAY-gen', ru: 'дождь', level: 'A1', example: 'Der Regen ist nass.' },
        { article: 'der', de: 'Wind', transcription: 'VINT', ru: 'ветер', level: 'A1', example: 'Der Wind ist stark.' },
        { article: 'die', de: 'Hitze', transcription: 'HIT-suh', ru: 'жара', level: 'A2', example: 'Die Hitze ist unerträglich.' },
        { article: 'die', de: 'Kälte', transcription: 'KEL-tuh', ru: 'холод', level: 'A2', example: 'Die Kälte ist intensiv.' },
        { article: 'der', de: 'Schnee', transcription: 'SHNAY', ru: 'снег', level: 'A1', example: 'Der Schnee ist weiß.' },
        { article: 'das', de: 'Eis', transcription: 'AYS', ru: 'лёд', level: 'A1', example: 'Das Eis ist kalt.' },
        { article: 'der', de: 'Sommer', transcription: 'ZO-mer', ru: 'лето', level: 'A1', example: 'Der Sommer ist warm.' },
        { article: 'der', de: 'Winter', transcription: 'VIN-ter', ru: 'зима', level: 'A1', example: 'Der Winter ist kalt.' },
        { article: 'der', de: 'Frühling', transcription: 'FRUE-ling', ru: 'весна', level: 'A1', example: 'Der Frühling ist grün.' },
        { article: 'der', de: 'Herbst', transcription: 'HERPST', ru: 'осень', level: 'A1', example: 'Der Herbst ist golden.' },
        { article: 'die', de: 'Zeit', transcription: 'TSAYT', ru: 'время', level: 'A1', example: 'Die Zeit vergeht schnell.' },
        { article: 'die', de: 'Stunde', transcription: 'SHTOON-duh', ru: 'час', level: 'A1', example: 'Eine Stunde hat 60 Minuten.' },
        { article: 'die', de: 'Minute', transcription: 'mi-NOO-tuh', ru: 'минута', level: 'A1', example: 'Eine Minute hat 60 Sekunden.' },
        { article: 'die', de: 'Sekunde', transcription: 'zay-KOON-duh', ru: 'секунда', level: 'A1', example: 'Die Sekunde vergeht schnell.' },
        { article: 'der', de: 'Montag', transcription: 'MON-tahk', ru: 'понедельник', level: 'A1', example: 'Montag ist der erste Arbeitstag.' },
        { article: 'der', de: 'Dienstag', transcription: 'DEEN-stahk', ru: 'вторник', level: 'A1', example: 'Dienstag kommt nach Montag.' },
        { article: 'der', de: 'Mittwoch', transcription: 'MIT-vokh', ru: 'среда', level: 'A1', example: 'Mittwoch ist in der Mitte der Woche.' },
        { article: 'der', de: 'Donnerstag', transcription: 'DO-ners-tahk', ru: 'четверг', level: 'A1', example: 'Donnerstag kommt vor Freitag.' },
        { article: 'der', de: 'Freitag', transcription: 'FRY-tahk', ru: 'пятница', level: 'A1', example: 'Freitag ist vor dem Wochenende.' },
        { article: 'der', de: 'Samstag', transcription: 'ZAM-stahk', ru: 'суббота', level: 'A1', example: 'Samstag ist am Wochenende.' },
        { article: 'der', de: 'Sonntag', transcription: 'ZO-ntahk', ru: 'воскресенье', level: 'A1', example: 'Sonntag ist der letzte Tag der Woche.' },
        { article: 'die', de: 'Auto', transcription: 'AU-to', ru: 'автомобиль', level: 'A1', example: 'Das Auto ist schnell.' },
        { article: 'das', de: 'Fahrrad', transcription: 'FAR-raht', ru: 'велосипед', level: 'A1', example: 'Das Fahrrad ist schnell.' },
        { article: 'der', de: 'Zug', transcription: 'TSOOK', ru: 'поезд', level: 'A1', example: 'Der Zug ist pünktlich.' },
        { article: 'das', de: 'Flugzeug', transcription: 'FLOOK-tsoyk', ru: 'самолёт', level: 'A1', example: 'Das Flugzeug fliegt hoch.' },
        { article: 'das', de: 'Schiff', transcription: 'SHIF', ru: 'корабль', level: 'A1', example: 'Das Schiff segelt auf dem Meer.' },
        { article: 'das', de: 'Meer', transcription: 'MAYR', ru: 'море', level: 'A1', example: 'Das Meer ist blau.' },
        { article: 'der', de: 'Strand', transcription: 'SHTRAHNT', ru: 'пляж', level: 'A1', example: 'Der Strand ist schön.' },
        { article: 'der', de: 'Berg', transcription: 'BAIRK', ru: 'гора', level: 'A1', example: 'Der Berg ist hoch.' },
        { article: 'der', de: 'Wald', transcription: 'VAHLT', ru: 'лес', level: 'A1', example: 'Der Wald ist dunkel.' },
        { article: 'der', de: 'Fluss', transcription: 'FLOOR-s', ru: 'река', level: 'A1', example: 'Der Fluss fließt langsam.' },
        { article: 'das', de: 'See', transcription: 'ZAY', ru: 'озеро', level: 'A1', example: 'Das See ist ruhig.' },
        { article: 'das', de: 'Land', transcription: 'LAHNT', ru: 'страна', level: 'A1', example: 'Deutschland ist ein großes Land.' },
        { article: 'die', de: 'Straße', transcription: 'SHTRASS-uh', ru: 'улица', level: 'A1', example: 'Die Straße ist breit.' },
        { article: 'der', de: 'Park', transcription: 'PAHRK', ru: 'парк', level: 'A1', example: 'Der Park ist grün.' },
        { article: 'das', de: 'Museum', transcription: 'moo-ZAY-oom', ru: 'музей', level: 'B1', example: 'Das Museum hat viele Kunstwerke.' },
        { article: 'die', de: 'Kirche', transcription: 'KIR-khuh', ru: 'церковь', level: 'B1', example: 'Die Kirche ist alt.' },
        { article: 'die', de: 'Brücke', transcription: 'BROO-kuh', ru: 'мост', level: 'A1', example: 'Die Brücke verbindet zwei Seiten.' },
        { article: 'das', de: 'Rathaus', transcription: 'RAHT-hous', ru: 'ратуша', level: 'B1', example: 'Das Rathaus ist im Zentrum.' },
        { article: 'der', de: 'Markt', transcription: 'MARKHT', ru: 'рынок', level: 'A1', example: 'Der Markt ist voll von Leuten.' },
        { article: 'das', de: 'Theater', transcription: 'tay-AH-ter', ru: 'театр', level: 'B1', example: 'Das Theater ist beeindruckend.' },
        { article: 'das', de: 'Kino', transcription: 'KEE-no', ru: 'кинотеатр', level: 'B1', example: 'Das Kino zeigt neue Filme.' },
        { article: 'die', de: 'Bibliothek', transcription: 'bib-lee-o-TAY-k', ru: 'библиотека', level: 'B1', example: 'Die Bibliothek hat viele Bücher.' },
        { article: 'das', de: 'Krankenhaus', transcription: 'KRAHN-ken-hous', ru: 'больница', level: 'B1', example: 'Das Krankenhaus hilft Menschen.' },
        { article: 'der', de: 'Arzt', transcription: 'AHRTST', ru: 'врач', level: 'A1', example: 'Der Arzt heilt kranke Menschen.' },
        { article: 'die', de: 'Krankheit', transcription: 'KRAHN-kite', ru: 'болезнь', level: 'B1', example: 'Die Krankheit ist schwer.' },
        { article: 'der', de: 'Kopfschmerz', transcription: 'KOPF-shmer-ts', ru: 'головная боль', level: 'B1', example: 'Der Kopfschmerz ist unangenehm.' },
        { article: 'die', de: 'Medizin', transcription: 'med-i-TSEEN', ru: 'медицина', level: 'B1', example: 'Die Medizin hilft bei Krankheiten.' },
        { article: 'die', de: 'Musik', transcription: 'moo-ZEEK', ru: 'музыка', level: 'A1', example: 'Die Musik ist schön.' },
        { article: 'das', de: 'Lied', transcription: 'LEET', ru: 'песня', level: 'A1', example: 'Das Lied ist wunderbar.' },
        { article: 'das', de: 'Klavier', transcription: 'klah-veer', ru: 'пианино', level: 'B1', example: 'Das Klavier klingt wunderbar.' },
        { article: 'die', de: 'Gitarre', transcription: 'gi-TAR-uh', ru: 'гитара', level: 'B1', example: 'Die Gitarre ist ein schönes Instrument.' },
        { article: 'die', de: 'Trompete', transcription: 'trom-PAY-tuh', ru: 'труба', level: 'B1', example: 'Die Trompete ist laut.' },
        { article: 'die', de: 'Trommel', transcription: 'TRO-mel', ru: 'барабан', level: 'B1', example: 'Die Trommel macht laute Geräusche.' },
        { article: 'der', de: 'Sport', transcription: 'SPORT', ru: 'спорт', level: 'A1', example: 'Der Sport ist gesund.' },
        { article: 'das', de: 'Fußball', transcription: 'FOOS-bal', ru: 'футбол', level: 'A1', example: 'Der Fußball ist populär.' },
        { article: 'das', de: 'Basketball', transcription: 'BAS-ket-bal', ru: 'баскетбол', level: 'B1', example: 'Das Basketball ist interessant.' },
        { article: 'das', de: 'Tennis', transcription: 'TEN-is', ru: 'теннис', level: 'B1', example: 'Das Tennis ist ein eleganter Sport.' },
        { article: 'das', de: 'Schwimmen', transcription: 'SHVIM-en', ru: 'плавание', level: 'A1', example: 'Das Schwimmen ist erfrischend.' },
        { article: 'das', de: 'Laufen', transcription: 'LAU-fen', ru: 'бег', level: 'A1', example: 'Das Laufen ist eine gute Übung.' }
    ],

    GAME_QUESTIONS: [
        { de: 'Guten Tag', ru: 'Добрый день', level: 'A1' },
        { de: 'Wie heißt du?', ru: 'Как тебя зовут?', level: 'A1' },
        { de: 'Ich bin Student', ru: 'Я студент', level: 'A1' },
        { de: 'Das Wasser ist kalt', ru: 'Вода холодная', level: 'A1' },
        { de: 'Der Baum ist grün', ru: 'Дерево зеленое', level: 'A1' },
        { de: 'Sie arbeitet als Arzt', ru: 'Она работает врачом', level: 'B1' },
        { de: 'Dies ist sehr interessant', ru: 'Это очень интересно', level: 'B1' },
        { de: 'Ich habe das Buch gelesen', ru: 'Я прочитал книгу', level: 'B1' },
        { de: 'Wenn ich Zeit hätte, würde ich reisen', ru: 'Если бы у меня было время, я бы путешествовал', level: 'B2' },
        { de: 'Trotzdem bin ich der Meinung, dass...', ru: 'Тем не менее я думаю, что...', level: 'B2' }
    ],

    GRAMMAR_SENTENCES: [
        { wrong: 'Ich goes zu Schule', correct: 'Ich gehe zur Schule', tip: 'используй ich gehe' },
        { wrong: 'Das buch ist rot', correct: 'Das Buch ist rot', tip: 'Существительные пишутся с большой буквы' },
        { wrong: 'Er hat essen bread', correct: 'Er hat Brot gegessen', tip: 'используй правильный порядок слов' },
        { wrong: 'Sie wollen nicht gehen', correct: 'Sie wollen nicht gehen', tip: 'Неправильно?' },
        { wrong: 'Ich bin gehen', correct: 'Ich bin gegangen', tip: 'используй Partizip Perfekt' },
        { wrong: 'Das Mann ist groß', correct: 'Der Mann ist groß', tip: 'Der (мужской род), не das' },
        { wrong: 'Wir haben spieled', correct: 'Wir haben gespielt', tip: 'Правильный Partizip: gespielt' },
        { wrong: 'Ich kann spricht Deutsch', correct: 'Ich kann Deutsch sprechen', tip: 'после модальных глаголов - инфинитив' },
        { wrong: 'Die Fenster sind geöffnet worden', correct: 'Die Fenster sind geöffnet sein', tip: 'Проверь логику предложения' },
        { wrong: 'Zu gehen ist wichtig', correct: 'Zu gehen ist wichtig', tip: 'Правильно. Инфинитив с zu' }
    ],

    Storage: {
        get(key) {
            try {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : null;
            } catch {
                return null;
            }
        },
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch {
                console.error('Storage error:', key);
            }
        },
        clear(key) {
            localStorage.removeItem(key);
        }
    },

    Toast: {
        show(message, type = 'info') {
            const container = document.getElementById('toastContainer');
            if (!container) return;

            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.textContent = message;
            container.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 3000);
        }
    },

    UI: {
        closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        },
        openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.classList.add('modal-open');
            }
        },
        updateNavbar() {
            const currentUser = window.App.Auth.getCurrentUser();
            const navStatus = document.getElementById('navbarStatus');
            const loginBtn = document.getElementById('loginBtn');
            const registerBtn = document.getElementById('registerBtn');
            const logoutBtn = document.getElementById('logoutBtn');

            if (currentUser) {
                if (navStatus) navStatus.textContent = `${currentUser.avatar} ${currentUser.name}`;
                if (loginBtn) loginBtn.style.display = 'none';
                if (registerBtn) registerBtn.style.display = 'none';
                if (logoutBtn) logoutBtn.style.display = 'inline-block';
            } else {
                if (navStatus) navStatus.textContent = 'Гость';
                if (loginBtn) loginBtn.style.display = 'inline-block';
                if (registerBtn) registerBtn.style.display = 'inline-block';
                if (logoutBtn) logoutBtn.style.display = 'none';
            }
        }
    },

    Parallax3D: {
        container: null,
        requestId: null,
        
        init() {
            this.container = document.getElementById('hero');
            if (!this.container) return;

            document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        },

        onMouseMove(e) {
            if (!this.container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            const rect = this.container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateX = (y - 0.5) * 10;
            const rotateY = (x - 0.5) * 10;

            const heroContent = this.container.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        }
    },

    Auth: {
        users: [],

        init() {
            this.users = window.App.Storage.get('users') || this.getSeedUsers();
            window.App.Storage.set('users', this.users);
        },

        getSeedUsers() {
            return [
                { id: 1, name: 'Stefan', email: 'stefan@example.com', avatar: '👨‍💻', points: 850, password: 'pass123' },
                { id: 2, name: 'Maria', email: 'maria@example.com', avatar: '👩‍💻', points: 920, password: 'pass123' },
                { id: 3, name: 'Klaus', email: 'klaus@example.com', avatar: '🧑‍🎓', points: 780, password: 'pass123' },
                { id: 4, name: 'Anna', email: 'anna@example.com', avatar: '👩‍🏫', points: 1050, password: 'pass123' },
                { id: 5, name: 'Thomas', email: 'thomas@example.com', avatar: '🥸', points: 650, password: 'pass123' }
            ];
        },

        getCurrentUser() {
            return window.App.Storage.get('currentUser');
        },

        setCurrentUser(user) {
            window.App.Storage.set('currentUser', user);
        },

        register(name, email, password, avatar) {
            const exists = this.users.some(u => u.email === email);
            if (exists) {
                window.App.Toast.show('Email уже зарегистрирован', 'error');
                return false;
            }

            const user = {
                id: Math.max(...this.users.map(u => u.id), 0) + 1,
                name,
                email,
                password,
                avatar,
                points: 0
            };

            this.users.push(user);
            window.App.Storage.set('users', this.users);
            this.setCurrentUser(user);
            window.App.Toast.show('Регистрация успешна!', 'success');
            return true;
        },

        login(email, password) {
            const user = this.users.find(u => u.email === email && u.password === password);
            if (!user) {
                window.App.Toast.show('Email или пароль неверны', 'error');
                return false;
            }

            this.setCurrentUser(user);
            window.App.Toast.show('Вы успешно вошли!', 'success');
            return true;
        },

        logout() {
            window.App.Storage.clear('currentUser');
            window.App.Toast.show('Вы вышли из системы', 'info');
        }
    },

    Dictionary: {
        displayedCount: 12,

        init() {
            const searchInput = document.getElementById('dictSearch');
            const levelSelect = document.getElementById('dictLevel');
            const loadMoreBtn = document.getElementById('dictionaryLoadMore');

            if (searchInput) searchInput.addEventListener('input', () => this.render());
            if (levelSelect) levelSelect.addEventListener('change', () => this.render());
            if (loadMoreBtn) loadMoreBtn.addEventListener('click', () => this.loadMore());

            this.render();
        },

        getFiltered() {
            const search = document.getElementById('dictSearch')?.value.toLowerCase() || '';
            const level = document.getElementById('dictLevel')?.value || '';

            return window.App.DICTIONARY.filter(word => {
                const matchSearch = !search || word.de.toLowerCase().includes(search) || word.ru.toLowerCase().includes(search);
                const matchLevel = !level || word.level === level;
                return matchSearch && matchLevel;
            });
        },

        render() {
            const list = document.getElementById('dictionaryList');
            const filtered = this.getFiltered();
            const displayed = filtered.slice(0, this.displayedCount);

            if (!list) return;
            list.innerHTML = '';

            displayed.forEach(word => {
                const card = document.createElement('div');
                card.className = 'word-card';
                card.innerHTML = `
                    <div class="word-header">
                        <div>
                            <span class="word-article">${word.article}</span>
                            <span class="word-de">${word.de}</span>
                        </div>
                        <span class="word-level">${word.level}</span>
                    </div>
                    <div class="word-transcription">[${word.transcription}]</div>
                    <div class="word-ru">${word.ru}</div>
                    <div class="word-example">"${word.example}"</div>
                    <div class="word-actions">
                        <button class="btn-sound">🔊 Озвучить</button>
                        <button class="btn-favorite">⭐ Избранное</button>
                    </div>
                `;
                list.appendChild(card);

                const soundBtn = card.querySelector('.btn-sound');
                const favoriteBtn = card.querySelector('.btn-favorite');

                if (soundBtn) {
                    soundBtn.addEventListener('click', () => this.speak(word.de));
                }

                if (favoriteBtn) {
                    const currentUser = window.App.Auth.getCurrentUser();
                    if (!currentUser) {
                        favoriteBtn.disabled = true;
                    } else {
                        const favorites = window.App.Storage.get(`favorites_${currentUser.id}`) || [];
                        if (favorites.includes(word.de)) {
                            favoriteBtn.classList.add('active');
                        }

                        favoriteBtn.addEventListener('click', () => this.toggleFavorite(word.de, currentUser));
                    }
                }
            });

            const loadMoreBtn = document.getElementById('dictionaryLoadMore');
            if (loadMoreBtn) {
                loadMoreBtn.style.display = this.displayedCount < filtered.length ? 'block' : 'none';
            }
        },

        loadMore() {
            this.displayedCount += 12;
            this.render();
        },

        speak(word) {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(word);
                utterance.lang = 'de-DE';
                speechSynthesis.speak(utterance);
            }
        },

        toggleFavorite(word, user) {
            if (!user) {
                window.App.Toast.show('Сначала войдите', 'info');
                return;
            }

            const key = `favorites_${user.id}`;
            let favorites = window.App.Storage.get(key) || [];

            if (favorites.includes(word)) {
                favorites = favorites.filter(w => w !== word);
            } else {
                favorites.push(word);
            }

            window.App.Storage.set(key, favorites);
            window.App.Toast.show('Избранное обновлено', 'success');
            this.render();
        }
    },

    Games: {
        init() {
            const duelBtn = document.getElementById('gameDuelBtn');
            const quizBtn = document.getElementById('gameQuizBtn');
            const grammarBtn = document.getElementById('gameGrammarBtn');

            if (duelBtn) duelBtn.addEventListener('click', () => this.startGame('duel'));
            if (quizBtn) quizBtn.addEventListener('click', () => this.startGame('quiz'));
            if (grammarBtn) grammarBtn.addEventListener('click', () => this.startGame('grammar'));
        },

        startGame(type) {
            const currentUser = window.App.Auth.getCurrentUser();
            if (!currentUser) {
                window.App.Toast.show('Сначала войдите', 'info');
                return;
            }

            switch (type) {
                case 'duel':
                    this.playDuel();
                    break;
                case 'quiz':
                    this.playQuiz();
                    break;
                case 'grammar':
                    this.playGrammar();
                    break;
            }
        },

        playDuel() {
            let correct = 0;
            const totalQuestions = 10;
            let timeLeft = 20;

            const showQuestion = (index) => {
                if (index >= totalQuestions || timeLeft <= 0) {
                    this.showResult('⚔️ Дуэль', correct, totalQuestions);
                    return;
                }

                const question = window.App.GAME_QUESTIONS[Math.floor(Math.random() * window.App.GAME_QUESTIONS.length)];
                const isCorrect = Math.random() > 0.5;

                const resultTitle = `Вопрос ${index + 1}/${totalQuestions} (${timeLeft}c)`;
                const resultText = `${resultTitle}<br>${question.de}<br><b>${question.ru}</b>`;
                
                if (isCorrect) {
                    correct++;
                }

                setTimeout(() => showQuestion(index + 1), 1000);
            };

            const timer = setInterval(() => {
                timeLeft--;
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    this.showResult('⚔️ Дуэль', correct, totalQuestions);
                }
            }, 1000);

            showQuestion(0);
        },

        playQuiz() {
            let correct = 0;
            const questions = window.App.GAME_QUESTIONS.slice(0, 5);

            const askQuestion = (index) => {
                if (index >= questions.length) {
                    this.showResult('🎯 Викторина', correct, questions.length);
                    return;
                }

                const question = questions[index];
                const isCorrect = Math.random() > 0.4;
                if (isCorrect) correct++;

                setTimeout(() => askQuestion(index + 1), 1500);
            };

            askQuestion(0);
        },

        playGrammar() {
            let correct = 0;
            const sentences = window.App.GRAMMAR_SENTENCES.slice(0, 10);

            sentences.forEach((sentence, index) => {
                const random = Math.random();
                if (random > 0.3) correct++;
            });

            this.showResult('🏃 Грамматический забег', correct, sentences.length);
        },

        showResult(title, points, total) {
            const currentUser = window.App.Auth.getCurrentUser();
            if (currentUser) {
                const user = window.App.Auth.users.find(u => u.id === currentUser.id);
                if (user) {
                    user.points += points * 10;
                    window.App.Auth.setCurrentUser(user);
                    window.App.Storage.set('users', window.App.Auth.users);
                }
            }

            const resultTitle = document.getElementById('gameResultTitle');
            const resultContent = document.getElementById('gameResultContent');

            if (resultTitle) resultTitle.textContent = title;
            if (resultContent) {
                resultContent.innerHTML = `
                    <p style="font-size: 1.2rem; margin: 1rem 0;">
                        Вы набрали <strong>${points * 10}</strong> очков!
                    </p>
                    <p style="color: rgba(245, 245, 245, 0.7);">
                        Правильных ответов: ${points}/${total}
                    </p>
                `;
            }

            window.App.UI.openModal('gameResultModal');
        }
    },

    Chat: {
        currentRoom: 'A1-A2',
        bots: [
            { name: 'Bot Berti', avatar: '🤖' },
            { name: 'Bot Sophia', avatar: '🦾' },
            { name: 'Bot Klaus', avatar: '🎭' },
            { name: 'Bot Marie', avatar: '💬' },
            { name: 'Bot Hans', avatar: '🎯' }
        ],

        init() {
            const roomBtns = document.querySelectorAll('.chat-room-btn');
            const sendBtn = document.getElementById('chatSendBtn');
            const chatInput = document.getElementById('chatInput');

            roomBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    this.switchRoom(e.target.dataset.room);
                });
            });

            if (sendBtn) sendBtn.addEventListener('click', () => this.sendMessage());
            if (chatInput) {
                chatInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.sendMessage();
                });
            }

            this.loadMessages();
            this.renderOnlineUsers();
            this.startBotMessages();
        },

        switchRoom(room) {
            this.currentRoom = room;
            const roomBtns = document.querySelectorAll('.chat-room-btn');
            roomBtns.forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.querySelector(`[data-room="${room}"]`);
            if (activeBtn) activeBtn.classList.add('active');

            const roomTitle = document.getElementById('chatRoomTitle');
            if (roomTitle) roomTitle.textContent = room;

            this.loadMessages();
        },

        sendMessage() {
            const currentUser = window.App.Auth.getCurrentUser();
            if (!currentUser) {
                window.App.Toast.show('Сначала войдите', 'info');
                return;
            }

            const input = document.getElementById('chatInput');
            const text = input?.value.trim();
            if (!text || !input) return;

            const message = {
                name: currentUser.name,
                avatar: currentUser.avatar,
                text,
                time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
            };

            let messages = window.App.Storage.get(`messages_${this.currentRoom}`) || [];
            messages.push(message);
            window.App.Storage.set(`messages_${this.currentRoom}`, messages);

            input.value = '';
            this.loadMessages();
        },

        loadMessages() {
            const chatMessages = document.getElementById('chatMessages');
            if (!chatMessages) return;

            const messages = window.App.Storage.get(`messages_${this.currentRoom}`) || [];
            chatMessages.innerHTML = '';

            messages.forEach(msg => {
                const msgEl = document.createElement('div');
                msgEl.className = 'chat-message';
                msgEl.innerHTML = `
                    <div class="chat-message-content">
                        <div class="chat-avatar">${msg.avatar}</div>
                        <div class="chat-message-body">
                            <div class="chat-message-header">
                                <span class="chat-message-name">${msg.name}</span>
                                <span class="chat-message-time">${msg.time}</span>
                            </div>
                            <div class="chat-message-text">${msg.text}</div>
                        </div>
                    </div>
                `;
                chatMessages.appendChild(msgEl);
            });

            chatMessages.scrollTop = chatMessages.scrollHeight;
        },

        renderOnlineUsers() {
            const currentUser = window.App.Auth.getCurrentUser();
            const onlineUsers = document.getElementById('onlineUsers');
            if (!onlineUsers) return;

            onlineUsers.innerHTML = '';

            if (currentUser) {
                const userEl = document.createElement('div');
                userEl.className = 'online-user';
                userEl.innerHTML = `${currentUser.avatar} ${currentUser.name}`;
                onlineUsers.appendChild(userEl);
            }

            this.bots.slice(0, 4).forEach(bot => {
                const botEl = document.createElement('div');
                botEl.className = 'online-user';
                botEl.innerHTML = `${bot.avatar} ${bot.name}`;
                onlineUsers.appendChild(botEl);
            });
        },

        startBotMessages() {
            setInterval(() => {
                const randomBot = this.bots[Math.floor(Math.random() * this.bots.length)];
                const botMessages = [
                    'Das ist interessant!',
                    'Ich bin einer Meinung.',
                    'Guter Punkt!',
                    'Danke für die Info!',
                    'Das hilft mir sehr!',
                    'Lass mich darüber nachdenken.',
                    'Das ist wunderbar!',
                    'Ich stimme dir zu.'
                ];

                const randomMsg = botMessages[Math.floor(Math.random() * botMessages.length)];

                const message = {
                    name: randomBot.name,
                    avatar: randomBot.avatar,
                    text: randomMsg,
                    time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
                };

                let messages = window.App.Storage.get(`messages_${this.currentRoom}`) || [];
                messages.push(message);
                window.App.Storage.set(`messages_${this.currentRoom}`, messages);

                this.loadMessages();
            }, 15000);
        }
    },

    Leaderboard: {
        init() {
            const fullBtn = document.getElementById('leaderboardFullBtn');
            const fullClose = document.getElementById('leaderboardFullClose');

            if (fullBtn) fullBtn.addEventListener('click', () => window.App.UI.openModal('leaderboardFullModal'));
            if (fullClose) fullClose.addEventListener('click', () => window.App.UI.closeModal('leaderboardFullModal'));

            this.render();
        },

        getTopUsers() {
            const users = [...window.App.Auth.users].sort((a, b) => b.points - a.points);
            return users.slice(0, 10);
        },

        getMedal(rank) {
            const medals = ['🥇', '🥈', '🥉'];
            return medals[rank - 1] || `#${rank}`;
        },

        render() {
            const topUsers = this.getTopUsers();
            const container = document.getElementById('leaderboardTop');

            if (!container) return;
            container.innerHTML = '';

            topUsers.forEach((user, index) => {
                const rank = index + 1;
                const medal = this.getMedal(rank);
                const item = document.createElement('div');
                item.className = 'leaderboard-item';
                item.innerHTML = `
                    <div class="leaderboard-rank">
                        <span class="rank-medal">${medal}</span>
                    </div>
                    <div class="leaderboard-user-info">
                        <div class="leaderboard-avatar">${user.avatar}</div>
                        <div class="leaderboard-name">${user.name}</div>
                    </div>
                    <div class="leaderboard-points">
                        ${user.points} <span style="font-size: 0.8rem;">очков</span>
                    </div>
                `;
                container.appendChild(item);
            });

            this.renderFull();
        },

        renderFull() {
            const allUsers = [...window.App.Auth.users].sort((a, b) => b.points - a.points);
            const fullContainer = document.getElementById('leaderboardFull');

            if (!fullContainer) return;
            fullContainer.innerHTML = '';

            allUsers.forEach((user, index) => {
                const rank = index + 1;
                const medal = this.getMedal(rank);
                const item = document.createElement('div');
                item.className = 'leaderboard-item';
                item.innerHTML = `
                    <div class="leaderboard-rank">
                        <span class="rank-medal">${medal}</span>
                    </div>
                    <div class="leaderboard-user-info">
                        <div class="leaderboard-avatar">${user.avatar}</div>
                        <div class="leaderboard-name">${user.name}</div>
                    </div>
                    <div class="leaderboard-points">
                        ${user.points} <span style="font-size: 0.8rem;">очков</span>
                    </div>
                `;
                fullContainer.appendChild(item);
            });
        }
    },

    init() {
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initAfterDOM());
        } else {
            this.initAfterDOM();
        }
    },

    initAfterDOM() {
        // Auth
        this.Auth.init();
        this.UI.updateNavbar();

        // Modals
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const loginClose = document.getElementById('loginClose');
        const registerClose = document.getElementById('registerClose');
        const logoutBtn = document.getElementById('logoutBtn');

        if (loginBtn) loginBtn.addEventListener('click', () => window.App.UI.openModal('loginModal'));
        if (registerBtn) registerBtn.addEventListener('click', () => window.App.UI.openModal('registerModal'));
        if (loginClose) loginClose.addEventListener('click', () => window.App.UI.closeModal('loginModal'));
        if (registerClose) registerClose.addEventListener('click', () => window.App.UI.closeModal('registerModal'));
        if (logoutBtn) logoutBtn.addEventListener('click', () => {
            this.Auth.logout();
            this.UI.updateNavbar();
            window.App.UI.closeModal('loginModal');
            window.App.UI.closeModal('registerModal');
        });

        // Modal closers
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.classList.remove('modal-open');
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.active').forEach(modal => {
                    modal.classList.remove('active');
                    document.body.classList.remove('modal-open');
                });
            }
        });

        // Forms
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const gameResultClose = document.getElementById('gameResultClose');
        const gameResultBtn = document.getElementById('gameResultBtn');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('loginEmail')?.value;
                const password = document.getElementById('loginPassword')?.value;
                if (this.Auth.login(email, password)) {
                    loginForm.reset();
                    window.App.UI.closeModal('loginModal');
                    this.UI.updateNavbar();
                }
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('registerName')?.value;
                const email = document.getElementById('registerEmail')?.value;
                const password = document.getElementById('registerPassword')?.value;
                const selectedAvatar = document.querySelector('.avatar-option.selected');
                const avatar = selectedAvatar ? selectedAvatar.textContent : this.DEFAULT_AVATARS[0];

                if (this.Auth.register(name, email, password, avatar)) {
                    registerForm.reset();
                    document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
                    window.App.UI.closeModal('registerModal');
                    this.UI.updateNavbar();
                }
            });
        }

        // Avatar selector
        const avatarOptions = document.getElementById('avatarOptions');
        if (avatarOptions) {
            this.DEFAULT_AVATARS.forEach(avatar => {
                const opt = document.createElement('div');
                opt.className = 'avatar-option';
                opt.textContent = avatar;
                opt.addEventListener('click', () => {
                    document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
                    opt.classList.add('selected');
                });
                avatarOptions.appendChild(opt);
            });
        }

        if (gameResultClose) gameResultClose.addEventListener('click', () => window.App.UI.closeModal('gameResultModal'));
        if (gameResultBtn) gameResultBtn.addEventListener('click', () => window.App.UI.closeModal('gameResultModal'));

        // CTA scroll
        const ctaBtn = document.getElementById('ctaBtn');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => {
                const dictionaryEl = document.getElementById('dictionary');
                if (dictionaryEl) dictionaryEl.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Modules
        this.Parallax3D.init();
        this.Dictionary.init();
        this.Games.init();
        this.Chat.init();
        this.Leaderboard.init();
    }
};

// Start app
window.App.init();
