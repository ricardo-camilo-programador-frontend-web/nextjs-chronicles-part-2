export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-8 ">
      <section className="text-gray-700 dark:text-gray-300">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p>
            Your privacy is important to us. It is 🎭 Persona - NextJS Chronicles
            Part 2&apos;s policy to respect your privacy regarding any information
            we may collect from you on the
            <a
              href={`${process.env.NEXT_PUBLIC_URL}/`}
              target="_blank"
            >
              🎭 Persona - NextJS Chronicles Part 2
            </a>
            website, and other sites we own and operate.
          </p>
          <p>
            We only request personal information when we truly need it to
            provide you with a service. We collect it through fair and lawful
            means, with your knowledge and consent. We also inform you why we&apos;re
            collecting it and how it will be used.
          </p>
          <p>
            We only retain collected information for as long as necessary to
            provide the requested service. We protect the stored data using
            commercially acceptable means to prevent loss and theft, as well as
            unauthorized access, disclosure, copying, use, or modification.
          </p>
          <p>
            We don&apos;t share personally identifying information publicly or with
            third parties, except when required by law.
          </p>
          <p>
            Our website may link to external sites that we don&apos;t operate. Please
            be aware that we have no control over the content and practices of
            these sites and cannot accept responsibility for their respective &nbsp;
            <a
              href="https://privacidade.me/"
              target="_BLANK"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              privacy policies
            </a>
            .
          </p>
          <p>
            You are free to refuse our request for personal information,
            understanding that we may be unable to provide some of your desired
            services.
          </p>
          <p>
            Your continued use of our website will be considered as acceptance
            of our practices around privacy and personal information. If you
            have any questions about how we handle user data and personal
            information, please contact us.
          </p>
        </div>
      </section>

      <section className="text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Security and Trust of 🎭 Persona - NextJS Chronicles Part 2
          Website
        </h2>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            The website is reliable and safe for user navigation as confirmed by
            <a
              target="_BLANK"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href={`https://confiavel.com.br/${process.env.NEXT_PUBLIC_URL}`}
              rel="noopener noreferrer"
            >
              Verification
            </a>
            . The page verifies website information to identify potential
            security issues. Navigation verified by
            <a
              target="_BLANK"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href={`https://transparencyreport.google.com/safe-browsing/search?url=${process.env.NEXT_PUBLIC_URL}`}
              rel="noopener noreferrer"
            >
              Google&apos;s security tool
            </a>
            shows that the site is secure.
          </p>
        </div>
      </section>

      <section className="text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Cookie Policy 🎭 Persona - NextJS Chronicles Part 2
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              What are cookies?
            </h3>
            <p>
              As is common practice with almost all professional websites, this
              site uses cookies, which are small files downloaded to your
              computer, to improve your experience. This page describes what
              information they collect, how we use it, and why we sometimes need
              to store these cookies. We will also share how you can prevent
              these cookies from being stored, however, this may downgrade or
              &apos;break&apos; certain elements of the site&apos;s functionality.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Cookies We Set
        </h3>
        <ul className="space-y-4 list-none pl-0">
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Account-related cookies</span>
            <p className="mt-2">
              If you create an account with us, we will use cookies for the
              management of the signup process and general administration. These
              cookies will usually be deleted when you log out, however, in some
              cases, they may remain afterward to remember your site preferences
              when logged out.
              <br />
              <br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Login-related cookies</span>
            <p className="mt-2">
              We use cookies when you are logged in to remember this fact. This
              prevents you from having to log in every time you visit a new
              page. These cookies are typically removed or cleared when you log
              out to ensure that you can only access restricted features and
              areas when logged in.
              <br />
              <br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">
              Cookies related to email newsletters
            </span>
            <p className="mt-2">
              This site offers newsletter subscription services or email and
              cookies may be used to remember if you are already registered and
              should show valid notifications only to subscribed/unsubscribed
              users.
              <br />
              <br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies related to shopping</span>
            <p className="mt-2">
              This site offers e-commerce or payment facilities and some cookies
              are essential to ensure that your order is remembered between
              pages so that we can process it properly.
              <br />
              <br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies related to searches</span>
            <p className="mt-2">
              Periodically, we conduct surveys and questionnaires to provide
              interesting information, useful tools, or to better understand our
              user base. These surveys may use cookies to remember who has
              participated in a survey or to provide accurate results after page
              changes.
              <br />
              <br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Cookies related to forms</span>
            <p className="mt-2">
              When you submit data through a form like contact or comment forms,
              cookies may be set to remember user details for future
              correspondence.
              <br />
              <br />
            </p>
          </li>
          <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span className="font-medium">Site preferences cookies</span>
            <p className="mt-2">
              To provide you with the best possible experience on this site, we
              allow you to define your preferences for how this site operates
              when you use it. To remember your preferences, we need to set
              cookies so that these settings can be called whenever you interact
              with a page affected by your preferences.
              <br />
            </p>
          </li>
        </ul>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Third-party cookies
        </h3>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            In some cases, we also use cookies provided by trusted third
            parties. The following section details which third-party cookies you
            may find through this site.
          </p>
          <ul>
            <li>
              This site uses the
              <a href="https://analytics.google.com/analytics/web/">
                Google Analytics
              </a>
              , which is one of the most widely used and trusted website
              analytics solutions on the web, to help us understand how you use
              the site and how we can improve your experience. These cookies
              track items such as how much time you spend on the site, the pages
              you visit, and how you arrived at the site, so we can continue to
              produce engaging content.
            </li>
          </ul>
          <p>
            For more information about Google Analytics cookies, please visit
            the official Google Analytics page.
          </p>
          <ul>
            <li>
              Third-party analytics are used to track and measure the use of
              this site, so we can continue to produce attractive content. These
              cookies track items such as the time you spend on the site or the
              pages you visit, which helps us understand how we can improve the
              site for you.
            </li>
            <li>
              Periodically, we test new features and make subtle changes to the
              way the site is presented. When we are still testing new features,
              these cookies may be used to ensure that you receive a consistent
              experience while on the site, as we understand which optimizations
              our users appreciate the most.
            </li>
            <li>
              As we sell products, it&apos;s important for us to understand
              statistics about how many visitors our site actually buys and,
              therefore, this is the type of data these cookies track. This is
              important for you because it means we can make accurate business
              predictions that allow us to analyze our advertising and product
              costs to ensure the best possible price.
            </li>
          </ul>
        </div>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          User Commitment
        </h3>
        <p>
          The user commits to using the content and information provided by 🍽️
          Food Hut - Angular Chronicles - Part 1 on the site in an uninfringed
          manner, without any of the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A) Engaging in illegal or contrary to good faith or public order
            activities;
          </li>
          <li>
            B) Disseminating propaganda or content of a racist, xenophobic, or
            gambling nature, any type of illegal pornography, or incitement to
            terrorism or human rights violations;
          </li>
          <li>
            C) Causing damage to the physical (hardware) or logical (software)
            systems of 🎭 Persona - NextJS Chronicles Part 2, its suppliers
            or third parties, to introduce or disseminate computer viruses or
            any other systems of hardware or software that may cause damage
            previously mentioned.
          </li>
        </ul>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Block cookies:
        </h3>
        <p>
          You can prevent cookies from being set by adjusting the settings of
          your browser (see the Help section of your browser for how to do
          this). Be aware that disabling cookies may affect the functionality
          and features of this and many other sites that you visit. Disabling
          cookies generally results in the deactivation of certain
          functionalities and features of this site. Therefore, it is
          recommended that you do not disable cookies.
        </p>
        <ul className="space-y-2">
          <li>
            <a
              href="https://support.google.com/accounts/answer/61416?hl=en"
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
              href={`https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectlocale=en-US&amp;redirectslug=enable-and-disable-cookies-website-preferences`}
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
              Safari{" "}
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="text-gray-700 dark:text-gray-300 space-y-4">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          More Information
        </h3>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Hopefully, this has clarified things for you and as mentioned
            before, if there is something that you aren&apos;t sure whether you need
            or not, it&apos;s usually safer to leave cookies enabled in case they
            interact with one of the features you use on our site.
          </p>
        </div>
        <p className="text-sm mt-8">
          This policy is effective as of &nbsp;
          <strong>Jan</strong>/<strong>2025</strong>.
        </p>
      </section>
    </main>
  );
}
