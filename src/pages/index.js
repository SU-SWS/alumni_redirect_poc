import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

// markup
const IndexPage = (props) => {
  return (
    <Layout>
      <p>&nbsp;</p>
      <h1>Home Page</h1>
      <p>This is the home page. To test out the redirect logic you can follow along the below scenarios. We will use the domain https://alumni-redirect-poc.netlify.app in replacement of https://alumni.stanford.edu for this POC and https://pg-dev.stanford.edu in replacement of legacy-alumni.stanford.edu.</p>

      <h2>Domain Level</h2>
      <hr />
      <p>&nbsp;</p>
      <h3>Scenario #1</h3> 
      <p>The user goes to <Link to="/">https://alumni.stanford.edu/ (https://alumni-redirect-poc.netlify.app/)</Link></p>	
      <p><strong>Expected Result:</strong></p>
      <p>User is taken to new alumni site (this site and this page), hosted on Netlify.</p>
      <p><strong>Why?</strong></p>
      <p>All alumni.stanford.edu traffic goes to the new site</p>
      
      <h2>Netlify Targeted Redirect</h2>
      <hr />
      <p>&nbsp;</p>
      <h3>Scenario #2</h3>
      <p>The user goes to <Link to="/get/page/help/contact-us">https://alumni-redirect-poc.netlify.app/get/page/help/contact-us</Link></p>	
      <p><strong>Expected Result:</strong></p>
      <p>User is redirected to new contact page at https://alumni-redirect-poc.netlify.app/contact-us</p>
      <p><strong>Why?</strong></p>
      <p>We explicitly redirected this page because it exists on the new site.</p>

      <h3>Scenario #3</h3>
      <p>The user goes to <Link to="/get/page/life-long-learning/book-overview">https://alumni-redirect-poc.netlify.app/get/page/life-long-learning/book-overview</Link></p>	
      <p><strong>Expected Result:</strong></p>
      <p>User is taken to a "under construction" page on the new alumni site</p>
      <p><strong>Why?</strong></p>
      <p>We explicitly redirected this page because we did not want to keep the old page live, but the new page doesn't exist on the new site (discuss what to do with retired URLs)</p>
      
      <h2>Netlify 404 Blanket Redirect</h2>
      <hr />
      <p>&nbsp;</p>
      <h3>Scenario #4</h3>
      <p>The user goes to <Link to="/get/page/directory/search">https://alumni-redirect-poc.netlify.app/get/page/directory/search</Link></p>	
      <p><strong>Expected Result:</strong></p>
      <p>User is asked to login if they haven't already. User is taken to the directory page with a legacy URL, e.g. https://pg-dev.stanford.edu/get/page/directory/search</p>
      <p><strong>Why?</strong></p>
      <p>This URL generated a 404 on the new site (https://alumni-redirect-poc.netlify.app), so it was redirected to the old site at https://pg-dev.stanford.edu. The page was found on the old site, so the user was taken to the page</p>
      <p><strong>Comments</strong></p>
      <p>Ideal state would be that this is a pass through and user goes directly to new page; want to avoid flow where user logins to access a page that is not there.</p>
      
      <h3>Scenario #5</h3>
      <p>The user goes to <Link to="/get/page/landing/campus_events/year">https://alumni-redirect-poc.netlify.app/get/page/landing/campus_events/year</Link> which is linked from an outside site and is a broken link</p>	
      <p><strong>Expected Result:</strong></p>
      <p>User is taken to the 404 page on the old site</p>
      <p><strong>Why?</strong></p>
      <p>This URL generated a 404 on the new site (https://alumni-redirect-poc.netlify.app), so it was redirected to the old site at https://pg-dev.stanford.edu. It also generated a 404 on the old site, so the user gets the old 404 page.</p>

      <h2>Marketo Email Link</h2>
      <hr />
      <p>&nbsp;</p>
      <h3>Scenario #6</h3>
      <p>Clicks on a link from a Marketo email (our primary means of contacting alums)<Link to="/get/page/subscriptions/signup?catID=1063&mkt_tok=eyJpIjoiWlRFMllqaGtOelpsTnpneiIsInQiOiJ2Tm05UkM3b2VMUHpwYTdsTWVIXC9MRTlYeTdYMFpHR29xcXI3TWczVUhManVQY2EwSDFYdHFqNEI5ZVNcL25HXC9vaEVZVTZwQjNDT0JYd2RlSlVQSFBwaVRrUlluZ3EzQXJSNUNPalNXUVQrT21lSTZTYzV1ZVNCXC91N2ZGaHQ0UHEifQ%3D%3D">https://alumni-redirect-poc.netlify.app/get/page/subscriptions/signup?catID=1063&mkt_tok=eyJpIjoiWlRFMllqaGtOelpsTnpneiIsInQiOiJ2Tm05UkM3b2VMUHpwYTdsTWVIXC9MRTlYeTdYMFpHR29xcXI3TWczVUhManVQY2EwSDFYdHFqNEI5ZVNcL25HXC9vaEVZVTZwQjNDT0JYd2RlSlVQSFBwaVRrUlluZ3EzQXJSNUNPalNXUVQrT21lSTZTYzV1ZVNCXC91N2ZGaHQ0UHEifQ%3D%3D</Link></p>	
      <p><strong>Expected Result:</strong></p>
      <p>The user is redirected to the legacy site with the url parameters preserved</p>
      <p><strong>Why?</strong></p>
      <p>URL is parsed prior to "?" in the link and redirected from the new site to the legacy site</p>
      <p><strong>Comments</strong></p>
      <p>The link in this example of the email is actually: https://go2.stanford.edu/kF09103002Q03SIRDC0e00B and gets redirected to the "tokenized" url</p>

      <h2>Link with UTM code passed as a variable</h2>
      <hr />
      <p>&nbsp;</p>
      <h3>Scenario #7</h3>
      <p>The user goes to <Link to="/get/page/life-long-learning/learn-join?utm_source=e-alert&utm_medium=email&utm_content=learn-join">https://alumni-redirect-poc.netlify.app/get/page/life-long-learning/learn-join?utm_source=e-alert&utm_medium=email&utm_content=learn-join</Link></p>	
      <p><strong>Expected Result:</strong></p>
      <p>The user is redirected to the legacy site with the url parameters preserved</p>
      <p><strong>Why?</strong></p>
      <p>URL is parsed prior to "?" in the link and redirected from the new site to the legacy site</p>

    </Layout>
  )
}

export default IndexPage
