import { usePageMeta } from "../../hooks/usePageMeta";
import "../PolicyPage/PolicyPage.scss";

function PrivacyPolicyPage() {
  usePageMeta(
    "Polityka prywatności - Kombo",
    "Polityka prywatności serwisu Kombo – zasady przetwarzania danych osobowych na stronie kombosklep.pl.",
  );

  return (
    <div className="policy-page">
      <h1>Polityka prywatności</h1>
      <h3>Polityka prywatności serwisu Kombo</h3>
      {/* <p className="policy-page__effective">
        obowiązująca od dnia <b>08.07.2026 r.</b>
      </p> */}
      <div className="policy-page__content">
        <div className="policy-page__title">
          <b>1.</b> Postanowienia ogólne
        </div>
        <ol>
          <li>
            Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych osób
            korzystających ze strony internetowej <b>Kombo</b>, dostępnej pod adresem{" "}
            <b>https://kombosklep.pl</b>, a także osób kontaktujących się ze Sprzedawcą w związku
            z ofertą, zamówieniem, reklamacją lub inną sprawą dotyczącą działalności Sklepu.
          </li>
          <li>
            Administrator dokłada należytej staranności, aby dane osobowe były przetwarzane zgodnie
            z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (<b>„RODO”</b>).
          </li>
          <li>
            Strona internetowa <b>nie umożliwia</b> zakładania kont użytkowników, składania
            zamówień za pomocą koszyka ani dokonywania płatności online.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>2.</b> Administrator danych osobowych
        </div>
        <ol>
          <li>
            Administratorem danych osobowych jest:
            <br />
            <b>Elgro ELŻBIETA NARON-GROCHALSKA</b>
            <br />
            ul. Galla Anonima 12
            <br />
            57-100 Strzelin
            <br />
            NIP: <b>6211119942</b>
            <br />
            REGON: <b>386436215</b>
            <br />
            dalej jako <b>„Administrator”</b>.
          </li>
          <li>
            Adres do kontaktu z Administratorem:{" "}
            <b>ul. Gazowa 52/11, 50-513 Wrocław</b>
          </li>
          <li>
            W sprawach związanych z ochroną danych osobowych można kontaktować się z Administratorem:
            <ul className="policy-page__list">
              <li>
                drogą elektroniczną:{" "}
                <a href="mailto:info@kombosklep.pl">
                  <b>info@kombosklep.pl</b>
                </a>
                ,
              </li>
              <li>
                telefonicznie: <b>518-730-717</b>,
              </li>
              <li>
                pisemnie na adres: <b>ul. Gazowa 52/11, 50-513 Wrocław</b>.
              </li>
            </ul>
          </li>
        </ol>

        <div className="policy-page__title">
          <b>3.</b> Jakie dane osobowe mogą być przetwarzane
        </div>
        <p>
          W zależności od sposobu kontaktu z Administratorem oraz rodzaju sprawy mogą być
          przetwarzane w szczególności następujące dane:
        </p>
        <ol>
          <li>imię i nazwisko;</li>
          <li>adres e-mail;</li>
          <li>numer telefonu;</li>
          <li>adres dostawy;</li>
          <li>dane dotyczące złożonego zamówienia;</li>
          <li>
            dane niezbędne do dokonania i identyfikacji płatności tradycyjnym przelewem bankowym;
          </li>
          <li>
            dane potrzebne do wystawienia dokumentu sprzedaży lub faktury, jeżeli klient o nią
            poprosi;
          </li>
          <li>
            dane przekazane przez klienta w treści wiadomości e-mail lub podczas rozmowy
            telefonicznej;
          </li>
          <li>
            dane związane z reklamacją, odstąpieniem od umowy lub innym roszczeniem dotyczącym
            zawartej umowy;
          </li>
          <li>
            dane techniczne związane z korzystaniem ze strony internetowej, takie jak adres IP lub
            informacje dotyczące połączenia ze stroną, jeżeli są one przetwarzane przez dostawcę
            infrastruktury technicznej strony.
          </li>
        </ol>
        <p>
          Administrator nie wymaga przekazywania danych, które nie są potrzebne do realizacji
          określonego celu.
        </p>

        <div className="policy-page__title">
          <b>4.</b> Zamówienia i kontakt ze Sprzedawcą
        </div>
        <ol>
          <li>
            Zamówienia produktów Kombo składane są poprzez{" "}
            <b>kontakt telefoniczny lub za pośrednictwem poczty elektronicznej</b>.
          </li>
          <li>
            W celu realizacji zamówienia Administrator może przetwarzać dane niezbędne do:
            <ul className="policy-page__list">
              <li>ustalenia szczegółów zamówienia;</li>
              <li>potwierdzenia zamówienia;</li>
              <li>zawarcia i wykonania umowy sprzedaży;</li>
              <li>przyjęcia płatności;</li>
              <li>dostarczenia zamówionych produktów;</li>
              <li>wystawienia dokumentów sprzedaży;</li>
              <li>kontaktu z klientem dotyczącego realizacji zamówienia.</li>
            </ul>
          </li>
          <li>
            Podstawą prawną przetwarzania danych w tym zakresie jest{" "}
            <b>art. 6 ust. 1 lit. b RODO</b>, tj. niezbędność przetwarzania do podjęcia działań na
            żądanie osoby, której dane dotyczą, przed zawarciem umowy oraz do wykonania zawartej
            umowy.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>5.</b> Kontakt telefoniczny i e-mailowy
        </div>
        <ol>
          <li>
            W przypadku kontaktu z Administratorem za pośrednictwem poczty elektronicznej lub
            telefonu Administrator przetwarza dane przekazane przez osobę kontaktującą się w
            zakresie niezbędnym do udzielenia odpowiedzi i prowadzenia dalszej korespondencji.
          </li>
          <li>
            Jeżeli kontakt dotyczy zawarcia lub wykonania umowy, podstawą przetwarzania jest{" "}
            <b>art. 6 ust. 1 lit. b RODO</b>.
          </li>
          <li>
            W pozostałych przypadkach podstawą przetwarzania może być{" "}
            <b>art. 6 ust. 1 lit. f RODO</b>, czyli prawnie uzasadniony interes Administratora
            polegający na prowadzeniu korespondencji, udzielaniu odpowiedzi na pytania oraz
            zapewnieniu obsługi osób zainteresowanych ofertą Sklepu.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>6.</b> Płatności
        </div>
        <ol>
          <li>
            Sklep <b>nie obsługuje płatności online</b> ani płatności kartą za pośrednictwem strony
            internetowej.
          </li>
          <li>
            Płatności za zamówienia mogą być dokonywane w szczególności tradycyjnym przelewem
            bankowym lub gotówką przy odbiorze osobistym, zgodnie z warunkami ustalonymi przy
            składaniu zamówienia.
          </li>
          <li>
            W przypadku płatności przelewem Administrator może przetwarzać informacje zawarte w
            potwierdzeniu transakcji lub historii rachunku bankowego, w szczególności dane nadawcy
            przelewu oraz informacje umożliwiające powiązanie płatności z zamówieniem.
          </li>
          <li>
            Dane związane z rozliczeniami mogą być przetwarzane również w celu wykonania
            obowiązków wynikających z przepisów podatkowych i rachunkowych na podstawie{" "}
            <b>art. 6 ust. 1 lit. c RODO</b>.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>7.</b> Dostawa zamówień
        </div>
        <ol>
          <li>
            Jeżeli realizacja zamówienia wymaga wysyłki Towaru, dane niezbędne do dostarczenia
            przesyłki, w szczególności imię i nazwisko, adres, numer telefonu lub adres e-mail,
            mogą zostać przekazane podmiotowi realizującemu dostawę.
          </li>
          <li>
            W zależności od wybranej przez klienta formy dostawy dane mogą zostać przekazane w
            szczególności firmie kurierskiej, operatorowi pocztowemu, operatorowi paczkomatów lub
            innemu podmiotowi odpowiedzialnemu za doręczenie przesyłki.
          </li>
          <li>
            Dane przekazywane są wyłącznie w zakresie niezbędnym do realizacji dostawy.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>8.</b> Reklamacje, odstąpienie od umowy i roszczenia
        </div>
        <ol>
          <li>
            Dane osobowe mogą być przetwarzane w celu:
            <ul className="policy-page__list">
              <li>rozpatrywania reklamacji;</li>
              <li>obsługi odstąpienia od umowy;</li>
              <li>dokonania zwrotu płatności;</li>
              <li>ustalenia, dochodzenia lub obrony przed roszczeniami.</li>
            </ul>
          </li>
          <li>
            W zależności od sytuacji podstawą prawną przetwarzania jest:
            <ul className="policy-page__list">
              <li>
                <b>art. 6 ust. 1 lit. b RODO</b> – wykonanie umowy;
              </li>
              <li>
                <b>art. 6 ust. 1 lit. c RODO</b> – wykonanie obowiązku prawnego ciążącego na
                Administratorze;
              </li>
              <li>
                <b>art. 6 ust. 1 lit. f RODO</b> – prawnie uzasadniony interes Administratora
                polegający na ustaleniu, dochodzeniu lub obronie przed roszczeniami.
              </li>
            </ul>
          </li>
        </ol>

        <div className="policy-page__title">
          <b>9.</b> Odbiorcy danych osobowych
        </div>
        <p>
          Dane osobowe mogą być przekazywane podmiotom współpracującym z Administratorem wyłącznie
          w zakresie niezbędnym do realizacji określonego celu.
        </p>
        <p>Mogą to być w szczególności:</p>
        <ol>
          <li>podmioty realizujące dostawy zamówień;</li>
          <li>
            banki oraz inne podmioty uczestniczące w obsłudze tradycyjnych przelewów bankowych;
          </li>
          <li>podmioty świadczące usługi księgowe lub rachunkowe;</li>
          <li>dostawcy poczty elektronicznej;</li>
          <li>dostawcy usług hostingowych i infrastruktury informatycznej;</li>
          <li>podmioty świadczące usługi informatyczne;</li>
          <li>podmioty świadczące pomoc prawną, jeżeli będzie to konieczne;</li>
          <li>
            organy publiczne uprawnione do uzyskania danych na podstawie obowiązujących przepisów
            prawa.
          </li>
        </ol>
        <p>
          Każdemu podmiotowi przekazywane są wyłącznie dane niezbędne do realizacji danego celu.
        </p>

        <div className="policy-page__title">
          <b>10.</b> Cloudflare i dane techniczne
        </div>
        <ol>
          <li>
            W celu zapewnienia działania, bezpieczeństwa i dostępności strony internetowej
            Administrator korzysta z infrastruktury i usług <b>Cloudflare</b>.
          </li>
          <li>
            W związku z korzystaniem ze strony określone dane techniczne mogą być automatycznie
            przetwarzane przez Cloudflare, w szczególności:
            <ul className="policy-page__list">
              <li>adres IP urządzenia;</li>
              <li>informacje dotyczące połączenia i ruchu sieciowego;</li>
              <li>
                informacje techniczne dotyczące urządzenia oraz konfiguracji połączenia;
              </li>
              <li>informacje związane z bezpieczeństwem ruchu internetowego.</li>
            </ul>
          </li>
          <li>
            Dane te mogą być przetwarzane w szczególności w celu prawidłowego wyświetlania strony,
            zapewnienia jej bezpieczeństwa, ochrony przed nadużyciami oraz zapewnienia
            dostępności infrastruktury internetowej.
          </li>
          <li>
            W związku z korzystaniem z usług Cloudflare dane mogą być przetwarzane również poza
            Europejskim Obszarem Gospodarczym. Podmiot świadczący te usługi stosuje mechanizmy
            prawne przewidziane przepisami dotyczącymi ochrony danych osobowych dla
            międzynarodowego przekazywania danych.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>11.</b> Pliki cookies i narzędzia analityczne
        </div>
        <ol>
          <li>
            Strona <b>kombosklep.pl nie wykorzystuje plików cookies</b> w celach analitycznych,
            reklamowych ani marketingowych.
          </li>
          <li>
            Administrator nie korzysta z narzędzi takich jak:
            <ul className="policy-page__list">
              <li>Google Analytics;</li>
              <li>Google Ads;</li>
              <li>Meta Pixel / Facebook Pixel;</li>
              <li>
                innych systemów służących do profilowania użytkowników lub śledzenia ich
                aktywności w celach reklamowych.
              </li>
            </ul>
          </li>
          <li>
            Administrator nie prowadzi na podstawie zachowania użytkowników strony profilowania
            ani reklamy behawioralnej.
          </li>
          <li>
            Sama infrastruktura techniczna wykorzystywana do udostępniania strony może jednak
            przetwarzać dane techniczne dotyczące połączeń internetowych zgodnie z zasadami
            opisanymi w niniejszej Polityce prywatności.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>12.</b> Okres przechowywania danych
        </div>
        <p>
          Dane osobowe przechowywane są nie dłużej, niż jest to potrzebne do realizacji celu, dla
          którego zostały zebrane.
        </p>
        <p>W szczególności:</p>
        <ol>
          <li>
            dane związane z zamówieniem są przetwarzane przez okres potrzebny do zawarcia i
            wykonania umowy, a następnie przez okres wynikający z obowiązujących przepisów prawa
            lub okres przedawnienia ewentualnych roszczeń;
          </li>
          <li>
            dane zawarte w dokumentach księgowych i podatkowych są przechowywane przez okres
            wymagany przez obowiązujące przepisy prawa;
          </li>
          <li>
            dane dotyczące reklamacji i odstąpienia od umowy są przechowywane przez okres
            potrzebny do rozpatrzenia sprawy, a następnie przez okres niezbędny do ustalenia,
            dochodzenia lub obrony przed ewentualnymi roszczeniami;
          </li>
          <li>
            dane przekazane w zwykłej korespondencji, która nie prowadzi do zawarcia umowy, są
            przechowywane do czasu zakończenia korespondencji, a następnie mogą być przechowywane
            przez okres uzasadniony potrzebą wykazania jej przebiegu lub ochrony przed
            roszczeniami.
          </li>
        </ol>
        <p>
          Po upływie odpowiednich okresów dane są usuwane lub anonimizowane, chyba że dalsze ich
          przechowywanie jest wymagane przez przepisy prawa.
        </p>

        <div className="policy-page__title">
          <b>13.</b> Dobrowolność podania danych
        </div>
        <ol>
          <li>Podanie danych osobowych jest co do zasady dobrowolne.</li>
          <li>
            Podanie określonych danych może być jednak konieczne do:
            <ul className="policy-page__list">
              <li>udzielenia odpowiedzi na zapytanie;</li>
              <li>przygotowania zamówienia;</li>
              <li>zawarcia i wykonania umowy sprzedaży;</li>
              <li>dostarczenia produktów;</li>
              <li>dokonania rozliczenia;</li>
              <li>wystawienia faktury;</li>
              <li>rozpatrzenia reklamacji lub odstąpienia od umowy.</li>
            </ul>
          </li>
          <li>
            Niepodanie danych niezbędnych do realizacji danego celu może uniemożliwić jego
            wykonanie, w szczególności realizację zamówienia lub dostawy.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>14.</b> Prawa osób, których dane dotyczą
        </div>
        <p>
          Osobie, której dane są przetwarzane przez Administratora, przysługują – w przypadkach
          przewidzianych przez RODO – następujące prawa:
        </p>
        <ol>
          <li>
            <b>prawo dostępu do danych</b> – możliwość uzyskania informacji, czy Administrator
            przetwarza dane danej osoby oraz uzyskania dostępu do tych danych;
          </li>
          <li>
            <b>prawo do sprostowania danych</b> – możliwość poprawienia danych nieprawidłowych lub
            uzupełnienia danych niekompletnych;
          </li>
          <li>
            <b>prawo do usunięcia danych</b> – w przypadkach określonych w RODO;
          </li>
          <li>
            <b>prawo do ograniczenia przetwarzania danych</b>;
          </li>
          <li>
            <b>prawo do przenoszenia danych</b> – jeżeli spełnione są przesłanki przewidziane przez
            RODO;
          </li>
          <li>
            <b>prawo do wniesienia sprzeciwu</b> wobec przetwarzania danych opartego na prawnie
            uzasadnionym interesie Administratora.
          </li>
        </ol>
        <p>
          W celu skorzystania ze swoich praw należy skontaktować się z Administratorem pod
          adresem:{" "}
          <a href="mailto:info@kombosklep.pl">
            <b>info@kombosklep.pl</b>
          </a>
        </p>
        <p>
          Skorzystanie z określonych praw może podlegać ograniczeniom wynikającym z obowiązujących
          przepisów prawa. W szczególności prawo do usunięcia danych nie oznacza obowiązku
          usunięcia danych, które Administrator musi nadal przechowywać w celu wykonania
          obowiązku prawnego lub ustalenia, dochodzenia albo obrony przed roszczeniami.
        </p>

        <div className="policy-page__title">
          <b>15.</b> Prawo wniesienia skargi
        </div>
        <p>
          Jeżeli osoba, której dane dotyczą, uważa, że jej dane osobowe są przetwarzane niezgodnie
          z obowiązującymi przepisami, ma prawo wniesienia skargi do organu nadzorczego właściwego
          w sprawach ochrony danych osobowych, którym w Polsce jest:
        </p>
        <p>
          <b>Prezes Urzędu Ochrony Danych Osobowych.</b>
        </p>
        <p>
          Skorzystanie z prawa do złożenia skargi nie wyłącza innych środków ochrony prawnej
          przysługujących na podstawie obowiązujących przepisów.
        </p>

        <div className="policy-page__title">
          <b>16.</b> Zautomatyzowane podejmowanie decyzji i profilowanie
        </div>
        <ol>
          <li>
            Administrator nie wykorzystuje danych osobowych do podejmowania wobec klientów decyzji
            opartych wyłącznie na zautomatyzowanym przetwarzaniu, które wywoływałyby wobec nich
            skutki prawne lub w podobny sposób istotnie na nich wpływały.
          </li>
          <li>
            Administrator nie prowadzi profilowania użytkowników strony w celach marketingowych
            lub reklamowych.
          </li>
        </ol>

        <div className="policy-page__title">
          <b>17.</b> Bezpieczeństwo danych
        </div>
        <p>
          Administrator stosuje odpowiednie środki organizacyjne i techniczne służące ochronie
          przetwarzanych danych osobowych, dostosowane do charakteru przetwarzanych danych oraz
          ryzyka związanego z ich przetwarzaniem.
        </p>
        <p>
          Dostęp do danych powinny posiadać wyłącznie osoby i podmioty, które potrzebują go do
          realizacji określonych obowiązków.
        </p>

        <div className="policy-page__title">
          <b>18.</b> Zmiany Polityki prywatności
        </div>
        <ol>
          <li>
            Polityka prywatności może być aktualizowana w szczególności w przypadku:
            <ul className="policy-page__list">
              <li>zmiany przepisów prawa;</li>
              <li>zmiany sposobu funkcjonowania strony;</li>
              <li>wprowadzenia nowych funkcjonalności;</li>
              <li>zmiany dostawców usług technicznych;</li>
              <li>
                rozpoczęcia korzystania z nowych narzędzi związanych z przetwarzaniem danych
                osobowych.
              </li>
            </ul>
          </li>
          <li>
            Aktualna wersja Polityki prywatności jest publikowana na stronie{" "}
            <b>https://kombosklep.pl</b>.
          </li>
          <li>
            Niniejsza Polityka prywatności obowiązuje od dnia <b>08.07.2026 r.</b>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
