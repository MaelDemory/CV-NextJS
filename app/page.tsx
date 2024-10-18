import Image from "next/image";
import photoCV from "@/assets/images/photo_cv.jpg";
import githubIcon from "@/assets/images/icons/github.svg";
import {
    AgileLogo,
    AngularLogo,
    GitLogo,
    IonicLogo,
    JavaLogo,
    LaravelLogo,
    MongodbLogo,
    MysqlLogo,
    Php,
    PLSQLLogo,
    PsqlLogo,
    PythonLogo,
    ReactLogo,
    ReactNativeLogo,
    SQLiteLogo,
    SwiftLogo,
    TailwindLogo,
    TypeScriptLogo, UMLLogo
} from "@/app/logos";
import NextJSLogo from "@/app/logos/nextjs";

export default function Home() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col min-h-screen">
            <main
                className="flex flex-col flex-grow items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <p className="text-[3.5rem] font-semibold">
                            Maël DEMORY
                        </p>

                        <Image
                            src={photoCV}
                            alt="Profile Picture"
                            width={266}
                            height={200}
                            className="rounded-full shadow-all-around mt-4 sm:mt-0"
                        />
                    </div>

                    <h2 className="mt-[.5rem] text-[1rem]">
                        Développeur fullstack
                    </h2>

                    <div className="mt-6">
                        <p>
                            -&gt; Etudiant en 3ème année de BUT Informatique à l&#39;
                            <a className="font-semibold text-[#02B9A5]" href={'https://www.iut-lens.univ-artois.fr/'}
                               target={'_blank'}> IUT de Lens</a>, <br/>
                            -&gt; Développeur web en alternance à l&#39;
                            <a className="font-semibold text-[#00BCD8]" href={'https://imt-nord-europe.fr/'}
                               target={'_blank'}> IMT Nord Europe</a>,
                        </p>
                    </div>
                </div>
            </main>
            <footer className="flex items-center justify-center p-8 gap-6 flex-wrap">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://github.com/MaelDemory/CV-NextJS-Demory-Mael.git"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src={githubIcon}
                        alt="Github icon"
                        width={16}
                        height={16}
                    />
                    Repository du projet →
                </a>
            </footer>
            <section id="competences" className="flex flex-col items-center justify-center p-8 mt-12">
                <div className="text-[3.5rem] font-semibold">
                    Mes compétences
                </div>
                <div className="flex flex-col gap-12 mt-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Développement web</h3>
                        <div className="flex gap-6 flex-wrap items-center justify-center">
                            <AngularLogo/>
                            <LaravelLogo/>
                            <NextJSLogo/>
                            <Php/>
                            <ReactLogo/>
                            <TailwindLogo/>
                            <TypeScriptLogo/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Développement mobile</h3>
                        <div className="flex gap-6 flex-wrap items-center justify-center">
                            <IonicLogo/>
                            <ReactNativeLogo/>
                            <SwiftLogo/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Développement d&#39;application</h3>
                        <div className="flex gap-6 flex-wrap items-center justify-center">
                            <JavaLogo/>
                            <PythonLogo/>
                            <UMLLogo/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Base de données</h3>
                        <div className="flex gap-6 flex-wrap items-center justify-center">
                            <MongodbLogo/>
                            <MysqlLogo/>
                            <PLSQLLogo/>
                            <PsqlLogo/>
                            <SQLiteLogo/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Autres compétences</h3>
                        <div className="flex gap-6 flex-wrap items-center justify-center">
                            <AgileLogo/>
                            <GitLogo/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="soft-skills" className="flex flex-col items-center justify-center p-8 mt-12">
                <div className="text-[3.5rem] font-semibold">
                    Soft skills
                </div>
                <div className="flex flex-col gap-12 mt-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Communication</h3>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Travail en équipe</h3>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Résolution de problèmes</h3>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Adaptabilité</h3>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Détermination</h3>
                    </div>
                </div>
            </section>

            <footer className="flex items-center justify-center p-4">
                <p>&copy; {currentYear} - Maël DEMORY, tous droits réservés</p>
            </footer>
        </div>
    );
}