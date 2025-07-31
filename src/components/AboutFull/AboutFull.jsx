import React from 'react';
import './AboutFull.css';
import Vart from '../../../assets/varta.jpg';
import Majka from '../../../assets/Majka.jpg';

export const AboutFull = () => {
  return (
    <section id="aboutFull">
      <div className="Hlavnitext">
        <h1>O nás </h1>
      </div>
      <div className="Secondtext">
        <p>
          Řekneme, že jsme klasické smyčcové duo. Možná to není celá pravda.
          Barvy, smích, přátelství a svoboda, to je to, co nám v práci každý den
          chybělo. Sundali jsme si filharmonické boty, změnili černý dress-code
          na barevný a začali jsme se bavit. Hrajeme hudbu nejen jako umění, ale
          jako způsob, jak šířit radost a spojovat lidi.
        </p>
      </div>
      <div className="members">
        <div className="member">
          <img className="Vart" src={Vart} alt="vart" />
          <h2>Vartui Bartoníček</h2>

          <p>
            Narodila se v Arménii, vyrůstala v Oděse a dnes žije (a tvoří) v
            Česku. Hudbě se věnuje od osmi let – a od té doby ji to nepustilo.
            Studovala na konzervatoři v Oděse a po jejím dokončení se vydala
            rovnou do světa: první pracovní zkušenost získala jako
            devatenáctiletá houslistka v divadelní show v jihokorejském Seoulu
            (KangwonLand). Odtud pokračovala do Dubaje, kde čtyři měsíce hrála
            jako houslistka v hotelu Ritz Carlton.
          </p>

          <p>
            Teprve potom přišlo rozhodnutí vrátit se ke studiu – a zamířila do
            Prahy. Na Pražské konzervatoři studovala pod vedením vynikajících
            pedagogů: začínala u houslisty Jiřího Vodičky, pokračovala u Radima
            Kresty a zakončila studium u prof. Dany Vlachové. Na Hudební fakultě
            Akademie múzických umění (HAMU) se dále vzdělávala u prof. Ivana
            Štrause. Rok strávila také v rámci Erasmu na italské konzervatoři G.
            Verdiho v Miláně, kde ji vedl maestro Renato Donà.
          </p>

          <p>
            Členkou Filharmonie Hradec Králové je od roku 2021. Předtím
            spolupracovala s různými českými orchestry. Mezi její výrazné
            umělecké zážitky patří spolupráce s Andrea Bocellim, Ennio
            Morriconem, José Carrerasem, Annou Netrebko, Denisem Matsujevem,
            2Cellos, Vanessou Mae a dalšími.
          </p>

          <p>
            Kromě hudby se věnuje také digitálnímu designu – kreslí, zajímá se o
            UX a web, má za sebou několik IT kurzů a s nadsázkou o sobě říká, že
            je „vysoce kvalifikovaná UX designérka“. Věří v neustálý vývoj –
            lidský i profesní. Sama o sobě říká, že je otevřená, extrovertní a
            že neustále pracuje na tom, aby byla trochu víc organizovaná… tak,
            jak se to prý dělá v dospělém životě. Hudebně ji inspirují lidé
            kolem – kolegové, publikum, atmosféra. Má ráda, když to v orchestru
            žije, když je co objevovat a když má práce smysl. Nudnou práci by
            pravděpodobně nepřežila (naštěstí ji nemá). Věří na dobrý kolektiv,
            upřímnost a smysl pro humor.
          </p>
        </div>
        <div className="member">
          <img className="Majka" src={Majka} alt="majka" />
          <h2>Mária Szaniszló</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis{' '}
          </p>
        </div>
      </div>
    </section>
  );
};
