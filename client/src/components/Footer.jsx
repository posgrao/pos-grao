import { Footer } from "flowbite-react";
import FooterLogo from "../assets/footer_logo.png";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="bg-[#2E3132] text-white py-10 rounded-none">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-4">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={FooterLogo}
                alt="Pós Grão"
                className="w-32 h-auto"
              />
            </Link>
          </div>
          <div>
            <Footer.Title title="Sobre Nós" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                Conheça nossa história
              </Footer.Link>
              <Footer.Link href="/about/team" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                Nossa equipe
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white hover:text-white">Avisos legais</Footer.Link>
              <Footer.Link href="#" className="text-white hover:text-white">Termos &amp; Condições</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider className="my-4" />
        <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center text-white">
          <Footer.Copyright
            href="#"
            by="Pós Grão"
            year={new Date().getFullYear()}
            className="text-white"
          />
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
            <Footer.Icon
              href="https://github.com/sahandghavidel"
              icon={BsGithub}
              className="text-white"
            />
            <Footer.Icon href="#" icon={BsDribbble} className="text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
