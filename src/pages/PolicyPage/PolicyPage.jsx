import { usePageMeta } from "../../hooks/usePageMeta";
import "./PolicyPage.scss";

function PolicyPage() {
  usePageMeta(
    "Regulamin sklepu - Kombo",
    "Regulamin sklepu internetowego Kombo – zasady korzystania ze sklepu kombosklep.pl.",
  );

  return (
    <div className="policy-page">
      <h1>Regulamin sklepu</h1>
      <h3>Regulamin sklepu internetowego Kombo</h3>
      <div className="policy-page__content">
        <div className="policy-page__title">
          <b>Rozdział 1.</b> Postanowienia ogólne, kontakt z właścicielem sklepu
        </div>
        <ol>
          <li>
            Niniejszy regulamin (dalej „Regulamin”) określa zasady i warunki korzystania ze sklepu
            internetowego Kombo, działającego pod adresem www https://kombosklep.pl.
          </li>
          <li>
            Właścicielem Sklepu jest Elżbieta Naron-Grochalska, przedsiębiorca prowadzący działalność gospodarczą
            pod firmą Elgro ELŻBIETA NARON-GROCHALSKA Strzelin z siedzibą pod adresem: ul. Galla
            Anonima 12 57-100 Strzelin wpisany do Centralnej Ewidencji i Informacji o Działalności
            Gospodarczej, NIP: 6-211-119-942, REGON: 386-436-215 (dalej „Sprzedawca”).
          </li>
          <li>
            Dane kontaktowe Sprzedawcy są następujące:
            <br />
            Adres do kontaktu: ul. Gazowa 52/11, 50-513 Wrocław
            <br />
            Adres e-mail: info@kombosklep.pl
            <br />
            Numer telefonu: 518-730-717 (godziny obsługi telefonicznej klientów – w zakładce Kontakt).
          </li>
        </ol>

        <div className="policy-page__title">
          <b>Rozdział 2.</b> Wymagania techniczne
        </div>
        <ol>
          <li>
            W celu korzystania ze Sklepu niezbędne jest posiadanie:
            <ul className="policy-page__list">
              <li>komputera lub innego urządzenia z przeglądarką internetową;</li>
              <li>dostępu do sieci Internet;</li>
              <li>aktywnego adresu e-mail.</li>
            </ul>
          </li>
        </ol>

        <div className="policy-page__title">
          <b>Rozdział 3.</b> Dane osobowe
        </div>
        <ol>
          <li>Administratorem danych osobowych klientów Sklepu jest Sprzedawca.</li>
          <li>
            Wszelkie informacje o przetwarzaniu danych osobowych klientów, jak i innych osób
            korzystających ze strony internetowej Sklepu można przeczytać w Polityce prywatności.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>Rozdział 4.</b> Zawarcie umowy sprzedaży
        </div>
        <ol>
          <li>
            Sklep umożliwia zakup towarów (dalej „Towary”), uwidocznionych na stronie internetowej
            Sklepu. Aby dokonać zakupu, <b>nie jest potrzebna rejestracja</b> ani założenie konta w
            sklepie. <b>Zamówienia składane są wyłącznie</b> w trybie opisanym poniżej — Sklep{" "}
            <b>nie umożliwia</b> złożenia zamówienia za pośrednictwem koszyka, formularza zamówienia
            ani innych mechanizmów online na stronie Sklepu.
            <br />
            W celu złożenia zamówienia należy:
            <ul className="policy-page__list">
              <li>
                <b>złożyć zamówienie telefonicznie</b>, kontaktując się ze Sprzedawcą pod numerem
                podanym w zakładce Kontakt — podając <b>adres e-mail</b> oraz <b>szczegóły zamówienia</b>{" "}
                (m.in. wybrane Towary, preferowany sposób dostawy i płatności),
              </li>
              <li>
                <b>otrzymywać od Sprzedawcy wiadomość e-mail</b> ze szczegółami zamówienia (Towary,
                ceny oraz ustalony sposób dostawy i płatności),
              </li>
              <li>
                <b>odpowiedzieć na tę wiadomość e-mail</b>, potwierdzając zamówienie (akceptacja
                warunków oraz wyrażenie woli realizacji zamówienia zgodnie z Regulaminem).
              </li>
            </ul>
          </li>
          <li>
            Informacje o produktach w Sklepie (opisy i ceny) stanowią{" "}
            <b>zaproszenie do zawarcia umowy sprzedaży</b> w rozumieniu art. 71 k.c., zgodnie z
            warunkami Regulaminu.
          </li>
          <li>
            Warunkiem złożenia zamówienia jest{" "}
            <b>podanie w korespondencji e-mailowej ze Sprzedawcą</b>{" "}
            <b>wszystkich wymaganych danych</b> koniecznych do wykonania umowy oraz — na życzenie
            klienta — danych do wygenerowania faktury VAT.
          </li>
          <li>
            <b>Potwierdzenie zamówienia</b> wiadomością e-mail — odpowiedź na wiadomość Sprzedawcy, o
            której mowa w pkt 1 — oznacza:
            <ul className="policy-page__list">
              <li>
                złożenie Sprzedawcy oferty zakupu Towarów na warunkach określonych w korespondencji
                e-mailowej oraz w Regulaminie,
              </li>
              <li>
                akceptację obowiązku zapłaty ceny Towarów oraz kosztów dostawy w wysokości wskazanej
                przez Sprzedawcę w wiadomości e-mail ze szczegółami zamówienia.
              </li>
            </ul>
          </li>
          <li>
            Do zawarcia umowy sprzedaży (dalej „Umowa”) dochodzi z chwilą{" "}
            <b>przyjęcia przez Sprzedawcę do realizacji zamówienia</b>, którego klient dokonał
            zgodnie z pkt 1 i potwierdził zgodnie z pkt 4. Sprzedawca informuje o przyjęciu zamówienia
            do realizacji wiadomością e-mail.
          </li>
          <li>
            Gdy <b>realizacja zamówienia nie jest możliwa</b> (w całości lub w części):
            <ul className="policy-page__list">
              <li>
                Sprzedawca informuje klienta — <b>Umowa wówczas nie powstaje</b>,
              </li>
              <li>
                przedstawia możliwe alternatywy (np. częściowa realizacja, oczekiwanie na uzupełnienie
                stanów),
              </li>
              <li>
                jeśli zamówienie było opłacone, a nie można go zrealizować —{" "}
                <b>niezwłoczny zwrot płatności</b> (w zakresie anulowania).
              </li>
            </ul>
          </li>
          <li>
            Sprzedawca przekazuje klientowi potwierdzenie zawarcia Umowy na trwałym nośniku{" "}
            <b>najpóźniej w momencie dostarczenia Towaru</b>.
          </li>
          <li>
            Sklep <b>nie ponosi odpowiedzialności</b> za niedostarczenie zamówienia lub opóźnienie w
            dostawie wynikające z podania przez klienta niepełnego lub błędnego adresu dostawy albo
            braku innych danych niezbędnych do realizacji zamówienia.
          </li>
          <li>
            Sprzedawca zastrzega sobie prawo do <b>wstrzymania realizacji zamówienia</b>, gdy klient
            podał nieprawdziwe dane lub dane budzą uzasadnione wątpliwości. W takiej sytuacji
            Sprzedawca — o ile to możliwe — skontaktuje się z klientem w celu weryfikacji danych.
          </li>
        </ol>

        <div className="policy-page__title">
  <b>Rozdział 5.</b> Ceny i metody płatności
</div>

<ol>
  <li>
    Ceny Towarów podawane na stronie Sklepu są w walucie{" "}
    <b>złoty polski (PLN)</b> oraz w kwocie <b>brutto</b> (wraz z podatkiem VAT).
    Informacje te mają charakter zaproszenia do zawarcia umowy (rozdział 4, pkt 2);{" "}
    <b>ostateczna cena</b> zamówionych Towarów oraz <b>koszt dostawy</b> podawane są
    klientowi w <b>wiadomości e-mail</b> Sprzedawcy ze szczegółami zamówienia
    (rozdział 4, pkt 1).
  </li>

  <li>
    <b>Koszt dostawy</b> ustalany jest indywidualnie i podawany klientowi
    w korespondencji ze Sprzedawcą (w szczególności w wiadomości e-mail ze
    szczegółami zamówienia), w zależności od wybranego sposobu dostawy
    i zakresu zamówienia.
  </li>

  <li>
    <b>Dostępne metody płatności</b> są uzgadniane ze Sprzedawcą przy składaniu
    zamówienia (kontakt telefoniczny oraz korespondencja e-mailowa, zgodnie
    z rozdziałem 4, pkt 1) i wskazywane w wiadomości e-mail ze szczegółami
    zamówienia.
  </li>

  <li>
    Sklep oferuje następujące metody płatności:
    <ul className="policy-page__list">
      <li>tradycyjny przelew bankowy na rachunek Sprzedawcy,</li>
      <li>
        płatność gotówką przy odbiorze osobistym w punkcie stacjonarnym Sklepu.
      </li>
    </ul>
  </li>

  <li>
    Jeżeli klient wybrał płatność zwykłym przelewem bankowym, zapłata za
    zamówienie powinna nastąpić w terminie <b>2 dni</b> od{" "}
    <b>przyjęcia zamówienia przez Sprzedawcę do realizacji</b> (rozdział 4,
    pkt 5), o ile w wiadomości e-mail Sprzedawcy nie wskazano innego terminu.
    W braku zapłaty w ww. terminie Umowę uważa się za niezawartą. Zdanie
    poprzednie nie dotyczy sytuacji, gdy Sprzedawca oferuje klientom płatność
    odroczoną lub płatność w ratach za pośrednictwem zewnętrznego partnera.
  </li>
</ol>
<div className="policy-page__title">
  <b>Rozdział 6.</b> Dostawa towarów
</div>

<ol>
  <li>
    Dostawa Towarów odbywa się wedle wyboru klienta:
    <ul className="policy-page__list">
      <li>za pośrednictwem firmy kurierskiej,</li>
      <li>za pośrednictwem Poczty Polskiej,</li>
      <li>do paczkomatów InPost,</li>
      <li>za pośrednictwem ORLEN Paczki,</li>
      <li>poprzez odbiór osobisty.</li>
    </ul>
  </li>

  <li>
    Klient może również dokonać <b>odbioru osobistego zamówienia</b> w siedzibie
    firmy Sprzedawcy.
  </li>

  <li>
    Z wyjątkiem Towarów odbieranych przez klienta osobiście, zamówienie uważa się
    za zrealizowane z chwilą <b>nadania przesyłki do klienta</b>, tj. powierzenia
    przesyłki przewoźnikowi trudniącemu się przewozem tego rodzaju przesyłek.
    Dokładny rzeczywisty termin doręczenia przesyłki określa przewoźnik.
  </li>

  <li>
    Towary wysyłane są przez Sprzedawcę w terminie do <b>30 dni</b>, chyba że
    przy składaniu zamówienia wyraźnie wskazano inny termin realizacji.
    Szczegółowy termin realizacji zamówienia może zostać wskazany na stronie
    Sklepu lub przekazany klientowi przez Sprzedawcę w indywidualnej wiadomości,
    w szczególności w wiadomości e-mail ze szczegółami zamówienia.
  </li>

  <li>
    Sprzedawca standardowo realizuje dostawy na terenie{" "}
    <b>Rzeczypospolitej Polskiej</b>. Koszt dostawy jest ustalany zgodnie
    z wybranym sposobem dostawy i przekazywany klientowi zgodnie z zasadami
    określonymi w rozdziale 5 Regulaminu.
  </li>
</ol>
 jsx
<div className="policy-page__title">
  <b>Rozdział 7.</b> Odstąpienie od umowy i wyjątki od prawa odstąpienia
</div>

<ol>
  <li>
    Klient będący konsumentem lub przedsiębiorcą, do którego na podstawie
    obowiązujących przepisów stosuje się przepisy dotyczące konsumenta
    (dalej <b>„Przedsiębiorca Uprzywilejowany”</b>), co do zasady ma prawo
    odstąpić od Umowy zawartej na odległość w terminie <b>14 dni</b> bez
    podawania przyczyny, z zastrzeżeniem wyjątków określonych poniżej.
  </li>

  <li>
    Termin do odstąpienia od Umowy sprzedaży Towaru rozpoczyna się od dnia,
    w którym klient lub wskazana przez niego osoba inna niż przewoźnik
    weszła w posiadanie Towaru.
  </li>

  <li>
    Aby skorzystać z prawa odstąpienia od Umowy, klient powinien poinformować
    Sprzedawcę o swojej decyzji w drodze jednoznacznego oświadczenia.
    Oświadczenie można przesłać:
    <ul className="policy-page__list">
      <li>
        w formie elektronicznej na adres e-mail:{" "}
        <a href="mailto:info@kombosklep.pl">info@kombosklep.pl</a>,
      </li>
      <li>
        w formie pisemnej na adres: ul. Gazowa 52/11, 50-513 Wrocław.
      </li>
    </ul>
  </li>

  <li>
    Do zachowania terminu na odstąpienie od Umowy wystarczy wysłanie
    oświadczenia przed upływem terminu do odstąpienia. Klient nie jest
    zobowiązany do korzystania z określonego formularza odstąpienia od Umowy.
  </li>

  <li>
    Jeżeli oświadczenie o odstąpieniu od Umowy zostało przesłane drogą
    elektroniczną, Sprzedawca niezwłocznie prześle klientowi na podany adres
    e-mail potwierdzenie otrzymania oświadczenia.
  </li>

  <li>
    W przypadku skutecznego odstąpienia od Umowy klient powinien zwrócić Towar
    Sprzedawcy niezwłocznie, nie później niż w terminie <b>14 dni</b> od dnia,
    w którym poinformował Sprzedawcę o odstąpieniu od Umowy. Towar należy
    przesłać na adres:
    <br />
    <b>ul. Gazowa 52/11, 50-513 Wrocław.</b>
  </li>

  <li>
    Bezpośrednie koszty zwrotu Towaru ponosi klient, chyba że Sprzedawca
    wyraźnie poinformuje klienta, że pokrywa te koszty.
  </li>

  <li>
    Sprzedawca zwróci klientowi otrzymane od niego płatności objęte
    odstąpieniem od Umowy, w tym koszt dostarczenia Towaru odpowiadający
    najtańszemu zwykłemu sposobowi dostawy oferowanemu przez Sprzedawcę,
    nie później niż w terminie <b>14 dni</b> od dnia otrzymania oświadczenia
    o odstąpieniu od Umowy.
  </li>

  <li>
    Sprzedawca może wstrzymać się ze zwrotem płatności do chwili otrzymania
    Towaru z powrotem lub dostarczenia przez klienta dowodu jego odesłania,
    w zależności od tego, które zdarzenie nastąpi wcześniej.
  </li>

  <li>
    Zwrot płatności zostanie dokonany przy użyciu takiego samego sposobu
    płatności, jakiego klient użył przy pierwotnej transakcji, chyba że klient
    wyraźnie zgodzi się na inny sposób zwrotu, który nie będzie wiązał się
    dla niego z dodatkowymi kosztami.
  </li>

  <li>
    Klient odpowiada za zmniejszenie wartości Towaru wynikające z korzystania
    z niego w sposób wykraczający poza konieczny do stwierdzenia charakteru,
    cech i funkcjonowania Towaru.
  </li>

  <li>
    Prawo odstąpienia od Umowy nie przysługuje w przypadkach określonych
    przez obowiązujące przepisy prawa, w szczególności w odniesieniu do Umów
    o dostarczenie Towarów:
    <ol className="policy-page__list">
      <li>
        nieprefabrykowanych, wyprodukowanych według specyfikacji konsumenta
        lub Przedsiębiorcy Uprzywilejowanego albo służących zaspokojeniu jego
        zindywidualizowanych potrzeb;
      </li>

      <li>
        <b>
          ulegających szybkiemu zepsuciu lub mających krótki termin
          przydatności do użycia
        </b>;
      </li>

      <li>
        dostarczanych w <b>zapieczętowanym opakowaniu</b>, których po otwarciu
        opakowania nie można zwrócić ze względu na ochronę zdrowia lub ze
        względów higienicznych, jeżeli opakowanie zostało otwarte po
        dostarczeniu;
      </li>

      <li>
        nagrań dźwiękowych, wizualnych albo programów komputerowych
        dostarczanych na nośniku materialnym w zapieczętowanym opakowaniu,
        jeżeli opakowanie zostało otwarte po dostarczeniu;
      </li>

      <li>
        które po dostarczeniu, ze względu na swój charakter, zostają
        nierozłącznie połączone z innymi Towarami;
      </li>

      <li>
        dzienników, periodyków lub czasopism, z wyjątkiem umowy o prenumeratę;
      </li>

      <li>
        których cena zależy od wahań na rynku finansowym, nad którymi
        Sprzedawca nie sprawuje kontroli i które mogą wystąpić przed upływem
        terminu do odstąpienia od Umowy;
      </li>

      <li>
        napojów alkoholowych, których cena została uzgodniona przy zawarciu
        Umowy, a których dostarczenie może nastąpić dopiero po upływie 30 dni
        i których wartość zależy od wahań na rynku, nad którymi Sprzedawca
        nie ma kontroli.
      </li>
    </ol>
  </li>

  <li>
    Ze względu na charakter Towarów oferowanych przez Sklep, w szczególności
    kombuchy oraz innych napojów fermentowanych, prawo odstąpienia od Umowy
    może być wyłączone, jeżeli dany Towar{" "}
    <b>
      ulega szybkiemu zepsuciu lub ma krótki termin przydatności do użycia
    </b>.
  </li>

  <li>
    W przypadku Towarów dostarczanych w zapieczętowanych opakowaniach,
    których po otwarciu nie można zwrócić ze względu na ochronę zdrowia lub
    ze względów higienicznych,{" "}
    <b>
      prawo odstąpienia od Umowy nie przysługuje po otwarciu opakowania
    </b>.
  </li>

  <li>
    W szczególności, jeżeli butelka kombuchy lub innego napoju została
    otwarta albo jej <b>zamknięcie zabezpieczające zostało naruszone</b>,
    Towar nie podlega zwrotowi w ramach prawa odstąpienia od Umowy, jeżeli
    spełnione są ustawowe przesłanki wyłączenia tego prawa.
  </li>

  <li>
    Wyłączenie prawa odstąpienia od Umowy nie pozbawia klienta uprawnień
    związanych z <b>niezgodnością Towaru z Umową</b>, jego uszkodzeniem lub
    innymi podstawami reklamacji przewidzianymi przez obowiązujące przepisy
    prawa.
  </li>
</ol>
  jsx
<div className="policy-page__title">
  <b>Rozdział 8.</b> Reklamacje
</div>

<ol>
  <li>
    Sprzedawca zobowiązany jest dostarczyć klientowi Towary{" "}
    <b>zgodne z Umową</b>.
  </li>

  <li>
    Wobec konsumentów i Przedsiębiorców Uprzywilejowanych Sprzedawca ponosi
    odpowiedzialność za zgodność Towarów z Umową zgodnie z przepisami ustawy
    o prawach konsumenta. Wobec pozostałych klientów Sprzedawca ponosi
    odpowiedzialność na zasadach wynikających z Kodeksu cywilnego.
  </li>

  <li>
    Reklamacje mogą być składane:
    <ul className="policy-page__list">
      <li>
        w formie elektronicznej na adres e-mail:{" "}
        <a href="mailto:info@kombosklep.pl">info@kombosklep.pl</a>,
      </li>
      <li>
        w formie pisemnej na adres: ul. Gazowa 52/11, 50-513 Wrocław.
      </li>
    </ul>
  </li>

  <li>
    W celu usprawnienia rozpatrzenia reklamacji zaleca się podanie w zgłoszeniu
    informacji umożliwiających identyfikację zamówienia, opisanie przyczyny
    reklamacji oraz wskazanie żądania klienta. Brak tych informacji nie
    pozbawia klienta prawa do złożenia reklamacji.
  </li>

  <li>
    W przypadku reklamacji dotyczącej produktu spożywczego, w szczególności
    kombuchy lub innego napoju fermentowanego, zaleca się również wskazanie{" "}
    <b>nazwy Towaru, daty przydatności do spożycia</b>,
    jeżeli informacje te są dostępne na opakowaniu. W miarę możliwości klient
    może również dołączyć zdjęcia Towaru i jego opakowania w celu ułatwienia
    rozpatrzenia reklamacji.
  </li>

  <li>
    Sprzedawca udzieli odpowiedzi na reklamację w terminie{" "}
    <b>14 dni od dnia jej otrzymania</b>. Odpowiedź zostanie przekazana
    klientowi na papierze lub innym trwałym nośniku, w szczególności za
    pośrednictwem wiadomości e-mail.
  </li>

  <li>
    W razie niezadowolenia ze sposobu rozpatrzenia reklamacji przez Sprzedawcę,
    konsument może, niezależnie od możliwości dochodzenia swoich praw przed
    sądem powszechnym, skorzystać z pozasądowych sposobów rozpatrywania
    reklamacji i dochodzenia roszczeń.
  </li>

  <li>
    W szczególności konsument może:
    <ul className="policy-page__list">
      <li>
        zwrócić się do właściwego wojewódzkiego inspektora Inspekcji Handlowej
        z wnioskiem o wszczęcie postępowania w sprawie pozasądowego rozwiązania
        sporu konsumenckiego,
      </li>
      <li>
        skorzystać z bezpłatnej pomocy powiatowego lub miejskiego rzecznika
        konsumentów albo organizacji społecznej, do której statutowych zadań
        należy ochrona konsumentów,
      </li>
      <li>
        zwrócić się do stałego sądu polubownego działającego przy Inspekcji
        Handlowej z wnioskiem o rozstrzygnięcie sporu wynikającego z zawartej
        Umowy.
      </li>
    </ul>
  </li>

  <li>
    Dodatkowe informacje dotyczące pozasądowych sposobów rozpatrywania
    reklamacji i dochodzenia roszczeń dostępne są na stronie Urzędu Ochrony
    Konkurencji i Konsumentów:{" "}
    <a
      href="https://polubowne.uokik.gov.pl/"
      target="_blank"
      rel="noopener noreferrer"
    >
      polubowne.uokik.gov.pl
    </a>.
  </li>
</ol>
 
<div className="policy-page__title">
  <b>Rozdział 9.</b> Postanowienia końcowe
</div>

<ol>
  <li>
    Do Umów zawieranych ze Sprzedawcą za pośrednictwem Sklepu stosuje się{" "}
    <b>prawo polskie</b>. Umowy zawierane są w języku polskim.
  </li>

  <li>
    Żadne z postanowień Regulaminu nie wyłącza ani nie ogranicza uprawnień
    konsumenta lub Przedsiębiorcy Uprzywilejowanego wynikających
    z bezwzględnie obowiązujących przepisów prawa.
  </li>

  <li>
    Sprzedawca może dokonywać zmian Regulaminu, w szczególności w przypadku
    zmiany przepisów prawa, sposobu prowadzenia sprzedaży, metod płatności,
    sposobów dostawy lub zakresu Towarów oferowanych przez Sklep.
  </li>

  <li>
    Zmiany Regulaminu mają zastosowanie do zamówień składanych po dniu wejścia
    w życie nowej wersji Regulaminu. Do zamówień złożonych przed tym dniem
    stosuje się Regulamin obowiązujący w chwili złożenia zamówienia.
  </li>

  <li>
    Aktualna wersja Regulaminu jest udostępniana klientom na stronie
    internetowej Sklepu w sposób umożliwiający zapoznanie się z jego treścią.
  </li>

  <li>
    Regulamin obowiązuje od dnia <b>07.08.2026 r.</b>
  </li>
</ol>
 



      </div>
    </div>
  );
}

export default PolicyPage;
