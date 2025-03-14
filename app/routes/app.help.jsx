import React, { useState } from 'react';
import { Page, Layout, Card, List, Button, Collapsible, Text } from "@shopify/polaris";


const Accordien = ({faq})=>{
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(!expanded);
  return  <div>
  <Button variant="tertiary" onClick={toggle}> {faq.question}</Button>
  <br />
  <Collapsible open={expanded} id={`faq-${faq.question}`}>
    <p>{faq.answer}</p>
  </Collapsible>
  </div>
}


const HelpPage = () => {

  const faqs = [
    { question: "How do I change my store settings?", answer: "Go to Settings > General to update your store information." },
    { question: "How can I add new products?", answer: "Navigate to Products > Add Product to add a new item." },
    { question: "What payment methods are supported?", answer: "Shopify supports various payment methods like PayPal, Stripe, and Shopify Payments." },
    { question: "How do I update my billing information?", answer: "You can update billing details under Settings > Billing." },
    { question: "Can I customize my theme?", answer: "Yes, go to Online Store > Themes and click Customize." },
    { question: "How do I set up shipping rates?", answer: "Shipping settings are available under Settings > Shipping and Delivery." },
    { question: "Where can I view my orders?", answer: "All orders can be found under the Orders tab." },
    { question: "How do I handle refunds?", answer: "Go to Orders, select the order, and click Refund." },
    { question: "Is there a way to track customer behavior?", answer: "Yes, Shopify Analytics provides insights into customer behavior." },
    { question: "How do I contact Shopify support?", answer: "You can reach Shopify support via Help Center or live chat." }
  ];



  return (
    <Page title="Help Center">
      <Layout>
        {/* Contact Us Section */}
        <Layout.Section>
          <Card title="Contact Us" sectioned>

              <p>If you need further assistance, feel free to contact our support team.</p>
              <Button primary url="mailto:support@yourstore.com">Email Support</Button>

          </Card>
        </Layout.Section>


        <Layout.Section>
          <Card title="Frequently Asked Questions" sectioned>
            <List type="bullet">
              {faqs.map((faq, index) => (
                 <Accordien faq={faq} />
              ))}
            </List>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default HelpPage;
