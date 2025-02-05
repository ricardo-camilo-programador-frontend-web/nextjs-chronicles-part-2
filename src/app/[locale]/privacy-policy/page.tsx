const PrivacyPolicy = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-8">
      <section className="text-gray-700 dark:text-gray-300">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Política de Privacidade
        </h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p>
            Sua privacidade é importante para nós. É política da 🎭 Persona - NextJS Chronicles Part 2 respeitar sua privacidade em relação a qualquer informação que possamos coletar no site
            <a
              href={process.env.NEXT_PUBLIC_SITE_URL}
              target="_blank"
            >
              🎭 Persona - NextJS Chronicles Part 2
            </a> &nbsp;
            e outros sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Protegemos os dados armazenados usando meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            Nosso site pode ter links para sites externos que não operamos. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas &nbsp;
            <a
              href="https://privacidade.me/"
              target="_BLANK"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              políticas de privacidade
            </a>
            .
          </p>
          <p>
            Você é livre para recusar nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>
          <p>
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
          </p>
        </div>
      </section>

      <section className="text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Segurança e Confiança do Site 🎭 Persona - NextJS Chronicles Part 2
        </h2>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            O site é confiável e seguro para navegação do usuário, conforme confirmado pela &nbsp;
            <a
              target="_BLANK"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href={`https://confiavel.com.br/${process.env.NEXT_PUBLIC_SITE_URL}`}
              rel="noopener noreferrer"
            >Verificação</a
            >. A página verifica informações do site para identificar possíveis problemas de segurança. Navegação verificada pela &nbsp;
            <a
              target="_BLANK"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href={`https://transparencyreport.google.com/safe-browsing/search?url=${process.env.NEXT_PUBLIC_SITE_URL}`}
              rel="noopener noreferrer"
            >
              ferramenta de segurança do Google
            </a>
            mostra que o site é seguro.
          </p>
        </div>
      </section>

      <section className="text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Política de Cookies 🎭 Persona - NextJS Chronicles Part 2
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">O que são cookies?</h3>
            <p>
              Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou &apos;quebrar&apos; certos elementos da funcionalidade do site.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cookies que Utilizamos</h3>
        <ul className="space-y-4 list-none pl-0">
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies relacionados à conta</span>
            <p className="mt-2">
              Se você criar uma conta conosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar suas preferências do site quando sair.<br /><br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies relacionados ao login</span>
            <p className="mt-2">
              Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.<br /><br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies relacionados a boletins por e-mail</span>
            <p className="mt-2">
              Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos/não inscritos.<br /><br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies relacionados a compras</span>
            <p className="mt-2">
              Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.<br /><br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies relacionados a pesquisas</span>
            <p className="mt-2">
              Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.<br /><br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies relacionados a formulários</span>
            <p className="mt-2">
              Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.<br /><br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies de preferências do site</span>
            <p className="mt-2">
              Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.<br />
            </p>
          </li>
        </ul>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cookies de Terceiros</h3>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
          </p>
          <ul>
            <li>
              Este site usa o
              <a href="https://analytics.google.com/analytics/web/"
                >Google Analytics</a
              >, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.
            </li>
          </ul>
          <p>
            Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.
          </p>
          <ul>
            <li>
              Análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
            </li>
            <li>
              Periodicamente, testamos novos recursos e fazemos alterações sutis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.
            </li>
            <li>
              Como vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analisar nossos custos de publicidade e produtos para garantir o melhor preço possível.
            </li>
          </ul>
        </div>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Compromisso do Usuário</h3>
        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a 🎭 Persona - NextJS Chronicles Part 2
          oferece no site e com caráter enunciativo, mas não limitativo:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;
          </li>
          <li>
            B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
          </li>
          <li>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da 🎭 Persona - NextJS Chronicles Part 2, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
          </li>
        </ul>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Como Bloquear Cookies:</h3>
        <p>
          Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visitar. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
        </p>
        <ul className="space-y-2">
          <li>
            <a
              href="https://support.google.com/accounts/answer/61416?hl=pt-BR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.mozilla.org/pt-BR/kb/protecao-aprimorada-contra-rastreamento-firefox-desktop"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Firefox
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Opera
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Safari </a
            >.
          </li>
        </ul>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-4">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Mais Informações</h3>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>
        </div>
        <p className="text-sm mt-8">
          Esta política é efetiva a partir de{' '}
          <time dateTime="2025-01-01">
            Janeiro de 2025
          </time>.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
