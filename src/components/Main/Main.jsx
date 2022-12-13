import "./Main.scss";
import eclipse1 from "../images/eclipse1.svg";
import ecplipse2 from "../images/eclipse2.svg";
import ecplise3 from "../images/eclipse3.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import mapa from "../images/mapa.svg";
import cartao from "../images/Cards.png"
import maps from "../images/Maps.png"
import logoform from "../images/Logoform.svg"

function Main() {
    return (
        <main>
            <section className="txt-inicial">
                <div className="title">
                    <h1>MAIS QUE UMA EMPRESA DE TECNOLOGIA</h1>
                    <h3>Uma parceira para o seu negócio</h3>
                </div>
            </section>
            <section id="sobre" className="cards">
                <div className="card-1">
                    <img src={eclipse1} alt="Imagem do primeiro card" />
                    <h5>Entender a sua necessidade</h5>
                    <p>Buscar desenvolver projetos de acordo com a real necessidade é nosso compromisso, zelando sempre pela competência e honestidade na entrega para um perfeito alinhamento entre o negócio e a TI.</p>
                </div>
                <div className="card-2">
                    <img src={ecplipse2} alt="Imagem do segundo card" />
                    <h5>Suporte e Manutenção</h5>
                    <p>Não fique na mão com seus equipamentos e estrutura, conte com um atendimento especializado. Oferecemos um suporte rápido e com tecnologias de ponta.</p>
                </div>
                <div className="card-3">
                    <img src={ecplise3} alt="Imagem do terceiro card" />
                    <h5>Soluções Adequadas</h5>
                    <p>Desde usuários domésticos até grande empresas, oferecemos soluções especiais com baixo custo graças ao conhecimento adquirido em negócios e ótimos parceiros.</p>
                </div>
            </section>
            <section className="banner">
                <div className="banner-interno">
                    <div className="txt-button">
                        <h4>Certificado Digital emitido em alguns minutos e sem sair de casa!</h4>
                        <p>Seja qual for a sua necessidade, conte conosco para emissão ou renovação do seu certificado, agora com opção para Videoconferência! Isto mesmo, diretamente no conforto do seu lar ou escritório!
                        </p>
                        <p>Localização privilegiada, estacionamento fácil,
                            atendimento rápido e com todo conforto!</p>
                        <h6>EMISSÃO SEM BUROCRACIA, ÁGIL E COM TOTAL
                            SUPORTE, POIS SABEMOS QUE TEMPO É PRECIOSO!</h6>
                        <a href="https://www.fenaconcd.com.br/revendedor/pedido-representante/207#" target="_blank">Clique aqui e solicite a partir de R$78,00! </a>
                    </div>
                    <div className="certificado-img">
                        <img src={cartao} alt="" />
                    </div>
                </div>
            </section>
            <section id="contato" className="formulario">
                <div className="txt-form">
                    <div className="txt">
                        <h3>Deseja tirar uma dúvida, saber mais sobre nossos produtos e soluções ou agendar seu certificado?</h3>
                        <h6>Entre em contato conosco,
                            teremos prazer em atendê-lo.</h6>
                    </div>
                    <span></span>
                    <form action="">
                        <img src={logoform} alt="logo loyal" />
                        <h5>Responda esse formulário de logo entraremos em contato!</h5>
                        <p>Em menos de 10 minutos, você consegue responder um formulário de forma rápida e prática</p>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Telefone" />
                        <input type="text" placeholder="Empresa" />
                        <button>Próximo</button>
                    </form>
                </div>
            </section>
            <section id="endereco" className="localizacao">
                <img src={maps} alt="" />
            </section>
            <footer className="footer">
                <div className="footer-interno">
                    <p className="p1">Estr. dos Bandeirantes, 470 - Sala 427
                        Ed. Fórum Empresarial - Taquara
                        Rio de Janeiro - RJ</p>
                    <p className="p2">©2014 Dimiro Soluções em Tecnologia da Informação.</p>
                    <p className="p3">E-mail: contato.dimiro.com
                        Tel. e WhatsApp: (21) 3442-9005</p>
                    <div className="social-media-footer">
                        <a href="https://www.facebook.com/sintetizeioficial" target="_blank"> <img className="facebook" src={facebook} alt="facebook icone" /></a>
                        <a href="https://www.instagram.com/sintetizeioficial/" target="_blank"><img className="instagram" src={instagram} alt="instagram icone" /></a>
                        <a href=""> <img className="linkedin" src={linkedin} alt="linkedin icone" /></a>
                        <a href="https://www.google.com/maps/place/Sintetizei/@-22.9643685,-42.9677914,17z/data=!3m1!4b1!4m5!3m4!1s0x9989784e24a85f:0xd56178c42db0bfe2!8m2!3d-22.9643685!4d-42.9656027" target="_blank"> <img className="mapa" src={mapa} alt="mapa icone" /></a>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Main;
