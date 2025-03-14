import { Page, Layout, Card, InlineStack, BlockStack, Text, ProgressBar } from "@shopify/polaris";
import { Outlet } from "@remix-run/react";
import { usePage } from "./PageContext"; // Import usePage to access current page
import styles from "./_index/styles.module.css";
import { useState } from "react";

export default function InitialSettings() {
  const { steps } = usePage();
  const {step,setStep} = useState()
  console.log("Current Page:", steps);
const stepall  = [
  { id: 1, label: "Setup convertion tracking", path: "/settings/ads", status: "inProgress" },
  { id: 2, label: "Create Campgain", path: "/settings/billing", status: "notComplete" },

]
  const getProgress = (status) => {
    switch (status) {
      case "inProgress":
        return 50;
      case "completed":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <Page>
      <BlockStack gap={300}>
      <Card>
        <Layout>
          <Layout.Section>
              <InlineStack align="center" gap="tight">
                {stepall.map((step, index) => (
                  <div key={index} style={{ width: 450 }}>
                    <span className={styles.progressCount}>{step.id}</span>
                    <BlockStack gap={300}>
                      <ProgressBar progress={getProgress(step.status)} size="small" />
                      <Text as="p" variant="bodyLg">
                        {step.label}
                      </Text>
                      {/* Highlight the current step based on currentPage */}
                      {/* {currentPage === step.path && <Text fontWeight="bold">You are here</Text>}// */}
                    </BlockStack>
                  </div>
                ))}
              </InlineStack>

          </Layout.Section>
        </Layout>
        <Outlet />
        </Card>
      </BlockStack>
    </Page>
  );
}
