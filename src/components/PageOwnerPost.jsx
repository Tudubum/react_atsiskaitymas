import image from "../images/image.jpeg"

const PageOwnerPost = () => {
    return ( 
        <>
            <div className="homeText">
                <h1>Kviečiu tave pasidalinti, kuris metų laikas tau ir gražiausias ir kodėl!</h1>
                <h3>O aš pasidalinsiu savo isorija...</h3>
                <div className="storyCard">
                    <img src={image} alt="ownerstory" />
                    <p>Mano sutikti žmonės Fuerteventūros saloje sako, kad vasara praėjo nepastebėta.
                        Ne todėl, kad greitai, bet todėl, kad ji niekuo nesiskyrė nuo žiemos, pavasario rudens – visi sezonai čia panašūs.
                       Kiekvieną rytą saulė, kiekvieną naktį žvaigždės. O toliau – ir vėl tokia pati diena. 

                        - Jei ne tos šventės, nesuprasčiau, kad prabėgo metai,- sako man Migelis.
                        Mes sėdime kavinėje prie vandenyno, jis klausinėja apie vasarą. Nes jis nežino, kas ta vasara yra.
                
                    <br />
                    <br />
                        Ir staiga suprantu, kad esu gavęs didelę dovaną – metų laikus.
                        Ilgesio rudenį, nerimo žiemą, meilės pavasarį ir skubančią vasarą.
                        Esu turtingiausias pasaulyje, nes jaučiu keturiskart daugiau gyvenimo.
                        </p>
                </div>
            </div>
        </>
     );
}
 
export default PageOwnerPost;